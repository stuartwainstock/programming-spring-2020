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
				vm.track = response.data;
				console.log(vm.tracks);
			});
	}
});