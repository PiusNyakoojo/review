/*
    Help people remember what they're doing while they're on your site.

    Nesting inputs within your label makes it easier to read and more semantic. However, you can have your 
    input outside of the label as well and add the for="" attribute to get an equivalent effect.
        - You should always use the for="" attribute on your label so that screen readers associate
            the label with its corresponding input. 
 */
/*
    A customer wants to buy something, a company wants to sell something. What's sitting in between them? 

        - A Form.
    
    All the details of a form are important:
        - Which name/value pairs do you include?
        - How do you put the labels in?
        - What kind of form control do you use?
        - What kind of feedback do you give to people as they fill in information?
        - How do you organize the form?
        - What do you do to message the before and after parts of a form?
*/
/*
    In Landscape view, labels should be next to the input elements.

    Name __Full name here___________________

    In Portrait view, labels should be above the input elements.

    Name
    __Full name here_____________________

    Avoid placing the labels BELOW the input as they may be covered by the virtual keyboard on mobile. 

*/
/*
    You can have a date input by setting the type of input to type="datetime-local". It may not match the 
    visual theme of your app but you can always edit its styles with CSS or web components (e.g. Polymer). 
*/
/*
    Use the autocomplete attribute on form inputs to help the user complete the form faster!

*/
/*
    Autofocus is extremely useful as it allows users to immediately begin writing to an input field. remember
    that autofocus is ignored on mobile devices to the virtual keyboard isn't brought up at launch.

    Also be careful since autofocus will prevent the backspace key from being used for navigation until the 
    input is blurred (or out of focus).

        <input type="text" 
*/
/*
    Re-using information will make your forms faster! 
*/
/*
    Front-end validation is not a replacement for backend validation. Validate your forms on both ends!
*/
/*
    Bonus Question Input:

    // Validate the letter grade going into the input is
    // A, A+, B+, B, B-, C+, C, C-, ... F
    <input type="text" id="grade" size="2" minlength="1" maxlength="2"
        pattern="A|A\+|([B-D][+-]?)|F"
        required>
*/
/*
    input.setCustomValidity("The input should be blah blah blah"); // error
    input.setCustomValidity(""); // no error

    // this function assumes that if you pass a non-empty string to it, an error occured. 
*/
/*
    Here are some RegEx patterns you might find useful:

    match one of the required symbols:
    /[\!\@\#\$\%\^\&\*]/g
    
    match a number:
    /[0-9]/g or /\d/g

    match a lowercase letter:
    /[a-z]/g

    match an uppercase letter:
    /[A-Z]/g

    match a character that isn't allowed in this password:
    /[^A-z0-9\!\@\#\$\%\^\&\*]/g
*/
/*
    Testing your forms:

        - Be iterative and be in a process of learning.
        - Get metrics on how users are actually using the form. 
        - Talk to people to see how they feel.
*/