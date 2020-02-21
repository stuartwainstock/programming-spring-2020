let bubble1;

class Bubble{
	constructor(){
		this.x = 150;
		this.y = 100;
	}
	move(){
		this.x = this.x + random(-10, 10);
		this.y = this.y + random(-10, 10);
	}
	show(){
		strokeWeight(2);
		stroke('#004192');
		noFill();
		ellipse(this.x, this.y, 24, 24);
	}
}

function setup(){
	createCanvas(500,500);
	bubble1 = new Bubble();
	print(bubble1.x, bubble1.y);
}

function draw(){
	background('#d9761a');
	for (let j = 0; j < 5; j++){
	bubble1.move();
	bubble1.show();
	}
}