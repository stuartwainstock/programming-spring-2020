let rectX = 0;
const rectWidth = 75;
let rectY = 0;
const rectHeight = 75;
let clickCount = 0;
let clickCheat = 0;

function setup(){
	createCanvas(500, 500);
	noStroke();
	fill('#e4fe75');
	textFont('arial', 20);
}

function cheater(){
	if (keyIsPressed === true) {
		text(clickCheat + ' points coming at ya', 100, 300);
		clickCheat = 200;
		console.log('cheat enabled + 200');
	} 
}

function draw (){
	background('#20048d');
	drawShape();
	cheater();
	rectX++;
	if (rectX > width) {
		noLoop();
		text('Your score was ' + (clickCount + clickCheat), 100, 300);
		textFont('arial', 10);
		text('Need some extra points? Refresh the page and press a key on the keyboard', 50, 450);
	} 
	
}

function mousePressed(){
	if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight))  {
		clickCount++;
		console.log('direct hit', clickCount);
	} 
	
}



function drawShape(){
	fill('#e4fe75');
	rect(rectX, rectY, rectWidth, rectHeight);
	


}

/*(if (keyIsPressed === true) {
		text('Your score was ' + (clickCountCheat + clickCount), 100, 300);
	} else {
		text('Your score was ' + clickCount, 100, 300);
	}*/