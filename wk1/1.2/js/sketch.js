function setup() {
	createCanvas(800, 800);
}

function draw() {
  background(214, 21, 48);
  fill(33, 231, 204);

  if (mouseIsPressed) {
    rect(30, 20, 50, 50);
	scale(2.5);
	rect(30, 20, 50, 50);
  } else {
    rect(125, 125, 125, 30); //left, top, length, weight
    rect(150, 150, 75, 30);
    rect(325,125, 125, 30);
    rect(350,150, 75, 30);
    rect(250, 330, 150, 30);
  }

  print(mouseIsPressed);
}

