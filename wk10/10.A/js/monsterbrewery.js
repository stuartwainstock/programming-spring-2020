let brew = [];

Vue.component('brewery-deets', {
template: `<div v-bind:class="['brew']"> 
		<h3> {{brew.name}} </h3>
 		<div> <p :src="brew.website_url"></p> </div>
 		<small>{{brew.brewery_type}}</small>
 	</div>`,
 	props: ['brew']

});

const vm = new Vue({
	el: '#breweryApp',
	data () {
		return {
			name: null
		}
	},
	mounted () {
		axios
			.get('./json/brewery.json')
			.then(response => {
				console.log('response', response);
				vm.brew = response.data;
				console.log(vm.brew);
			});
	}
});