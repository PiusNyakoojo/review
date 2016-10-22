/*
    Progressive Web Apps are experiences that combine the best of a web experience with the best of native 
    application experiences on mobile devices.

    They give users the kind of 
        - reliable
            - When network is poor or there's no network at all.
        - fast
            - Scroll and animate smoothly
        - engaging
            - Send relevant push notifications to users
        - integrated
            - Show up on the home screen as a fullscreen app 
    
    experiences that they've come to expect from native applications.

*/
/*
    The App Shell model separates the app's content from its data and ensures that the app gets content on the 
    screen as quickly as possible.

    Then, we'll learn about the service worker and how to use different caching strategies for different needs.

    By the end of the section, our app will use a service worker to cache the app shell and the data so our app 
    works whether the user is online or offline.

    Finally, we'll learn how to make our web app installable via the web app manifest.

*/
/*
    When designing the application shell, ask yourself:
        - What needs to be on the screen immediately?
        - What UI components are key to our application?
        - What supporting resources are needed for the app shell?
             -javascript, styles, etc..
*/
/*
    With HTTP/2 we should link to an external stylesheet so it can be cached for fast retrievals 
    in the future. We should defer the loading of HTML, Javascript and images as well until after the 1st 
    load experience. 
*/
/*
    Server-side rendering introduces a number of challenges for PWAs because the data is already 
    embedded in the user interface. If the app caches the data, then it can quickly become stale. 
    As a result, we may get a flash of outdated cotent (instead of flash of unstyled content)
*/
/*
    The easiest, but also the slowest method we can use to get the data we need is through AJAX calls. 
    Not only does it require an additional HTTP request, but the request won't be fired until the app's 
    javascript has been parsed and run. 
*/
/*
    The final combination we'll look at is using both server-side rendering and making an ajax request.
    Instead of pre-rendering the data into the markup, the server injects the data into the application's 
    javascript. Because the data is kept separate from the user interface, we've eliminated the need for 
    an additional HTTP request. 

    However, we still need to run some javascript in order to display the data. 
*/
/*
    Local Storage

    Local Storage - Advantages
        - A simple name-value pair storage mechanism that is easy to use and available on greater than 
        90% of modern browsers. 

    Local Storage - Disadvantages
        - However, it's API is synchronous. This means that calls to it are completely blocking! This can 
        cause significant performance problems. 
        - Additionally, it's not transactional. So if you try to do 2 writes at the time, you'll end up
        overriding something. 
        - Avoid using localStorage. 
*/
/*
    Caches Object

    Caches Objects - Advantages
        - Easy to use 
        - Asynchronous
        - Fast!!
    
    Caches Object - Disadvantages
        - Transactional: when writing to the same data point, the data may ber overriden. 
        - Not available on all browsers yet. In fact, not a lot of browser support at all. 
*/
/*
    IndexedDB

    IndexedDB - Advantages
        - FAST!
        - allows you to store complex data 
        - Asynchronous 
        - Transactional
        - HIGH AVAILABILITY (on more than 70% of modern browsers)

    IndexedDB - Disadvantages
        - Ugly API. Lots of setup to handle and callbacks to handle. 
            - However, there are a few good wrapper libraries that will abstract away this ugliness
            - Mozilla's localForage : which provides a localStorage-like API 
            - Lovefield (a relational database for the web): provides SQL-like API
*/
/*
    Browsers make no promises that they'll keep data around forever. This locally stored data can 
    be removed anytime without warning. For that reason, it's important to sync critical data to the 
    cloud as soon as possible. 
*/