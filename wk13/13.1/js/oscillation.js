var angle = 0;

function setup() { 
  createCanvas(500, 500);
  background('#135d13');
} 

function draw() { 
  
  var x = map(cos(angle),-1,1,0,width);
  var y = map(sin(angle),-1,1,0,height);
  stroke('#e99fe9');
  line(200, 200,x,y);
  fill('#e99fe9');
  stroke('#135d13');
  ellipse(x,y,20,20);
  
  angle += 0.02; 
}