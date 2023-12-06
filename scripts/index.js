import { exoticMeats, primeMeats } from "./mocks.js";
import { createCard } from "./createCard.js";
import { radioClick } from "./radioButton.js";

const headerButtonOpen = document.getElementById('c-navbar-button-open');
const headerButtonClose = document.getElementById('c-navbar-button-close');
const headerMobile = document.querySelector('.l-header-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');
const exoticCardsContainer = document.querySelector('.l-ExoticMeat-cards');
const primeCardsContainer = document.querySelector('.l-PrimeMeat-cards');
const radioDiv = document.querySelectorAll('.l-radio-button')

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
exoticMeats.forEach((meat) => {
  exoticCardsContainer.appendChild(createCard(meat));
});

//Functions to get the data from the mocks.js file and mount the card element in the index.html file
primeMeats.forEach((meat) => {
  primeCardsContainer.appendChild(createCard(meat));
});

//Function to get the data and to mark the elements on the radio button component
radioClick(radioDiv);
