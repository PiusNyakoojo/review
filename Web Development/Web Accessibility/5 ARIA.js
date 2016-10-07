/*
    So far we've looked at using 
        - Sensible DOM order which allows for a logical focus strategy and rich keyboard experience.
        - Using built-in elements to provide additional semantic information to assistive technologies.
        - Labeling controls and images and adding page headings and other semantic html elements for landmarks.
        - Links provide a rich interactive experiences on complex sites.
*/
/*
    In this section, we'll learn how to express semantics which HTML can't express on its own.
    
    The Web Accessibility Initiative's Acessibile Rich Internet Applications (ARIA) specifications is 
    good for bridging areas where there are accessibility issues that can't be managed with native HTML.

    WAI-ARIA
*/
/*
    <label for="receivePromotion">
        <input type="checkbox" checked id="receivePromotion">
        <span>Receive promotional offers</span>
    </label>

    name: Receive promotional offers
    state: checked
*/
/*
    <div class='checkbox checked'>
        Receive promotional offers
    </div>

    What if we really need to make a custom component like a checkbox? We need to: 
        - Make it focusable
        - allow for keyboard input like a native checkbox element

    What happens when we try to use the component with a screen reader? The screen reader has no indication that 
    the element is meant to be a checkbox!! Using aria allows us to tell the screen reader that extra information. 
*/
/*
    <div 
        role="checkbox" 
        aria-checked="true">
        Something
    </div>
*/
/*
    ARIA attributes always need to have explicit values!!

    DOM + ARIA => a different accessibility tree.

    However, we need to keep in mind that modifying the accessibility tree is the only thing ARIA changes. It doesn't 
        - modfiy element appearance
        - modify element behavior
        - add focusability
        - add keyboard event handling
*/
/*
    So far we've supported using native HTML5 elements because they give us built in semantics, keyboard support and 
    focus. 

        <label>
            <input type="radio" checked name="tType" value="0">
            Round Trip
        </label>
    
    However, there are instances when native HTML5 elements won't cut it.
*/