# typingEffect.js Library
A small, super-easy to use, functional, standalone, pure JavaScript library that animates text as if it was being typed out letter by letter. No other scripts required!

## Get Started
To get started, download the 'typingEffect.js' file and use the HTML <script> tag to import it. That's it!
<br><br>
If the page might be out of focus for longer than 5 seconds, say the user is on another tab, some features could be broken due to browser tick throttling . Check out this: https://github.com/turuslan/HackTimer to solve this issue. There is nothing my script can do apart from copy the linked script.

## Demo
Before you learn how to use this library, you may want to see a demo! Click this link to be directed to one: http://lnps.co.uk/customLibraries/customWriting/demo.html. Use the console to have a look at the script.

## HTML Setup
A list of attributes you can give elements that you want to animate is as follows:
 - <b>addTypingEffect</b>: required for all elements that you would like the text inside to be animated. Don't worry, \<br>s are taken into account! This attribute does not need a value.
 - <b>typingSpeed</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a float. It is how long <i>in seconds</i> the pause between letters should be. Example: <code>\<p typingSpeed="0.5">\</p></code>
 - <b>typingLoop</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains either 'false' or how long <i>in seconds</i> the pause between each loop should be, usually how long the text is not changing but is visible (check out <code>typingBackspace</code> for more information). Example: <code>\<p typingLoop="2">\</p></code> or <code>\<p typingLoop="false">\</p></code>
 - <b>typingKeepHeight</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. On multiline text, other elements beneath will move up and down when text is written, if this value is false. By making this value 'true', this library will calculate the space needed and ensure that elements beneath will not move about. Recommended for multiline text. Example: <code>\<p typingKeepHeight="true">\</p></code> or <code>\<p typingKeepHeight="false">\</p></code>
 - <b>typingStopAllow</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. Dictates wether JavaScript is allowed to stop this elements animation. Explained more in the JavaScript Usage section. Example: <code>\<p typingStopAllow="true">\</p></code> or <code>\<p typingStopAllow="false">\</p></code>
 - <b>typingBackspace</b>: required for all elements that use the 'addTypingEffect' attribute. Only matters if <code>typingLoop</code> is not false. A string ("") that contains either 'false' or how long <i>in seconds</i> the text is visible before being backspaced at the same rate as <code>typingSpeed</code>. If this is not false, the <code>typingLoop</code> value becomes how long the text is not shown for, between all characters being backspaced and the text being animated again. If this attribute's value is 'false', then the text will be shown for the value of <code>typingLoop</code>, and then deleted in one big block and started again. Example: <code>\<p typingBackspace="2">\</p></code> or <code>\<p typingBackspace="false">\</p></code> 
<br><br>
 - <b>id</b>: required for all elements that use the 'addTypingEffect' attribute. This is just the standard HTML tag, but it gives the script something to work with.
 <br><br>
 - <b>typingAnimating</b>: <b>do not include</b>. This is a way of checking if the element is being animated, before calling <code>stopAnimation(id)</code>. If it is 'false' or undefined/null, then the element is not being animated. Calling <code>stopAnimation(id)</code> will not call the <code>typingEffectStopped(element)</code> function if this property is not true. 
 
Text inside the element is animated, and \<br>s are rendered as they should be. <b>Other child tags/elements will be written out!</b>

## JavaScript Usage
You must keep the 'window' objects: animateData, i, clock, outerClock, backspaceClock & wellKnownTypingEffect free from use throughout your JavaScript. You cannot define any (except the last one) of the functions below.
<br>
 - <b>typeWrite()</b>: this function will immediately start all typing animations with their appropriate options as listed above in the HTML Setup section.
 - <b>stopAnimation(id)</b>: this function will attempt to stop the typing animation of the given id's element. This must be called before attempting to change the innerHTML of an animated object. If the 'typingStopAllow' is set to false, the typing animation will not stop and a warning will be raised in the console. If it is set to true, then the typing will stop. Read about the next function to handle the element when typing stops...
 - User Created <b>typingEffectStopped(element)</b>: this function must be created by the user of this script. When an animation is stopped successfully, this function will be attempted to be called. If this function does exist, and the call is successfull, 'element' becomes the overall element that was stopped. To get the 'id' of the element (this is strongly recommended), use <code>element["id"]</code>. It is safe to change the innerHTML property inside this function: <code>document.getElementById(element["id"]).innerHTML="New Text"</code>. If you need to deal with more than one stoppage, use an if statement to compare the 'element'.<br>For example, to change the content being written: <code>stopAnimation(elementId); function typingEffectStopped(element){document.getElementById(element["id"]).innerHTML="New Text"; document.getElementById(element["id"]).setAttribute("addTypingEffect",""); typeWrite();}</code>

## Thanks for using this library!
Please leave a star if you found it useful or if you liked it!
