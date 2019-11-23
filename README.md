# typingEffect.js
A small, super-easy to use, functional, pure JS and HTML library that animates text as if it was being written.
To get started, download the typingEffect.js file and use the HTML <script> tag to import it. <b>You also require the jQuery library!</b>

A list of attributes you can give elements that you want to animate is below:
 - <b>addTypingEffect</b>: required for all elements that you would like the text inside to be animated. Don't worry, \<br>s are taken into account! This attribute does not need a value.
 - <b>typingSpeed</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a float. It is how long <i>in seconds</i> the pause between letters should be. Example: <code>\<p typingSpeed="0.5">\</p></code>
 - <b>typingLoop</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains either 'false' or how long <i>in seconds</i> the pause between each loop should be. Example: <code>\<p typingLoop="2">\</p> or \<p typingLoop="false">\</p></code>
 - <b>typingKeepHeight</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. On multiline text, other elements beneath will move up and down when text is written, if this value is false. By making this value 'true', this library will calculate the space needed and ensure that elements beneath will not move about. Recommended for multiline text. Example: <code>\<p typingKeepHeight="true">\</p> or \<p typingKeepHeight="false">\</p></code>
 - <b>typingStopAllow</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. Dictates wether JavaScript is allowed to stop this elements animation. Explained more below...
 - <b>id</b>: required for all elements that use the 'addTypingEffect' attribute. This is just the standard HTML tag, but it gives the script something to work with.

Text inside the element is animated, and \<br>s are rendered as they should be. <b>Other child tags/elements will be written out!</b>

<b>How to use JavaScript with this libray</b>:
<br>You must keep the 'window' objects: animateData, i, clock & outerClock free from use throughout your JavaScript. You must have the jQuery library installed.
<br>To kick off the animations, call typeWrite(). This will immediately start all typing animations with their options.
<br>To stop <i>one element's animation</i>, if you need to change the content for example (attempting to change innerHTML without stopping the animation will result in the new text being overridden), use the removeAttribute() function to remove the 'addTypingEffect' attribute from the element you want to stop. If the 'typingStopAllow' is set to false, the typing animation will not stop. If it is set to true, then the typing will stop. A function called 'typingEffectStopped(element)' will be attemepted to be called, and if it exists, 'element' becomes the HTML element that the typing has stopped in. If it does not exist, nothing will happen. <i>Do not attempt to change any innerHTML of an animated element outside of this function. By writing innerHTML in this function, it is definite that the changes will be kept.</i>. If you need to deal with more than one stoppage, use an if statement to compare the 'element'. An example usage to change what is typed is below:
<br><code>element.innerHTML = "New Text";
			document.getElementById(element["id"]).setAttribute("addTypingEffect","");
			typeWrite();</code>.<br><br>Thanks for using this library!
