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