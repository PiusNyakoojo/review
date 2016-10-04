/*
    Users with device disabilities or physical disabilities need to access our content.

    Some user accessibility problems
        - Small text that's hard to read (e.g. low contrast text)
        - Bad forms.
        - Screen reader confusion.
*/
/*
    Some statistics on disability for the US:
        - Around 2% of the population has some kind of vision disability (i.e. are blind or have significant
        difficult seeing even with glasses)
        - Around 50% of the population has some kind of clinically significant refractive error (a vision 
        impairment which may be corrected with glasses if mild enough)
        - Around 8% of males and 0.5% of females have some form of color vision deficiency
        - Around 2% of adults have a hearing disability
        - Over 4% have a cognitive disability (difficulty remembering, concentrating or making decisions)

*/
/*
    WCAG - Web Content Accessibility Guidelines
        - A set of guidelines and best practices put together by accessibility experts to try to answer
            the question of what accessibility means in a methodical way.
        - Several countries mandate the use of these guidelines in their accessibility legal requirements.
        - Organized around 4 core principles POUR:
            - Perceivabile
                - Making sure users can perceive content. Just because something is perceivable by 1 sense, such 
                as sight, doesn't mean it's perceivable by all users.
            - Operable
                - Can users use UI components and navigate the content? For example, something that requires a 
                hover interaction cannot be operated by someone who cannot use a mouse or is using a touch screen.
            - Understandable
                - Can users understand the content? 
                - Can all users understand the interface?
                - Is it consistent enough to avoid confusion?
            - Robust
                - Is it robust enough for the content to be consumed by a wide variety of user agents? Does it work 
                with assistive technology?
        
        WCAG can also be a bit overwhelming.. So there is an easy to follow checklist targeted specifically for web 
        content: The Web Aim Checklist. This checklist can give you a high level summary of what you need to implement
        while also linking to the underlying WCAG specifications if you need an expanded definition.

        Web Aim Checklist.

        Both WCAG and the Checklist cover a lot of accessibility space. But guidelines are only a limited proxy for 
        actual accessibility. What actually matters is the user experience. Not just checking some box. So while these 
        guidelines give us a framework for thinking about accessibility, there may be places where they're incomplete or 
        even give advice which is a bit out of date.

        However, they're still an excellent resource to integrate accessibility into our process.
*/
/*
    Using WebAIM Checklist, find the rule that dicatates "the web page has a descriptive and informative 
    page title."

    Rule Number: 2.4.2
    POUR Section: Operable
*/
/*
    FOCUS
        - build things that can be operated with a keyboard
        - great for motor impaired individuals
    SEMANTICS
        - express interface in a robust way
        - works with a variety of assistive technologies
    STYLING
        - visual UI needs to be as flexible and usable as possible
*/