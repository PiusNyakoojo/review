/*
    A string is a collection of runes (characters).
        - A rune is a unicode code point. 

    A string literal represents a string constant obtained from concatenating a sequence of characters. There 
    are two forms: raw string literals and interpreted string literals. 

    Raw string literals are character sequences between back quotes, as in `foo`.
        - Within the quotes, any character may appear except back quote.
        - The value of a raw string literal is the string composed of the uninterpreted (implicity
        UTF-8-encoded) characters between the quotes

    Interpreted string literals are character sequences between double quotes, as in "bar". Within the 
    quotes, any character may appear except newline and unescaped double quote.

    func main() {
        name := "Pius Nyakoojo"
        fmt.Println(`
            <html>
            <head>
                <title></title>
            </head>
            <body>
                <h1>
                ` + name + `
                </h1>
            </body>
            </html>
        `)
    }
*/