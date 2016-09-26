/*
    Responsive web design is an ART :)

    - Make your content work across any device :D 
    - Use an emulator (like the one built into chrome)
        - The phone looking icon in the toolbar (Ctrl + shift + J)
    
    Basic components of responsive web design:
        - View port
        - Element sizes
        - Tap targets
*/
/*
    View port
        - defines the area of the screen that the browser can render content to. 

    Device pixel ratio = # of hardward pixels per # of device independent pixels (dips) in a single dimension

*/
/*
    <meta name="viewport" content="width=device-width, initial-scale=1">

        width=device-width
            - matches the screen's width in DIPs (device independent pixels)
            - This allows the page to reflow content to match the screen's content
        
        initial-scale=1
            - Instructs the browser to establish a 1:1 ratio between device independent pixels and css pixels.
*/
/*
    img, embed, object, video {
        max-width: 100%;
    }
*/

/*
    Make sure there are at least 40px of room between 2 tap targets. 40px is about the width of an 
    average finger.

    Atleast 48px width by 48px tall to make sure there's enough room between tap targets.

    nav a, button {
        min-width: 48px;
        min-height: 48px;
    }
*/
/*
    Start your design with the smallest form factor in mind: usually a phone like android. Then move up to 
    a tablet, then finally a desktop. By starting small, you really have to prioritize what's important for 
    your user to see! You're also forced to think about performance from the beginning. 

        - Establish priorities in what the user needs to see
        - Think about performance 

*/
/*
    media queries allow you to apply different styles depending on device characteristics. 

    <link rel="stylesheet" media="screen and (min-width: 300px)" href="patterns.css">

        - patterns.css is applied when the screen is over 300px.

    You can also apply media queries by embedding them in css: 

        @media screen and (min-width: 300px) {
            body { background-color: green; }
        }

    OR you can embed them using: (BUT DONT USE THIS BECAUSE IT HURTS PERFORMANCE!!)
        @import url("no.css") only screen and (min-width: 300px);

    Weigh the cost between Linked CSS and @media.

    Linked CSS
        - Many small files == more http requests

    @media
        - Few big files == long http requests

*/
/*
    Media queries often used are min-width and max-width. 

        // This occurs any time the screen width is less than 500px
        @media screen and (max-width: 500px) {
            .yes {
                opacity: 1;
            }
            .no {
                opacity: 0;
            }
        }

    It's also possible to create queries based on min-device-width or max-device-width.. but this isn't 
    recommended as min-device-width is based on the device's actual width not the browser width. 
*/