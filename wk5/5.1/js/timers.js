let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 5;
const distance = 2;
let blockColor = 175;

function setup(){
	createCanvas(600, 600);
	background('#7FDBFF');
	stroke('#fff');
	
}

function drawBlock(x, y, color){
	fill(color || '#001F3F');
	rect(x, y, 75, 75);
}
function keyTyped(){
	let keyToNumber = Number(key);
	if (isNaN(keyToNumber)) {
		return;
	}
	keyToNumber = map(keyToNumber, 1, 9, 1, 255);
	blockColor = keyToNumber;
	console.log('key to number ' + keyToNumber);
}

drawTimer = window.setInterval(() => {
	if(blockY - 50 <= height){
		drawBlock(blockX, blockY, blockColor);
		blockY += distance;
	} else{
		blockY = 0;
		blockX += 75;
	}
}, speed);