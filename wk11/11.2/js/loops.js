let y;
let x = 0;
let num = 16;

function setup() {
  createCanvas(720, 460);
  background('#33f365');
  noStroke();

  fill('#c60897');
  y = 60;
  for (let i = 0; i < num / 1; i++) {
    rect(75, y, 400, 5);
    y += 20;
  }
  fill(51);
  y = 45;
  for (let i = 0; i < num; i++) {
    circle(125, y, 30);
    y += 50;
  }
  y = 50;
  for (let i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 20;
  }
  y = 20;
  for (let i = 0; i < num + 6; i++) {
    square(y, y, 30, y, 15, 30, 5);
    y += 20;
  }
  y = 45;
  fill('#e0d04f');
  for (let i = 0; i < num - 1; i++) {
    rect(120, y, 40, 1);
    y += 40;
  }
  y = 70;
  fill('#e0d04f');
  for (let i = 0; i < num + 1; i++) {
    rect(350, y + 4, 30, 3);
    y += 40;
  }
}
function draw (){
	fill('#c60897')
  	ellipse(x, height/3, 50, 50);
  	x ++;
  }
function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}