function setup() {
	createCanvas(600, 600);
  angleMode(DEGREES);
}

function createTile(originX, originY, bgColor, emptySquare) {
  translate(originX, originY);
  
  fill(bgColor); //bgcolor
  noStroke();
  rect(0,0,200,200);
  stroke(emptySquare);
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
  createTile(0,0, '#7ADEDE', '#fff');
  createTile(0,200, '#FED2C2', '#00548D');
  createTile(0,200, '#00548D', '#FEBF43');
  createTile(200, -400, '#FEBF43', '#00548D');
  createTile(0, 200, '#F54053', '#FED2C2');
  createTile(0, 200, '#FF4A00', '#00548D');
  createTile(200, -400, '#151515', '#00548D');
  createTile(0, 200, '#E5E5E5', '#00548D');
  createTile(0, 200, '#0091D1', '#151515');

  noLoop();
}  

