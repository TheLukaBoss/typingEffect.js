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
	window.wellKnownTypingEffect = {};
	
    getAllElementsWithAttribute("addTypingEffect").forEach(function(x) {
        window.animateData.push([x, x.innerHTML, (parseFloat(x.getAttribute("typingSpeed")) * 1000), getIndicesOf("<br>", x.innerHTML, !1), x.getAttribute("typingLoop"), JSON.parse(x.getAttribute("typingStopAllow").toLowerCase()),x.getAttribute("typingBackspace")]);
        if (window.animateData[window.animateData.length - 1][4] == "false") {
            window.animateData[window.animateData.length - 1][4] = !1;
        } else {
           window.animateData[window.animateData.length - 1][4] = parseFloat(window.animateData[window.animateData.length - 1][4]) * 1000;
        }
		if (window.animateData[window.animateData.length - 1][6] == "false") {
            window.animateData[window.animateData.length - 1][6] = !1;
        } else {
            window.animateData[window.animateData.length - 1][6] = parseFloat(window.animateData[window.animateData.length - 1][6]) * 1000;
        }
		
        if (JSON.parse(x.getAttribute("typingKeepHeight").toLowerCase())) {
            x.style.height = parseFloat(getComputedStyle(x, null).height.replace("px", ""))+"px";
        }
    });
    window.animateData.forEach(function(x, index) {
		document.getElementById(x[0].id).setAttribute("typingAnimating","true");
		window.wellKnownTypingEffect[x[0].id+"_index"] = index;
		window.wellKnownTypingEffect[x[0].id+"_elementContents"] = x;
        if (x[4] == false) {
            x[0].innerHTML = "";
            window.i[index] = 0;
            window.clock[index] = setInterval(function() {
                if (window.i[index] < x[1].length) {
                    if (x[3].includes(window.i[index])) {
                        x[0].innerHTML += "<br>";
                        window.i[index] += 4;
                    } else {
                        x[0].innerHTML += x[1].charAt(window.i[index]);
                        window.i[index]++;
                    }
                } else {
                    clearInterval(window.clock);
                }
            }, x[2]);
        } else {
            loopPrintText(x, index);
            window.outerClock[index] = setInterval(function() {
                loopPrintText(x, index);
            }, x[4] + (x[2] * (x[1].length)) + (x[6]==false?0:(x[2] * (x[1].length))+x[6]));
        }
    });
}

function backspaceAll(x,index){
	var y = x[1].length;
	var str;
	setTimeout(function(){
		window.backspaceClock[index] = setInterval(function(){
			str = document.getElementById(x[0].id).innerHTML;
			str = str.substring(0, str.length - 1);
			document.getElementById(x[0].id).innerHTML=str;
			if(y == 0){
				clearInterval(window.backspaceClock[index]);
			}
			else{
				y--;
			}
		},x[2]);
	},x[6]);
}

function stopAnimation(elementId, replaceValue){
  return new Promise(function(resolve, reject) {
		if (typeof window.wellKnownTypingEffect == "undefined"){
			reject(new Error("Animations Not Started"));
		}else if (document.getElementById(elementId) == null){
			reject(new Error("Element Does Not Exist"));
		}else if (document.getElementById(elementId).getAttribute("typingAnimating")=="false"){
			reject(new Error("Element Is Not Being Animated"));
		}else if (window.wellKnownTypingEffect[elementId+"_elementContents"][5] == false){
			reject(new Error("Element Not Allowed To Stop"));
		}else{
			clearInterval(window.clock[window.wellKnownTypingEffect[elementId+"_index"]]);
			clearInterval(window.outerClock[window.wellKnownTypingEffect[elementId+"_index"]]);
			clearInterval(window.backspaceClock[window.wellKnownTypingEffect[elementId+"_index"]]);
			document.getElementById(elementId).setAttribute("typingAnimating","false");
			if (replaceValue != false){
				document.getElementById(elementId).innerHTML = replaceValue;
				typeWrite();
			}else{
				document.getElementById(elementId).removeAttribute("addTypingEffect");
			}
			resolve([window.wellKnownTypingEffect[elementId+"_elementContents"][0],(replaceValue==false?false:true)]);
		}
	});
}

function loopPrintText(x, index) {
    x[0].innerHTML = "";
    window.i[index] = 0;
    window.clock[index] = setInterval(function() {
        if (window.i[index] < x[1].length) {
            if (x[3].includes(window.i[index])) {
                x[0].innerHTML += "<br>";
                window.i[index] += 4;
            } else {
                x[0].innerHTML += x[1].charAt(window.i[index]);
                window.i[index]++;
            }
        } else {
            window.clearInterval(window.clock);
			if (x[6]!=false){
				backspaceAll(x,index);
			}
        }
    }, x[2]);
}

function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}

function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0,
        index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}
