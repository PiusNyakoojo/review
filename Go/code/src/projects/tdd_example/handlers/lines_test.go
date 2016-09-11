package handlers_test

import (
	"errors"
	"io/ioutil"
	"net/http"
	"net/http/httptest"

	"projects/tdd_example/handlers"
	"projects/tdd_example/mocks"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("Lines", func() {
	It("responds with JSON encoding the line count", func() {
		mockCounter := &mocks.Counter{}
		mockCounter.CountCall.Returns.LineCount = 42

		linesHandler := handlers.Lines{
			Counter: mockCounter,
		}

		resp := httptest.NewRecorder()
		req, _ := http.NewRequest("GET", "/whatever", nil)
		linesHandler.ServeHTTP(resp, req)

		Expect(resp.Code).To(Equal(200))

		respBytes, err := ioutil.ReadAll(resp.Body)
		Expect(err).NotTo(HaveOccurred())

		Expect(respBytes).To(MatchJSON(`{ "lines": 42 }`))
	})

	It("interprets the URL path as a package", func() {
		mockCounter := &mocks.Counter{}
		linesHandler := handlers.Lines{
			Counter: mockCounter,
		}

		resp := httptest.NewRecorder()
		req, _ := http.NewRequest("GET", "/lines/a/real/go/package", nil)
		linesHandler.ServeHTTP(resp, req)

		Expect(mockCounter.CountCall.Receives.PackagePath).To(Equal("a/real/go/package"))
	})

	Context("when the counter fails", func() {
		It("response with a 500 status code", func() {
			mockCounter := &mocks.Counter{}
			linesHandler := handlers.Lines{
				Counter: mockCounter,
			}

			mockCounter.CountCall.Returns.Error = errors.New("mangoes")

			resp := httptest.NewRecorder()
			req, _ := http.NewRequest("GET", "/lines/a/real/go/package", nil)
			linesHandler.ServeHTTP(resp, req)

			Expect(resp.Code).To(Equal(500))
		})
	})
})
