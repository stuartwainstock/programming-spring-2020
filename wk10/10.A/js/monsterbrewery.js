Vue.component('brewery-deets', {
	template: `<div v-bind:class="['brew']"> 
		<h3> {{brew.name}} </h3>
		<p> {{brew.city}}, {{brew.state}} </p>
 		<div> <p :src="brew.website_url">{{brew.website_url}}</p> </div>
 		<small>{{brew.brewery_type}}</small>
 	</div>`,
 	props: ['brew']

});

const vm = new Vue({
	el: '#breweryApp',
	data: {
		breweries: [] 
	},
	mounted () {
		axios
			.get('https://api.openbrewerydb.org/breweries/search?query=monster')
			.then(response => {
				console.log('response', response);
				vm.breweries = response.data;
				console.log(vm.breweries);
			});
	}
});