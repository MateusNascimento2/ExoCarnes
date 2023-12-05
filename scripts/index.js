import { exoticMeats, primeMeats } from "./mocks.js";

const headerButtonOpen = document.getElementById('c-navbar-button-open');
const headerButtonClose = document.getElementById('c-navbar-button-close');
const headerMobile = document.querySelector('.l-header-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');
const exoticCardsContainer = document.querySelector('.l-ExoticMeat-cards');
const primeCardsContainer = document.querySelector('.l-PrimeMeat-cards');

//Functions to open and close the header menu when it's on mobile screens
headerButtonOpen.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open')
})

//Functions to open and close the header menu when it's on mobile screens
headerButtonClose.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open');
})

//Function to close the header menu when the user clicks on a link
linksMobile.forEach((link) => {
  link.addEventListener('click', () => {
    headerMobile.classList.remove('_is-open');
  })
})


//Functions to get the data from the mocks.js file and mount the card element in the index.html file
exoticMeats.forEach((object) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('c-card-wrapper');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('l-meat-card-imageWrapper');

  const img = document.createElement('img');
  img.setAttribute('src', object.imageSrc);
  img.classList.add('c-card-img');
  imageWrapper.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.classList.add('c-card-content');

  const h3 = document.createElement('h3');
  h3.classList.add('c-content-title');
  h3.textContent = object.name;

  const price = document.createElement('p');
  price.classList.add('c-content-price');
  price.textContent = `R$ ${object.price}`;

  const buttonBuy = document.createElement('a');
  buttonBuy.classList.add('c-content-buy-button');
  buttonBuy.textContent = "COMPRE AGORA";
  buttonBuy.setAttribute('href', '#');


  cardContent.appendChild(h3);
  cardContent.appendChild(price);
  cardContent.appendChild(buttonBuy);
  cardWrapper.appendChild(imageWrapper);
  cardWrapper.appendChild(cardContent);

  exoticCardsContainer.appendChild(cardWrapper);
});

//Functions to get the data from the mocks.js file and mount the card element in the index.html file
primeMeats.forEach((object) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('c-card-wrapper');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('l-meat-card-imageWrapper');

  const img = document.createElement('img');
  img.setAttribute('src', object.imageSrc);
  img.classList.add('c-card-img');
  imageWrapper.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.classList.add('c-card-content');

  const h3 = document.createElement('h3');
  h3.classList.add('c-content-title');
  h3.textContent = object.name;

  const price = document.createElement('p');
  price.classList.add('c-content-price');
  price.textContent = `R$ ${object.price}`;

  const buttonBuy = document.createElement('a');
  buttonBuy.classList.add('c-content-buy-button');
  buttonBuy.textContent = "COMPRE AGORA";
  buttonBuy.setAttribute('href', '#');


  cardContent.appendChild(h3);
  cardContent.appendChild(price);
  cardContent.appendChild(buttonBuy);
  cardWrapper.appendChild(imageWrapper);
  cardWrapper.appendChild(cardContent);

  primeCardsContainer.appendChild(cardWrapper);
});
