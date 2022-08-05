const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputElTextChange = event => {
    outputEl.textContent = event.currentTarget.value;
    if (inputEl.value === '') {
      outputEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener('input', onInputElTextChange);