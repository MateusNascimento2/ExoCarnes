import { exoticMeats, primeMeats } from "./mocks.js";
import { createCard } from "./createCard.js";
import { radioClick } from "./radioButton.js";
import { openDropdown, selectDropdownItem } from "./dropdownComponent.js"
import { markCheckbox } from "./checkboxComponent.js"
import { formValidation } from "./formValidation.js";

const headerButtonOpen = document.getElementById('c-navbar-button-open');
const headerButtonClose = document.getElementById('c-navbar-button-close');
const headerMobile = document.querySelector('.l-header-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');
const exoticCardsContainer = document.querySelector('.l-ExoticMeat-cards');
const primeCardsContainer = document.querySelector('.l-PrimeMeat-cards');
const radioDiv = document.querySelectorAll('.l-radio-button')
const dropdownBox = document.querySelector('.l-dropdown-placeholder');
const dropdownItem = document.querySelectorAll('.c-dropdown-item');
const checkboxes = document.querySelectorAll('.c-checkbox');
const formButton = document.querySelector('.c-submit-form-button');

//Functions to open and close the header menu when it's on mobile screens
headerButtonOpen.addEventListener('click', function () {
  headerMobile.classList.toggle('_is-open')
})

//Functions to open and close the header menu when it's on mobile screens
headerButtonClose.addEventListener('click', function () {
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

let radioValue;
let dropdownValue;
let checkboxValue

//Function to get the data and to mark the elements on the radio button component
radioDiv.forEach((radio) => {
  radio.addEventListener('click', () => {
    radioValue = radioClick(radio)
    console.log(radioValue);
  })
})


//Functions to open, close and select the itens on the dropdown component
dropdownBox.addEventListener('click', () => openDropdown())

dropdownItem.forEach((item) => {
  item.addEventListener('click', () => {
    dropdownValue = selectDropdownItem(item, dropdownBox)
    console.log(dropdownValue);
  })
})


//Function to mark the checkbox component
checkboxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    checkboxValue = markCheckbox(checkboxes, index)
    console.log(checkboxValue)
  })
})

//Function to validate form 
formButton.addEventListener('click', () => formValidation(event, radioValue, dropdownValue));
