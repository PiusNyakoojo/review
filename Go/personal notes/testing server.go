/*
    Testing a server with ginkgo + gomega
*/
/*

*/

var _ = Describe("Router", func() {
    var s *server.Server // ??
    var request *http.Request 
    var recorder *httptest.ResponseRecorder
    var bodyJSON map[string]interface{}
    handleStub := func(ctx domain.IContext, version string) http.HandlerFunc {
        return func(w http.ResponseWriter, req *http.Request) {
            renderer.GetRendererCtx(ctx, req).Render(w, rez, http.StatusOK, map[string]interface{}{
                "version": version,
            })
        }
    }
    handlerAcl := func(req *http.Request, user domain.IUser) (bool, string) {
        return true, ""
    }
    r := renderer.New(&renderer.Options{IndentJSON: true}, renderer.JSON)

    Describe("Test API versioning", func() {
        var route domain.Route 

        BeforeEach(func() {
            
        })
    })
})