/*
    Make sure that elements are styled to support the accessibility work that we're already done.
        - Add styles for focus and 
        - add styles for various ARIA states

    Make sure that our elements are scalable and can handle being zoomed in or scaled up for users who have 
    difficulties reading small text.

    Finally, we'll look at color choices such as contrast and make sure that we're not conveying things with 
    color alone. 
*/
/*
    WebAIM - Web Accessibility in mind 

    2.4.7 Focus Visible
        - It is visually apparent which page element has the current keyboard focus (i.e., as you tab through the 
        page, you see where you are).

    To change the appearance of our focus ring we can change the outline property on the :focus pseudo-class

        :focus {
            outline: 1px dotted #FFF;
        }

        Anti-pattern:

        :focus {
            outline: 0; // MAJOR anit-pattern
        }

        Without a focus outline, how is a keyboard user supposed to tell which item is focused. If you remove the outline, 
        you should replace it with another indicator for users to know which item is focused.

    A common pattern is to give your hover and focus pseudo-classes the same style:

        button:hover,
        button:focus {
            background: #E91E63;
            color: #FFFFFF;
            text-decoration: underline;
        }

        button:focus {
            outline: 0;
            box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.8);
        }

    Because the various browsers style the outline slightly differently, just changing the outline color might not result 
    in the effect we're looking for accross the browsers

    For radio buttons:

        .radio:focus {
            outline: 0;
        }

        .radio:focus::before {
            box-shadow: 0 0 1px 2px #5B9DD9;
        }

    Using the ::before pseudo-element is useful to just target the circle of the button in this case.

    Use the focus pseduo class to achieve styling that is consistent with the rest of your site if the default 
    outline is clashing with that style. 

    However, some older CSS resets would kill off the focus styling, so it's important to know how to get it back.
*/
/*
    You want to be careful about just conveying certain information with color because some users may have a color 
    vision impairment. To cater to these users, we can add a text-decoration: underline; to give a visual indication 
    that something has changed.
*/
/*
    For native elements like button, browsers implement special behaviors that allows users to differentiate between 
    mouse and keyboard focus. The focus ring is usually displayed for keyboard focus. The idea is that mouse users 
    are less likely to need to focus ring because they usually know what they just clicked on.

    However, that trick does not apply to custom elements. So the focus ring will be displayed even when we mouse click 
    on the element. 

    In addition, this behavior varies across different browsers.

    In Firefox, there is a -moz-focusring that can be used to apply the focus ring if the element is focused through 
    the keyboard.

        .btn:-moz-focusring {
            outline: 2px solid blue;
            text-decoration: underline;
            color: white;
            background: #4AA498;
        }
*/
/*
    Styling with ARIA 

        <div class="toggle pressed"
            role="button"
            aria-labelledby="muteLbl"
            aria-pressed="true">
        </div>

        Instead of using 

        .toggle.pressed {
            // transition to pressed state
        }

        we can do something like :

        .toggle[aria-pressed="true"] {
            // transition to pressed state
        }

        .toggle[aria-pressed="true"] // This is called a CSS attribute selector.

    By styling with ARIA attributes, we have 1 less state to worry about in our CSS selection

        .disclosure-button[aria-expanded="false"] .icon::after {
            content: '▶';
        }

        .disclosure-button[aria-expanded="true"] .icon::after {
            content: '▼';
        }

    One huge benefit to styling with ARIA is that it provides visual feedback that you've applied the state 
    correctly, which can act as a safeguard when you're testing and debugging your code.
*/
/*
    1.4.4 Resize text - WebAIM checklist
        - The page is readable and functional when the text size is doubled.

    Practice responsive web design with: 

        <meta name="viewport" content="width=device-width, initial-scale=1">

    Use relative sizing when working with font sizes and widths of elements.

        width: 50%; // relative to the containing block
        font-size: 1.2em; // relative to the font-size of the parent
        font-size: 2rem; // relative to the font-size of the root

    Use appropriate touch targets to make input elements easier to press without touching other elements. 
        - 48dp minimum touch target size 
        - 32dp margin around touch target 
*/
/*
    Use color and contrast in such a way that is accessible to use by anyone and everyone!
*/
/*
    WebAIM Checklist: 

    1.4.3 Contrast (Minimum)
        - Text and images of text have a contrast ratio of at least 4.5:1
        - Large text (over 18 point or 14 point bold) has a contrast ratio of at least 3:1

    1.4.6 Contrast (Enhanced)
        - Text and images of text have a contrast ratio of at least 7:1.
        - Large text (over 18 point or 14 point bold) has a contrast ratio of at least 4.5:1
*/
/*
    1.4.1 Use of Color 
        - Color is not used as the sole method of conveying content or distinguishing visual elements.
        - Color alone is not used to distinguish links from surrounding text unless the luminance contrast 
        between the link and the surrounding text is at least 3:1 and an additional differentiation 
        (e.g. it becomes underlined) is provided when the link is hovered over or receives focus.
*/
/*
    NoCofee is a good chrome extension to use to simulate color-blindness. 

    High Contrast is a good chrome extension to use to determine if your site is great for users who use high 
    contrast settings. 
*/
/*
    Questions to ask when deciding which piece of your technology needs to be accessible immediately:
        - How frequently is this piece of UI used? 
        - How badly does this accessibility issue affect your users?
        - How expensive is it going to be to fix?

        Good a11y == good UX
*/