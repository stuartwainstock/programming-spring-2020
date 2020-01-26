
let stroke1 = prompt('Enter a basic color name in lowercase', 'blue');
let stroke2 = prompt('Enter a basic color name in lowercase', 'green');
function setup() {
	createCanvas(730, 600);
  ellipseMode(RADIUS);
  background('#314248');
  //createCanvas(800, 600);
  //stroke('#c2c2c2');
  //strokeWeight(4);
  //background(214, 21, 48);
}

function draw() {
  stroke('#cbbab4');
  circle(400, 250, 10); //Left, top, width, 
  circle(400, 275, 10); //Left, top, width, 
  circle(400, 300, 10); //Left, top, width,
  circle(380, 190, 20);
  circle(410, 190, 20);
  fill('#fff')
  ellipse(400, 380, 200, 200); //Left, top, width, height Bottom
  ellipse(395, 240, 120, 120); //Left, top, width, height Middle
  ellipse(395, 150, 80, 80); //Left, top, width, height Top
  stroke(stroke1);
  line(430, 278, 500, 270); //x1, y1, x2, y2
  stroke(stroke2);
  line(370, 278, 300, 270); 
  stroke('#cbbab4');
  circle(390, 120, 10);
  circle(410, 120, 10); 
  fill('#cd7a69');
  circle(400, 160, 10); 
  fill('#cd7a69');
  strokeWeight(2);
  stroke('#fff');
  circle(50, 70, 20);
  circle(50, 55, 15);
  circle(50, 40, 10);
  circle(150, 170, 20);
  circle(150, 155, 15);
  circle(150, 140, 10);
  circle(150, 70, 20);
  circle(150, 55, 15);
  circle(150, 40, 10);
  circle(50, 170, 20);
  circle(50, 155, 15);
  circle(50, 140, 10);
  }
  

