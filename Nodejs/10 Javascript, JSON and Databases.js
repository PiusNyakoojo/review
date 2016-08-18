/*
    Javascript, JSON and Databases.

    Conceptual Aside: Relational databases and SQL
        - When we talk about relational databases, we're typically talking about a table with fields (or columns)
        and rows of data.

        - Normalized data is data that doesn't repeat itself unnecessarily.

        - We use SQL (Structured Query Language) to ask the database a question and get a result as a table.

    SELECT People.ID, Firstname, Lastname, Address
    FROM People INNER JOIN PersonAddresses ON
    People.ID = PersonAddresses.PersonID
    INNER JOIN Addresses ON
    PersonAddresses.AddressID = Addresses.ID

    
*/