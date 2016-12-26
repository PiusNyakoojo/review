/*
    Session Management
        - Protecting the Session ID
        - Time-limited Sessions
        - New Sessions on Authentication
        - HTTPOnly Flagged Cookies
        - Transport Layer Security
        - Secure Flagged Cookies
        - Re-authentication On Key Access
*/
/*
    Layered Security:
        - Identification
        - Availability
            - Set time-to-live
            - Set lifetime of the cookie
        - Data Access
        - Authentication 
        - Transportation 
*/
/*
    Use a session related package 
    e.g. express-session 

        - Session Fixation Attacks
            - Sessions that are fixated to a user through 
            different authentication states
            - Allows attackers to operate at elevated privileges after a 
            user authenticates 

    HTTPOnly 
        - Only protects against people from using client-side scripts.
        Set-cookie: mycookie=value;path=/;HttpOnly 
    
    A http response header informing the browser that the 
    cookie cannot be accessed through client side scripts. 
*/
/*
    HttpOnly doesn't protect against people sniffing the 
    network data.
        - Use HTTPS 
        - Avoid using mixed content.
        - Use the secure cookie flag.
*/
/*
    What do these companies have in common:
        - eBay
        - Amazon
        - Github

    They use reauthentication measures in certain parts of 
    the site. Require a user to re-authenticate when:
        - Chaning their password
        - Checking order details
        - Updating their profile
        - Re-authentication will help up protect a user when 
        all other measures have been compromised. 
*/