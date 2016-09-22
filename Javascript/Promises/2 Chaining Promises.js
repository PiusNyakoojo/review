/*
    Chaining Promises

    1.)
    get('example.json')
    .then(resolveFunc)
    .catch(rejectFunc)

    is equivalent to 

    2.)
    get('example.json')
    .then(resolveFunc)
    .then(undefined, rejectFunc);

    The full form of 2.) is 

    get('example.json')
    .then(resolveFunc, rejectFunc);

    get('example.json')
    .then(resolveFunc, rejectFunc); // notice that you can't call both the resolveFunc and the rejectFunc if they are
    // part of the same .then(). However, if you separate it with 

    get('example.json')
    .then(resolveFunc)
    .catch(rejectFunc); // both of these could potentially be called.


    *Resolve doesn't always mean success.
*/

/*

    If errors occur on the specified lines, what numbers will be logged?
    Assume that no other error occurs for each line. So if we're evaluating Error 1, imagine the other errors didn't occur.

    var urls = [];
    async('example.json') //-----------------------------------Error 1: 1, 3
    .then(function(data) {
        url = data.urls; //------------------------------------Error 2: 1, 3
        return async(urls[0]);
    })
    .then(undefined, function(e) {
        console.log(1);
        return recovery();
    })
    .catch(function(e) {
        console.log(2);
        return recovery(); //-----------------------------------Error 3: Nothing (because undefined resolveFunc doesn't do anything)
    })
    .then(function() {
        console.log(3);
        return async(urls[1]); // ------------------------------Error 4: 3 4
    })
    .then(async, function(e) {
        console.log(4);
        ahhhIGiveUp();
    });

*/

/*
    Promise.all(arrayOfPromises)
    .then(function(arrayOfValues) {
        //...
    });

    arrayOfPromises and arrayOfValues will be in the same order.

    .all() fails fast in that it will reject if just one Promise rejects!
    Once every promise has resolved, the next then in the chain gets the arrayOfValues
*/