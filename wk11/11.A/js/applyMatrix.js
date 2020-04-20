let y = 1;

function setup() {
  frameRate(10);
  rectMode(CENTER);
  createCanvas(500, 480);
}

function draw() {
  let step = frameCount % 20;
  background('#f6d8fc');
  translate(60, 20);
  // Equivalent to scale(x, y);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  fill('#062400')
 
  for (let i = 0; i < 5; i++) {
    rect(300, y, 30, 10);
    y += 2;
  }
  for (let i = 0; i < 2; i++) {
   rect(0, y, 50, 50);
    y += 12;
  }
  for (let i = 0; i < 2; i++) {
   rect(0, y, 100, 50);
    y += 2;
  }
  for (let i = 0; i < 2; i++) {
   rect(40, y + 50, 30, 70);
    y += 7;
  }
}