Vue.component('random-beer', {
	template: `<div v-bind:class="['beer']"> 
		<p>Name: {{beer.name}}</p>
		<p>Tagline: {{beer.tagline}}</p>
		<p>ABV: {{beer.abv}}</p>
		<p>IBU: {{beer.ibu}}</p>
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


