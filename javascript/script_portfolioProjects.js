//Defining base values
var projects_names = ["Nutcracker", "DeadDa", "Murasaki", "Escape", "Crepusculum", "Ivan", "Kham", "HiddenInstinct"];
var projects = projects_names.length;
var currProject;

// Loads the style once HTML body finish loading
function loadStyles_portfolioProjects(selcProject) {
	if(selcProject == null) {
		selcProject = 0;
	}
	
	currProject = parseInt(selcProject);
	
	loadStyles_portfolioProjects_introSection(currProject);
	loadStyles_portfolioProjects_videoSection(currProject);
	loadStyles_portfolioProjects_artworksSection(currProject);
	loadStyles_portfolioProjects_postersSection(currProject);
}

// Changes to the selected Project
function portfolioProjects_changeProject(selcProject = 0) {
	if(currProject != selcProject) {
		// window.location.href = "portfolioPage_projects.html?"+selcProject;
		history.pushState({}, "", "portfolioPage_projects.html?"+selcProject);
		window.location.hash = "#portfolioProjects_introSection";
		loadStyles_portfolioProjects(location.search.substring(1));
	} else {
		console.log("Already on page!");
	}
}

