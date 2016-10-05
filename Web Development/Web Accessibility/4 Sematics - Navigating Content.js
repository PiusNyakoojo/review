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
    Article titles are level 3 headings?!?!!?!
*/
/*
    Pages with good headings are sooooooo much easier to use fo people who use assistive technologies. 

    Headings, Links, Form controls and Landmarks are ways people who use assistive technologies can easily
    navigate your site!!
*/
/*
    Link anti-pattern 1 - a span or anchor that should be a link

        <span class='link' onclick='dosomething()'> I'm not a real link.. </span>

        <a onclick='changeView()'> I'm not a real link either...</a>

    This is popular in javascript frameworks.. Regardless.. always use the href attribute to an anchor tag..

        <a href="#internal">Now I'm a link!</a>
            - makes the link show up in the links list 
            - works with the keyboard
            - can be bookmarked
*/
/*
    Link anti-pattern 2 - A link that should be a button

        <a href="#" onclick="doSomething()">Do something!</a> // href="#" indicates this :O 

        // this should be...

        <button class='link' onclick="doSomething()">Do something!</button>
*/
/*
    Link anti-pattern 3 - The embedded logo 
        - this works fine for the sighted reader.. but is sucky for the assistive technology user. 

        <a href="/">
            <img src="logo_wordmark.svg">
        </a>

        // This should be ...

        <a href="/">
            <img alt="Udacity" src="logo_wordmark.svg">
        </a>
*/
/*
    2.4.9 Link Purpose (Link Only)
        - The purpose of each link (or form image button or image map hotspot) can be determined from the link 
        text alone.
*/
/*
    A common example of uninformative link text that we see these days is: Learn more.

    A way to make it more accessible to all readers is to write: Learn more about responsive layouts. or 

        Learn more about blah blah blah.

    Or even making the Heading of the item to be the link 
*/
/*
    HTML5 introduced new elements to allow us to identify the region of a page.

        <header></header>
            - Typically a page banner or 
            - A grouping element for any introductory content for the start of any type of section.
        
        <nav></nav>
            - This represents the section of a page that links to other pages like the top nav bar.. or 
            - links to parts within the page like a table of contents

        <main></main>
            - This represents the main content of a page.
            - Typically there should only be 1 main element. 
        
        <section></section>
            - This is a completely generic section of a document or application
            - We usually add an h2 heading to title this section 

        <article></article>
            - This is for self-contained sections of content like a blog entry, news article or forum post.
            - A handy test for an article is whether its content would make sense for another context
        
        <aside></aside>
            - This contains information that is tangentially related to the content around it.
            - In the context of an article like the one below, it may be a pull-out of sidebar
            - In the context of a page, it may be a page side-bar which adds additional navigation or information 
            about the page. 

        <footer></footer>
            - May be either a page footer and contain information about the page or site or
            - maybe a footer to a particular section of a page. 
*/
/*
    Example layout:

    <header>
        <h1>
            The Lorem Impsum
        </h1>
        <nav>
            <a href="/">Headlines</a>
            <a href="/">Local</a>
            <a href="/">Weather</a>
            <a href="/">Sports</a>                                    
        </nav>
    </header>
    <main>
        <section>
            <h2>Top stories</h2>
            <article>
                <h3>Man bites dog</h3>
                <div>
                    <img alt="Dalmation dog" src="cute_dalmation.jpg">
                    <div>
                        Some stuff about the article
                    </div>
                    <aside>
                        <h4>facts</h4>
                        <div>
                            Men are dogs. 
                        </div>
                    </aside>
                </div>
            </article>
            <article>
                <h3>Local Sports Team</h3>
                <div>
                    <img alt="Football players" src="footballplayers.jpg">
                </div>
            </article>
        </section>
        <section>
            <h2>Weather</h2>
            <img alt="A cloud with rain and lightning" src="storm.jpg">
            <img alt="A cloud with snow" src="storm.jpg">
            <img alt="A snowflake" src="storm.jpg">
            <img alt="A cloud with lightning" src="storm.jpg"> 
            <img alt="The sun" src="sun.jpg">                                   
        </section>
    </main>
    <footer>
        <a href="/contact">Contact</a>
        <a href="/jobs">Contact</a>
        <span>(c) 2016 lorem inc.</span>    
    </footer>
*/
/*
    Using semantic elements avoids us having to write relate elements with their classes and instead use 
    the standard element name:

    header {
        border-bottom: 1px solid black;
    }

    nav a {
        text-decoration: underline;
    }
*/
/*
    1. Use meaningful headings and link text as well as good page structure.

    2. Don't try to control the experience a screen-reader user will have. They will use the information that is
    available to them + the tool they're using to find the information on the webpage.

        - Don't make things focusable if they don't need to be.. it can lead to a confusing experience.
*/