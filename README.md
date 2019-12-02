# typingEffect.js Library
A small, super-easy to use, functional, standalone, pure JavaScript library that animates text as if it was being typed out letter by letter. No other scripts required!

## Get Started
To get started, download the 'typingEffect.js' file and use the HTML <script> tag to import it. That's it!
<br><br>
If the page might be out of focus for longer than 5 seconds, say the user is on another tab, some features could be broken due to browser tick throttling . Check out this <a href="https://github.com/turuslan/HackTimer" target="_blank">repo</a> to solve this issue. There is nothing my script can do apart from copy the linked script.
<br><br>
Browsers and PCs may not be able to handle many elements being animated at once, mainly due to the script being based on timings and JavaScript being a synchronous language.

## Demo
Before you learn how to use this library, you may want to see a demo! Click this link to be directed to one: <a href="http://lnps.co.uk/customLibraries/customWriting/demo.html" target="_blank">demo</a>. Use the console to have a look at the script. Demo being improved soon!

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
 - <b>stopAnimation(id, replaceValue)</b>: this function will attempt to stop the typing animation of the given id's element. It is a promise. If the 'typingStopAllow' is set to false, the typing animation will not stop and the promise will throw an error. If it is set to true, then the typing will stop, with a success array as output. The replaceValue can be set to false or a string. If set to false, then the animation will stop, and the text will not change. Providing a string will change the typing text and restart the animation with the new text automatically. The success array is [elementStopped, (true/false based on replaceValue)]. Example:<br><code>stopAnimation("example", "New Text")</code><br><code>
			.then(function(result)</code><br><code>
			{</code><br><code>
			 	 alert("Writing Changed Or Stopped!");</code><br><code>
			  	alert(result[0]);</code><br><code>
			  	alert(result[1]);</code><br><code>
			})</code><br><code>
			.catch(function(error)</code><br><code>
			{</code><br><code>
				  alert(error);</code><br><code>
			});</code>

## Next Planned Features
 - Flashing Cursor Option (In Work Now)
 - Encapsulation (<i>please help and give examples, maybe pull request</i>)

## Thanks for using this library!
Please leave a star if you found it useful or if you liked it! Don't forget to watch for updates!
