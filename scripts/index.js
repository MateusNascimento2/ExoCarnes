import { carnesExoticas, carnesNobres } from "./mocks.js";

const headerButtonOpen = document.getElementById('c-navbar-button-open');
const headerButtonClose = document.getElementById('c-navbar-button-close');
const headerMobile = document.querySelector('.l-header-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');
const exoticCardsContainer = document.querySelector('.l-ExoticMeat-cards');
const primeCardsContainer = document.querySelector('.l-PrimeMeat-cards');

headerButtonOpen.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open')
})

headerButtonClose.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open');
})

linksMobile.forEach((link) => {
  link.addEventListener('click', () => {
    headerMobile.classList.remove('_is-open');
  })
})

carnesExoticas.forEach((object) => {
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
  h3.textContent = object.nome;

  const price = document.createElement('p');
  price.classList.add('c-content-price');
  price.textContent = `R$ ${object.preco}`;

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

carnesNobres.forEach((object) => {
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
  h3.textContent = object.nome;

  const price = document.createElement('p');
  price.classList.add('c-content-price');
  price.textContent = `R$ ${object.preco}`;

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
