function setup() {
  frameRate(10);
  rectMode(CENTER);
  createCanvas(640, 480);
}

function draw() {
  let step = frameCount % 20;
  background('#f6d8fc');
  translate(75, 75);
  // Equivalent to scale(x, y);
  applyMatrix(1 / step, 0, 0, 2 / step, 0, 0);
  fill('#062400')
  rect(0, 0, 50, 50);
}