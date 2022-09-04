var projecIsl = document.getElementsByClassName("project");
var projectNum = projecIsl.length-1;
var selcProj = 0;

var projectSection_dialog = [
	"Immi can't imagine being stuck behind walls (;´༎ຶД༎ຶ`)",
	"*Beep* Immi too can glow like the magic deer!   (´▽`ʃ♡ƪ)",
	"Even Immi feels like escaping from there (。>︿<)",
	"The monsters are scary, just like Iwwi *Boo* (⊙ˍ⊙)",
	"Bad spirits begone  *Boop* "+"\\"+" （＞人＜；）",
	"Immi too wants to have powers to help others! *Beepedy Boop~* (☆▽☆)",
	"That Zombie is scary! Immi is scared of it *Beep*  Σ(っ °Д °;)っ",
	"Immi likes christmas. Christmas is fun. Or is it? >:D   ~(￣▽￣)~*"
];

function loadStyles_projectSection() {
	add_allHiddenProj();
	
	// First Island
	projecIsl[0].classList.remove("projectHidden");
	projecIsl[0].classList.add("projectMain");
	typeWriter(projectSection_dialog[selcProj], 1, 0);
	// console.log(selcProj);
	// Second Island
	projecIsl[1].classList.remove("projectHidden");
	projecIsl[1].classList.add("projectNext");
	// console.log(selcProj);
	// Sixth Island
	projecIsl[projectNum].classList.remove("projectHidden");
	projecIsl[projectNum].classList.add("projectPrev");
	// console.log(selcProj);
}

function changeProj(add_red) {
	if(add_red == "add") {
		return (selcProj < projectNum ? selcProj+1 : 0);
	} else {
		return (selcProj > 0 ? selcProj-1 : projectNum);
	}
}

function changeProject_next() {
	
	// Remove Prev Island, and Change it to Hidden
	projecIsl[changeProj("not")].classList.remove("projectPrev");
	projecIsl[changeProj("not")].classList.add("projectHidden");
	
	// Remove Main Island, and Change it to Prev Island
	projecIsl[selcProj].classList.remove("projectMain");
	projecIsl[selcProj].classList.add("projectPrev");
	
	// Remove Next Island, and Change it to Main Island
	projecIsl[changeProj("add")].classList.remove("projectNext");
	projecIsl[changeProj("add")].classList.add("projectMain");
	
	selcProj = changeProj("add");
	typeWriter(projectSection_dialog[selcProj], 1, 0);
	
	// Add Next Island
	projecIsl[changeProj("add")].classList.remove("projectHidden");
	projecIsl[changeProj("add")].classList.add("projectNext");
};

function changeProject_prev() {
	// Remove Next Island, and Change it to Hidden
	projecIsl[changeProj("add")].classList.remove("projectNext");
	projecIsl[changeProj("add")].classList.add("projectHidden");
	
	// Remove Main Island, and Change it to Next Island
	projecIsl[selcProj].classList.remove("projectMain");
	projecIsl[selcProj].classList.add("projectNext");
	
	// Remove Prev Island, and Change it to Main Island
	projecIsl[changeProj("not")].classList.remove("projectPrev");
	projecIsl[changeProj("not")].classList.add("projectMain");
	
	selcProj = changeProj("not");
	typeWriter(projectSection_dialog[selcProj], 1, 0);
	
	// Add Prev Island
	projecIsl[changeProj("not")].classList.remove("projectHidden");
	projecIsl[changeProj("not")].classList.add("projectPrev");
}


function changeIsland_Main(currNum, changedNum) {
	// Remove Current Main Island
	projecIsl[currNum].classList.remove("projectMain");
	
	// Change Main Island
	projecIsl[changedNum].classList.add("ProjectMain");
};

function remove_floatAnimation() {
	// Remove from Main Island
	projecIsl[selcProj].getElementsByTagName('img')[0].style.animationPlayState = "paused";
	// Remove from Next Island
	projecIsl[changeProj("add")].getElementsByTagName('img')[0].style.animationPlayState = "paused";
	// Remove from Prev Island
	projecIsl[changeProj("not")].getElementsByTagName('img')[0].style.animationPlayState = "paused";
};

function add_floatAnimation() {
	// Add to Main Island
	projecIsl[selcProj].getElementsByTagName('img')[0].style.animationPlayState = "running";
	// Add to Next Island
	projecIsl[changeProj("add")].getElementsByTagName('img')[0].style.animationPlayState = "running";
	// Add to Prev Island
	projecIsl[changeProj("not")].getElementsByTagName('img')[0].style.animationPlayState = "running";
};

function add_allHiddenProj() {
	for(let i=0; i<projectNum; i++) {
		projecIsl[i].classList.add("projectHidden");
	}
};

// Go to the PortfolioPageProjects
function goTo_portfolioPageProjects(selcProj = 0) {
	window.location.href = "portfolioPage_projects.html?"+selcProj;
}