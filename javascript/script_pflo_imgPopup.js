// var myCarousel = document.querySelector('#pflo_imagePopup_slideHor');
// var carousel = new bootstrap.Carousel(myCarousel, {interval: false, wrap: true});

// Image Doc Values
var pflo_imgsDoc = document.getElementsByClassName("sItem");

// Elements to be Added
// Div Container Element
var addElement_slideHorItem_div = document.createElement("div");
addElement_slideHorItem_div.setAttribute("class", "pflo_imagePopup_slideHorItem carousel-item");
// Img Element
var addElement_slideHorItem_img = document.createElement("img");
addElement_slideHorItem_img.setAttribute("class", "lazyload");
addElement_slideHorItem_div.appendChild(addElement_slideHorItem_img);

// Model Image Vars
var pflo_modelImg_scene = document.getElementById("pflo_imagePopupScene");											// Model Image Scene
// Carousel (Horizontal Slider)
var carousel_docQuerySelc = document.querySelector('#pflo_imagePopup_slideHor');									// The Carousel Element in the Docs
var pflo_modelImg_carousel = new bootstrap.Carousel(carousel_docQuerySelc, {										// Initialise the Carousel
	interval: false, 
	wrap: true
});
var pflo_sliderHor_prevBtn = document.getElementById("pflo_imagePopup_slideHor_btnPrev");							// Carousel Button, Previous Slide
var pflo_sliderHor_nextBtn = document.getElementById("pflo_imagePopup_slideHor_btnNext");							// Carousel Button, Next Slide
var pflo_modelImg_slideHorScreen = document.getElementById("pflo_imagePopup_slideHorScreen");						// The Horizontal Slider Screen/Window
var pflo_modelImg_slideHorItems;																					// The Horizontal Slider Items
var pflo_modelImg_slideHor_selcItem;																				// The Current Selected Horizontal Slider Item
var pflo_modelImg_slideHor_selcItemSrc;																				// The Current Selected Horizontal Slider Item Source
// Vertical Slider
// var pflo_modelImg_slideVerItems = document.getElementsByClassName("pflo_imagePopup_slideVerItem");					// The Vertical Slider Items


// Sets Up the Model Image Section, and adds click eventListener to artworks
function pflo_setUp_modelImg() {
	for(let i=0; i<pflo_imgsDoc.length; i++) {
		// Adds eventListener to artworks
		pflo_imgsDoc[i].addEventListener("click", pflo_modelImg_open);
		pflo_imgsDoc[i].setAttribute("data-num", parseInt(i));
		
		// Add items to Carousel
		// addElement_slideHorItem_img.src = pflo_imgsDoc[i].src;
		addElement_slideHorItem_img.setAttribute("data-src", pflo_imgsDoc[i].src);	// Sets the Image Source
		// addElement_slideHorItem_img.setAttribute("data-num", (i+1));
		pflo_modelImg_slideHorScreen.appendChild(addElement_slideHorItem_div.cloneNode(true));
	}
	
	// Getting/Setting values
	pflo_modelImg_slideHorItems = document.getElementsByClassName("pflo_imagePopup_slideHorItem");
}

// Open Model Image
function pflo_modelImg_open() {
	// console.log("Pic Source:", this.src);
	// console.log("Pic Num:", this.dataset.num);
	pflo_modelImg_slideHorItems[this.dataset.num].classList.add("active");
	
	pflo_modelImg_scene.style.display = "block";
}
// Close Model Image
function pflo_modelImg_close() {
	// pflo_modelImg_slideHorItems[this.dataset.num].classList.remove("active");
	pflo_modelImg_slideHor_selcItem = document.getElementsByClassName("active");
	
	pflo_modelImg_scene.style.display = "none";
	
	pflo_modelImg_slideHor_selcItem[0].classList.remove("active");
}

// Previous Carousel Slide
function pflo_sliderHor_prev() {
	pflo_modelImg_carousel.prev();
}
// Next Carousel Slide
function pflo_sliderHor_next() {
	pflo_modelImg_carousel.next();
}

// pflo_modelImg_slideVerItems[0].getElementsByTagName("img")[0].src

// Previous Vertical Slide
function pflo_sliderVer_prev() {
	
}

// Next Vertical Slide
function pflo_sliderVer_next() {
	
}