/*
    Focus refers to the control on the computer screen that receives input from the keyboard and the clipboard when 
    you paste.

    WebAIM WCAG 2.0 Checklist 2.1.1
    - All page functionality is available using the keyboard, unless functionality cannot be accomplished in 
    any known way using a keyboard (e.g. free-hand drawing)

    Well implemented focus strategies mean that everyone using your website will have a better experience.
*/
/*
    TAB - will move focus forward
    SHIFT + TAB - will move focus backwords
    Arrow keys - can be used to navigate inside of a component
*/
/*
    Make sure your application has a logical TAB order.

    Built-in HTML elements like Input, button and select are Implicitly focusable. Meaning that they are:
        - Automatically in the tab order + built-in keyboard event handling.

    Not all elements are focusable. Generally, there is no need to make an item focusable if there is not way 
    to interact with it or provide it some sort of input.
*/
/*
    WebAIM WCAG 2.0 Checklist

    1.3.2 Meaningful Sequence

    The reading and navigation order (determined by code order) is logical and intuitive.

        - Tab through your page every so often to make sure you haven't messed up the Tab order!!!
*/
/*
    Instead of just using "div" for our footer element, we can use the "footer" tag

        <footer></footer>

    Doing so helps screen readers which rely on these sort of landmark elements to navigate the page.
*/
/*
    Use the tabindex attribute to set the tab index of an element.

        <div tabindex="0">Focus Me!</div>

        tabindex="-1"

            - Not in the natural tab order
            - Can be programmatically focused with focus() method

        This can be useful for hiding off-screen content until it pops up. 

            document.querySelector('#modal').focus()

        tabindex="0"

            - In the natural tab order
            - Can be programmatically focused
        
        <div id="dropdown">Settings</div> // Not focused
        <div id="dropdown" tabindex="0">Settings</div> // Focused and future tab events get directed to this element

        Setting the tabindex to a positive value can be confusing for screen reader users. 
*/
/*
    Only add focus to input elements or elements that can be interacted with. NOT HEADERS OR RANDOM TEXT
*/
/*
    With Single Page Applications (SPAs) navigating without reloading the entire page is awesome and will provide 
    an exception when dealing with which elements to focus. If we navigate from one page to another we should call 
    focus() on the header after navigation to make it evident to the reader that they have navigated to another 
    page. This process is known as: Managing Focus. 

*/
/*
    Skipping Links (e.g. useful to prevent keyboard users from tabbing through all the menu links)

        - Provide a hidden link (Aka skip links). 
            - Skip links provide a menu to keyboard users to bypass the navigation links

            <a href="#maincontent" class="skip-link">Skip to main content</a>

            .skip-link {
                position: absolute;
                top: -40px; // off screen
                left: 0px;
                background: #BF1722;
                color: white;
                padding: 8px;
                z-index: 100;
            }

            .skip-link:focus {
                top: 0px;
            }

            The href refers to another element on the page. In this case the element with id of maincontent.

        We want the skip-link to be displayed before the rest of the DOM so we place it before the nav menu 

        <a href="#maincontent" class="skip-link">Skip to main content</a>
        <nav>
            //...
        </nav>
        <main id="maincontent" tabindex="-1">
            //...
        </main>

        Adding a tabindex="-1" to the maincontent allows this to work for older browsers. 
*/
/*
    The ARIA Authoring Practices doc (or "ARIA Design Patterns doc") is a great resource for figuring out what 
    kind of keyboard support your complex components should implement. 

    There are currently two versions:
        - WAI-ARIA Authoring Practices 1.0
        - WAI-ARIA Authoring Practices 1.1 (Newer working draft)

*/
/*
    Roving Focus: 

    <li tabindex="0" checked>
    <li tabindex="-1">
    <li tabindex="-1">
    <li tabindex="-1">
    
    On TAB set the next item's tabindex to 0.

    <li tabindex="-1">
    <li tabindex="0" checked>       // <-- Call .focus() on this item, setAttribute("checked", true)
    <li tabindex="-1">
    <li tabindex="-1">

    When we reach the bottom, we need to wrap back up to the first item. 
*/
/*
    For building complex components, Roving Focus is a really invaluble technique.
*/
/*
    A responsive drawer panel. This provides an interesting challenge for accessibility especially since it's
    a common design pattern. 
*/
/*
    If we see that the focus has disappeared from the screen while tabbing through, we can open the console as 
    log the activeElement with: 

        document.activeElement
*/
/*
    We can also use the Chrome's Accessibility (a11y) Developer Tools extension. 
*/
/*
    Accessibility (a11y) requires a single, and present <h1> to assist in landmark navigation of content.
*/
/*
    <script src="https://example.com/example-framework.js" crossorigin="anonymous"></script>
*/
/*
    To fix the problem with our responsive drawer panel, we can use 

        display: none;

        OR 

        visibility: hidden;

    In the css of the element. whenever the item is offscreen. This will prevent focus from being able to move 
    to that element. Just before the element becomes assessible on screen, we can use: 

        display: block;

        OR 

        visibility: visible;
*/
/*
    Make sure your charset is defined at the top of your head or in HTTP headers, otherwise IE may have
    to restart page parsing (resulting in canceled requests).
*/
/*
    2.1.2 No Keyboard Trap
    Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and 
    from all navigable page elements using only a keyboard.

    However, there are instances in which the keyboard trap is a desirable effect. For example, a modal window. 
    A modal window is a window that pops up to emphasize some information. Often times, developers will add a 
    dimly lit panel behind it to cover the page.
*/
/*
    There are techniques to allow this modality to provide temporary keyboard traps but it doesn't have wide
    spread browser support yet.

        <dialog open>
            <p>Hello World!</p>
        </dialog>
*/
/*
    View the modal-keycontrols.js for how to add temporary keyboard trapping to a modal view. The accessible modal 
    window is like the BOSS battle of accessibility :D. Let's get to the next level!!
*/