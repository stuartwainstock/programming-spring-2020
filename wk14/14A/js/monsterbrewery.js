Vue.component('currency-trend', {
	template: `<div v-bind:class="['currency']"> 
		<h3> {{currency.name}} </h3>
		<p> {{currency.city}}, {{currency.state}} </p>
 		<div> <p :src="currency.website_url">{{currency.website_url}}</p> </div>
 		<small>Brewery Type: {{currency.brewery_type}}</small>
 	</div>`,
 	props: ['currency']

});

const vm = new Vue({
	el: '#currencyApp',
	data: {
		currencies: [] 
	},
	mounted () {
		axios
			.get('https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2020-05-01')
			.then(response => {
				console.log('response', response);
				vm.currencies = response.data;
				console.log(vm.currencies);
			});
	}
});