export const formValidation = (event, radioButtonValue, dropdownValue) => {
  event.preventDefault();
  const fullNameInput = document.getElementById('full-name');
  const fullNameValue = fullNameInput.value.trim();
  const errorComponent = document.querySelector('.c-error-form')

  if (fullNameValue === "" || fullNameValue.split(' ').length < 2) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = "O nome não pode estar em branco e deve possuir pelo menos nome e sobrenome !"
    return false
  }

  const emailInputValue = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInputValue)) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = 'E-mail inválido. Certifique-se de que possui pelo menos um "@" e um ".", com o "." após o "@", e pelo menos um caractere entre eles.'
    return false;
  }
    
  const telephoneRegex = /[\s()\-]/g;
  const telephoneInputValue = document.getElementById('telephone').value.trim().replace(telephoneRegex, "");

  console.log(telephoneInputValue.length)
  if (telephoneInputValue.length != 11) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = 'Número de telefone inválido. Deve conter exatamente 11 caracteres após a remoção de espaços, parênteses e traços.'
    return false;
  }

  const messageInputValue = document.getElementById('message').value.trim();
  if (messageInputValue.length < 5) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = 'A mensagem precisa ter 5 caracteres ou mais !'
    return false;
  }

  if (radioButtonValue === undefined) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = 'Marque uma preferência !'
    return false;
  }

  if (dropdownValue === undefined) {
    errorComponent.classList.add('_is-visible');
    if (errorComponent.classList.contains('_sucess')) {
      errorComponent.classList.remove('_sucess');
    }
    errorComponent.lastElementChild.textContent = 'Escolha um tipo de carne favorita !'
    return false;
  }

  errorComponent.classList.add('_is-visible');
  errorComponent.classList.add('_sucess');
  errorComponent.lastElementChild.textContent = 'Enviado com sucesso !';
}