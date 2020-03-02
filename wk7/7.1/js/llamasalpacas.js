new Vue({
	el: '#myApp',
	data: {
		llamaHeader: 'Fun facts about llamas',
		llamas: [
	     'LLAMAS ARE MAMMALS',
		 'LLAMAS ARE HERBIVORES MEANING THEY ONLY EAT PLANTS',
		 'LLAMAS ONLY NEED TO DRINK A SMALL AMOUNT OF WATER',
		 'LLAMAS LIVE IN THE ANDES MOUNTAIN REGION ALONG THE WEST COAST OF SOUTH AMERICA',
		 'LLAMAS ARE RELATED TO CAMELS',
		 'LLAMAS CAN LIVE BETWEEN 15-30 YEARS',
		 'A FULL GROWN LLAMA CAN WEIGH BETWEEN 280-500 POUNDS',
		 'MOTHER LLAMAS ARE PREGNANT FOR 11 1/2 MONTHS',
		 'THEY GIVE BIRTH STANDING UP TO USUALLY ONE BABY CALLED A CRIA',
		 'LLAMAS ARE KNOWN TO SPIT WHEN THEY FEEL THREATENED'
		],
		llamaUrl: "https://en.wikipedia.org/wiki/Llama",
		alpacaHeader: 'Fun facts about Aplacas',
		alpacas: [
	     'There are two breed of alpacas, the huacaya and the suri',
		 'Alpacas have soft pads on the bottom of their feet which do not dig into the ground like the hooves of a horse or a cow',
		 'Much like llamas, alpacas are known to spit when they are annoyed with someone or angry with someone',
		 'When they sit, they fold their legs under their body, which makes them very easy for transporting',
		 'When they eat grass, they cut off the top of the plant rather than pulling it by the root. This is why many farmers use alpacas like a lawnmower.',
		 'Alpacas use their tail to express their feelings towards one another',
		 'Alpaca mothers will always have their offspring in the morning',
		 'Female alpacas have an 11 month pregnancy period and in 90% of the cases, do not need help in delivering their offspring',
		 'Alpacas were domesticated by the Incas more than 6,000 years ago',
		 'Alpaca fiber is a lot like the wool of a sheep but it is much warmer and not as itchy'
		],
		alpacaUrl: "https://en.wikipedia.org/wiki/Alpaca",
		fancyHeader: {
		  color: "#006",
		  border: "5px dashed #006",
		  width: "400px",
		},
		llamaPower: true
	}
});