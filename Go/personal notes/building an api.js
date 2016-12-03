/*
    Building APIs with Go
        - Use the standard library for as long as possible
        - You may not need an external package at all
        - Use http.Handler and http.HandlerFunc
*/

// Internals

type Handler interface {
    ServeHTTP(Response, *Request)
}

type HandlerFunc func(ResponseWriter, *Request)

// ServeHTTP calls f(w, r)
func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
    f(w, r)
}

// http.ResponseWriter
// Construct an http response
type ResponseWriter interface {
    Header() Header 
    Write([]byte) (int, error)
    WriteHeader(int)
}

// http.Request
// http.Request contains everything you need to know about the request 
/*
    - r.Method
        - HTTP method (GET, POST, PUT, PATCH, DELETE etc.)
    - r.URL.Path
        - Request path (/things/123)
    - r.URL.String()
        - Full URL 
    - r.URL.Query()
        - Query parameters (q=something&p=2)
    - r.Body
        - io.ReadCloser of the request body 
*/

// Routing
/*
    - GET /things -> handleThings

    http.HandleFunc("/hello", handleHello)
    http.HandleFunc("/goodbye", handleGoodbye)
    http.HandleFunc("/", handleIndex)

    - Standard library until you need something more

    Beware:

    - / matches everything 
    - No path parameter parsing
    - One handler for every HTTP method 
*/

// Responding with data
/*
    - Grow your own respond function 
    - Mirror ServeHTTP signature (even though we're u=not using *http.Request yet)
*/

func respond(w http.ResponseWriter, r *http.Request, status int, data interface{}) {
    var buf bytes.Buffer
    if err := json.NewEncoder(&buf).Encode(data); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    w.WriteHeader(status)
    if _, err := io.Copy(w, &buf); err != nil {
        log.Println("respond:", err)
    }
}

func handleSomething(w http.ResponseWriter, r *http.Request) {
    data, err := LoadSomething()
    if err != nil {
        respond(w, r, http.StatusInternalServerError, err)
        return 
    }
    respond(w, r, http.StatusOK, data)
}

/*
    Options for responding (Something to do for later):
*/

func main() {
    opts := &respond.Options{
        OnErr: func(err error) {
            log.Println("something went wrong:", err)
        },
        Before: func(w http.ResponseWriter, r *http.Request, status int, data interface{}) (int, interface{}) {
            w.Header().Set("Server", "My App Server")
            if err, ok := data.(error); ok {
                return status, map[string]interface{}{"error": err.Error()}
            }
            return status, data
        },
        After: func(w http.ResponseWriter, r *http.Request, status int, data interface{}) {
            log.Println("replied with", status, data)
        },
    }

    // wrap existing handler with opts.Handler
    http.Handle("/foo", opts.Handler(fooHandler))
    log.fatal(http.ListenAndServe(":8080", nil))
}

/*
    Public pattern
*/

type Public interface {
    Public() interface{}
}

func respond(w http.ResponseWriter, r *http.Request, status int, data interface{}) {
    if obj, ok := data.(Public); ok {
        data = obj.Public()
    }
    // ...
}

type User struct {
    ID OurID
    Name string
    PasswordHash string 
}

func (u *User) Public() interface{} {
    return map[string]interface{} {
        "id": u.ID.Encode(),
        "name": u.Name,
    }
}

/*
    Decoding data from Request 
        - Having a single decode function is useful. 
*/

// decode can be this simple to start with, but can be extended 
// later to support different formats and behaviours without 
// changing the interface. 
func decode(r *http.Request, v interface{}) error {
    if err := json.NewDecoder(r.Body).Decode(v); err != nil {
        return err
    }
    return nil
}
/*
    Can be improved later to :
        - Check the Content-Type header to use different decoders 
        - Allow URL parameters to influence how the decoder works 
        - Go a little further and validate the input too...
*/