/*
    https://www.w3.org/TR/wai-aria
*/
/*
    So far we've looked at using 
        - Sensible DOM order which allows for a logical focus strategy and rich keyboard experience.
        - Using built-in elements to provide additional semantic information to assistive technologies.
        - Labeling controls and images and adding page headings and other semantic html elements for landmarks.
        - Links provide a rich interactive experiences on complex sites.
*/
/*
    In this section, we'll learn how to express semantics which HTML can't express on its own.
    
    The Web Accessibility Initiative's Acessibile Rich Internet Applications (ARIA) specifications is 
    good for bridging areas where there are accessibility issues that can't be managed with native HTML.

    WAI-ARIA
*/
/*
    <label for="receivePromotion">
        <input type="checkbox" checked id="receivePromotion">
        <span>Receive promotional offers</span>
    </label>

    name: Receive promotional offers
    state: checked
*/
/*
    <div class='checkbox checked'>
        Receive promotional offers
    </div>

    What if we really need to make a custom component like a checkbox? We need to: 
        - Make it focusable
        - allow for keyboard input like a native checkbox element

    What happens when we try to use the component with a screen reader? The screen reader has no indication that 
    the element is meant to be a checkbox!! Using aria allows us to tell the screen reader that extra information. 
*/
/*
    <div 
        role="checkbox" 
        aria-checked="true">
        Something
    </div>
*/
/*
    ARIA attributes always need to have explicit values!!

    DOM + ARIA => a different accessibility tree.

    However, we need to keep in mind that modifying the accessibility tree is the only thing ARIA changes. It doesn't 
        - modfiy element appearance
        - modify element behavior
        - add focusability
        - add keyboard event handling
*/
/*
    So far we've supported using native HTML5 elements because they give us built in semantics, keyboard support and 
    focus. 

        <label>
            <input type="radio" checked name="tType" value="0">
            Round Trip
        </label>
    
    However, there are instances when native HTML5 elements won't cut it.
*/
/*
    ARIA allows us to add attributes to elements which transforms the way the element is added to the accessibility tree.
*/
/*
    To make sure our custom attributes are synchronized with their actual value at all times, we can use:

    element.setAttribute('role', 'checkbox');

    if (element.hasAttribute('checked')) {
        element.setAttribute('aria-checked', 'true');
    } else {
        element.setAttribute('aria-checked', 'false');
    }
*/
function Checkbox(el) {
    this.el = el;

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.el.addEventListener('click', this.toggle.bind(this));

    // Initialize role and aria-checked state.
    this.el.setAttribute('role', 'checkbox');
    if (this.el.hasAttribute('checked')) {
        this.el.setAttribute('aria-checked', 'true');
    } else {
        this.el.setAttribute('aria-checked', 'false');
    }
}

Checkbox.prototype.handleKeyDown = function(e) {
    switch(e.keyCode) {
        case VK_ENTER:
        case VK_SPACE: {
            this.toggle();
            break;
        }
    }
};

Checkbox.prototype.toggle = function() {
    if (this.el.hasAttribute('checked')) {
        this.el.removeAttribute('checked');

        // Keep checked attribute and aria-checked in sync.
        this.el.setAttribute('aria-checked', 'false');
    } else {
        this.el.setAttribute('checked', '');

        // Keep checked attribute and aria-checked in sync.
        this.el.setAttribute('aria-checked', 'true');
    }
};

