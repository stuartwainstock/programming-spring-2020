function setup() {
	createCanvas(600, 600);
  angleMode(DEGREES);
}

function createTile(originX, originY, bgColor, emptySquare, quarterMarks, interiorSquare) {
  translate(originX, originY);
  fill(bgColor); //bgcolor
  noStroke();
  rect(0,0,200,200);
  stroke(emptySquare);
  strokeWeight(8);
  noFill(); 
  rect(25,25,150,150);
  noStroke();
  fill(quarterMarks); 
  arc(50, 50, 50, 50, 0, 90);
  arc(150, 50, 50, 50, 90, 180);
  arc(150, 150, 50, 50, 180, 270);
  arc(50, 150, 50, 50, 270, 360);
  fill(interiorSquare); 
  quad(50, 100, 100, 50, 150, 100, 100, 150);

}

function draw(){
 /* let tileDrawer = [
    {originX: 0, originY: 0, bgColor: '#7ADEDE', emptySquare: '#fff', quarterMarks: '#FEBF43', interiorSquare '#F54053'},
    {originX: 0, originY:200, bgcolor: '#FED2C2', emptySquare: '#00548D', quarterMarks: '#fff', interiorSquare '#F54053'},
    {originX: 0, originY:200, bgcolor: '#00548D',emptySquare:  '#FEBF43',quarterMarks: '#FEBF43',interiorSquare: '#F54053'},
    {originX: 200, originY: -400,  bgcolor:'#FEBF43', emptySquare: '#00548D', quarterMarks:'#fff', interiorSquare: '#F54053'},
    {originX: 0, originY: 200, bgcolor: '#F54053',emptySquare:  '#FED2C2',quarterMarks: '#FEBF43',interiorSquare: '#00548D'},
    {originX: 0,originY: 200, bgcolor: '#FF4A00',emptySquare:  '#00548D',quarterMarks: '#E5E5E5',interiorSquare: '#00548D'},
    {originX: 200,originY: -400, bgcolor: '#151515',emptySquare:  '#00548D',quarterMarks: '#FEBF43',interiorSquare: '#F54053'},
    {originX: 0,originY: 200,  bgcolor:'#E5E5E5', emptySquare: '#00548D', quarterMarks:'#FEBF43',interiorSquare: '#F54053'},
    {originX: 0,originY: 200, bgcolor: '#0091D1',emptySquare:  '#151515',quarterMarks: '#fff', interiorSquare: '#F54053'}
  ];*/
  

  createTile(0,0, '#7ADEDE', '#fff', '#FEBF43', '#F54053');
  createTile(0,200, '#FED2C2', '#00548D', '#fff', '#F54053');
  createTile(0,200, '#00548D', '#FEBF43', '#FEBF43', '#F54053');
  createTile(200, -400, '#FEBF43', '#00548D', '#fff', '#F54053');
  createTile(0, 200, '#F54053', '#FED2C2', '#FEBF43', '#00548D');
  createTile(0, 200, '#FF4A00', '#00548D', '#E5E5E5', '#00548D');
  createTile(200, -400, '#151515', '#00548D', '#FEBF43', '#F54053');
  createTile(0, 200, '#E5E5E5', '#00548D', '#FEBF43', '#F54053' );
  createTile(0, 200, '#0091D1', '#151515', '#fff', '#F54053');

  noLoop();
}  

