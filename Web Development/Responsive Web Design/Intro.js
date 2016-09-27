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

    Setting min-device-width can prevent content from adapting to desktops or laptops that allow the window 
    to be resized. Because the query is based on the device size not the window. 
*/
/*
    You can use media queries to change the entire layout of a page.

    The point at which a page changes its layout is called a breakpoint. Depending on how your site is layed out, 
    you may have 1 or several breakpoints.

    Where should you place your breakpoints? Don't choose breakpoints. Look at the content your creating and
    allow that to guide the breakpoints you set. Don't make breakpoints based on current devices. What is 
    popular today may not be tomorrow.

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="weather.css"> // always applied
        <link rel="stylesheet" media="screen and (min-width: 550px)" href="weather-medium.css"> // applied at certain breakpoint
        <link rel="stylesheet" media="screen and (min-width: 700px)" href="weather-large.css">
*/
/*
    The grid fluid system is an important pattern for designing layouts
        - columns end up wrapping to the next line as the browser width starts getting smaller.
        - bootstrap or the 960 grid layout system are easy to use and have everything done already for you. 
    
    Flexbox is another important tool you could use for layout
        - Flexbox fills the extra room available. If your element has some extra room around it, it will 
        expand to fit. If it is getting crowded, elements will shrink so it takes up as little room as 
        possible. 
*/
/*
    Flexbox example:

        <div class='container'>
            <div>Something 1</div>
            <div>Something 2</div>
            <div>Something 3</div>
        </div>

    In a normal layout, these divs are shown one after another in separate rows. Using flexbox we can say:

        .container {
            display: flex;
        }

    This will show the divs one after another in the same row.

    By default, flex items fit on a row. So no matter what we set the width of the items, they won't wrap to 
    the next row. Instead, the browser will resize the divs. We can change this behavior with 

        .container {
            display: flex;
            flex-wrap: wrap;
        }

    This will make it okay for the browser to wrap the element to the next line.

    We can also change the order of elements using the css order attribute. To set the order we can set the order 
    attribute as follows:

        @media screen and (min-width: 700px) {
            .dark_blue_item { order: 4; }
            .light_blue_item { order: 5; }
            .green_item { order: 2; }
            .orange_item { order: 3; }
            .red_item { order: 1; }            
        }

    OR we can have something like: 

        @media screen and (min-width: 700px) {
            .header { width: 100%; order: 1; }
            .red { width: 50%; order: 2; }
            .orange { width: 50%; order: 3; }
            footer { width: 100%; order: 4; }
            .light_blue { width: 20%; order: 5; }
            .dark_blue { width: 60%; order: 6; }
            .green { width: 20%; order: 7; }
        }
*/