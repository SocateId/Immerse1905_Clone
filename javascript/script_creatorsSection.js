// Batch Var
// var creatorBatch_elements = document.getElementsByClassName("batchCircle");
// var num_creatorBatches = creatorBatch_elements.length;

// Creators Var
var creators = document.getElementsByClassName("creator");
var numCreators = creators.length;
var numOfCreatorStyles = 7;

// Batch Creator Values
// var batch1_creatorPos = (numCreators/num_creatorBatches)*0;
// var batch2_creatorPos = (numCreators/num_creatorBatches)*1;
// var batch3_creatorPos = (numCreators/num_creatorBatches)*2;

// Initial Batch and Creator
var selcCreators = (numCreators/2)-1;
/*
var selcBatch = 1;
var selcCreators;
if(selcBatch == 0) {
	selcCreators = batch1_creatorPos;
} else if(selcBatch == 1) {
	selcCreators = batch2_creatorPos;
} else if(selcBatch == 2) {
	selcCreators = batch3_creatorPos;
}
*/

function loadStyles_creatorsSection() {
	// Batch Select Scene
	/*
	var batchScene_side = "Left";
	var batchCalc_num = 0;
	if(selcBatch-2 <= -1) {
		batchCalc_num = 1;
	} else {
		batchCalc_num = 2;
	}
	*/
	
	/*
	for(let i=0, j=-1; i<num_creatorBatches; i++) {
		if(i == selcBatch) {
			creatorBatch_elements[i].classList.add("batchCircle_main");	
			batchScene_side = "Right";
			j *= -1;
		} else {
			creatorBatch_elements[i].classList.add("batchCircle_mob"+batchScene_side+"_"+batchCalc_num);
			batchCalc_num = (batchCalc_num+j !=0 ? batchCalc_num+j : 1);
		}
	}
	*/
	
	// Main/Middle Slide
	creators[selcCreators].classList.add("creator_main");
	// Left Side Slides
	for(let i=(selcCreators-1), j=1; i>=0; i--) {
		creators[i].classList.add("creator_mobLeft_"+j);
		// if(j < 4) {
		if(j < 3) {
			j++;
		}
	}
	
	// Right Side Slides
	for(let i=(selcCreators+1), j=1; i<numCreators; i++) {
		creators[i].classList.add("creator_mobRight_"+j);
		// if(j < 4) {
		if(j < 3) {
			j++;
		}
	}
}

// Changes the Batch Number and Batch Visual Position
function changeBatch(batchNum) {
	// Change to 1st Batch
	if(batchNum == 0 && batchNum != selcBatch) {
		// Remove Class from Elements
		creatorBatch_elements[selcBatch].classList.remove("batchCircle_main");
		for(let i=0; i<num_creatorBatches; i++) {
			if(i == selcBatch) {
				continue;
			}
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_2");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_2");
		}
		
		// Change Current Batch
		selcBatch = 0;
		
		// Add Class to Elements
		creatorBatch_elements[selcBatch].classList.add("batchCircle_main");
		creatorBatch_elements[selcBatch+1].classList.add("batchCircle_mobRight_1");
		creatorBatch_elements[selcBatch+2].classList.add("batchCircle_mobRight_2");
		
		// Change Creator Positions to Reflect Batch Selection, only on Button
		if((selcCreators > batch1_creatorPos) && (selcCreators >= batch2_creatorPos)) {
			// Change to First Creator
			while(selcCreators != batch1_creatorPos) {
				changeCreators_prev();
			}
		}
			
		console.log("Batch 1:", selcBatch, "Selc Creator:", selcCreators);
		
	// Change to 2nd Batch
	} else if(batchNum == 1 && batchNum != selcBatch) {
		// Remove Class from Elements
		creatorBatch_elements[selcBatch].classList.remove("batchCircle_main");
		for(let i=0; i<num_creatorBatches; i++) {
			if(i == selcBatch) {
				continue;
			}
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_2");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_2");
		}
		
		// Change Current Batch
		selcBatch = 1;
		
		// Add Class to Elements
		creatorBatch_elements[selcBatch].classList.add("batchCircle_main");
		creatorBatch_elements[selcBatch-1].classList.add("batchCircle_mobLeft_1");
		creatorBatch_elements[selcBatch+1].classList.add("batchCircle_mobRight_1");
	
		// Change Creator Positions to Reflect Batch Selection
		// If current Creator is greater then Desired Creator 
		if((selcCreators > batch2_creatorPos) && (selcCreators >= batch3_creatorPos)) {
			// Change to Third Creator
			while(selcCreators != batch2_creatorPos) {
				changeCreators_prev();
			}
			
		// If current Creator is less then Desired Creator 
		} else if(selcCreators < batch2_creatorPos) {
			// Change to Third Creator
			while(selcCreators != batch2_creatorPos) {
				changeCreators_next();
			}
		}
	
		console.log("Batch 2:", selcBatch, "Selc Creator:", selcCreators);
	
	// Change to 3rd Batch
	} else if(batchNum == 2 && batchNum != selcBatch) {
		// Remove Class from Elements
		creatorBatch_elements[selcBatch].classList.remove("batchCircle_main");
		for(let i=0; i<num_creatorBatches; i++) {
			if(i == selcBatch) {
				continue;
			}
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobRight_2");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_1");
			creatorBatch_elements[i].classList.remove("batchCircle_mobLeft_2");
		}
		
		// Change Current Batch
		selcBatch = 2;
		
		// Add Class to Elements
		creatorBatch_elements[selcBatch].classList.add("batchCircle_main");
		creatorBatch_elements[selcBatch-1].classList.add("batchCircle_mobLeft_1");
		creatorBatch_elements[selcBatch-2].classList.add("batchCircle_mobLeft_2");
		
		// Change Creator Positions to Reflect Batch Selection
		if(selcCreators < batch3_creatorPos) {
			// Change to Third Creator
			while(selcCreators != batch3_creatorPos) {
				changeCreators_next();
			}
		}
		
		console.log("Batch 3:", selcBatch, "Selc Creator:", selcCreators);
	}
	
}

