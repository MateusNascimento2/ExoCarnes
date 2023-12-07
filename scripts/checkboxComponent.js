export const markCheckbox = (checkboxes) => {
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('click', () => {
      if (index === 0 && checkboxes[0].classList.contains('_checked') === false) {
        checkboxes[0].classList.toggle('_checked');
        checkboxes[1].classList.add('_checked');
        checkboxes[2].classList.add('_checked');
      } else if (index === 0) {
        checkboxes[0].classList.toggle('_checked');
        checkboxes[1].classList.remove('_checked');
        checkboxes[2].classList.remove('_checked');
        
      }
      
      if (index === 1) {
        checkboxes[1].classList.toggle('_checked');

        if (checkboxes[2].classList.contains('_checked')) {
          checkboxes[0].classList.toggle('_checked');
        }

      } 
      
      if (index === 2) {
        checkboxes[2].classList.toggle('_checked');

        if (checkboxes[1].classList.contains('_checked')) {
          checkboxes[0].classList.toggle('_checked');
        }
      }
    })
  })
}