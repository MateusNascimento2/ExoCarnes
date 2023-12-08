export const radioClick = (radioDiv) => {
  const markedButton = document.querySelectorAll('._marked');

  markedButton.forEach(function (marked) {
    if (marked) {
      marked.classList.remove('_marked');
      const markedParent = marked.parentElement;
      markedParent.classList.remove('_border-marked');
    }
  })

  const radioButton = radioDiv.firstElementChild;

  radioButton.classList.add('_marked');
  radioDiv.classList.add('_border-marked');

  const valueOfMarkedButton = radioButton.nextElementSibling.textContent;

  return valueOfMarkedButton;
}