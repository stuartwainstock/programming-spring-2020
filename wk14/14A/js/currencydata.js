Vue.component('currency-trend', {
	template: `<div v-bind:class="['currency']"> 
		<h3> Current Rate: {{currency.rates}} </h3>
		<p> {{currency.rates}}, {{currency.base}} </p>
 		<!--<small>Country of Currency: {{currency.rates.2020-01-02.USD}}</small>-->
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
			.get('https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2020-05-01&base=USD')
			.then(response => {
				console.log('response', response);
				vm.currencies = response.data;
				console.log(vm.currencies);
			});
	}
});