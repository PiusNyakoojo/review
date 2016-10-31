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
    Shared Worker 
        - The SharedWorker interface represents a specific kind of worker that can be accessed from several 
        browsing contexts, such as several windows, iframes or even workers. They implement an interface 
        different than dedicated workers and have a different global scope, SharedWorkerGlobalScope.

    var myWorker = new SharedWorker("worker.js");

    Web Workers API 
        - A worker is an object created using a constructor (e.g. Worker()) that runs a named JavaScript file. 
        This file contains the code that will run in the worker thread; workers run in another global context 
        that is different from the current window. Thus, using the window shortcut to get the current global 
        scope (instead of self) within a Worker will return an error.

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
        - can be Terminated
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
/*
    Fallback URL 
        - A common pattern when developing single page applications is to bootstrap initial 
        navigations with an App Shell, and then load dynamic content based on URL routing rules. 
        sw-precache supports this with the concept of a "fallback URL": 

        {
            navigateFallback: '/app-shell',
            // ... other options as needed...
        }

        In this configuration, whenever the service worker intercepts a navigate request for a 
        URL that doesn't exist in the cache, it will respond with the cached contents of 
        /app-shell. It's up to you to ensure that /app-shell contains all of the resources 
        needed to bootstrap your SPA. 
*/
/*
    Be careful when storing data in the cache and retrieving it rather than from the network. This 
    may result in stale data. 
*/
/*
    Cache First, then Network 
        - Best to use for things that don't change often like your app shell. 
    Network First, then Cache
        - Use for basic read-through caching
        - Best to use for API requests for some JSON for instance. 
        - Would rather have stale data than no data at all. 
        - The disadvantage is that the user has to wait for the network to 
        fail before getting any data (if the network is poor that is)
    Cache Only 
        - Tries to resolve resources from the Cache. If the resource isn't there, the request fails 
        - This is a good option when you need to guarantee that no network request will be made. For instance, 
        to save battery life on mobile devices
    Network Only 
        - Network tries to fetch the request from the network. If the fetch fails then we won't attempt to 
        retrieve it from the cache. 
        - This is useful for things that aren't cached. For example, analytics data requests, things that 
        aren't GET requests, etc. 
    Cache and Network Race
        - A strategy to request the resource from both the cache and the network in parallel and responds with 
        whichever responds with a successful result first.
        - In most cases, if the data is cached, the cached resource will return first. However, if the data is not 
        cached, then the network will either return something or will fail and won't avoid ask if the cache contains 
        anything. 
        - If the network responds successfully then the request will be cached so that the cache is always up to date.
    Cache Then Network 
        - Ideal for data that is updated frequently or when it's important to get data on screen as quickly as possible. 
        - Like the fastest strategy, two parallel requests are made:
            - 1 onto the cache and 1 onto the network. 
            - Show the cached data first then update the cache and the page when the network data arrives. 
        - Take care not to squash the latest data if the network returns before the cache. 
*/
/*
    Give the user something useful to do if they are offline. For example, the guardian newspaper site gives the user a 
    crossword puzzle if they are offline. 
*/
/*
    Choosing the best caching strategy:

        Inventory and prices for an ecommerce site 
            - Network only 
        Images required by the app needed for first render 
            - Cache only 
        Social media timeline data 
            - Cache, then network 
        Game leaderboard data 
            - Network, then cache 
*/
/*
    Cache first, then network is ideal for our weather application. It gets the weather forecast on screen as quickly as 
    possible then it displays the latest results once the network has returned with the data. We expect the network response 
    to be the source of truth. Always providing us with the most up to date data. 

    To use this strategy, we need to kick off 2 parallel asynchronous requests. 
        - 1 to get the cached data to get something on the screen as quickly as possible (even if it may be stale).
        - 1 to get the true state of the data from the network. When the network request responds, we store the 
        response in the cache for future retrievals. 
*/
// sw.js
onfetch = function(e) {
    var url = e.request.url;
    if (url == "app.html") {
        e.respondWith(
            caches.match(e.request)
        );
    }

    if (url == "content.json") {
        // go to the network for updates
        // then cache response and return 
        e.respondWith(
            fetch(/* ... */).then(function(r) {
                cache.put(url, r.clone());
                return r;
            })
        );
    }
};
/*
    In app.js of our weather app 
*/
app.getForecast = function(key, label) {
    var url = baseURL + key + '.json';
    if ('caches' in window) {
        caches.match(url).then(function(response) {
            if (response) {
                response.json().then(function(json) {
                    // Only update if the XHR is still pending, otherwise the XHR has already 
                    // returned and provided the latest data. 
                    if (app.hasRequestPending) {
                        console.log('Updated from cache');
                        json.key = key;
                        json.label = label;
                        app.updateForecastCard(json);
                    }
                });
            }
        });
    }

    // Make the XHR to get the data, then update the card 
    app.hasRequestPending = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var response = JSON.parse(request.response);
                response.key = key;
                response.label = label;
                app.hasRequestPending = false;
                app.updateForecastCard(response);
            }
        }
    };
    request.open('GET', url);
    request.send();
};
/*
    The resources for the app shell (e.g. app_shell.html) should be separate from the application's 
    data. That way, you can update one without disturbing the other.

    If it's data. We should fetch that from the network. If it's app content, we should see if 
    it's in the network and fetch if it's not.

*/

var dataCacheName = 'weatherData-final';
var cacheName = 'weatherPM-step-final-1';

// ...

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    if (e.request.url.startsWith(dataUrl)) {
        e.respondWith(
            fetch(e.request)
            .then(function(response) {
                return caches.open(dataCacheName).then(function(cache) {
                    cache.put(e.request.url, response.clone());
                    console.log('[ServiceWorker] Fetched&Cached Data');
                    return response;
                });
            })
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(function(response) {
                return response || fetch(e.request);
            })
        );
    }
});
/*
    sw-precache is a node module that will automagically generate a service worker for your 
    application. It will cache your app shell's resources as desired. By changing some configuration 
    options, we can set some run-time caching options. 

    The module is meant to be used with a gulp or grunt build tool. However, it can also be used with 
    a command line interface. 

    The module's API provides a method for creating a service worker and saving the resulting code 
    to a file. The advantage of including it to your build script is that it can automatically run 
    when your files change. You don't need to manually update it every time.
*/
/*
    npm install sw-precache --save-dev 

    {
        "devDependencies": {
            "browser-sync": "",
            "del": "",
            "gulp": "",
            "gulp-autoprefixer": "",
            "gulp-minify-css": "",
            "gulp-rename": "",
            "gulp-sass": "",
            "sw-precache": ""
        }
    }
*/
/*
    

*/