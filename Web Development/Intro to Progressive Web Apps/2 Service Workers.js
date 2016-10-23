/*
    Service Worker
        - A javascript realm execution context in an environment settings object with its own event loop 
        and node document dependency. 
        - Unlike similar contexts such as shared workers, this context life cycle is dictated by lifecycle
        and functional extendable events and their associated array of extended lifecycle promises.
        - Although the user agent may apply a grace period to avoid startup/shutdown overhead between 
        events

    Service Worker - Part 2
        - A javascript file that is run by your browser in the background (separate from your webpage)
        and handles events fired either by the browser or your webpage. 
        - Since service workers are run in the background, they don't need the webpage to be open. 
        and they don't show any markup.
        - Service workers really shine because of the events they can listen to. One of the most exciting 
        is the ability to handle fetch events: intercepting and responding to network requests. 
        - This puts the service worker virtually between the network and the browser allowing the 
        service worker to provide content even when offline. 
        - Because the service worker can listen for events even when the page isn't open, they can 
        respond to push messages sent from the server to the browser. 
            - Imagine a chat client that lets you know when you've got a new unread message. 
            - This simply wasn't possible before.
        
    In the future Service Workers will support other things such as: 
        - periodic sync
        - geofencing 
        - and more..
*/
/*
    Because a service worker runs in the background, they have a different 
    lifecycle which is completely separate from the webpage. 

    In order to use a service worker, the page needs to register it through your application's javascript. 
    If the page has never had a service worker before or the service worker has been updated, the 
    browser gets the new service worker and installs it. 

    Once the service worker is installed, it is then activated. The service worker will then control all 
    of the pages under the scope: with 1 exception. The page that registers the service worker for the 
    first time won't be controlled until it's loaded again. 

    Once the service worker is in control, it will handle: Fetch, Message and Push events that occur 
    whenever a network request or message is sent from the page. Notice that the browser can terminate 
    a service worker to save memory. However, the service worker will be restarted as needed. 

    Step 1: 
        - The webpage registers a Service Worker (SW)
    Step 2:
        - Installing
    Step 3: 
        - Activated
        - Or Error
    Step 4: 
        - If activated, becomes idle.
    Step 5: 
        - Push/message
        - receives data from Fetch
        - receives data from Terminated
*/
/*
    Service workers require HTTPS. If your site isn't loaded over a secure connection, the browser simply 
    won't register the service worker. The only exception is during development where localhost and its 
    equivalents are allowed. While this may sound like an arbitrary requirement, service workers allow us 
    to intercept network requests, modify them, redirect them and even totally fabricate responses. 

    While it's most likely that you'll use these powers for good, there are people who don't think like you.

    By requiring HTTPS, you can require that the service worker that gets installed hasn't been tampered with
    during its journey across the network. 
*/