/*
    Our final step is to make sure our web application can become a first class citizen. This will 
    allow the application to exist outside of the web. Users can choose to add your application to 
    their homescreen; just as an installed application can except with a lot less friction.

        - Your application will then be launched in fullscreen mode without a URL bar.
        - The screen orientation can be controlled for optimal viewing.
        - A splash screen can be defined as well as the screen color. 
        - Keep track of whether you're launched from the home screen or URL bar 

    Web App Manifest is supported by 
        - Chrome
        - Firefox
        - Opera
        - Microsoft is investigating for Edge/IE support
*/
/*
    https://developer.mozilla.org/en-US/docs/Web/Manifest

    Web App Manifest
        - The web app manifest provides information about an application (such as name, author, icon
        and description) in a text file. The purpose of the manifest is to install web applications 
        to the homescreen of a device, providing users with quicker access and a richer experience.

        - Web app manifests are part of a collection of web technologies called progressive web apps, 
        which are web applications that can be installed to the homescreen of a device without needing 
        the user to go through an app store, along with other superpowers such as being available offline
        and presenting users with push notifications when application content changes.

    Deploying a manifest 
        - Web app manifests are deployed in your HTML pages using the link tag in the header of your 
        document. 

    <link rel="manifest" href="/manifest.webmanifest">

    Example manifest 

    {
        "name": "HackerWeb",
        "short_name": "HackerWeb",
        "start_url": ".",
        "display": "standalone",
        "background_color": "#fff",
        "description": "A simply readable Hacker News app.",
        "icons": [{
            "src": "images/touch/homescreen48.png",
            "sizes": "48x48",
            "type": "image/png"
        }, {
            "src": "images/touch/homescreen72.png",
            "sizes": "72x72",
            "type": "image/png"
        }],
        "related_applications": [{
            "platform": "web"
        }, {
            "platform": "play",
            "url": "https://play.google.com/store.apps/details?id=cheeaun.hackerweb"
        }]
    }
*/
/*
    For our weather application we can use : 

    <link rel="manifest" href="manifest.json">

    {
        "name": "Weather",
        "short_name": "Weather",
        "start_url": "/index.html",
        "icons": [...],
        "background_color" "#3E4EB8",
        "theme_color": "#2F3BA2",
        "display": "standalone",
        "orientation": "portrait" // remove this 
    }

*/
/*
    To track the number of users who are viewing the application from the homescreen we can attach a query 
    string to the end of the "start_url" field:

        "start_url": "/index.html?hs=true"
    
    Make sure the page is cached as part of the app shell, or else you won't get the benefits of a cached app 
    shell and the application won't work offline. 

    We can later use analytics to track the number of launches that use that query string. Don't forget 
    to cache the URL with the question string in your service worker. 

    It is recommended to provide 8 icon sizes: 
        - 48x48
        - 96x96
        - 128x128
        - 144x144
        - 192x192
        - 256x256
        - 384x384
        - 512x512

    This makes sure you have icons for 1x, 2x, 3x and 4x devices. 
*/
/*
    Chrome uses 
        - 48 dip (device independent pixels) icons for home screen and task switcher
        - 128x128 is used for the splash icon 

    The background_color and theme_color are used by the browser, along with the icon, for the splash screen 
    before the application renders. 
*/
/*
    Link prefetching FAQ

    What is link prefetching?
        - Link prefetching is a browser mechanism, which utilizes browser idle time to download or 
        prefetch documents that the user might visit in the near future. A web page provides a set of 
        prefetching hints to the browser, and after the browser is finished loading the page, it begins 
        silently prefetching specified documents and stores them in its cache. When the user visits one 
        of the prefetched documents, it can be served up quickly out of the browser's cache. 

    <link rel="prefetch" href="/images/big.jpeg">

    How is browser idle time determined? 
        - In the current implementation (Mozilla 1.2), idle time is determined using the nsIWebProgressListener 
        API

    <script src="/path/to/sw-toolbox/companion.js" data-service-worker="my-service-worker.js"></script>
*/