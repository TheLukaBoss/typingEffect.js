# typingEffect.js
A small, super-easy to use, functional, pure JS and HTML library that animates text as if it was being written.
To get started, download the scriptMain.js file and use the HTML <script> tag to import it. <b>You also require the jQuery library!</b>

A list of attributes you can give elements that you want to animate is below:
 - <b>addTypingEffect</b>: required for all elements that you would like the text inside to be animated. Don't worry, \<br>s are taken into account! This attribute does not need a value.
 - <b>typingSpeed</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a float. It is how long <i>in seconds</i> the pause between letters should be. Example: \<p typingSpeed="0.5">\</p>
 - <b>typingLoop</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains either 'false' or how long <i>in seconds</i> the pause between each loop should be. Example: \<p typingLoop="2">\</p> or \<p typingLoop="false">\</p>
 - <b>typingKeepHeight</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. On multiline text, other elements beneath will move up and down when text is written, if this value is false. By making this value 'true', this library will calculate the space needed and ensure that elements beneath will not move about. Recommended for multiline text. Example: \<p typingKeepHeight="true">\</p> or \<p typingKeepHeight="false">\</p>
 - <b>typingStopAllow</b>: required for all elements that use the 'addTypingEffect' attribute. A string ("") that contains a boolean. Dictates wether JavaScript is allowed to stop this elements animation. Explained more below...
