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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker Registered', registration);
    });
}
/*
    When a service worker is registered, it is limited to the scope provided. Meaning that it will only handle 
    requests within its scope. If we register a service worker for /folder/sw.js then the service worker will only 
    see pages which are in 'folder':

        - https://example.com/folder/page1
        - https://example.com/folder/page2
    
    In this case, the service worker would not see the page 

        - https://example.com/nope/no-service-worker
*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js') // registered at the root of the domain. 
        .then(/* ... */);
}
/*
    If the service worker is registered at the root of the domain, then its scope will be the entire origin. 
    In other words, the service worker will receive fetch events for everything in its domain. 

        - https://example.com/everything-gets-a-sw
*/
/*
    While in development, service workers can be a bit of a pain to work with at first. Generally its best to work 
    in an incognito window so you can be sure that each time you open/close a window the service worker and
    anything stored in the cache is cleared. 

        - chrome://serviceworker-internals

    This page allows you to update or delete service workers that are running.

    If you open a page that uses a service worker, the browser will spin up that service worker 
    (e.g. service-worker.js). If you open another page that's in the same scope as the 1st page then 
    the browser will not spin up another service worker, it will use the same one. 

    What happens when you update the service worker? That service worker sits idle waiting until all 
    of the windows that use the previous service worker have closed. 

    You can also use the "Resources" tab in the chrome dev tools to figure out what's going on with your service worker. 
*/
/*
    When a service worker is first registered, it triggers the 'install' event. This is the perfect time to pre-cache all of 
    the resources needed for the app shell: The HTML, CSS and any javascript

    First we need to open the cache with a cache name. Providing a cache name allows us to version files or separate data from the 
    app shell so we can easily update but not effect other content. 

    Once tthe cache is open we can call cache.addAll() which takes a list of URLs and then fetches them from the server and adds the response 
    to the cache. Unfortunately, cache.addAll() is atomic. So if any of the files fail to cache, the entire cache step will fail. 
*/
// service-worker.js

var cacheName = 'weatherPWA';
var filesToCache = [/* ... */];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});
/*
    But wait, what happens to the files that were previously stored in the cache after installing a new service worker? 
    The browser doesn't know whether you'll need the old files or not. So it's up to you to clean the old files from the cache. 
    The activate event is the perfect place to do this. 

    When the actiavate event is fired, the code gets a list of current cache keys and iterates through them using the .map() function. 
    Then compares the key to the current key. If the keys are not equal, purges them. 
*/

// service-worker.js

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    return caches.delete(key);
                }
            }))
        })
    );
});

/*
    This method does have a few disadvantages. Firstly, the caching method requires us to update the cacheName/cacheKey everytime one of the 
    app shell resources is changed. Otherwise, the old content will be served. So be sure to update the cache key with every change as you're 
    working on your project. 

    Another down side is that the entire cache is invalidated and needs to be downloaded every time a single file changes. This means that fixing a 
    single spelling mistake will invalidate the cache and require everything to be downloaded again. 
*/
/*
    So far, we've seen how to get the app shell into the cache. But how do we get it out so that even on a slow network (or even no network), we're still 
    able to get the resources required to run our application? 

    For that, we need to intercept all network requests by handling the fetch event in the service worker and serving the requested resource from the cache.

    Stepping from the inside out, caches.match() evaluates the request that triggered the fetch and checks to see if it's available in the cache. 
    It then either responds with a cached version or uses fetch to get a copy from the network. The response is then passed back to the webpage with 
    e.respondWith()
*/

// service-worker.js

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWOrker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

/*
    Like any complex new feature, it's pretty easy to shoot yourself in the foot. If you don't handle the edge cases properly, you can find yourself with an 
    app that might not ever update because the service worker never updates. 

    It's crucial that the HTTP request made during the install event goes directly to the network and doesn't return a response from the browser's cache. 
    Otherwise, the browser may install an old cached version which results in a service worker cache that never actually updates. 
*/