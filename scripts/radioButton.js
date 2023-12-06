export const radioClick = (radioDiv) => {
  radioDiv.forEach(function(radio) {
    radio.addEventListener('click', function() {
      const markedButton = document.querySelectorAll('._marked');
  
      markedButton.forEach(function(marked) {
        if (marked) {
          marked.classList.remove('_marked');
          const markedParent = marked.parentElement;
          markedParent.classList.remove('_border-marked');
        }
      })
  
      const radioButton = this.firstElementChild;
      radioButton.classList.add('_marked');
      radio.classList.add('_border-marked');
      const valueOfMarkedButton = radioButton.nextElementSibling.textContent;
      console.log(valueOfMarkedButton);
    })
  })
}
