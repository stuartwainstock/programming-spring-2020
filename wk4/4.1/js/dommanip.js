//Use querySelector to select empty div and assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

const heading = document.createElement('h1');

heading.innerHTML = 'Testing creating a h1 via the innerHTML';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick (){
  console.log('heading clicked');
  document.body.style.backgroundColor = '#70ea45';
  document.body.style.color = '#921abd';
}