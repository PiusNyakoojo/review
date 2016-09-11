package handlers

import (
	"fmt"
	"net/http"
	"strings"
)

type counterInterface interface {
	Count(packagePath string) (int, error)
}

type Lines struct {
	Counter counterInterface
}

func (l *Lines) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	packagePath := strings.TrimPrefix(req.URL.Path, "/lines/")
	lines, err := l.Counter.Count(packagePath)
	if err != nil {
		res.WriteHeader(500)
		return
	}
	res.Write([]byte(fmt.Sprintf(`{ "lines": %d }`, lines)))
}
