let cups = [];
let counter = 0;

Vue.component('random-beer', {
	template: `<div v-bind:class="['randbeer']"> 
		<img v-bind:src="beer.image_url" width="20%" />
		<p id="beername">{{beer.name}}</p>
		<p id="beerABV"> {{beer.abv}} ABV</p>
		<p id="beerPairing">Food Pairing: {{beer.food_pairing[0]}}</p>
 	</div>`,
 	props: ['beer']

});

const vm = new Vue({
	el: '#randomBeerApp',
	data: {
		beers: [] 
	},
	mounted () {
		axios
			.get('https://api.punkapi.com/v2/beers/random')
			.then(response => {
				console.log('response', response);
				vm.beers = response.data;
				console.log(vm.beers);
			});
	}
});

function setup() {
  var cnv = createCanvas(600, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function draw() {
  background('#00ACDD'); 
  noStroke();
  // a new cup is generated
  if (counter % 40 == 0) {
    let newCup = new Cup(-100, 100, 175);
    cups.push(newCup);
  }

  for (let c = 0; c < cups.length; c++) {
    cups[c].display();
    cups[c].move();
    cups[c].update();
  }

  // delete offscreen cups
  if (cups[0].x > width + cups[0].w) {
    cups.shift();
  }
   counter++;
}

class Cup {
  constructor(x, y, full) {
    this.x = x;
    this.w = 50;
    this.h = this.w / 3;
    this.full = full;
    this.empty = this.full + 80;
    this.update();
  }
  
  move(){
    this.x += 2.5;
  }
  
  update(){
    this.y = mouseY;
    this.yc = constrain(this.y, this.full + 30, this.empty);
    this.yr = .4375 * ((this.empty - this.yc) / 100); // times .4375 to cap at .35
    this.wc = this.w + this.w * this.yr;
    this.hc = this.h + this.h * this.yr;
  }
  
  display() {
    
    //liquid fill
    noStroke();
    fill('#FDB813');
    ellipse(this.x, this.empty, this.w, this.h); //bottom
    beginShape();
    vertex(this.x - this.wc / 2, this.yc);
    vertex(this.x + this.wc / 2, this.yc);
    vertex(this.x + this.w / 2, this.empty);
    vertex(this.x - this.w / 2, this.empty);
    endShape(CLOSE);
    fill('#F14E22');
    ellipse(this.x, this.yc, this.wc, this.hc); //changing
    
    //cup outline
    strokeWeight(1);
    stroke('#FDB813'); 
    fill(255, 255, 255, 80); //transparent white for fill effect
    beginShape();
    vertex(this.x - this.w / 2, this.empty); //bl
    vertex(this.x - this.w * 1.35 / 2 + 1, this.full) //tl
    vertex(this.x + this.w * 1.35 / 2 - 1, this.full) // tr
    vertex(this.x + this.w / 2, this.empty); //br
    endShape();
    arc(this.x, this.empty, this.w, this.h, 0, PI, OPEN); //bottom 
    fill('#4FADC5');
    ellipse(this.x, this.full, this.w * 1.35, this.h * 1.35); //top
  }

}