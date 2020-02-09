let rotateBy = 6;

function setup() {
	createCanvas(800, 600);
  background('#a0ffa5');
  angleMode(DEGREES);
}

function draw(){
  translate(150, 150);
  rotate(rotateBy);
  noFill();
  strokeWeight(2);
  rotateBy += 12;

  for (var i = 10; i < 100; i += 10) {
    stroke('#a0ffa5');
    line(i + 10, i * 20 , i + 7, 80); //x y x y
    stroke('#c850ae');
    textSize(100);
    text('music', i * 11, 200 - (i*2) ); //string, x, y
    stroke('#81cad3');
    point(0 + i, 1.25 * i);
  }
}
function mouseClicked(){
  noLoop();
}