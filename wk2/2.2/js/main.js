const favGames = [
	{name: 'Poker', type: 'card', players: '10' },
	{name: 'Mario Kart', type: 'video', players:'4' },
	{name: 'Monopoly', type: 'board', players: '8' }
];
console.log(favGames);

const userSelectIdx = prompt("I have three games in my collection. Pick a number between 1 and 3 and I'll tell you about it.");

alert('You selected the game ' + favGames[userSelectIdx].name + ' which is a ' + favGames[userSelectIdx].type + ' game for up to ' + favGames[userSelectIdx].players + ' players.');
