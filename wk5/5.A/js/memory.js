const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 60;
let cards = [];
const gameState = {
	totalPairs: 5,
	flippedCards: [],
	numMatched: 0,
	attempts: 0,
	waiting: false
}
let cardfaceArray = [];
let cardback;
function preload() {
	cardback = loadImage('img/cardback.jpg');
	cardfaceArray = [
		loadImage('img/yellow-o.jpg'),
		loadImage('img/green-o.jpg'),
		loadImage('img/blue-o.jpg'),
		loadImage('img/red-o.jpg'),
		loadImage('img/orange-o.jpg')
	]
}
function setup(){
	createCanvas(900, 550);
	noStroke();
	let selectedFaces = [];
	for (let z = 0; z < 5; z++){
		const randomIdx = floor(random(cardfaceArray.length));
		const face = cardfaceArray[randomIdx];
		selectedFaces.push(face);
		selectedFaces.push(face);
		//removed the used cardface
		cardfaceArray.splice(randomIdx, 1);
	}
	selectedFaces = shuffleArray(selectedFaces);
	for (let j = 0; j < 2; j++) {
		for (let i = 0; i < 5; i++) {
			const faceImage = selectedFaces.pop(); 
			cards.push(new Card (startingX, startingY, faceImage));
			startingX += 150;
	}
		startingY += 190;
		startingX = 100;
	}
	
}

function draw (){
	background('#f91651');
	if (gameState.numMatched === gameState.totalPairs) {
		fill('#fff');
		textSize(50);
		text('Winner Winner', 400, 525);
		noLoop();
	}
	for (let k = 0; k < cards.length; k++) {
		if (!cards[k].isMatch) {
			cards[k].face = DOWN;
		}
		cards[k].showCard();
	}
	noLoop();
	gameState.flippedCards.length = 0;
	gameState.waiting = false;
	fill(255);
	textSize(30);
	text('attempts ' + gameState.attempts, 100, 525);
	text('matches ' + gameState.numMatched, 100, 475);
}

function mousePressed(){
	if (gameState.waiting){
		return;
	}
	for (let k = 0; k < cards.length; k++) {
		if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)){
			//first check for flips length then trigger
			gameState.flippedCards.push(cards[k]);
		}
	}
	if (gameState.flippedCards.length === 2) {
		gameState.attempts++;
		if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg){
			//matched
			//marked as flipped
			gameState.flippedCards[0].isMatch = true;
			gameState.flippedCards[1].isMatch = true;
			//empty flipped from array
			gameState.flippedCards.length = 0;
			//increment score
			gameState.numMatched++;
			loop();
		} else{
			gameState.waiting = true;
			const loopTimeout = window.setTimeout(() => {
				loop();
				window.clearTimeout(loopTimeout);
			}, 500)
		}
	}
}

class Card{
	constructor(x, y, cardfaceImg){
		this.x = x;
		this.y = y;
		this.width = 125;
		this.height = 175;
		this.face = DOWN;
		this.cardFaceImg = cardfaceImg;
		this.isMatch = false;
		this.showCard();
	}
	showCard(){ 
		if(this.face === UP || this.isMatch){
			fill('#c3c3c3');
			rect(this.x, this.y, this.width, this.height);
			image(this.cardFaceImg, this.x, this.y);
		} else{
			fill('#fff');
			rect(this.x, this.y, this.width, this.height);
			image(cardback, this.x, this.y);
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
		if (this.face === DOWN){
			this.face = UP;
		} else {
			this.face = DOWN;
		}
		this.showCard();
	}
}
function shuffleArray (array) {
		let counter = array.length;
		while (counter > 0) {
			const idx = Math.floor(Math.random() * counter);
			counter--;
			const temp = array[counter];
			array[counter] = array[idx];
			array[idx] = temp;
		}
		return array;
	}

