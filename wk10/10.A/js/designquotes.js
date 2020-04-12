Vue.component('design-quotes', {
	template: `<div v-bind:class="['quote']"> 
		<h3> {{quote.excerpt.rendered}} </h3>
		<div> <p :src="quote.link"></p> </div>
		<small>{{quote.title.rendered}}</small>
	</div>`,
	props: ['quote'],
	// computed: {
	// 	trending: function () {
	// 		const delta = this.track.rank - this.track.position.positionLastWeek;
	// 		if (delta > 0){
	// 			return 'up'
	// 		} else if  (delta < 0 ) {
	// 			return 'down'
	// 		} else {
	// 			return 'no-change'
	// 		}
	// 	}
	// }
});

const vm = new Vue({
	el: '#designQuotesApp',
	data: {
		quotes: []
	},
	mounted () {
		axios
			.get('./json/designquotes.json')
			.then(response => {
				console.log('response', response);
				vm.quotes = response.data;
				console.log(vm.quotes);
			});
	}
});