/*
    Packages allow us to organize our code. 
    
        - the folder name should be the same as the package name.
*/

/*
    For something to be an executable, it needs to have the package name "main" and have the func "main"
*/

/*
    When importing packages, if they are from the standard library, just import the name of the package 

        import "<package-name>"

        import "fmt"

    If the package is not from the standard library, the import string has to be the fully qualified name 
    of the package. 

        import "github.com/piusnyakoojo/rosgo"
*/

/*
    The folder name should be the same name as the package name of the go files within the folder. 

        mypackage 
            - someFile.go

        // someFile.go

        package mypackage 
*/

/*
    Packages
        - One folder, many files
            - package declaration in every file
            - package scope 
                - something in one file is accessible to another file 
            - imports have file scope 
        - exported / unexported 
            - aka, visible / not visible 
            - we don't say (generally speaking): public / private
            - capitalization
                - capitalize: exported, visible outside the package 
                - lowercase: unexported, not visible outside the package 
        - go commands 
            - go run 
            - go build
                - go build someFile.go anotherFile.go
                // this won't produce an output file unless the file has "package main" and main func 
            - go install
                - Will compile and build an executable from the main.go and place that in bin directory
                - will compile and build an archive file (<filename>.a) from a go package: <packagename>.go
            - go clean
                - removes .exe files from the directory; those files are generated from go build <filename>.go
                - remove "object" files.

*/

// reverse.go

// Package stringutil contains utility functions for working with strings
package stringutil

// Reverse returns its argument string reversed rune-wise left to right
func Reverse(s string) string {
    return reverseTwo(s)
}

// reverseTwo.go
package stringutil

func reverseTwo(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}

/*
    Even though these functions are in different files, because they are part of the same package, it's as though
    they were on the same page. Thus, we don't have to tell reverse.go where reverseTwo.go is 

    Also notice that Reverse is capitalized in reserver.go and that reverseTwo is lowercase in reverseTwo.go 
    When something is lowercase, that item is not exported outside of the package. Howver, from Reverse, we 
    could call that from outside the package.

    However, an exported function can still access the unexported functions within its package.
*/

/*


*/