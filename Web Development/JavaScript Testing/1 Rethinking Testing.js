/*
    What expectations apply to my Function?

    function add(x, y) {
        return x + y;
    }

    // numerical inputs
    // numerical output
    // valid input
        // non-null
        // defined

    Concretely:
        - Expect 2 + 3 = 5
        - Expect an error if non-numbers are used
        - Expect 0.1 + 0.2 = 0.3
*/
/*
    With our current implementation, 0.1 + 0.2 = 0.300000...4

    Since JavaScript floating point math is broken :P
*/
/*
    function add(x, y) {
        var result;
        if ((typeof x && typeof y) !== 'number') {
            throw new Error('Params must be a number.');
        }

        result = x + y;
        if (parseInt(result !== result)) {
            result = parseFloat(result.toFixed(1));
        }

        return result;
    }

*/
/*
    Now we write the tests:

        // Expect add(2, 3) to be equal to 5
        expect(add(2, 3)).toBe(5);

        // Expect add() to throw an error if x/y are not numbers
        expect(add(2, 'test')).toThrow();

        // Expect add(0.1, 0.2) to be equal to 0.3
        expect(add(0.1, 0.2)).toBe(0.3);
*/