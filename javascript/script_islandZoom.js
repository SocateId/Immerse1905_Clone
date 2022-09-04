var newC1, newC2, newC3, newC4, newC5, newC6;

function moveToCD(element) {
	switch(element) {
		case "C2":
			newC1 = $(".C2");
			newC2 = $(".C3");
			newC3 = $(".C4");
			newC4 = $(".C5");
			newC5 = $(".C6");
			newC6 = $(".C1");
			break;
			
		case "C3":
			newC1 = $(".C3");
			newC2 = $(".C4");
			newC3 = $(".C5");
			newC4 = $(".C6");
			newC5 = $(".C1");
			newC6 = $(".C2");
			break;
			
		case "C4":
			newC1 = $(".C4");
			newC2 = $(".C5");
			newC3 = $(".C6");
			newC4 = $(".C1");
			newC5 = $(".C2");
			newC6 = $(".C3");
			break;
			
		case "C5":
			newC1 = $(".C5");
			newC2 = $(".C6");
			newC3 = $(".C1");
			newC4 = $(".C2");
			newC5 = $(".C3");
			newC6 = $(".C4");
			break;
			
		case "C6":
			newC1 = $(".C6");
			newC2 = $(".C1");
			newC3 = $(".C2");
			newC4 = $(".C3");
			newC5 = $(".C4");
			newC6 = $(".C5");
			break;
	}
	
	// if (element == "C2") {
		// newC1 = $(".C2");
		// newC2 = $(".C3");
		// newC3 = $(".C4");
		// newC4 = $(".C5");
		// newC5 = $(".C6");
		// newC6 = $(".C1");
	// } else if (element == "C3") {
		// newC1 = $(".C3");
		// newC2 = $(".C4");
		// newC3 = $(".C5");
		// newC4 = $(".C6");
		// newC5 = $(".C1");
		// newC6 = $(".C2");
	// }else if (element == "C4") {
		// newC1 = $(".C4");
		// newC2 = $(".C5");
		// newC3 = $(".C6");
		// newC4 = $(".C1");
		// newC5 = $(".C2");
		// newC6 = $(".C3");
	// }else if (element == "C5") {
		// newC1 = $(".C5");
		// newC2 = $(".C6");
		// newC3 = $(".C1");
		// newC4 = $(".C2");
		// newC5 = $(".C3");
		// newC6 = $(".C4");
	// }else if (element == "C6") {
		// newC1 = $(".C6");
		// newC2 = $(".C1");
		// newC3 = $(".C2");
		// newC4 = $(".C3");
		// newC5 = $(".C4");
		// newC6 = $(".C5");
	// }

	$(newC1).removeClass().addClass("C1");
	$(newC2).removeClass().addClass("C2");
	$(newC3).removeClass().addClass("C3");
	$(newC4).removeClass().addClass("C4");
	$(newC5).removeClass().addClass("C5");
	$(newC6).removeClass().addClass("C6");
}

function moveToSH(element) {

	if (element == "C2") {
		newC1 = $(".C2");
		newC2 = $(".C6");
		newC6 = $(".C1");
	}else if (element == "C6") {
		newC1 = $(".C6");
		newC2 = $(".C1");
		newC6 = $(".C2");
	}

	$(newC1).removeClass().addClass("C1");
	$(newC2).removeClass().addClass("C2");
	$(newC6).removeClass().addClass("C6");
}

function moveToSH(element) {

	if (element == "S2") {
		newC1 = $(".S2");
		newC2 = $(".S6");
		newC6 = $(".S1");
	} else if (element == "S6") {
		newC1 = $(".S6");
		newC2 = $(".S1");
		newC6 = $(".S2");
	}

	$(newC1).removeClass().addClass("S1");
	$(newC2).removeClass().addClass("S2");
	$(newC6).removeClass().addClass("S6");
}

$('#carouselCD div').click(function() {
	moveToCD(this.className);
});

$('#carouselSH div').click(function() {
	moveToSH(this.className);
});
