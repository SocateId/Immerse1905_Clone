// Get the Poster elements
var posters = document.getElementsByClassName("portfolioProjects_posters");
var numPosters = posters.length;

//Defining base values
var currPoster;

// ID and Class Names
var posterLeft = "portfolioProjects_posterLeft_";
var posterRight = "portfolioProjects_posterRight_";


// Loads the style once HTML body finish loading
function loadStyles_portfolioProjects_postersSection(selcPoster = 0) {
	// Clears all classes, except the stlye format
	for(let i=0; i<numPosters; i++) {
		posters[i].classList.remove("portfolioProjects_posterMain");
		posters[i].classList.remove("portfolioProjects_posterLeft_1");
		posters[i].classList.remove("portfolioProjects_posterLeft_2");
		posters[i].classList.remove("portfolioProjects_posterLeft_3");
		posters[i].classList.remove("portfolioProjects_posterRight_1");
		posters[i].classList.remove("portfolioProjects_posterRight_2");
		posters[i].classList.remove("portfolioProjects_posterRight_3");
	}
	
	// Defines currently selected Poster, for other functions
	currPoster = selcPoster;
	
	// Main/Middle Poster
	posters[currPoster].classList.add("portfolioProjects_posterMain");
	
	// console.log("Selc Poster Main", selcPoster);
	
	// Left Side Posters
	for(let i=(currPoster-1), j=1; i>=0; i--) {
		posters[i].classList.add("portfolioProjects_posterLeft_"+j);
		
		// Goes up to 3
		if(j < 3) {
			j++;
		}
		
		// console.log("Selc Poster Left", i);
	}
	
	// Right Side Posters
	for(let i=(currPoster+1), j=1; i<numPosters; i++) {
		posters[i].classList.add("portfolioProjects_posterRight_"+j);
		
		// Goes up to 3
		if(j < 3) {
			j++;
		}
		
		// console.log("Selc Poster Right", i);
	}
	
	// console.log("Poster Slide Load END");
}

// Slides the Slider to the Right, as in left Poster
function changePosters_prev() {
	var posterSide = posterLeft;
	
	if(currPoster > 0) {
		// Slide left posters to the right
		for(let i=(currPoster-1), j=1; i>=(currPoster-3); i--) {
			// Prevents Negative (Non-existent selection) Errors
			if(i <= -1) {
				break;
			}
			
			// Move Left_1 to Main/Centre
			if(i == (currPoster-1)) {
				// console.log("  " + mobSide + j + " to creator_main");
				
				posters[i].classList.remove(posterSide+j);
				posters[i].classList.add("portfolioProjects_posterMain");
				
			// Move Left Poster to Right by 1
			} else {
				posters[i].classList.remove(posterSide+j);
				posters[i].classList.add(posterSide+(j-1));
			}
			
			// Goes up to 3
			if(j < 3) {
				j++;
			}
		}
		
		// Change Poster Side
		posterSide = posterRight;
		
		// Slide right posters to the right
		for(let i=currPoster, j=1; i<=(currPoster+2); i++) {
			// Prevents Over Positive (Non-existent selection) Error
			if(i >= numPosters) {
				break;
			}
			
			// Move Main/Centre to Right_1
			if(i == currPoster) {
				posters[i].classList.remove("portfolioProjects_posterMain");
				posters[i].classList.add(posterSide+j);
				continue;
			}
			
			posters[i].classList.remove(posterSide+j);
			posters[i].classList.add(posterSide+(j+1));
			
			// Goes up to 2
			if(j < 2) {
				j++;
			}
		}
		
		currPoster--;
	}
}

// Slides the Slider to the Left, as in Right Poster
function changePosters_next() {
	var posterSide = posterRight;
	
	if(currPoster < (numPosters-1)) {
		// Slide right posters to the Left
		for(let i=(currPoster+1), j=1; i<=(currPoster+3); i++) {
			// Prevents Over Positive (Non-existent selection) Error
			if(i >= numPosters) {
				break;
			}
			
			// Move Right_1 to Main/Centre
			if(i == (currPoster+1)) {
				// console.log("  " + mobSide + j + " to creator_main");
				
				posters[i].classList.remove(posterSide+j);
				posters[i].classList.add("portfolioProjects_posterMain");
				
			// Move Right Poster to Left by 1
			} else {
				posters[i].classList.remove(posterSide+j);
				posters[i].classList.add(posterSide+(j-1));
			}
			
			// Goes up to 3
			if(j < 3) {
				j++;
			}
		}
		
		// Change Poster Side
		posterSide = posterLeft;
		
		// Slide left posters to the left
		for(let i=currPoster, j=1; i>=(currPoster-2); i--) {
			// Prevents Negative (Non-existent selection) Errors
			if(i <= -1) {
				break;
			}
			
			// Move Main/Centre to Left_1
			if(i == currPoster) {
				posters[i].classList.remove("portfolioProjects_posterMain");
				posters[i].classList.add(posterSide+j);
				continue;
			}
			
			posters[i].classList.remove(posterSide+j);
			posters[i].classList.add(posterSide+(j+1));
			
			// Goes up to 2
			if(j < 2) {
				j++;
			}
		}
		
		currPoster++;
	}
}