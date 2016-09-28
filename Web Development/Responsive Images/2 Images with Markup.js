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