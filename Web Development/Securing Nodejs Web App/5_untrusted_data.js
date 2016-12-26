/*
    Handling Untrusted Data.

        - Fuzzing Data with Zed Attack Proxy
        - Identify Untrusted Data 
        - Where and When to Handle Trusted Data 
        - Whitelist versus Blacklist
        - Validating Untrusted Data
        - Escaping Untrusted Data 
        - Why Sanitizing isn't so sanitary
*/
/*
    With OWASP ZAP we can submit unexpected values to the 
    server to see how it responds (system crash? errors?)
*/
/*
    What constitutes as untrusted data?

        Form Input Values (Trusted or untrusted??)
            - Untrusted. 
        
        User-Agent HTTP Request Header 
            - Untrusted. 

        HTML Hidden Field 
            - Untrusted. 

        Data from Application Database
            - The database is your application. It sits behind
            your firewall.. but the truth is.. it can't be 
            trusted either xD
*/
/*
    How can we identify untrusted Data?
    
    Rule #1:
        - Any data that is explicity being supplied from an external source 
        can be identified as untrusted. 
    
    Rule #2:
        - If the data has crossed a trust boundary, then it can be assumed to 
        be untrusted data. 
    
    Rule #3:
        - Be cognitive of who has access to the data. 
*/
/*
    Validation via Blacklist (item cannot match what's in this list) or 
    whitelist (item must match what's in this list)
*/
/*
    Escaping (Output encoding)
    Is a technique used to ensure that characters are treated as data, not as 
    characters that are relevant to the interpreter's parser.

    Escaping simply lets the interpreter know that the data is not intended to 
    be executed, and therefore prevents attacks from working. 
*/
/*
    Escaping HTML 
*/
/*
    Sanitizing 
        - is a process that attempts to sanitize the data by removing known values 
        to be potentially malicious in order to make the data safe. 
*/