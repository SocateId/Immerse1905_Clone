var islands = document.getElementsByClassName("island");
var numIslands = islands.length-1;
var selcIslands = 0;

var homeSection_dialog = [
	"What to find out about the committee and their lectures? Click here! *Boop*",
	"Immi's creators are very talented! *Beep* Click on the little creator icon to see more. *Boop*",
	"Want to see more creation from Immi’s creators? *Boop* Click here to enjoy many wonderful short films together with Immi! *Beep*"
];

function loadStyles_homeSection() {
	add_allHidden();
	
	// First Island
	islands[0].classList.remove("island_hidden");
	islands[0].classList.add("island_main");
	typeWriter(homeSection_dialog[0], 0, 0);
	// console.log(selcIslands);
	
	// Second Island
	islands[1].classList.remove("island_hidden");
	islands[1].classList.add("island_next");
	// console.log(selcIslands);
	
	// Last Island
	islands[numIslands].classList.remove("island_hidden");
	islands[numIslands].classList.add("island_prev");
	// console.log(selcIslands);
}

// Changes island based on "Next" or "Prev" input, and current selected island number.
function changeIsland_selectNum(add_red) {
	if(add_red == "add") {
		return (selcIslands < numIslands ? selcIslands+1 : 0);
	} else {
		return (selcIslands > 0 ? selcIslands-1 : numIslands);
	}
}

// Change Island on "Next" Button Click
function changeIsland_next() {
	// Remove Prev Island, and Change it to Hidden
	islands[changeIsland_selectNum("red")].classList.remove("island_prev");
	islands[changeIsland_selectNum("red")].classList.add("island_hidden");
	
	// Remove Main Island, and Change it to Prev Island
	islands[selcIslands].classList.remove("island_main");
	islands[selcIslands].classList.add("island_prev");
	
	// Remove Next Island, and Change it to Main Island
	islands[changeIsland_selectNum("add")].classList.remove("island_next");
	islands[changeIsland_selectNum("add")].classList.add("island_main");
	
	selcIslands = changeIsland_selectNum("add");
	typeWriter(homeSection_dialog[selcIslands], 0, 0);		// Change Island Dialog
	
	// Add Next Island
	islands[changeIsland_selectNum("add")].classList.remove("island_hidden");
	islands[changeIsland_selectNum("add")].classList.add("island_next");
}

// Change Island on "Previous" Button Click
function changeIsland_prev() {
	// Remove Next Island, and Change it to Hidden
	islands[changeIsland_selectNum("add")].classList.remove("island_next");
	islands[changeIsland_selectNum("add")].classList.add("island_hidden");
	
	// Remove Main Island, and Change it to Next Island
	islands[selcIslands].classList.remove("island_main");
	islands[selcIslands].classList.add("island_next");
	
	// Remove Prev Island, and Change it to Main Island
	islands[changeIsland_selectNum("red")].classList.remove("island_prev");
	islands[changeIsland_selectNum("red")].classList.add("island_main");
	
	selcIslands = changeIsland_selectNum("red");
	typeWriter(homeSection_dialog[selcIslands], 0, 0);		// Change Island Dialog
	
	// Add Prev Island
	islands[changeIsland_selectNum("red")].classList.remove("island_hidden");
	islands[changeIsland_selectNum("red")].classList.add("island_prev");
	
	// console.log("red", selcIslands);
}

// Change Current Main Island
function changeIsland_Main(currNum, changedNum) {
	// Remove Current Main Island
	islands[currNum].classList.remove("island_main");
	
	// Change Main Island
	islands[changedNum].classList.add("island_main");
}

function remove_floatAnimation() {
	// Remove from Main Island
	islands[selcIslands].getElementsByTagName('img')[0].style.animationPlayState = "paused";
	// Remove from Next Island
	islands[changeIsland_selectNum("add")].getElementsByTagName('img')[0].style.animationPlayState = "paused";
	// Remove from Prev Island
	islands[changeIsland_selectNum("red")].getElementsByTagName('img')[0].style.animationPlayState = "paused";
}

function add_floatAnimation() {
	// Add to Main Island
	islands[selcIslands].getElementsByTagName('img')[0].style.animationPlayState = "running";
	// Add to Next Island
	islands[changeIsland_selectNum("add")].getElementsByTagName('img')[0].style.animationPlayState = "running";
	// Add to Prev Island
	islands[changeIsland_selectNum("red")].getElementsByTagName('img')[0].style.animationPlayState = "running";
}

function add_allHidden() {
	for(let i=0; i<numIslands; i++) {
		islands[i].classList.add("island_hidden");
	}
}