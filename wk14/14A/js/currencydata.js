Vue.component('currency-trend', {
	template: `<div v-bind:class="['currency']"> 
		<h3> Current Rate: {{currency.base}} </h3>
		<p> JPY, {{currency.JPY}} </p>
 		<small>Country of Currency: {{currency}}</small>
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
			.get('https://api.exchangeratesapi.io/2010-01-12')
			.then(response => {
				console.log('response', response);
				vm.currencies = response.data;
				console.log(vm.currencies);
			});
	}
});