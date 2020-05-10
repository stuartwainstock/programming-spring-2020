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

var circ_size = 10;

function setup() { 
  createCanvas(200, 200);
} 

// When the circle gets bigger than the screen
// Make it small again
function draw() { 
	background(255);
  fill("red");
  ellipse(120, 120, circ_size, circ_size);
  circ_size += 2;
  
  if (circ_size > 100) {
    circ_size = 0;
  }
  if (mouseIsPressed) {
    noLoop()
  }
}

