const cardWidth = 150;
const cardHeight = 200;


function setup(){
	createCanvas(900, 550);
	noStroke();
	background('#f91651');
}

function draw (){
	for (let i = 45; i < 800; i += 160){
		rect(i, 50, cardWidth, cardHeight);
		rect(i, 275, cardWidth, cardHeight);
}
}
/*function setup(){
	createCanvas(480, 120);
	noStroke();
}

function draw(){
	background(0);
	for (let y = 0; y < height+45; y += 40){
		fill(255, 140);
		ellipse(0, y, 40, 40);
	}
}*/