//Use querySelector to select empty div and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

const heading = document.createElement('h1');

heading.innerHTML = 'Llamas do not bite. They spit when they are agitated, but that is mostly at each other.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick (){
  console.log('heading clicked');
  document.body.style.backgroundColor = '#70ea45';
  document.body.style.color = '#921abd';
}