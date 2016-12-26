/*
    Access Controls

    - Principle of Least Privilege
    - The Problem with Database Access 
    - Restricting Application Database Access 
    - Role Based Access Control 
    - Function Level Controls (with RBAC)
    - Server-side Function Level Control Failure
    - Access Control Misconfiguration
*/
/*
    Principle of Least Privilege 

    Every program and every privileged user of the system should 
    operate using the least amount of privilege necessary to 
    complete the job
        - Jerome Saltzer, Communications of the ACM 
    
    For example, a user doesn't need to have a read and write 
    access to a file if they only need to view the contents. 
*/
/*
    The Problem with Database Access 
*/