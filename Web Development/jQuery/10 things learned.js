/*
    10 Things learned from jQuery source:
    https://www.youtube.com/watch?v=i_qE1iAmjFg

*/

/*
1. When wrapping your code pass the undefined value in :). This prevents someone
from setting undefined in the code with :

    var undefined = true;
*/

(function(global, document, undefined) {

}(this, document));

/*
2.

    Instead of using setInterval, use an IIFE + setTimeout. 

    The stuff you do within the setInterval may take longer or shorter than 
    the time you set. setInterval doesn't care how long it takes and will 
    consistently call the callback at the specified time. 
*/

setInterval(function() {
    // do stuff
}, 100);

// Use :

(function() {
    // do stuff
    setTimeout(arguments.callee, 100);
});

/*
    Retrieving things from arguments can be quite a performance hit. 
    Also, arguments.callee is deprecated in strict mode. So you should 
    use the following:
*/

(function whatever() {
    // do stuff 
    setTimeout(whatever, 100);
})

/*
    This also works well with Asynchronous recursion:
*/

(function whatever() {
    // do stuff 

    $.get('something.json', function(stuff) {
        whatever();
    });
});

/*
    3. noConflict. At the top of the library, whatever is stored in window.$ is stored in _$.

    If the library ever calls noConflict, it will return whatever was cached there. 
*/

function noConflict(deep) {
    window.$ = _$;

    if (deep) {
        window.jQuery = _jQuery;
    }

    return jQuery;
}