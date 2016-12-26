/*
    Things we'll cover in this course:
        - Authentication and Session Management
        - Protecting MongoDB from Injection Attacks
        - Handling Untrusted Data
        - Access Controls
        - Transport Layer Security / HTTPS
*/
/*
    Bcrypt
        - Password hashing function 
        - Implements salt with high entropy
        - Based on the block cipher Blowfish
        - Accumulative hashing rounds
*/
/*
    Input validator
        - validate username, email and password 
    
    - Validate using tools like express-validator 
    - Validate with the password setting in the Schema

    Pro-tip
        - Mongoose Schema declarations are isomorphic
        - Consider validation tools that will ensure 
        consistency with your validation rules.
*/
/*
    Brute-force Safeguards
        - Security vs. Convenience

    Options:
        - Delay the response 
        - Create a login schema and track login attempts
        for each user

    (Typically spread out validation, error handling, user 
    creation, etc.. into separate files)
*/
/*
    Transport Layer Security
        - The successor protocol to secure socket layer 
        (SSL). Originally developed by Netscape, and 
        advanced by the Internet Engineering Task Force (IETF) to 
        TLS 1.0. Providing secure communications of a computer network.

    Authentication: Golden Rule 
        - The entire authentication from serving of login forms to the 
        submission of user credentials, must occur over HTTPS 
*/