package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

var (
	upgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
	}
)

type message struct {
	Text string
}

func wsHandler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if _, ok := err.(websocket.HandshakeError); ok {
		http.Error(w, "Not a websocket handshake", 400)
		return
	} else if err != nil {
		log.Println(err)
		return
	}

	log.Println("Successfully upgraded connection")

	for {
		// Receive message
		_, msg, err := conn.ReadMessage()

		if err != nil {
			fmt.Println("Could not establish connection.")
			conn.Close()
			return
		}

		var result message

		// Decode message
		err = json.Unmarshal([]byte(msg), &result)
		if err != nil {
			fmt.Println(err)
		}

		fmt.Printf("Result: %+v\n", result)
		fmt.Printf("Size before Protobuf decoding: %v %v\n", len([]byte(msg)), "bytes")

		// Encode message
		newMsg, _ := json.Marshal(&message{Text: string([]byte(msg))})
		fmt.Printf("Size after Protobuf encoding: %v %v\n", len(newMsg), "bytes")

		// Send message - Use websocket.BinaryMessage
		if err := conn.WriteMessage(websocket.BinaryMessage, newMsg); err != nil {
			fmt.Println("Could not send message:", result)
			conn.Close()
		}

	}
}

func main() {
	port := getPort()

	http.HandleFunc("/", serveIndex)
	http.HandleFunc("/ws", wsHandler)

	log.Printf("Running on port" + port)

	err := http.ListenAndServe(port, nil)
	log.Println(err.Error())
}

func serveIndex(w http.ResponseWriter, r *http.Request) {
	fileName := "./proto-server/index.html"
	fmt.Println("Serving...", fileName)

	http.ServeFile(w, r, fileName)

	//template.Must(template.ParseFiles(fileName)).Execute(w, nil)
}

func getPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8082"
		log.Println("[-] No PORT environment variable detected. Setting to ", port)
	}
	return ":" + port
}