// // Batch Var
// var creatorBatch_elements = document.getElementsByClassName("batchCircle");
// var num_creatorBatches = creatorBatch_elements.length;

// // Creators Var
// var creators = document.getElementsByClassName("creator");
// var numCreators = creators.length;

// Checks to see if the current Batch needs to change
function checkBatch() {
	// 1st Batch
	if(selcCreators < (batch2_creatorPos)) {
		changeBatch(0);	
	// 2nd Batch
	} else if(selcCreators > (batch2_creatorPos-1) && selcCreators < batch3_creatorPos) {
		changeBatch(1);
	// 3rd Batch
	} else if(selcCreators > (batch2_creatorPos+(numCreators/num_creatorBatches)-1)) {
		changeBatch(2);
	}
}

// Slider Slides to Right Loop
function changeCreators_prevLoop() {
	var mobLeft = "creator_mobLeft_";
	var mobRight = "creator_mobRight_";
	var mobMain = "creator_main";
	var mobSide = mobLeft;
	
	// console.log("BREAK START");
	
	// Mob Right 3 to Mob Left 3
	creators[changeCreators_selcCreators("red", 4)].classList.remove(mobRight+3);
	creators[changeCreators_selcCreators("red", 4)].classList.add(mobLeft+3);
	// console.log("Mob Right 3 to Mob Left 3:", changeCreators_selcCreators("red", 4));
	
	// Mob Left 3 to Mob Left 2
	creators[changeCreators_selcCreators("red", 3)].classList.remove(mobLeft+3);
	creators[changeCreators_selcCreators("red", 3)].classList.add(mobLeft+2);
	// console.log("Mob Left 3 to Mob Left 2:", changeCreators_selcCreators("red", 3));
	
	// Mob Left 2 to Mob Left 1
	creators[changeCreators_selcCreators("red", 2)].classList.remove(mobLeft+2);
	creators[changeCreators_selcCreators("red", 2)].classList.add(mobLeft+1);
	// console.log("Mob Left 2 to Mob Left 1:", changeCreators_selcCreators("red", 2));
	
	// Mob Left 1 to Main
	creators[changeCreators_selcCreators("red", 1)].classList.remove(mobLeft+1);
	creators[changeCreators_selcCreators("red", 1)].classList.add(mobMain);
	// console.log("Mob Left 1 to Main:", changeCreators_selcCreators("red", 1));
	
	// Main to Mob Right 1
	creators[selcCreators].classList.remove(mobMain);
	creators[selcCreators].classList.add(mobRight+1);
	// console.log("Main to Mob Right 1:", selcCreators);
	
	// Mob Right 1 to Mob Right 2
	creators[changeCreators_selcCreators("add", 1)].classList.remove(mobRight+1);
	creators[changeCreators_selcCreators("add", 1)].classList.add(mobRight+2);
	// console.log("Mob Right 1 to Mob Right 2:", changeCreators_selcCreators("add", 1));
	
	// Mob Right 2 to Mob Right 3
	creators[changeCreators_selcCreators("add", 2)].classList.remove(mobRight+2);
	creators[changeCreators_selcCreators("add", 2)].classList.add(mobRight+3);
	// console.log("Mob Right 2 to Mob Right 3:", changeCreators_selcCreators("add", 2));
	
	// console.log("BREAK END");
	
	selcCreators = changeCreators_selcCreators("red");
}

