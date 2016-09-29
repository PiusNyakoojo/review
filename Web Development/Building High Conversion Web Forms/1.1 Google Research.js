/*
    Contents
        - Minimize repeated actions and fields
        - Show users how far along they are
        - Provide visual calendars when selecting dates

    Choosing the best input type
        - Choose the most appropriate input type for your data to simplify input (HTML5 input types).
            - url, tel, email, search, number, range, datetime-local, date, time, week, month, color
        - Offer suggestions as the user types with the datalist element.
    
    Label and name inputs properly
        - Always use labels on form inputs, and ensure they're visible when the field is in focus
        - Use placeholders to provide guidance about what you expect
        - To help the browser auto-complete the form, use established name's for elements and include the 
            autocomplete attribute
    
    Provide Real-time validation
        - Leverage
    
    5 A's: Autofocus, Autofill, Autocomplete, Autovalidation, Autocorrect

    If the user tries to submit an invalid form, show all fields they need to fix.

    Smartphone users spend most of their time in apps:
        - 86% time spent in apps
            - 28% on social
            - 40% on gaming & entertainment
            - 20% other
        - 14% time spent in browser
    
    On mobile, entertaining apps dominate time, but sites capture the bulk to transactions.

    Forms are the 'gatekeeper' for anything (=signup, payment, information etc')

    The future?! - Web Components: 
        - Polymer has built a dedicated set of ECommerce elements, a.k.a. "Gold Elements" which you can use in any 
        application. 
        - 25 principles: http://goo.gl/5MbvDK
*/
/*
    Don't forget to checkout chrome's form.requestAutocomplete() to get information the user has filled out before and 
    not require them to do it again (e.g. address).

    button.addEventListener('click', (event) => {
        form.requestAutoCopmlete();
        event.preventDefault();
    });

*/
/*
    On the Progressive.com website, users are asked first for their ZIP code, which is then pre-populated into 
    the next part of the form. 

    Look for opportunities to pre-fill information you already know, or may anticipated to save the user from 
    having to provide it. For example, pre-populate the shipping address with the last shipping address supplied
    by the user. 

    Use clearly-labeled progress bars to help users get through multi-part forms. If you place a disporportionately
    complex form in an earlier step, users are more likely to abandom your site before they go through the 
    entire process.

    Provide visual calendars when selecting dates.
*/
/*
    <label for="frmNameA">Name</label>
    <input type="text" name="name" id="frmNameA"
        placeholder="Full Name" required autocomplete="name">
    
    <label for="frmEmailA">Email</label>
    <input type="text" name="email" id="frmEmailA"
        placeholder="name@example.com" required autocomplete="email">

*/
/*
    Leverage the browser's built-in validation attributes like:
        - pattern
            <input type="text" pattern="^\d{5, 6}(?:[-\s]\d{4})?$" ...>
        - required
            <input type="text" required pattern="^...$" ...>
        - min/max
            <input type="number" min="1" max="13" step="0.5" ...>
*/
/*  
    The name attribute specifies the name of an input element. The name attribute is used to reference elements 
    in a Javascript, or to reference form data after a form is submitted. Only form elements with a name 
    attribute will have their values passed when submitting a form.

    On some forms, for example the Google home page where the only thing you want the user to do is fill out a 
    particular field, you can add the autofocus attribute. When set, desktop browsers immediately move the focus 
    to the input field, making it easy for users to quickly begin using the form. Mobile browsers ignore the 
    autofocus attribute, to prevent the keyboard from randomly appearing.

    Be careful using the autofocus attribute because it will steal keyboard focus and potentially preventing 
    the backspace character from being used for navigation

        <input type="text" autofocus ...>
*/