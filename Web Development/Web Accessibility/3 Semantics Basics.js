/*
    How do we build our site for people like Victor, who can't see the screen at all? How do they know that 
    they are navigating between radio buttons and not just divs.

    Assistive technologies like screen readers help people like Victor to access technologies despite their 
    physical or cognitive conditions.
*/
/*
    Examples of assistive technologies: 
        - Screen Reader 
        - Braille display 
        - magnification 
        - eye tracking 
        - voice control 
        - switch access 
        - sip and puff
*/
/*
    Enabling assistive technologies to use our sites effectively comes down to implementing: 
        - Programmatically expressed semantics
*/
/*
    When it comes to graphical user interfaces, affordances represent the actions that we can take.

    Well designed affordances allow people to do something with as little training as possible.

        - Buttons typically indicate that an action will be performed 
        - Text input indicates that a single like of text is expected
        - A radio button group suggests that there should be 1 choice selected
        - A checkbox suggests that a yes or no option
*/
/*
    We need to write our markup in a way that can be understood programmatically by assistive technologies which 
    can then create an alternative interface to meet its users needs. We refer to this as expressing the 
    semantics of an element.

    Web AIM WCAG 2.0 Checklist 4.1.2
    Name, Role, Value: markup is used in a way that facilitates accessibility (a11y)

    For all user interface components, the name and role can be programmatically determined; states, properties, 
    and values that can be set by the user can be programmatically set.

    In this course we'll use a screen reader but the things we'll learn will apply to things like voice control and 
    switch control technologies. 
*/
/*
    The screen reader will anounce the element's Name, Value and State if they are available.

    Broadly speaking, if we've done things right, we can expect to hear: 

        Role, Name, State, Value from interactable components.

    For example 

        Text Field, Full Name, Pius Nyakoojo

    or

        Your email address, edit text, email entry

    In this case, the Role is EDIT TEXT, the label is Your email address
*/
/*
    The (Accessibility) a11y tree

        Main
            - form
                - radio button 
                    name: "Round trip"
                    state: selected 
                - edit text 
                    name: "Full name"
                - combo box 
                    value: "No preference"
                    name: "Seat type"
                    state: collapsed
                - button 
                    name: "Search"

    The DOM tree is modified by the screen reader and forms the Accessibility Tree :D. The accessibility tree 
    conceptually looks like a website from the 1990s :O 
*/
/*
    The a11y try is generated from the DOM tree. The browser can do this transformation because much of the 
    DOM has implicit semantic meaning. Write HTML that expresses the semantics of your page directly. 

        e.g. Don't make divs that act as buttons.. just make a button!!
*/
/*
    By using the right element for the interaction:

        <input type="radio" checked name="tType" value="0">

    We get ROLE, STATE and VALUE automatically.
*/
/*
    Also make sure to make the name disoverable:

    Guideline 1.1
    Text Alternatives: Provide text alternatives for non-text content
*/
/*
    name, label, title, text alternative? For the purposes of this course we'll use Label and Name interchangeably.

    There are 2 types of labels:
        - visible
            - used by all users to assist with association with an element
        - text-alternatives 
            - used when there is no need for a visual label.
            - for example with an image
            - by default, not visible
*/
/*
    1.1.1 Non-text content

        - All images, form image buttons, and image map hot spots have appropriate, equivalent alternative 
        text. 
        - Images that do not convey content, are decorative, or contain content that is already conveyed in 
        text are given null alt text (alt="") or implemented as CSS backgrounds. All linked images have 
        descriptive alternative text. 
        - Form buttons have a descriptive value. 
        - Form inputs have associated text labels.

*/
/*
    <button>Search</button> // Search is the value. 
*/
/*
    <label for="letter">
        <span>Receive promotional offers?</span>
        <input type="checkbox" checked name="jLetter" id="letter">
    </label>
*/
/*
    Using proper labeling not only helps accessibility but makes the element easier to target for all users!
*/
/*
    Text alternatives for images: 

    <img src="bees.jpg"
        alt="Bees swarming">

    alt also allows you to specify a string to display when an image is not available.
        - Whether the image fails to load 
        - You're a web crawler
        - Or you're a screen reader

    alt differs from something like 

        <figure>
            <img alt="Waterbaloons"
                src="waterbaloon.jpg"
                title="Not alt text either">
            <figcaption>
                Not alt text 
            </figcaption>
        </figure>

    And 

        <img src="wallabies.jpg"
            alt="Wallaby and joey"
            title="Not alt text either">

    Caption or title provides additional content for the image rather than an alternative to an image. 
*/
/*
    Writing useful alt text is a bit of an art. :) In order for it to be useful text, it should convey the same 
    message as the image in the given context. 

*/
/*
    For a magnifying glass in a search bar, it's probably better to set the alt text to an empty string to avoid 
    confusion and redundancy. In this case the image is completely skipped by the screen reader. 
*/
/*
    Thumbnail images should not have alt text!!! It is redundant information!!!!
*/