// Slider Slides to Left Loop
function changeCreators_nextLoop() {
	var mobLeft = "creator_mobLeft_";
	var mobRight = "creator_mobRight_";
	var mobMain = "creator_main";
	var mobSide = mobLeft;
	
	// console.log("BREAK START");
	
	// Mob Left 3 to Mob Right 3
	creators[changeCreators_selcCreators("add", 4)].classList.remove(mobLeft+3);
	creators[changeCreators_selcCreators("add", 4)].classList.add(mobRight+3);
	// console.log("Mob Right 3 to Mob Left 3:", changeCreators_selcCreators("red", 4));
	
	// Mob Right 3 to Mob Right 2
	creators[changeCreators_selcCreators("add", 3)].classList.remove(mobRight+3);
	creators[changeCreators_selcCreators("add", 3)].classList.add(mobRight+2);
	// console.log("Mob Left 3 to Mob Left 2:", changeCreators_selcCreators("red", 3));
	
	// Mob Right 2 to Mob Right 1
	creators[changeCreators_selcCreators("add", 2)].classList.remove(mobRight+2);
	creators[changeCreators_selcCreators("add", 2)].classList.add(mobRight+1);
	// console.log("Mob Left 2 to Mob Left 1:", changeCreators_selcCreators("red", 2));
	
	// Mob Right 1 to Main
	creators[changeCreators_selcCreators("add", 1)].classList.remove(mobRight+1);
	creators[changeCreators_selcCreators("add", 1)].classList.add(mobMain);
	// console.log("Mob Left 1 to Main:", changeCreators_selcCreators("red", 1));
	
	// Main to Mob Left 1
	creators[selcCreators].classList.remove(mobMain);
	creators[selcCreators].classList.add(mobLeft+1);
	// console.log("Main to Mob Right 1:", selcCreators);
	
	// Mob Left 1 to Mob Left 2
	creators[changeCreators_selcCreators("red", 1)].classList.remove(mobLeft+1);
	creators[changeCreators_selcCreators("red", 1)].classList.add(mobLeft+2);
	// console.log("Mob Right 1 to Mob Right 2:", changeCreators_selcCreators("add", 1));
	
	// Mob Left 2 to Mob Left 3
	creators[changeCreators_selcCreators("red", 2)].classList.remove(mobLeft+2);
	creators[changeCreators_selcCreators("red", 2)].classList.add(mobLeft+3);
	// console.log("Mob Right 2 to Mob Right 3:", changeCreators_selcCreators("add", 2));
	
	// console.log("BREAK END");
	
	selcCreators = changeCreators_selcCreators("add");
}

