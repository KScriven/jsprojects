const colours = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const button = document.getElementById('btn');
const colourspan = document.querySelector('.colour-span');

button.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colours[randomNumber];
  colourspan.textContent = colours[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colours.length);
}
