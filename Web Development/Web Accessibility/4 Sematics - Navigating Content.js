/*
    Voice Over is a great screen reader :D. Voiceover is available on Mac OSX and similar mac products. This 
    software is a global feature and so there are some shortcut keys which are available to users right away :D.

    CMD + F5 to turn Voice over on
*/
/*
    In VoiceOver Utility > Web > Page Loading we can select
        - When loading a new page "Speak webpage summary"
    
    Voiceover then mentions the number of links, headings, form controls, tables and landmarks on the page. 

        e.g.

        Wikipedia, the free encyclopedia Page has 351 links 15 headings 4 form controls 6 tables 14 landmarks
*/
/*
    The level of the heading should indicate how prominent the information is on the webpage. These should 
    indicate the sections and subsections of a web page. 
*/
/*
    1.3.2 Meaningful Sequence
        - The reading and navigation order (determined by code order) is logical and intuitive

    The order of elements in HTML matters for 
        - Focus order 
        - order of items read by the screen reader!
*/
/*
    2.4.10 Section Headings 
        - Beyond providing an overall document structure, individual sections of content are designated using 
        headings, where appropriate.

    1.3.1 Info and Relationships
        - Semantic markup is used to designate headings (<h1>), lists (<ul>, <ol>, and <dl>), emphasized or 
        special text (<strong>, <code>, <abbr>, <blockquote>, for example), etc.

    2.4.1 Bypass Blocks 
        - If a page has a proper heading structure, this may be considered a sufficient technique instead of 
        a "Skip to main content" link. Note that navigating by headings is not yet supported in all browsers.

    2.4.6 Headings and Labels
        - Page headings and labels for form and interactive controls are informative. Avoid duplicating 
        heading (e.g. "More Details") or label text (e.g., "First name") unless the structure provides 
        adequate differentiation between them. 
*/
/*
    Some headings can be placed off screen to make them visible only to screen readers and other assitive technologies.
    For copmlex applications, this can be a good way to accomodate headings when the visual design doesn't require
    or even have room for a visible heading. However
        - It's important not to go overboard with this technique! 
        - Some assistive technology users may well be able to SEE the screen so going too far down the path of 
        doing screen-reader only content can actually create a worse user experience for some users. 
        - If taken too far, this can also create a headache when attempting to support things like 
        internationalization.
*/
/*
    Don't use heading tags to achieve a particular look on the page. They are more useful as landmarks.

    Page titles are level 1 headings!!!
    Section titles are level 2 headings!!!!!!
*/
/*
    Pages with good headings are sooooooo much easier to use fo people who use assistive technologies. 

    Headings, Links, Form controls and Landmarks are ways people who use assistive technologies can easily
    navigate your site!!
*/