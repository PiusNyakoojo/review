/*
    Common responsive techniques for creating responsive layouts.

        - Mostly fluid
        - Layout Shifter
        - Column Drop
        - Off Canvas

    Some sites may use a combination of these techniques. 
*/
/*
    Column Drop
        - Starting from a small window size until the first breakpoint, elements resize.
        - When the first breakpoint is hit, elements begin sharing a row. 
        - For consecutive breakpoints, elements will continue sharing a row. 

    Summary: Elements are stacked vertically -> increase size -> elements are displayed horizontally

    Code: 

        <div class="container">
            <div class="box dark_blue"></div>
            <div class="box green"></div>  
            <div class="box light_blue"></div>          
        </div>

        .container {
            display: flex;
            flex-wrap: wrap;
        }

        .box { width: 100%; }

        @media screen and (min-width: 301px) and (max-width: 500px) {
            .dark_blue { width: 20%; }
            .light_blue { width: 80%; }
        }

        @media screen and (min-width: 501px) {
            .dark_blue, .light_blue { width: 20%; }
            .green { width: 60%; }
        }
*/
/*
    Mostly fluid
        - Elements resize until first breakpoint. 
        - At the first breakpoint, the layout is changed.
        - At some later breakpoint, the full grid view is shown. 
        - After the grid is shown then margin borders are displayed. 

    margin-left: auto;
    margin-right: auto;
*/
/*
    Layout Shifter
        - This is the most responsive design pattern because there are more options. 

    
    Recall that the default order of an element is 0. order and width are super important! Keep using them!
*/
/*
    Off Canvas
        - Instead of stacking content vertically, the off canvas pattern uses less frequently used content 
        (e.g. navigation or app menus) off screen, only showing them if the screen is large enough.
        - On smaller devices, the off screen content is usually shown when the user taps on the Hamburger 
        icon

    nav {
        width: 300px;
        height: 100%;
        position: absolute;
        transform: translate(-300px, 0); // move off canvas
        transition: transform 0.3s ease; // animate
    }

    nav.open {
        transform: translate(0, 0); // move back to canvas
    }

    @media screen and (min-width: 600px) {
        nav {
            position: relative;
            transform: translate(0, 0);
        }
        body {
            display: flex;
            flex-flow: row nowrap;
        }
        main {
            width: auto;
            flex-grow: 1; // allows the element to grow and take up the full remaining width of the view port. 
        }
    }
*/