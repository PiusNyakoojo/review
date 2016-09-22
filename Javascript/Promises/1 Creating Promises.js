/*
    "The Promise object is used for deferred and asynchronous computations." - MDN

    Syntax:

    var sequence = get('something.json')
        .then(doSomething)
        .then(doSomethingElse);
*/

/*
    There are 4 states that a promise can have: 
        1. Fulfilled (resolved): It worked!
        2. Rejected (failed): It didn't work 
        3. Pending: Still waiting.. not yet fulfilled or rejected 
        4. Settled: Promise has either fulfilled OR rejected
*/

/*
    With events, if the event never fires, then the callback listener is never called.

    With promises, if the promise is resolved, 

*/

/*
    new Promise(function(resolve, reject) {
        resolve('hi'); // works
        resolve('bye'); // cant' happen a second time
    });

    Events can fire many times but promises can only be resolved once. Promises execute on the main thread and the work 
    they do is potentially blocking.

*/

/*
    When should you use a promise?
        1. working with data from an ajax request
        2. executing long-running image manipulation in the main thread
        3. appending divs to the body in a specific order
        4. Passing messages back and forth from main thread and web worker

    A promise is like a try { } catch (e) { } wrapper around code that will finish at an unpredictable time.
*/

/*
    Syntax

    new Promise(function(resolve[, reject]) {
        var value = doSomething();

        if (thingWorked) {
            resolve(value);
        } else if (somethingWentWrong) {
            reject();
        }
    }).then(function(value) {
        // success!
        return nextThing(value);
    }).catch(rejectFunction);

*/

/*
    Loading an image 

    new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = 'image.jpg';
        img.onload = resolve;
        img.onerror = reject;
        document.body.appendChild(img);
    })
    .then(finishLoading)
    .catch(showAlternateImage);

    Any value passed to resolve or reject will be received by the function that's passed to .then() or .catch

    If the value that's passed is a promise, the promise is executed first and then the value that it resolves to is 
    passed to the next .then() in the chain.

    resolve() leads to the next then() in the chain and reject() leads to the next catch()

    .catch() will also be called if there is an error in the body of the function that's passed to the promise. 

*/