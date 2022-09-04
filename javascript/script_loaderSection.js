$(window).on("load", function() {
	$("#loaderSection").fadeOut("slow", function(){
		clearTimeout(loaderSection_timeoutId);
		clearTimeout(loaderSection_timeoutIdFunc);
		$("body").removeClass("preload");
		// alert("test");
		alert("Note, for best user experience, please access on desktop through Chrome browser. Or, through mobile on landscape mode! \n\nver26.4");
		$("this").remove();
	});
});

// Dialog Box Functionality
var loaderSection_dialogBox = document.getElementsByClassName("loaderSection_dialogBoxTxt");	// Dialog Box Doc
var loaderSection_speed = 25;																	// In Milliseconds, 1 Second : 1000 MS
var loaderSection_timeoutId;
var loaderSection_timeoutIdFunc;
var loaderSection_timeoutSpeed = 5000;
var loaderSection_dialog = [
	"Beep Boop ( •̀ .̫ •́ )✧",
	"Boop Beep (。・∀・)ノ",
	"Boop Boop (～﹃～)~zZ",
	"Who’s Iwwi? >:D (*Φ皿Φ*)"
];

function loaderSection_typeWriter(txt, dialogNum, i) {
	var dialog = txt;
	// console.log("txt: ", txt);
	// console.log("dialog: ", dialog);
	
	if(typeof i === "undefined") {
		i = 0;
	}
	
	if(i > 0) {
		if(i <= dialog.length) {
			if(dialog.charAt(i-1) != "\\") {
				loaderSection_dialogBox[dialogNum].innerHTML += dialog.charAt(i-1);
			} else {
				loaderSection_dialogBox[dialogNum].innerHTML += "<br>";
			}
			i++;
			loaderSection_timeoutId = setTimeout(loaderSection_typeWriter, loaderSection_speed, dialog, dialogNum, i);
		}
	} else {
		loaderSection_dialogBox[dialogNum].innerHTML = "";
		// dialog = txt;
		clearTimeout(loaderSection_timeoutId);
		i++;
		loaderSection_timeoutId = setTimeout(loaderSection_typeWriter, loaderSection_speed, dialog, dialogNum, i);
	}
	
}
var dialog_i = 0;

function loopTimeout() {
	loaderSection_timeoutIdFunc = setTimeout(function() {
		console.log("dialog i value, before speaking", dialog_i);
		console.log("dialog:", loaderSection_dialog[dialog_i]);
		loaderSection_typeWriter(loaderSection_dialog[dialog_i], 0, 0);
		
		dialog_i = (dialog_i < (loaderSection_dialog.length-1)) ? dialog_i+1 : 0;
		console.log("dialog i value", dialog_i);
		
		loopTimeout();
	}, loaderSection_timeoutSpeed);
	
}
loopTimeout();

// Beep Boop ( •̀ .̫ •́ )✧
// Boop Beep (。・∀・)ノ
// Beep Beep ╰(￣ω￣ｏ)
// Boop Boop (～﹃～)~zZ
// Who’s Iwwi? >:D (*Φ皿Φ*)