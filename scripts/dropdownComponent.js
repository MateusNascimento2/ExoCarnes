
export const openDropdown = (dropdownBox) => {
  dropdownBox.addEventListener('click', () => {
    const dropdownItensContainer = document.querySelector('.l-dropdown-itens');
    dropdownItensContainer.classList.toggle('_is-open');

    const dropdownLeftArrow = document.querySelector('.c-dropdown-left-arrow');
    dropdownLeftArrow.classList.toggle('_left-arrow-open');

    const dropdownRightArrow = document.querySelector('.c-dropdown-right-arrow');
    dropdownRightArrow.classList.toggle('_right-arrow-open');
  })
}

export const selectDropdownItem = (dropdownItem, dropdownBox) => {
  dropdownItem.forEach(function(item) {
    item.addEventListener('click', function() {
      const value = this.firstElementChild.textContent;

      dropdownBox.firstElementChild.textContent = value;

      const dropdownItensContainer = document.querySelector('.l-dropdown-itens');

      dropdownItensContainer.classList.remove('_is-open');

      const dropdownLeftArrow = document.querySelector('.c-dropdown-left-arrow');
      dropdownLeftArrow.classList.remove('_left-arrow-open');
  
      const dropdownRightArrow = document.querySelector('.c-dropdown-right-arrow');
      dropdownRightArrow.classList.remove('_right-arrow-open');
      
    })
  })
}
