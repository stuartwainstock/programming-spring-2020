var angle = 1;

function setup() { 
  createCanvas(1000, 1000);
  background('#135d13');
} 

function draw() { 
  
  var x = map(cos(angle),-1,2,1,width);
  var y = map(sin(angle),-1,2,2,height);
  stroke('#e99fe9');
  line(200, 200,x,y);
  fill('#e99fe9');
  stroke('#135d13');
  rect(x,y,20,20);
  
  angle += 0.03; 
}