// Slider Slides to Right
function changeCreators_prev() {
	var mobLeft = "creator_mobLeft_";
	var mobRight = "creator_mobRight_";
	var mobSide = mobLeft;
	
	// mobSide = mobLeft;
	if(selcCreators > 0) {
		// Slide left creators to the Right
		// for(let i=(selcCreators-1), j=1; i>=(selcCreators-4); i--) {
		for(let i=(selcCreators-1), j=1; i>=(selcCreators-3); i--) {
			// Prevents Negative (Non-existent selection) Errors
			if(i <= -1) {
				break;
			}
			
			// console.log("Left Slider - i, j:", i, j);
				
			// Move Left_1 to Main/Centre
			if(i == (selcCreators-1)) {
				// console.log("  " + mobSide + j + " to creator_main");
				
				creators[i].classList.remove(mobSide+j);
				creators[i].classList.add("creator_main");
				
			// Move Left Creators to Right by 1
			} else {
				// console.log("  " + mobSide + j + " to " + mobSide + (j-1));
				
				creators[i].classList.remove(mobSide+j);
				creators[i].classList.add(mobSide+(j-1));
			}
			
			// if(j < 4) {
			if(j < 3) {
				j++;
			}
		}	
		
		// Change Side
		mobSide = mobRight;
		
		// Slide main/centre and right creators to the Right
		// for(let i=selcCreators, j=1; i<=(selcCreators+3); i++) {
		for(let i=selcCreators, j=1; i<=(selcCreators+2); i++) {
			// Prevents Over Positive (Non-existent selection) Creators Error
			if(i >= numCreators) {
				break;
			}
			
			// console.log("Right Slider - i, j:", i, j);
			
			// Move Main/Centre to Right_1
			if(i == selcCreators) {
				console.log("  creator_main to " + mobSide + j);
				
				creators[i].classList.remove("creator_main");
				creators[i].classList.add(mobSide+j);
				continue;
			}
			
			// Move Right Creators to Right by 1
			console.log("  " + mobSide + j + " to " + mobSide + (j+1));
			
			creators[i].classList.remove(mobSide+j);
			creators[i].classList.add(mobSide+(j+1));
			
			// if(j < 3) {
			if(j < 2) {
			// if(j < 1) {
				j++;
			}
		}
		
		// Change Selected (Main/Centre) Creator Number
		selcCreators--;
		
		// Checks to see if need to change to differnt Batch
		// checkBatch();
	}
}

// Slider Slides to Left
function changeCreators_next() {
	var mobLeft = "creator_mobLeft_";
	var mobRight = "creator_mobRight_";
	var mobSide = mobRight;
	
	if(selcCreators < (numCreators-1)) {
		
		// Slide right creators to the Left
		// for(let i=(selcCreators+1), j=1; i<=(selcCreators+4); i++) {
		for(let i=(selcCreators+1), j=1; i<=(selcCreators+3); i++) {
			// Prevents Over Positive (Non-existent selection) Creators Error
			if(i >= numCreators) {
				break;
			}
			
			// console.log("Right Slider - i, j:", i, j);
			
			// Move Right_1 to Main/Centre
			if(i == (selcCreators+1)) {
				// console.log("  " + mobSide + j + " to creator_main");
				
				creators[i].classList.remove(mobSide+j);
				creators[i].classList.add("creator_main");
				
			// Move Right Creators to Left by 1
			} else {
				// console.log("  " + mobSide + j + " to " + mobSide + (j-1));
				
				creators[i].classList.remove(mobSide+j);
				creators[i].classList.add(mobSide+(j-1));
			}
			
			// if(j < 4) {
			if(j < 3) {
				j++;
			}
		}
		
		// Change Side
		mobSide = mobLeft;
		
		// Slide left creators to the Left
		// for(let i=selcCreators, j=1; i>=(selcCreators-3); i--) {
		for(let i=selcCreators, j=1; i>=(selcCreators-2); i--) {
			// Prevents Negative (Non-existent selection) Errors
			if(i <= -1) {
				break;
			}
			
			// console.log("Right Slider - i, j:", i, j);
			
			// Move Main/Centre to Left_1
			if(i == selcCreators) {
				// console.log("  creator_main to " + mobSide + j);
				
				creators[i].classList.remove("creator_main");
				creators[i].classList.add(mobSide+j);
				continue;
			}
			
			// Move Left Creators to Left by 1
			// console.log("  " + mobSide + j + " to " + mobSide + (j-1));
			
			creators[i].classList.remove(mobSide+j);
			creators[i].classList.add(mobSide+(j+1));
			
			// if(j < 3) {
			if(j < 2) {
				j++;
			}
		}
		
		// Change Selected (Main/Centre) Creator Number
		selcCreators++;
		
		// Checks to see if need to change to differnt Batch
		// checkBatch();
	}
}

// Returns Currect Selected Creator Number Increased/Reduced by The Selected Amount (Defualt 1)
function changeCreators_selcCreators(add_red, byAmount = 1) {
	var num;
	
	if(add_red == "add") {
		// Increase selcCreators by 1, unless at max, then set to 0
		num = ((selcCreators+byAmount) <= (numCreators-1)) ? (selcCreators+byAmount) : ((selcCreators+byAmount)-numCreators);
	} else if(add_red == "red") {
		// Decrease selcCreators by 1, unless at 0, then set to Max
		num = ((selcCreators-byAmount) >= 0) ? (selcCreators-byAmount) : (numCreators+(selcCreators-byAmount));
	}
	
	return num;
}