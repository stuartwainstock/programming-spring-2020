let x;
let offset = 10;

function setup() {
	createCanvas(240, 120);
  x = width/2;
}

/*function createTile() {
  translate(0,0);
  fill('#00548D'); //blue
  rect(0,0,200,200);
  stroke('#FDBE42');
  strokeWeight(8);
  noFill(); 
  rect(25,25,150,150);
  noStroke();
  fill('#FDBE42'); //yellow
  arc(50, 50, 50, 50, 0, 90);
  arc(150, 50, 50, 50, 90, 180);
  arc(150, 150, 50, 50, 180, 270);
  arc(50, 150, 50, 50, 270, 360);
  fill('#F54053'); 
  quad(50, 100, 100, 50, 150, 100, 100, 150);
}*/

function draw(){
 background(204);
 if (mouseX > x) {
  x += 0.5;
  offset = -10;
 }
 if (mouseX < x){
  x -= 0.5;
  offset = 10;
 }
 line(x, 0, x, height);
 line(mouseX, mouseY, mouseX + offset, mouseY - 10);
 line(mouseX, mouseY, mouseX + offset, mouseY + 10);
 line(mouseX, mouseY, mouseX + offset*3, mouseY);
}