// Elements from doc
var title = document.getElementById("portfolioProjects_introSection_title");
var des = document.getElementById("portfolioProjects_introSection_des");
var creatorGrid = document.getElementById("portfolioProjects_creators");
// Creator Elements to be added
// Creator Pic Folder Path
const creatorPicFolder = "images/creatorsSection/";
// The Creator Link
var addElement_creatorLink = document.createElement("a");
addElement_creatorLink.setAttribute("class", "portfolioProjects_creatorsCell");
// The Creator Pic
var addElement_creatorsImgs = document.createElement("img");
addElement_creatorsImgs.setAttribute("class", "lazyload");
addElement_creatorLink.appendChild(addElement_creatorsImgs);

// Base Values
// Goes in order: Chasing nutcracker; Dead da; Murasaki en no densetsu; Escape; Crepusculum; Ivan; Legend of Kham; Hidden Instinct
const projects_refArr = ["Nutcracker", "DeadDa", "Murasaki", "Escape", "Crepusculum", "Ivan", "Kham", "HiddenInstinct"];
const project_titleDes = {
	Nutcracker: {
		title: "Chasing nutcracker",
		des: "A Nutcracker awakens in a magical toy factory and wants to become a gift. But due to a defective arm, he "+
		"finds himself being pursued by the factory’s robotic overseer.",
		creators: ["Ally", "Darren", "Najwa", "Elena", "Elvira", "Evelyn", "Jia Sing", "Jack", "Michael", "Vincent"],
		creators_page: ["1", "2", "11", "4", "5", "6", "9", "8", "12", "15"]
	},
	DeadDa: {
		title: "Dead da",
		des: "At the night of Chinese Ghost Festival, a Ditda sifu is burning paper money outside of his shop. After he finishes "+
		"up his prayers, he enters the shop and encounters an unexpected visitor, a Chinese zombie, whom appeared out of a "+
		"sudden in his shop. Sifu tries to hide from the zombie while trying his best to escape. However, what sifu does not "+
		"realize is that the Chinese zombie only wants a treatment from him.",
		creators: ["Kenneth", "Sze Yi", "Louis", "Ming Lei", "Ding Hui", "Hazeera", "Zi Qi", "Yvonne"],
		creators_page: ["10", "14", "18", "13", "3", "7", "17", "16"]
	},
	Murasaki: {
		title: "Murasaki en no densetsu",
		des: "A samurai who practices divine arts wants to reclaim his home from the enemy who used demonic powers. But he "+
		"realizes that divine powers alone won't help him in his endeavors. So, he too must embrace the demonic powers as well "+
		"understanding the true nature of both sides.",
		creators: ["Elena", "Elvira"],
		creators_page: ["4", "5"]
	},
	Escape: {
		title: "Escape",
		des: "Yuna was brought into an underground base. As she had lost some parts of her memories, she tried to figure out "+
		"where she was and what was going on. She observed around the surrounding and stumbled upon an ongoing experiment, "+
		"causing a misunderstanding between her and the organisation. They had a wild chase and just before they could explain "+
		"the situation to Yuna, she fought back and ran towards the exit. When she finally managed to escape to the top floor, "+
		"she saw creatures and corpses all around the area and finally remembered that she used to be part of this "+
		"organisation. The leader showed up on time as the aliens launched towards Yuna and saved her. However, the gunshot had "+
		"caught the attention of the aliens outside and now have to defend themselves from the attack.",
		creators: ["Hazeera", "Zi Qi", "Yvonne"],
		creators_page: ["7", "17", "16"]
	},
	Crepusculum: {
		title: "Crepusculum",
		des: "*Crepusculum tells the story of a young Faun hunter, Mila, learning that what she has been taught about the Faun "+
		"her whole life was not the truth after all. Helpless, she could only watch in horror as everything she believed in "+
		"collapses around her.",
		creators: ["Ally", "Darren", "Evelyn", "Jia Sing"],
		creators_page: ["1", "2", "6", "9"]
	},
	Ivan: {
		title: "Ivan",
		des: "After fighting in the war against monstrous shape-shifting creatures for many years, Ivan, retires from war and "+
		"heads back to his home, a rural neighbourhood. His people welcomed him home warmly. However, it wasn’t before long "+
		"that his PTSD merges with his memories, making his views nightmarish and his behaviour erratic. The past he "+
		"desperately avoided was catching up to him; the whole village descends into a shroud of terror and violence as "+
		"Ivan tries his best to protect himself and survive this ordeal.",
		creators: ["Jack","Sze Yi", "Michael", "Vincent"],
		creators_page: ["8", "14", "12", "15"]
	},
	Kham: {
		title: "Legend of Kham",
		des: "An Emperor of a mountainous region called Gyalchok, hires a well-known Exorcist to rid of the spirits that "+
		"haunts the nearby village. The Exorcist accepts the offer and goes on her way to the village. The village looks "+
		"completely abandoned, no trace of humans. After trying to use her abilities to rid of the spirits, she then is met "+
		"by a humble spirit. The spirit then tells her the surprising and horrifying truth of their death.",
		creators: ["Najwa", "Ding Hui"],
		creators_page: ["11", "3"]
	},
	HiddenInstinct: {
		title: "Hidden Instinct",
		des: "A child and father live in a basement. The son, Icarus kept away from the world due to his partial zombie "+
		"instinct, is oblivious to the outside world until he discovers a covered-up window. He questions his reality and "+
		"gets into a heated argument with the father. However, an opportunity to escape appears as the father leaves into "+
		"town to get medical supplies. Once free in the outside world, the boy’s true nature comes into light as he becomes "+
		"feral after a fight with the Ice Cream man that stops him from stealing. While it draws the attention of the "+
		"soldier, Icarus started to run. He met his father as he reaches home, & they rush together down the streets & into "+
		"the alleys with the soldier chasing after them. One of the soldier was turned into zombie after being bitten "+
		"and was killed. The father and son found refuge in a closed off district of the city.",
		creators: ["Kenneth", "Louis", "Ming Lei"],
		creators_page: ["10", "18", "13"]
	}
};
var projectRef;

