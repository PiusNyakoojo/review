/*
    Images consume a lot of bandwidth: more than 60% of the bytes transferred. We need to be especially 
    careful doing this with mobile devices. 

    Things to think about
        - Is resolution too high?
        - Is file too large for mobile?
        - Is image compressed?

    Display vs Natural (Actual) resolution

    Total bits = pixels * bits per pixel.

    max-width: 100%;

    Use calc() to combine relative and absolute settings

    img:last-of-type { // sets the last of a certain item 
        background-color: green;
    }

    #someElement {
        height: 200vh; // vh stands for viewport height.
        width: 100vw; // vw stands for viewport width.
    }

    // vmin, vmax as well. 
*/
/*
    Browsers can render a vector image at any size. Raster images are pixel-based images.

    SVG > PNG > JPEG

    Use PNG over Gif because
        - more colors
        - better compression
        - no licensing issues

    50em refers to font size;

    50em x 16px == 800px
*/
/*
    Remember: There's no need to send images with natural resolutions higher than their display resolutions 
    (unless you need to scale up for high DPI devices)

    Consider using grunt-pagespeed

        npm i -D grunt-pagespeed
*/