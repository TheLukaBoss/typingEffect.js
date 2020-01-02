//This version has not been minified. For production, use the 'typingEffect.js', as it has been minified.

///////////////////////////////////////
//         typingEffect.js.          //
// Include credit in re-distribution //
//        Thanks for using!          //
// *Unminified Development Version*  //
///////////////////////////////////////

console.log("typingEffect.js Successfully Loaded!");

document.addEventListener("error", function(){console.log("There was an unknown error in typingEffect.js! Please refresh the webpage, and if that does not solve the issue, please contact us via an issue on GitHub.");});

let typing =
{
	animateData: [],
	i: [],
	clock: [],
	outerClock: [],
	backspaceClock: [],
	wellKnownTypingEffect: {},
		
	startWrite: function() {
		typing.getAllElementsWithAttribute("addTypingEffect").forEach(function(x) {
			typing.animateData.push([x, x.innerHTML, (parseFloat(x.getAttribute("typingSpeed")) * 1000), typing.getIndicesOf("<br>", x.innerHTML, !1), x.getAttribute("typingLoop"), JSON.parse(x.getAttribute("typingStopAllow").toLowerCase()),x.getAttribute("typingBackspace")]);
			if (typing.animateData[typing.animateData.length - 1][4] == "false") {
				typing.animateData[typing.animateData.length - 1][4] = !1;
			} else {
			   typing.animateData[typing.animateData.length - 1][4] = parseFloat(typing.animateData[typing.animateData.length - 1][4]) * 1000;
			}
			if (typing.animateData[typing.animateData.length - 1][6] == "false") {
				typing.animateData[typing.animateData.length - 1][6] = !1;
			} else {
				typing.animateData[typing.animateData.length - 1][6] = parseFloat(typing.animateData[typing.animateData.length - 1][6]) * 1000;
			}
			
			if (JSON.parse(x.getAttribute("typingKeepHeight").toLowerCase())) {
				x.style.height = parseFloat(getComputedStyle(x, null).height.replace("px", ""))+"px";
			}
		});
		typing.animateData.forEach(function(x, index) {
			document.getElementById(x[0].id).setAttribute("typingAnimating","true");
			typing.wellKnownTypingEffect[x[0].id+"_index"] = index;
			typing.wellKnownTypingEffect[x[0].id+"_elementContents"] = x;
			if (x[4] == false) {
				x[0].innerHTML = "";
				typing.i[index] = 0;
				typing.clock[index] = setInterval(function() {
					if (typing.i[index] < x[1].length) {
						if (x[3].includes(typing.i[index])) {
							x[0].innerHTML += "<br>";
							typing.i[index] += 4;
						} else {
							x[0].innerHTML += x[1].charAt(typing.i[index]);
							typing.i[index]++;
						}
					} else {
						clearInterval(typing.clock);
					}
				}, x[2]);
			} else {
				typing.loopPrintText(x, index);
				typing.outerClock[index] = setInterval(function() {
					typing.loopPrintText(x, index);
				}, x[4] + (x[2] * (x[1].length)) + (x[6]==false?0:(x[2] * (x[1].length))+x[6]));
			}
		});
	},

	backspaceAll: function(x,index){
		var y = x[1].length;
		var str;
		setTimeout(function(){
			typing.backspaceClock[index] = setInterval(function(){
				str = document.getElementById(x[0].id).innerHTML;
				str = str.substring(0, str.length - 1);
				document.getElementById(x[0].id).innerHTML=str;
				if(y == 0){
					clearInterval(typing.backspaceClock[index]);
				}
				else{
					y--;
				}
			},x[2]);
		},x[6]);
	},

	stopWrite: function(elementId, replaceValue){
	  return new Promise(function(resolve, reject) {
			if (typeof typing.wellKnownTypingEffect == "undefined"){
				reject(new Error("Animations Not Started"));
			}else if (document.getElementById(elementId) == null){
				reject(new Error("Element Does Not Exist"));
			}else if (document.getElementById(elementId).getAttribute("typingAnimating")=="false"){
				reject(new Error("Element Is Not Being Animated"));
			}else if (typing.wellKnownTypingEffect[elementId+"_elementContents"][5] == false){
				reject(new Error("Element Not Allowed To Stop"));
			}else{
				clearInterval(typing.clock[typing.wellKnownTypingEffect[elementId+"_index"]]);
				clearInterval(typing.outerClock[typing.wellKnownTypingEffect[elementId+"_index"]]);
				clearInterval(typing.backspaceClock[typing.wellKnownTypingEffect[elementId+"_index"]]);
				document.getElementById(elementId).setAttribute("typingAnimating","false");
				if (replaceValue != false){
					document.getElementById(elementId).innerHTML = replaceValue;
					typeWrite();
				}else{
					document.getElementById(elementId).removeAttribute("addTypingEffect");
				}
				resolve([typing.wellKnownTypingEffect[elementId+"_elementContents"][0],(replaceValue==false?false:true)]);
			}
		});
	},

	loopPrintText: function(x, index) {
		x[0].innerHTML = "";
		typing.i[index] = 0;
		typing.clock[index] = setInterval(function() {
			if (typing.i[index] < x[1].length) {
				if (x[3].includes(typing.i[index])) {
					x[0].innerHTML += "<br>";
					typing.i[index] += 4;
				} else {
					x[0].innerHTML += x[1].charAt(typing.i[index]);
					typing.i[index]++;
				}
			} else {
				clearInterval(typing.clock);
				if (x[6]!=false){
					typing.backspaceAll(x,index);
				}
			}
		}, x[2]);
	},

	getAllElementsWithAttribute: function(attribute) {
		var matchingElements = [];
		var allElements = document.getElementsByTagName('*');
		for (var i = 0, n = allElements.length; i < n; i++) {
			if (allElements[i].getAttribute(attribute) !== null) {
				matchingElements.push(allElements[i]);
			}
		}
		return matchingElements;
	},

	getIndicesOf: function(searchStr, str, caseSensitive) {
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
};
