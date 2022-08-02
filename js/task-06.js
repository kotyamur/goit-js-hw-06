const validationInputEl = document.querySelector('#validation-input');
const validInputLength = Number(validationInputEl.dataset.length);

validationInputEl.addEventListener('blur', event => {
    const isValidInput = event.currentTarget.value.length === validInputLength;

    validationInputEl.classList.remove('valid', 'invalid');
    if (isValidInput) {
        validationInputEl.classList.add('valid');
        return;
    } 
    validationInputEl.classList.add('invalid');
    
    // validationInputEl.classList.toggle('valid', isValidInput);
    // validationInputEl.classList.toggle('invalid', !isValidInput);
});

