/*
    https://goo.gl/PHKgO7

    (4) * 10^1 + 
    (2) * 10^0
    -------------
    42 in decimal format

    (1) * 2^5 + 
    (0) * 2^4 +
    (1) * 2^3 +
    (0) * 2^2 +
    (1) * 2^1 +
    (0) * 2^0
    ------------
    101010 === 42 base 10


    To convert decimal to binary, divide decimal number by 2 and record the remainder (r):

        42/2 == 21 r:0
        21/2 == 10 r:1
        10/2 == 5  r:0
        5/2 ==  2  r:1
        2/2 ==  1  r:0
        1/2 ==  0  r:1

    Reading from top to bottom: 101010

    To convert decimal to hexadecimal, divide decimal number by 16 and record the remainder (r):

        42/16 == 2 r:10
        2/16 == 0  r:2

    Reading from top to bottom: 2A

    A is the hexadecimal representation of 10.
*/