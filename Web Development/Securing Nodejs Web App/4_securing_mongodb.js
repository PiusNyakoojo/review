/*
    Securing MongoDB from Injection Attacks
        - OAuth has ranked injection attacks as the number 1 
        web security flaws.

    We'll look at:
        - SQL Injection Attacks
        - Injection Demonstration with Burp
        - NoSQL and the Risk of Injection Attacks 
        - MongoDB Injection Attacks 
        - MongoDB and the Risk of JavaScript Expressions
        - Handling Untrusted Data
*/
/*
    SQL Injection Risk
        - Manipulate stored data 
        - Leak confidential information
        - Grant unauthorized access or elevated privileges

    Ingredients of a SQL Injection: 
        - Query 
            e.g. SELECT * FROM Products WHERE Name = Information 
        - Information 
            that's provided as part of the query. 

    Instead of submitting something like:
        "Flash light", they'll submit something like: 
        "Flash light; update products set name = 'All your bases are belong to us'"

    This can be easily rectified with parameterized queries.

    @param = "flash light; update ..."
*/
/*
    NoSQL and the Risk of Injection Attacks 

    NoSQL Database
        - Database that provides storage and retrieval that differs from the 
        tabular relationships of relational databases. Consist of different types 
        such as key-value, document, graph and column based NoSQL databases. 

        - Can stand for no SQL, non SQL or not only SQL since they may support 
        a structured query like language.

    Features of NoSQL Databases 
        - Data Flexibility
        - Horizontal Scalability
        - Finer Control over Availability
        - Open Source 
        - Lower Cost 
*/
/*
    MongoDB 

    BSON
        - Short of binary JSON, is a binary-encoded serialization
        of JSON-like documents. 

    JavaSCript Expressions 
        - An expression is any valid unit of code that resolves 
        to a value. 

    - Avoid $where and other operators that accept arbitrary 
    javascript requests. 

    - Validate your input before executing it against the database. 

    security.javascriptEnabled
        - Enables or disables the server-side JavaScript execution.
        When disabled, you cannot use operations that perform 
        server-side execution of JavaScript code. 

        - Disabled javascript in your MongoDB database!!!

    mongod --config /path/to/config-file.conf
*/