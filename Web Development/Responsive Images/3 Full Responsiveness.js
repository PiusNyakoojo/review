/*
    Art direction pushes developers to provide different content to different devices as well.

    What if your 1000 different media query conditions don't support some future platform?
    Using media queries is an attempt to guess, at build time, what image you need to use at runtime.
    You're forcing the image source on the browser rather than giving it information to make the 
    best choice possible on its own.

    Another problem with media queries is that refer to the view-port dimensions not the actual display
    size of the image. What if you give your image a percentage width: say 50% of the view port width.
    Media queries won't be that helpful in this case.
*/
/*
    The srcset attribute allows us to give the browser information on what image to use for which device 
    dimensions. 

        <img src="wallaby_1x.jpg" srcset="wallaby_1x.jpg 1x, wallaby_2x.jpg 2x" alt="Wallaby">

    The 1x, 2x descriptor is called a pixel density descriptor.

        window.devicePixelRatio

    The w unit tells the browser the width of each image. Therefore, it can decide what image to use based on 
    this information as well. 

    The sizes attribute tells the browser what percent (of the view port width in this example) the image 
    will be displayed at when we set it in CSS.

        <img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" sizes="50vw" alt="Wallaby">

        
        img {
            transition: width 0.5s;
            width: 50vw;
        }

        @media screen and (max-width: 250px) {
            img {
                width: 100vw;
            }
        }

        <img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
            sizes="(max-width: 250px) 100vw, 50vw" alt="Wallaby" />
*/
/*
    The picture element
        - The browser looks that the first source. If it can use the first source, it will, otherwise it will 
        continue down the list. The browser can choose depending on it's capabilities.

        <picture>
            <source srcset="kittens.webp" type="image/webp">
            <source srcset="kittens.jpeg" type="image/jpeg">
            <img src="kittens.jpg" alt="Two grey tabby kittens">            
        </picture>
*/
/*
    Art direction
        - Choosing a different image depending on the device view-port dimensions

        <picture>
            <source 
                media="(min-width: 650px)" srcset="kitten-large.png"
                srcset="kookaburra_large_1x.jpg 1x, kookaburra_large_2x.jpg 2x">
            <source 
                media="(min-width: 465px)" srcset="kitten-medium.png"
                srcset="kookaburra_medium_1x.jpg 1x, kookaburra_medium_2x.jpg 2x">
            <img 
                src="kookaburra_small.jpg"
                alt="The kookaburra: a terrestrial tree kingfisher native to Australia and New 
                    Guinea (according to Wikipedia)">            
        </picture>

    You can use the picturefill polyfill. This a javascript file that adds the picture functionalities to browsers
    that don't support picture: e.g. Safari.
*/
/*
    Lynx is an all text browser.
        - Use lynx to experience the web without images. What is it like?
        - Making your website accessible to everyone (e.g. the visualy impaired) is essential.
*/