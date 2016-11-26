/*
    How to Do TDD (Test-driven development)
    - In order to effectively follow the TDD pattern, you must first understand your 
    design. 
        - Tests are rigid. Learning is free-form. 
        - You learn by hacking and breaking things. 
        - Tests ensure things don't break. 
    - TDD helps you SHIP, not LEARN 

*/
/*
    A Test Framework Needs...
    - Clean, simple notation
    - Clean setup/teardown of dependencies
        - Idempotent, independent tests!
    - Clean separation from tested code
    - Simple runner mechanism
    - Good reporting
        - test results
        - coverage maps

*/
/*
    Testing in Go 
    - Test runner 
        - go test 
    - Separates test code form product 
        - *_test.go
    - Comes with a test writing library 
        - "testing" package
    - Comes with coverage reporting tools
        - Beautiful HTML output
*/
/*
    "testing" Package 
    - Allows you to write test functions. 
    - Nice benchamrking utility
    - Tests are basically blocks of code :()

        func TestXXX(t *testing.T) {
            // setup stuff
            // call your code 
            if something.State != WhatIWant {
                t.Fail()
            }
        }
*/
/*
    Better Test-Writing Library 
    - go command has great tooling 
    - Need a better notation for specifying tests.

    ... Ginkgo and Gomega is a step forward! ... but not perfect

    Ginkgo 
        - Compatible with "go test" but also comes with its own test runner 
        - BDD-style test notation 
        - Expressive structuring of tests 
    
    Gomega 
        - "Matching" library 
        - Allows for expressive assert-like statements
*/
/*
    Ginkgo 
        - Tests expressed as English statements 
            - In the BDD tradition of Cucumber, et. al.

        var _ = Describe("My component", func() {
            It("Does something special", func() {
                MyFunction()
                Expect(MyVar).To(Equal(10))
            })
        })
*/
/*
    Gomega 
        - Assertion Language

    Expect(number).To(Equal(10))
    Expect(value).To(BeNumerically("<", 20))

    Expect(someMap).To(Equal(otherMap)) // does reflect.DeepEqual()
    Expect(someMap).To(BeEquivalent(otherMap)) // allows different types 

    Expect(myPtr).ToNot(BeNil())
    Expect(flag).To(BeFalse())
    Expect(err).ToNot(HaveOccurred())
    Expect(err).To(MatchError("my error message"))

*/
/*
    Ginkgo and Dependencies 
    - setup/teardown 

    var _ = Describe("my config object", func() {
        var (
            configObj = *config.MyConfig
            tempDir string
        )

        BeforeEach(func() {
            var err error 
            tempDir, err = ioutil.TempDir("", "test-dir")
            Expect(err).ToNot(HaveOccurred())
            configObj = config.NewConfig()
        })

        It("Saves itself to file", func() {
            configObj.Save(tempDir)
            restoredConfig := config.FromFile(configObj.Filename)
            Expect(*restoredConfig).To(Equal(*configObj))
        })

        AfterEach(func() {
            os.RemoveAll(tempDir)
        })
    })
*/
/*
    Ginkgo and Dependencies 
    - Ginkgo heavily relies on closures and closure variables to manage dependencies. 
        - Resist the temptation to share state among tests! 
    - Nested dependencies 
        - WIthin a Describe block, you can nest:
            - Context block 
            - More It's and Before/AfterEach's
*/
/*
    Testing Notation + Ginkgo 

    var _ = Describe("my component", func() {
        // GIVEN
        BeforeEach(func() {

        })
        It("Does something useful", func() {
            // WHEN 
            CallSomething()
            // THEN
            Expect(stuff).To(Equal(something))
        })
    })

    Alternate Notation Style 

    var _ = Describe("my component", func() {
        // GIVEN
        BeforeEach(func() {

        })
        It("Does something useful", func() {
            // WHEN
            closureVar = CallSomething()
        })
        AfterEach(func() {
            // THEN 
            Expect(closureVar).To(Equal(something))
        })
    })
*/
/*
    Assessing Ginkgo/Gomega 
    - Overall test notation grade: C+/B-
        - Worst part about it is that your test file easily grows way too long, 
        and thus harder to comprehend as a spec. 
    - Good enough to get the job of high quality code ensurance done.
*/