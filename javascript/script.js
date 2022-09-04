// sessionStorage 
// Percistance Values
var projectSelc;
// sessionStorage.setItem();
window.sessionStorage.setItem("projectSelc", projectSelc);
// window.sessionStorage.getItem("projectSelc", projectSelc);

// Dialog Box Functionality
var dialogBox = document.getElementsByClassName("dialogBoxTxt");	// Dialog Box Doc
var speed = 25;														// In Milliseconds, 1 Second : 1000 MS
var timeout_id;

function typeWriter(txt, dialogNum, i, dialog_bold = "", haveStyle_text = false) {
	var dialog = txt;
	// var dialog_bold = "";
	// var haveStyle_text = false;
	// console.log("txt: ", txt);
	// console.log("dialog: ", dialog);
	
	if(typeof i === "undefined") {
		i = 0;
	}
	
	if(i > 0) {
		if(i <= dialog.length) {
			// if(dialog.charAt(i-1) != "\\" || dialog.charAt(i-1) != "#" || dialog.charAt(i-1) != "%") {
			if(dialog.charAt(i-1) == "\\") {
				dialogBox[dialogNum].innerHTML += "<br>";
				
				// if(dialog.charAt(i-1) == "#") {
					// dialogBox[dialogNum].innerHTML += "<b>";
				// } else if(dialog.charAt(i-1) == "%") {
					// dialogBox[dialogNum].innerHTML += "</b>";
				// } else {
					// dialogBox[dialogNum].innerHTML += "<br>";
				// }
			} else if(dialog.charAt(i-1) == "#") {
				dialog_bold = "";
				haveStyle_text = "bold";
				// dialogBox[dialogNum].innerHTML += "<b>";
				console.log("dialog", + dialog_bold.length);
			} else if(haveStyle_text == "bold") {
				if(dialog.charAt(i-1) == "%") {
					// dialogBox[dialogNum].innerHTML += dialog_bold.bold();
					// dialogBox[dialogNum].innerHTML += (dialog.charAt(i-1)).bold();
					haveStyle_text = false;
				} else {
					// dialog_bold += dialog.charAt(i-1);
					dialogBox[dialogNum].innerHTML += "<b>"+(dialog.charAt(i-1));
				}
				console.log("dialog text", + dialog_bold);
			} else {
				dialogBox[dialogNum].innerHTML += dialog.charAt(i-1);
			}
			// else if(dialog.charAt(i-1) == "\\") {
				
			// }
				
			i++;
			timeout_id = setTimeout(typeWriter, speed, dialog, dialogNum, i, dialog_bold, haveStyle_text);
		}
	} else {
		dialogBox[dialogNum].innerHTML = "";
		// dialog = txt;
		clearTimeout(timeout_id);
		i++;
		timeout_id = setTimeout(typeWriter, speed, dialog, dialogNum, i);
	}
	
}