/*
    We can also add aria roles to more accurately express the semantics of elements for instance. 

        <button class="toggle"
                checked>
        Enable
        </button>

        This is a button with the name of Enable

        ===>

        <button role="switch"
                aria-checked="true"
                class="toggle">
        Enable
        </button>

        This is a switch with the name of Enable and state checked.

        The switch role is part of ARIA 1.1 and isn't ready for production use yet. Just like other web standards, 
        ARIA is evolving to keep up with web patterns.
*/
/*
    Aria allows us to express more UI patterns. 

    <ul role="tree>
        <li role="treeitem" aria-expanded="true">
            Accessibility course
        </li>
        <ul role="group">
            <li role="treeitem" aria-expanded="false">
                Introduction
            </li>
            <li role="treeitem" aria-expanded="false">
                Focus 
            </li>
            // ...
*/
/*
    ARIA can allow us to add additional labels that are only accessible to assitive technology devices.

        <button class="glyph"
                aria-label="Filter"> // This is like the alt attribute for <img>
            <div class="menu-graph">
            </div>
        </button>
*/
/*
    Accessible Rich Internet Applications - ARIA can also express semantic relationships between elements which 
    goes beyond standard DOM parent, child and sibling relationships.

    <button aria-expanded="false"
            aria-controls="advanced-settings">
        <h2>Advanced settings</h2>
    </button>
    <div id="advanced-settings">
        <label>
            <input type="checkbox">
            Offer to translate content
        </label>
        <label>
            <input type="checkbox">
            Send usage statistics and crash reports
        </label>
    </div>
*/
/*
    ARIA can also make part of the page ALIVE!!!!!!

    That is, it can inform assistive technologies right away when they change!

    <div role="alert">
        Could not connect!
    </div>
*/
/*
    One of the aspects of the ARIA system is its collection of Roles. A role is a short-hand for a particular UI pattern:

    For example:

        alert, alertdialog, img, link, dialog, list, option, progressbar, radio, scrollbar, slider, status, 
        tabpanel, text-box, timer, tooltip, treeitem, combobox, grid, tablist, tree, treegrid, article, group, 
        link, row, form, main, navigation, application, math, region, toolbar, presentation, definition, 
        directory, document, etc..

*/
/*
    Since the keyboard interaction features so prominently, it's important to make sure that when creating a custom 
    widget, the role attribute is applied in the same place as the tabindex attribute.

        <div tabindex="0"
            class="checkbox" checked
            role="checkbox" aria-checked="true">
            Tim-Tams
        </div>

    So that when page focus lands on an element, its role is conveyed accurately.
*/
/*
    <div role="radiogroup">
        <label for="earth-option">
            <input role="radio"
                    type="radio"
                    aria-checked="false"
                    id="earth-option">
            Earth
        </label>
        <label name="mars-option">
            <input role="radio"
                    type="radio"
                    aria-checked="true"
                    id="mars-option"
                    checked>
            Mars
        </label>
    </div>
*/
/*
    aria-label allows us to specify a string directly to be used as the accessible label. 

    <button aria-label="menu"
            class="hamburger">
    </button>

    You would use the aria-label to give assistive technologies details on the visual purpose of the element.

    <button aria-label="Close">
        X
    </button>

    This overrides any native labeling mechanism such as a <label></label> element. Or for example if the button has 
    an aria-label and some text content, in the case of the close button "X", only the aria-label will be used.
*/
/*
    aria-labelledby allows us to refer to an element that's sole purpose is to be a label for the element we're giving
    the aria-labelledby attribute.

    <span id="rg-label">
        Drink options
    </span>
    <div role="radiogroup"
        aria-labelledby="rg-label">
    //...
    </div>

    aria-labelledby is much like using a <label></label> element with some key differences:
        - aria-labelledby can be used with any element. Not just labelable elements like <input>
        - aria-labelledby is attached to the element that is being labeled. The relationship is the reverse of 
            <label></label>
        - aria-labelledby can take a list of the id of elements that are its labels 

    <div id="men-lbl">
        Men's T-Shirts
    </div>
    <button id="men-btn"
            aria-labelledby="men-lbl men-btn">
        Shop Now
    </button>

    The aria-labelledby will override other labels. 

    <div id="secret" hidden>
        Hot dogs
    </div>
    <button aria-label="menu"
            aria-labelledby="secret"
            class="hamburger">
    </button>

    The name of the button is "Hot dogs" rather than "menu"
*/
/*
    - In each case, provide the label for the first, or outermost, element.
    - If the element would be hidden from the accessibility tree, choose "No label".
    - HTML labelling techniques, and ARIA roles and attributes, must be used correctly in order to be effective.
*/
/*
    Don't redefine default semantics. 

        <input type="checkbox">

        NOT <input type="checkbox" role="checkbox">

        - We'll to an exception to this rule later on.

    A text field may NOT have a role attribute described. 
*/
/*
    ARIA also offers a set of landmark specifiers: 

        role="banner"
            role="search"
            role="navigation"
        role="main"
            role="complementary"
        role="contactinfo"
        role="dialog"

    Dependent on the browser you need to support, it may be necessary to provide information about the HTML semantic 
    element as well as the ARIA role. This breaks the rule we talked about because the default semantics may 
    not be supported in the browser. For example: 

        <main role="main"></main>
*/
/*
    aria-labelledby is what is known as a relationship attribute.

    A relationship attribute creates some sort of semantic relationship between some elements on the page. In the case 
    of aria-labelledby "this element is labelled by that element." Or as the case may be, "this element is labelled by 
    those elements."

    The ARIA 1.0 spec specifies several relationship attributes. 

        aria-activatedescendant : ID reference 
        aria-describedby : ID reference list 
        aria-labelledby : ID reference list 
        aria-owns : ID reference list 
        aria-posinset : integer 
        aria-setsize : integer
    
    One of the most widely used relationships is aria-owns 

    For example an item having a sublist of items. 

    <div role="menu">
        <div role="menuitem"
            aria-haspopup="true">
            New 
        </div>
        <div aria-owns="submenu"></div>
        <!-- more items... -->
    </div> <!-- menu -->
    <div role="menu id="submenu">
        <div role="menuitem">
            Document 
        </div>
        <!-- more items... -->
    </div> <!-- submenu -->

    This allows us to tell assistive technologies that an element that is separate from another element in the DOM 
     should be treated as a child of that element.

     aria-owns can also take a list of elements. We can use this to specifically state the order of the children 
     (for example to rearrange the children) or to interweave native and non-native children. 

        <div role="menu"
            aria-owns="mi1 sm1 mi2 mi3"></div>
*/
/*
    aria-activedescendant plays a similar role to aria-owns. aria-activedescendant allows us to tell assistive tech 
    that when a parent has page focus, it should be displayed to the user as the active focused element. 

        <div role="listbox" tabindex="0"
            aria-activedescendant="i7">
            <!-- ... -->
            <div role="option" id="i6">Item 6</div>
            <div role="option" id="i7">Item 7</div>
            <div role="option" id="i8">Item 8</div>
            <!-- ... -->
        </div> <!-- listbox -->

    This allows the currently selected item appear to the assistive technology as if it is the focused item!!
*/
/*
    aria-describedby allows us to provide an accessible description is the exact same way that aria-labelledby allows us 
    to provide a label. 

    <label for="pw">Password:</label>
    <input type="password" id="pw"
        aria-describedby="pw-help">
    <div id="pw-help">
        Password must be at least 12 characters
    </div>

    Unlike a label, the aria-describedby text may or may not ever be displayed by the user. They may have a choice to 
    access the information or it may come after other information. The description will provide information that is 
    supplementary and not essential. 
*/
/*
    aria-posinset and aria-setsize 
        - About defining a relationship between sibling elements in a set. 
    aria-posinset (short for position inset)

    <div role="listbox">
        <div role="option"
            aria-posinset="857"
            aria-setsize="1000">Item 857</div>
        <div role="option"
            aria-posinset="858"
            aria-setsize="1000">Item 858</div>
    </div> <!-- listbox -->
*/
/*
    Only the relevant parts of the page should be visible to assistive technology. In addition, we should also practice 
    showing things that are relevant only to assistive technologies. 

    Anything that is explicitly hidden will not be accessible by assistive technologies. (e.g. not included in the 
    accessibility tree)

        <button style="visibility: hidden;">

        <div style="display: none;">

        <span hidden>

    However, an element which is not visually rendered and not explicitly hidden is still included in the accessibility 
    tree. 

        .screenreader {
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        }

    It's also possible to provide screen-reader only text via an aria-label attribute. 

        <button aria-label="menu"
                class="hamburger">
        </button>

        OR 

        <div role="tree"
            aria-describedby="tree-help">
        <!-- ... -->
        </div>
        <div hidden id="tree-help">
            To expand tree sections, ... 
        </div>

    We can also hide elements from assitive technologies with aria-hidden="true"
*/
/*
    There are many ways to label an input element. The important thing is that you do it!
*/
/*
    aria-live allows us to alert the user that an element is alive. aria-live has 3 possible values: 
        - off (default)
        - polite
        - assertive 
    
    <div class="alertbar"
        aria-live="assertive">
        Could not connect! // The descendants are called the live region
    </div>

    <!-- Hey, want to grab lunch? -->

    <div aria-live="polite"
        class="chat-history">

    <!-- aria-live="assertive" -->

    This will be used to alert the user of something urgent.
*/
/*
    aria-live practicalities
        - The aria-live attribute should be in the initial page load!
        - Try different types of changes: 
            - live region hidden -> visible change live region content append new live region 

*/
/*
    There are 3 attributes which work with aria-live to fine-tune what is communicated to the user when the live region changes. 
        - aria-atomic
            - aria-atomic="true"
            - aria-atomic indicates whether the live region should be considered as a whole when the live region updates.
        - aria-relevant
            - aria-relevant="additions"
            - indicates what type of changes should be updated to the user.
            - 3 main changes: additions, removals and text
        - aria-busy
            - aria-busy="true"
            - temporarily ignore changes to this element.
            - for example, when things are loading after a temporary connectivity loss.
*/
/*
    role="dialog" is useful for popup windows like sign-in modals.

    <div class="modal" role="dialog" aria-labelledby="login">
        <h1 id="login">Login to our website</h1>

    Programmatically setting aria-hidden="true" is useful in hiding content to the screen reader.
*/