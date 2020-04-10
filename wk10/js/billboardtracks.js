Vue.component('streaming-track', {
	template: `<div v-bind:class="['track', trending]"> 
		<h3> {{track.title}} </h3>
		<div> <img :src="track.cover" alt=""> </div>
		<small>{{track.artist}}</small>
	</div>`,
	props: ['track'],
	computed: {
		trending: function () {
			const delta = this.track.rank - this.track.position.positionLastWeek;
			if (delta > 0){
				return 'up'
			} else if  (delta < 0 ) {
				return 'down'
			} else {
				return 'no-change'
			}
		}
	}
});

const vm = new Vue({
	el: '#billboardApp',
	data: {
		tracks: []
	},
	mounted () {
		axios
			.get('./json/music-list.json')
			.then(response => {
				console.log('response', response);
				vm.tracks = response.data;
				console.log(vm.tracks);
			});
	}
});