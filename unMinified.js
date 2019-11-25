//This version has not been minified. For production, use the 'typingEffect.js', as it has been minified.

///////////////////////////////////////
//         typingEffect.js.          //
// Include credit in re-distribution //
//        Thanks for using!          //
//        Unminified Version         //
///////////////////////////////////////

function typeWrite() {
    window.animateData = [];
    window.i = [];
    window.clock = [];
    window.outerClock = [];
	window.backspaceClock = [];
	
    getAllElementsWithAttribute("addTypingEffect").forEach(function(x) {
        window.animateData.push([x, x.innerHTML, (parseFloat(x.getAttribute("typingSpeed")) * 1000), getIndicesOf("<br>", x.innerHTML, !1), x.getAttribute("typingLoop"), JSON.parse(x.getAttribute("typingStopAllow").toLowerCase()),x.getAttribute("typingBackspace")]);
        if (animateData[animateData.length - 1][4] == "false") {
            animateData[animateData.length - 1][4] = !1
        } else {
            animateData[animateData.length - 1][4] = parseFloat(animateData[animateData.length - 1][4]) * 1000
        }
		if (animateData[animateData.length - 1][6] == "false") {
            animateData[animateData.length - 1][6] = !1
        } else {
            animateData[animateData.length - 1][6] = parseFloat(animateData[animateData.length - 1][6]) * 1000
        }
		
        if (JSON.parse(x.getAttribute("typingKeepHeight").toLowerCase())) {
            x.style.height = parseFloat(getComputedStyle(x, null).height.replace("px", ""))+"px"
        }
    });
    animateData.forEach(function(x, index) {
		document.getElementById(x[0]["id"]).setAttribute("typingAnimating","true");
        if (x[4] == !1) {
            x[0].innerHTML = "";
            window.i[index] = 0;
            window.clock[index] = setInterval(function() {
                if (x[5] && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null) {
                    clearInterval(window.clock[index]);
                    setTimeout(function() {
                        if (typeof typingEffectStopped === "function") {
							document.getElementById(x[0]["id"]).setAttribute("typingAnimating","false");
                            typingEffectStopped(x[0])
                        } else {
                            console.warn("Create a function called 'typingEffectStopped(element)' to execute code once the effect has stopped.")
                        }
                    }, 10)
                } else if (x[5] == false && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null) {
                    console.warn("This element was told to stop, however the typingStopAllow attribute was set to 'false'. This writing effect has not stopped.")
                }
                if (i[index] < x[1].length) {
                    if (x[3].includes(i[index])) {
                        x[0].innerHTML += "<br>";
                        i[index] += 4
                    } else {
                        x[0].innerHTML += x[1].charAt(i[index]);
                        i[index]++
                    }
                } else {
                    clearInterval(clock)
                }
            }, x[2])
        } else {
            loopPrintText(x, index);
            window.outerClock[index] = setInterval(function() {
                loopPrintText(x, index);
            }, x[4] + (x[2] * (x[1].length)) + (x[6]==false?0:(x[2] * (x[1].length))+x[6]))
        }
    });
}

function backspaceAll(x,index){
	//console.log("hey");
	var y = x[1].length;
	setTimeout(function(){
		window.backspaceClock[index] = setInterval(function(){
			if (x[5] && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null){
				clearInterval(window.backspaceClock);
				setTimeout(function(){
					if (typeof typingEffectStopped === "function"){
						document.getElementById(x[0]["id"]).setAttribute("typingAnimating","false");
						typingEffectStopped(x[0])
					} else {
						console.warn("Create a function called 'typingEffectStopped(element)' to execute code once the effect has stopped.")
					}
				}, 10)
			} else if (x[5] == false && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null) {
				console.warn("This element was told to stop, however the typingStopAllow attribute was set to 'false'. This writing effect has not stopped.")
			}
			str = document.getElementById(x[0].id).innerHTML;
			str = str.substring(0, str.length - 1);
			document.getElementById(x[0]["id"]).innerHTML=str;
			if(y == 0){
				clearInterval(window.backspaceClock);
			}
			else{
				y--;
			}
		},x[2])
	},x[6])
}

function stopAnimation(elementId){
	if (document.getElementById(elementId).getAttribute("typingAnimating")=="true")
	{
		 document.getElementById(elementId).removeAttribute("addTypingEffect");
	}
	else
	{
		console.log("Element is not being currently animated.")
	}
}

function loopPrintText(x, index) {
    x[0].innerHTML = "";
    window.i[index] = 0;
    window.clock[index] = setInterval(function() {
        if (x[5] && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null) {
            clearInterval(window.clock[index]);
            clearInterval(window.outerClock[index]);
            setTimeout(function() {
                if (typeof typingEffectStopped === "function") {
					document.getElementById(x[0]["id"]).setAttribute("typingAnimating","false");
                    typingEffectStopped(x[0])
                } else {
                    console.warn("Create a function called 'typingEffectStopped(element)' to execute code once the effect has stopped.")
                }
            }, 10)
        } else if (x[5] == false && document.getElementById(x[0].id).getAttribute("addTypingEffect") == null) {
            console.warn("This element was told to stop, however the typingStopAllow attribute was set to 'false'. This writing effect has not stopped.")
        }
        if (i[index] < x[1].length) {
            if (x[3].includes(i[index])) {
                x[0].innerHTML += "<br>";
                i[index] += 4
            } else {
                x[0].innerHTML += x[1].charAt(i[index]);
                i[index]++
            }
        } else {
            clearInterval(clock);
			if (x[6]!=false){
				backspaceAll(x,index);
			}
        }
    }, x[2])
}

function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i])
        }
    }
    return matchingElements
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return []
    }
    var startIndex = 0,
        index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase()
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen
    }
    return indices
}
