// Loads the style once HTML body finish loading
function loadStyles() {
	loadStyles_homeSection();
	loadStyles_creatorsSection();
	loadStyles_projectSection();
	loadStyles_aboutSection();
	loadDialog_inView();
	console.log("Load complete");
}

// Dialog Box Function
var homeSection_dialog_bondingBox = dialogBox[0].getBoundingClientRect();
// var creatorsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();
var projectsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();

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
	// creatorsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();
	projectsSection_dialog_bondingBox = dialogBox[1].getBoundingClientRect();
	
	// amountscrolled();
	if(isInViewPort(homeSection_dialog_bondingBox)) {
		typeWriter(homeSection_dialog[selcIslands], 0, 0);
	}
	// if(isInViewPort(creatorsSection_dialog_bondingBox)) {
		// typeWriter(homeSection_dialog[selcIslands], 1, 0);
	// }
	// if(isInViewPort(creatorsSection_dialog_bondingBox)) {
		// typeWriter("Introducing the creators of this universe, and immi! Click the arrows on the right or left to view more creators and their works. *Beep*", 1, 0);
		// console.log(isInViewPort(creatorsSection_dialog_bondingBox));
	// }
	if(isInViewPort(projectsSection_dialog_bondingBox)) {
		typeWriter(projectSection_dialog[selcProj], 1, 0);
	}
	// console.log(isInViewPort(homeSection_dialog_bondingBox));
}

window.addEventListener("scroll", loadDialog_inView, false);
