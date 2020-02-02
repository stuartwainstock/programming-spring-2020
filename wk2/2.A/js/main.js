/*Create an array objects that represent a question and answer. */

const quizGameQuestion = [
	{ question: 'What habitat does the Ivory-Billed Woodpecker live in? (Forest, Open Woodlands, or Grasslands)', answer: 'Forest'},
	{ question: 'What type of food does the Ivory-Billed Woodpecker eat? (Insects, Mammals, Seeds)?', answer: 'Insects'}, 
	{ question: 'What is the Continental Concern Score of the Ivory-Billed Woodpecker? (1 is of least concern and 20 is of highest concern)' , answer : '20'},
	{ question: 'Where does the Ivory-Billed Woodpecker typically nest? (Tree, Shrub, Cliff, Cavity)', answer: 'Cavity'}
];
console.log(quizGameQuestion);


/*A random question prompt should appear when the page loads. The question prompt should include the value of the question. The user will respond with their guess. */
const randomQIdx = quizGameQuestion[Math.round(Math.random() * quizGameQuestion.length-1)];
let userAnswer = prompt(randomQIdx.question, "");
console.log('The user answered ' + userAnswer);
console.log('The correct answer is ' + randomQIdx.answer);
/*fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. */
alert('You answered ' + userAnswer + '. ' + ' The correct answer is ' + randomQIdx.answer + '.');
