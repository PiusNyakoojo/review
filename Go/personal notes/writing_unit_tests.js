/*
    Writing effective unit tests
*/
/*
    1. Make each test orthogonal (e.g. independent) to all the others. Any given behaviour should 
        be specified in one and only one test. 
        - Since they are independent of one another, the order in which you run tests should 
        not matter. 
    2. Don't make unnecessary assertions. Which specific behaviour are you testing? 
        - Have only one logical assertion per test.
    3. Test only one code unit at a time. 
    4. Consider using Inversion of Control. 
        - mock out all external services and state
    5. Avoid unnecessary preconditions
        - Avoid having common setup code that runs at the beginning of lots of unrelated
        tests. Otherwise, it's unclear what assumptions each test relies on, and indicates
        that you're not testing just a single unit. 
    6. Don't unit test any configuration settings
*/