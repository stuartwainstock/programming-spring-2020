const birdArray = [{
	commonName: "Blue Jay",
    latinName: "Cyanocitta cristata",
    family: "Crows, Magpies, Jays",
    description: "Blue above, light gray below. Black and white markings on wings and tail. Larger than a robin, smaller than a crow. Crest and long tail. Noisy and conspicuous in areas with large trees. Regularly visits feeders."
	},
	{
    commonName: "Black-capped Chickadee",
    latinName: "Poecile atricapillus",
    family: "Chickadees and Titmice",
    description: "Tiny, plump-bodied, big-headed bird is a familiar woodland resident and backyard visitor in the northern U.S. and Canada. Gray overall with buffy flanks and a contrasting head pattern: black cap, white cheek, and black throat. Short, stubby bill is used for hammering open seeds. Often the core of mixed flocks of songbirds. Visits feeders. Nearly identical to Carolina Chickadee, but note voice and range."
	},
	{
    commonName: "Dark-eyed Junco",
    latinName: "Junco hyemalis",
    family: "New World Sparrows",
    description: "Sparrow with incredible variation between populations. All have short pink bills and white outer tail feathers. Often in flocks in winter, foraging on the ground for seeds. Visits feeders. Subspecies include: Slate-colored (widespread), Oregon (West), Pink-sided (Rockies), Gray-headed (Rockies), Red-backed (central Arizona and New Mexico), and White-winged (Colorado in winter)."
	},
	{
    commonName: "Red-bellied Woodpecker",
    latinName: "Melanerpes carolinus",
    family: "Woodpecker",
    description: "Medium-sized woodpecker that is not well named; rarely is the slight red wash on the belly visible! Instead, note the black-and-white barring on the back and wings, plain buffy breast and face, and red nape. On adult males, look for the red extending onto the crown. In flight, look for the white rump. Found in forested and suburban areas, typically preferring deciduous trees. Slowly expanding its range northward. Visits feeders, especially for suet. Nests in cavities."
	},
	{
    commonName: "Northern Cardinal",
    latinName: "Cardinalis cardinalis",
    family: "Cardinals, Grosbeaks and Buntings",
    description: "Males are entirely red with black around the base of the bill. Females are brown overall with red tail, red on wings, and red bill. Note distinctive crest in both sexes. Forages mainly for seeds in dense shrubby areas. Regularly visits feeders."
}];

const myVue = new Vue({
  el: "#bird-list",
  data: {
    newBirdObj: {
    commonName: "",
    latinName: "",
    family: "",
    description: ""
    },
    birds: birdArray,
    altRow: '#7FDBFF',
  },
  methods: {
    submitHandler: () => {
        console.log('submitted');
        myVue.birds = myVue.birds.concat(myVue.newBirdObj);
        myVue.resetForm();
    },
    resetForm: () => {
        myVue.newBirdObj = {
            commonName: "",
            latinName: "",
            family: "",
            description: ""
        };
    },
    deleteItem: item => {
        myVue.birds = myVue.birds.filter(birds => {
            return birds != item;
        });
    }
  }
})
