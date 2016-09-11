package main_test

import (
	"fmt"
	"io/ioutil"
	"net/http"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("the webserver", func() {
	It("responds to GET /lines with a line count", func() {
		url := fmt.Sprint("http//%s/lines/github.com/golang/protobuf", serverAddress)

		resp, err := http.Get(url)
		Expect(err).NotTo(HaveOccurred())

		defer resp.Body.Close()

		Expect(resp.StatusCode).To(Equal(200))

		bodyBytes, err := ioutil.ReadAll(resp.Body)
		Expect(err).NotTo(HaveOccurred())

		Expect(bodyBytes).To(MatchJSON(fmt.Sprintf(`{ "lines": 30209 }`)))
	})
})
