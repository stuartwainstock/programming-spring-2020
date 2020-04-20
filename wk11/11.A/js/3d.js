let detailX;
let detailY;
function setup() {
  createCanvas(500, 500, WEBGL);
  detailX = createSlider(3, 16, 3);
  detailX.position(10, height + 10);
  detailX.style('width', '80px');
  detailY = createSlider(1, 24, 1);
  detailY.position(10, height + 50);
  detailY.style('width', '80px');
}

function draw() {
  background('#003d69');
  rotateY(millis() / 2000);
   rotateY(millis() / 2000);
   fill('#f5410d');
  cylinder(50, 200, detailX.value(), detailY.value());
}