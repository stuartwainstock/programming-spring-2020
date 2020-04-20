let value = 255;
function setup() {
  createCanvas(250, 200);
  background('#260000');
}

function draw() {
   fill(value);
 if (mouseIsPressed) {
   scale(2.5);
  rect(30, 20, 50, 50);
  } else {
    rect(30, 20, 50, 50);
  }
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
