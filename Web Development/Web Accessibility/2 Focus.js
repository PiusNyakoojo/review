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