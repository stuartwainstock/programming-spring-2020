Vue.component('streaming-track', {
	template: `<div class="track"> </div> `
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