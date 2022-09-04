/* Scrolling Function */
var homeSection = document.getElementsByClassName("webSection_home");
var creatorsSection = document.getElementsByClassName("webSection_creator");

function amountscrolled(){
	var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
	var docheight = getDocHeight();
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var trackLength = docheight - winheight;
	// var pctScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	var pctScrolled = scrollTop/trackLength * 100; // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
	
	if(pctScrolled>=20) {
		homeSection[0].style.position = "static";
		// for(let i=0; i<creatorsSection[0].getElementsByTagName("div").length; i++) {
			// creatorsSection[0].getElementsByTagName("div")[i].style.opacity = 100;
		// }
		// creatorsSection[0].getElementsByTagName("div").style.opacity = 100;
		console.log("static");
	} else {
		homeSection[0].style.position = "sticky";
		// for(let i=0; i<creatorsSection[0].getElementsByTagName("div").length; i++) {
			// creatorsSection[0].getElementsByTagName("div")[i].style.opacity = 0;
		// }
		// creatorsSection[0].style.opacity = 0;
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

window.addEventListener("scroll", function(){
	amountscrolled();
}, false);
