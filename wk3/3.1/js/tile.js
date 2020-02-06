function setup() {
	createCanvas(200, 200);
  angleMode(DEGREES);
}

function createTile() {
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

}

function draw(){
  createTile();
}  

