const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 60;
let cards =[];
const gameState = {

}
let cardback;
function preload(){
	cardback = loadImage('img/cardback.jpg');
}
function setup(){
	createCanvas(900, 550);
	noStroke();
	background('#f91651');
	for (let j = 0; j < 2; j++){
		for(let i = 0; i < 5; i++) {
		cards.push(new Card (startingX, startingY));
		startingX += 150;
	}
		startingY += 190;
		startingX = 100;
	}
	
}

function mousePressed(){
	for (let k = 0; k < cards.length; k++) {
		if(cards[k].didHit(mouseX, mouseY)){
			console.log('flipped');
		}
	}
}

class Card{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.width = 125;
		this.height = 175;
		this.face = DOWN;
		this.showCard();
	}
	showCard(){ 
		if(this.face === DOWN){
			fill('#fff');
			rect(this.x, this.y, this.width, this.height, 5);
			image(cardback, this.x, this.y);
		} else{
			fill('#c3c3c3');
			rect(this.x, this.y, this.width, this.height, 5);
		}
		
	}
	didHit (mouseX, mouseY){
		if (mouseX >= this.x && mouseX <= this.x + this.width && 
			mouseY >= this.y && mouseY <= this.y + this.height) {
			this.flip();
			return true;
		} else {
			return false;
		}
	}
	flip(){
		if(this.face === DOWN){
			this.face = UP;
		} else{
			this.face = DOWN;
		}
		this.showCard();
	}
}

