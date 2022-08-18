var formElement = document.forms['formElement'];

formElement.addEventListener('focus', (event) => {
    event.target.classList.add('focused');
  }, true);
  
  formElement.addEventListener('blur', (event) => {
    event.target.classList.remove('focused');
  }, true);