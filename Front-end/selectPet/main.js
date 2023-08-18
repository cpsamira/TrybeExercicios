import './style.css'

const randomDog = document.querySelector('#random-dog');
const randomCat = document.querySelector('#random-cat');
const surpriseMe = document.querySelector('#surprise-me');
const img = document.querySelector('#random-pet-image');

randomDog.addEventListener('click', (event) => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message;

    img.src = petURL;
  });
})


randomCat.addEventListener('click', () => {
  fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then(([data]) => {
    const petURL = data.url;

    img.src = petURL;
  });
})

surpriseMe.addEventListener('click', () => {
 Promise.any([
  fetch("https://api.thecatapi.com/v1/images/search"),
  fetch("https://dog.ceo/api/breeds/image/random"),
 ])
 .then((response) => response.json())
 .then((data) => {
    const petURL = data.message || data[0].url;

    img.src = petURL;
 })
  });

