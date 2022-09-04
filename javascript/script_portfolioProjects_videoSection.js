// Elements from doc
var video = document.getElementById("portfolioProjects_videoSection_video");

// Base Values, Video Sources
// Goes in order: Chasing nutcracker; Dead da; Murasaki en no densetsu; Escape; Crepusculum; Ivan; Legend of Kham; Hidden Instinct
const videoSrc = [
	// Chasing nutcracker
	["https://www.youtube.com/embed/t333mpnicsM"], 
	// Dead da
	["https://www.youtube.com/embed/NfM2G9y_TTc"],
	// Murasaki en no densetsu
	["https://www.youtube.com/embed/6KJ9_lPWy-E", 
	"https://www.youtube.com/embed/MMprbO7W_u0"],
	// Escape
	["https://www.youtube.com/embed/y8pl08xQLb0", 
	"https://www.youtube.com/embed/Rj1V5yeZVY0"],
	// Crepusculum
	["https://www.youtube.com/embed/8984yH7ty5M"],
	// Ivan
	["https://www.youtube.com/embed/NG1YkOCZW-Y", 
	"https://www.youtube.com/embed/O2s_gCdHn_A"],
	// Legend of Kham
	["https://www.youtube.com/embed/ekkivfWqjLo", 
	"https://www.youtube.com/embed/wboOYigxZkI"],
	// Hidden Instinct
	["https://www.youtube.com/embed/FVdg4oJbxk4", 
	"https://www.youtube.com/embed/b8rkgfkFKtg"]
];
var video_currProject;
var currVideo;

// Loads the style once HTML body finish loading
function loadStyles_portfolioProjects_videoSection(selcProject = 0, selcVideo = 0) {
	video_currProject = selcProject;
	currVideo = selcVideo;
	
	video.src = videoSrc[video_currProject][currVideo];
}

// Previous Video
function portfolioProjects_prevVid() {
	var tempStore = currVideo;
	
	// If current video isn't the first selected video, go to previous video, else go to last video
	currVideo = (currVideo > 0) ? (currVideo-1) : (videoSrc[video_currProject].length-1);
	
	if(tempStore != currVideo) {
		//portfolioProjects_changeProject(currVideo);
		video.src = videoSrc[video_currProject][currVideo];
	}
}

// Next Video
function portfolioProjects_nextVid() {
	var tempStore = currVideo;
	
	// If current video isn't the last selected video, go to next video, else go to first video
	currVideo = (currVideo < (videoSrc[video_currProject].length-1)) ? (currVideo+1) : 0;
	
	if(tempStore != currVideo) {
		//portfolioProjects_changeProject(currVideo);
		video.src = videoSrc[video_currProject][currVideo];
	}
}
