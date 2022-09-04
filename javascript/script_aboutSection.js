var slides = document.getElementsByClassName("slide");
var slidesNum = slides.length;
var selcSlide = 0;
var maxLeftSlides = (slidesNum%2 == 0) ? (slidesNum/2)-1:Math.floor(slidesNum/2);
var maxRightSlides = Math.floor(slidesNum/2);

function loadStyles_aboutSection() {
	// add_allHidden_aboutSlide();
	var mainAdded = "slidePrev";
	
	// Main Slide
	slides[selcSlide].classList.add("slideMain");
	console.log("Main Slide:", selcSlide);
	
	// Left Side
	let i=1;
	while(i <= maxLeftSlides) {
		// Prev_2
		if(changeSlide_selcSlide("red", i) != changeSlide_selcSlide("red")) {
			slides[changeSlide_selcSlide("red", i)].classList.add("slidePrev_2");
			
		// Prev_1
		} else {
			slides[changeSlide_selcSlide("red")].classList.add("slidePrev_1");
			console.log("Add Prev_1");
		}
		console.log("Left Slide:", changeSlide_selcSlide("red", i));
		
		i++;
	}
	
	// Right Side
	let j=1;
	while(j <= maxRightSlides) {
		// Next 2
		if(changeSlide_selcSlide("add", j) != changeSlide_selcSlide("add")) {
			slides[changeSlide_selcSlide("add", j)].classList.add("slideNext_2");
			
		// Next 1
		} else {
			slides[changeSlide_selcSlide("add")].classList.add("slideNext_1");
			console.log("Add Next_1");
		}
		console.log("Right Slide:", changeSlide_selcSlide("add", j));
		
		j++;
	}
}

function changeSlide(add_red) {
	if(add_red == "add") {
		return (selcSlide < slidesNum ? selcSlide+1 : 0);
	} else {
		return (selcSlide > 0 ? selcSlide-1 : slidesNum);
	}
}

// Next Slide, Slides items Left
function changeSlide_next() {
	// Slide Prev 2 to Slide Right 2
	slides[changeSlide_selcSlide("add", 3)].classList.remove("slidePrev_2");
	slides[changeSlide_selcSlide("add", 3)].classList.add("slideNext_2");
	
	// Slide Right 2 to Right 1
	slides[changeSlide_selcSlide("add", 2)].classList.remove("slideNext_2");
	slides[changeSlide_selcSlide("add", 2)].classList.add("slideNext_1");
	
	// Slide Right 1 to Main
	slides[changeSlide_selcSlide("add", 1)].classList.remove("slideNext_1");
	slides[changeSlide_selcSlide("add", 1)].classList.add("slideMain");
	
	// Main to Slide Prev 1
	slides[selcSlide].classList.remove("slideMain");
	slides[selcSlide].classList.add("slidePrev_1");
	
	// Slide Prev 1 to Slide Prev 2
	slides[changeSlide_selcSlide("red", 1)].classList.remove("slidePrev_1");
	slides[changeSlide_selcSlide("red", 1)].classList.add("slidePrev_2");

	selcSlide = changeSlide_selcSlide("add");
};

// Prev Slide, Slides items Right
function changeSlide_prev() {
	// Slide Next 2 to Slide Prev 2
	slides[changeSlide_selcSlide("red", 3)].classList.remove("slideNext_2");
	slides[changeSlide_selcSlide("red", 3)].classList.add("slidePrev_2");
	
	// Slide Prev 2 to Prev 1
	slides[changeSlide_selcSlide("red", 2)].classList.remove("slidePrev_2");
	slides[changeSlide_selcSlide("red", 2)].classList.add("slidePrev_1");
	
	// Slide Prev 1 to Main
	slides[changeSlide_selcSlide("red", 1)].classList.remove("slidePrev_1");
	slides[changeSlide_selcSlide("red", 1)].classList.add("slideMain");
	
	// Main to Slide Next 1
	slides[selcSlide].classList.remove("slideMain");
	slides[selcSlide].classList.add("slideNext_1");
	
	
	// Slide Left 1 to Slide Left 2
	slides[changeSlide_selcSlide("add", 1)].classList.remove("slideNext_1");
	slides[changeSlide_selcSlide("add", 1)].classList.add("slideNext_2");

	selcSlide = changeSlide_selcSlide("red");
}

function changeSlide_Main(currNum, changedNum) {
	// Remove Current Main Slide
	slides[currNum].classList.remove("slideMain");

	// Change Main Slide
	slides[changedNum].classList.add("slideMain");
};

// Change Selected Slide Number Based on current Selected Slide
function changeSlide_selcSlide(add_red, byAmount = 1) {
	var num;
	
	if(add_red == "add") {
		// Increase selcSlide by 1, unless at max, then set to 0
		num = ((selcSlide+byAmount) <= (slidesNum-1)) ? (selcSlide+byAmount) : ((selcSlide+byAmount)-(slidesNum));
	} else if(add_red == "red") {
		// Decrease selcSlide by 1, unless at 0, then set to Max
		num = ((selcSlide-byAmount) >= 0) ? (selcSlide-byAmount) : ((slidesNum)+(selcSlide-byAmount));
	}
	
	return num;
}

function add_allHidden_aboutSlide() {
	for(let i=0; i<slidesNum; i++) {
		slides[i].classList.add("slideHidden");
	}
};