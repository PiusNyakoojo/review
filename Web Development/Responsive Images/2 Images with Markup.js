/*
    Aim to reduce the number of image requests, not just the size of the images. It turns out that for many 
    modern websites, bandwidth doesn't matter as much as latency.

    Rather than bandwidth being the new bottleneck, latency is!

        The more Mbps we get, the load time of our website actually flattens out eventually. 

        On the other hand, if we continue to reduce latency, the page load continues to speed up. 
*/
/*
    To reduce the number of image downloads, you can also use CSS image sprites (or responsive sprites). 
    A sprite sheet image combines lots of images, which can be displayed individually by setting the sprite 
    sheet as the background to an element, then adjusting background position with CSS. This technique can 
    be particularly useful for icons and other repeated graphics.

    Whatever techniques you use to avoid latency, be aware of the changes that are coming with HTTP/2. 

    In a nutshell, HTTP/2 will mean that requesting multiple files will be less costly: prepare to stop using 
    spriting, concatenating and other HTTP/1 hacks! 

*/
/*
    In the olden days, text was displayed as a graphic (or image). This is not good design today because
        - image text isn't read by a search engine crawler
        - text-readers can't read the text content of the image. 
*/
/*
    CSS background-size
        - cover
            - image covers the entire background
            - The image is sized so that it is as small as possible while still completely filling its container
        - contain
            - image is contained in the in the parent element, and repeats if additional space is available
            - The image is sized so that it is as large as possible while still being completely visible inside 
            its container
*/
/*
    If you need to use a graphical symbol like an arrow, a star or a heart. Check whether it's available as a
    character in a font. http://unicode-table.com 

    When symbols are used as fonts, they have all the advantages of text: 
        - infinitely scalable 
        - can be work along-side CSS effects
        - Don't require a download

    There are more than 110,000 Unicode characters.

    In order to use Unicode characters you need to set the charset in meta tag to utf-8

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    It's actually recommended to copy and paste the actual Unicode character into your HTML. It's easier
    to read and maintain. :D 𝄞𝄞𝄞
*/
/*
    There's an icon style called Zocial. It looks nice. 

        http://weloveiconfonts.com
        
        @import url(http://weloveiconfonts.com/api/?family=zocial);

        [class*="zocial-"]:before { // this is added to every class that begins with the name "zocial-"
            display: inline-block;
            font-family: 'zocial', sans-serif;
            text-shadow: 3px 3px 3px #aaa;
            width: 20vw;
        }

        body {
            font-family: 'Roboto Condensed';
            margin: 20vh 0;
        }

        <div class="zocial-twitter">Twitter</div>
        <div class="zocial-facebook">Facebook</div>        
*/
/*
    Don't forget to improve accessibility by including aria attributes.
*/
/*
    You can inline images with SVGs and Data URIs (Base64 encoded strings)
*/
/*
    If you're using an image src once in your site, inlining makes sense to reduce server requests. 
    However, making your image an external resource is useful if you're using the image in several places on the 
    site. The browser will cache the image and the server request will be avoided. 
*/