/*
Your code goes here!
 */

function submitForm() {
    if (!doesMatch() || isShort() || isLong()) { // invalid

    }
}

function doesMatch() {
    if (firstPasswordInput.value !== secondPasswordInput.value) {
        secondPasswordInput.setCustomValidity("match");
        return false;
    } else {
        secondPasswordInput.setCustomValidity("");
        return true;
    }
}

function isShort() {
    if (firstPasswordInput.value.length < 16) {
        firstPasswordInput.setCustomValidity("16 characters");
        return true;
    } else {
        firstPasswordInput.setCustomValidity("");
        return false;
    }
}

function isLong() {
    if (firstPasswordInput.value.length > 100) {
        firstPasswordInput.setCustomValidity("100 characters");
        return true;
    } else {
        firstPasswordInput.setCustomValidity("");
        return false;
    }
}


/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function (event) {
    submitForm();
};