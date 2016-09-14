/*

    // This program counts the number of words that begin with a certain character.
    // The buckets will be unevenly distributed even if there are a large number of words
    // in the dictionary. To make them more evenly distributed, we can change our hash function
    // to help make the resulting bucket more evenly distributed. 

    func main() {
        dictionary := []string{
            0: "hello",
            1: "goodbyte",
        }

        buckets := make([]int, 200)

        for _, word := range dictionary {
            n := HashBucket(word)
            buckets[n]++
        }

        fmt.Println(buckets[65:122]) // A - Z and a - z

    }


    func HashBucket(word string) int {
        return int(word[0]) // a simple hash function that returns int representation of first character of string
    }

    func ImprovedHashBucket(word string, buckets int) int {
        return int(word[0]) % buckets // buckets can be as small as the user wants.. e.g. 12. So int(A) % 12 == 5
    }
*/