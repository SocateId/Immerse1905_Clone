/* Scrolling Function */
var footerSection = document.getElementById("footerSection");
// var footerSection = document.getElementById("footerSection");
// var creatorsSection = document.getElementsByClassName("webSection_creator");

function amountscrolled(){
	var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
	var docheight = getDocHeight();
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var trackLength = docheight - winheight;
	// Scrolled Percentage
	var pctScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	// var pctScrolled = scrollTop/trackLength * 100; // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	
	// Footer Logic
	if(pctScrolled>=24) {
		// footerSection.style.position = "fixed";
		// footerSection.style.display = "initial";
		footerSection.style.visibility = "visible";
		footerSection.style.opacity = "100";
		
		console.log("static");
	} else {
		// footerSection.style.position = "sticky";
		// footerSection.style.display = "none";
		footerSection.style.visibility = "hidden";
		footerSection.style.opacity = "0";
		
		console.log("sticky");
	}
	console.log(pctScrolled + '% scrolled');
}

function getDocHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight
	);
}

// var docheight = getDocHeight();


// Test Footer Scroll Dialog Box Stuff
var homeSection_dialog_bondingBox = dialogBox[0].getBoundingClientRect();
var creatorsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();

var html = document.documentElement;

function isInViewPort(element) {
	return (
		element.top >= 0 && 
		element.left >= 0 && 
		element.bottom <= (window.innerHeight || html.clientHeight) && 
		element.right <= (window.innerWidth || html.clientWidth)
	);
}

function loadDialog_inView() {
	homeSection_dialog_bondingBox = dialogBox[0].getBoundingClientRect();
	creatorsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();
	
	// amountscrolled();
	if(isInViewPort(homeSection_dialog_bondingBox)) {
		typeWriter(homeSection_dialog[selcIslands], 0, 0);
	}
	if(isInViewPort(creatorsSection_dialog_bondingBox)) {
		typeWriter(homeSection_dialog[selcIslands], 1, 0);
	}
	if(isInViewPort(creatorsSection_dialog_bondingBox)) {
		typeWriter("Introducing the creators of this universe, and immi! Click the arrows on the right or left to view more creators and their works. *Beep*", 1, 0);
		// console.log(isInViewPort(creatorsSection_dialog_bondingBox));
	}
	// console.log(isInViewPort(homeSection_dialog_bondingBox));
}

window.addEventListener("scroll", loadDialog_inView, false);