// Loads the style once HTML body finish loading
function loadStyles_portfolioProjects_introSection(selcProject = 0) {
	console.log("Selcted Project:", selcProject);
	projectRef = projects_refArr[selcProject];
	
	title.innerHTML = project_titleDes[projectRef]['title'];
	des.innerHTML = project_titleDes[projectRef]['des'];
	
	var folderPath = creatorPicFolder;
	
	if(creatorGrid.hasChildNodes()) {
		creatorGrid.innerHTML = "";
	}
	
	for(let i=0; i < project_titleDes[projectRef]["creators"].length; i++) {
		// Sets the Creator Pic Source
		// addElement_creatorsImgs.src = folderPath+(project_titleDes[projectRef]["creators"][i])+".webp";
		addElement_creatorsImgs.setAttribute("data-src", folderPath+(project_titleDes[projectRef]["creators"][i])+".webp");
		
		// addElement_creatorsImgs.src = "images/portfolioPage/portfolioProjects/"+"portfolioProjects_img_creators.png";
		addElement_creatorLink.setAttribute("href", "pflo"+(project_titleDes[projectRef]["creators_page"][i])+".html");
		creatorGrid.appendChild(addElement_creatorLink.cloneNode(true));
		// console.log("Load Creator:", project_titleDes[projectRef]["creators"][i]);
		// console.log("Load Creator Path:", folderPath+(project_titleDes[projectRef]["creators"][i])+".webp");
	}
	
	console.log("Load Creators Done!");
}


// Projects
// Chasing nutcracker
// Immi likes christmas. Christmas is fun. Or is it? >:D   ~(￣▽￣)~*

// Dead da
// That Zombie is scary! Immi is scared of it *Beep*  Σ(っ °Д °;)っ


// Murasaki en no densetsu
// Immi too wants to have powers to help others! *Beepedy Boop~* (☆▽☆)

// Escape
// Even Immi feels like escaping from there (。>︿<)

// Crepusculum
// *Beep* Immi too can glow like the magic deer!   (´▽`ʃ♡ƪ) 

// Ivan
// The monsters are scary, just like Iwwi *Boo* (⊙ˍ⊙)

// Legend of Kham
// Bad spirits begone  *Boop* （＞人＜；）

// Hidden Instinct
// Immi can't imagine being stuck behind walls (;´༎ຶД༎ຶ`)
