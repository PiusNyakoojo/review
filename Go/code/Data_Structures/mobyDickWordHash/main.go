package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"net/http"
)

func main() {
	// Get the Moby Dick text
	res, err := http.Get("http://gutenberg.org/files/2701/old/moby10b.txt")
	if err != nil {
		log.Fatal(err)
	}

	// Scan the page
	scanner := bufio.NewScanner(res.Body)
	defer res.Body.Close()

	// Set the split function for the scanning operation
	scanner.Split(bufio.ScanWords)

	// Create slice to hold count
	numOfBuckets := 12
	buckets := make([]int, numOfBuckets)

	for scanner.Scan() {
		n := HashBucket(scanner.Text(), numOfBuckets)
		buckets[n]++
	}

	fmt.Println(buckets)
	fmt.Printf("Average difference: %.2f\n", averageDifference(buckets))
}

// HashBucket receives a word to be hashed and the number of buckets
// which specifies the range in which the return value must be in.
func HashBucket(word string, buckets int) int {
	// return int(word[0]) % buckets // ~13000 average difference
	var sum int
	for _, v := range word {
		sum += int(v)
	}
	return sum % buckets // ~7000 average difference
}

// Returns the average difference between each element of an array
func averageDifference(arr []int) float64 {
	var total int
	var sum float64
	for i := 0; i < len(arr); i++ {
		for j := i + 1; j < len(arr); j++ {
			sum += math.Abs(float64(arr[i] - arr[j]))
			total++
		}
	}
	return sum / float64(total)
}
