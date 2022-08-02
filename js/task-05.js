const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log()

const onInputElTextChange = event => {
    outputEl.textContent = event.currentTarget.value
};

inputEl.addEventListener('input', onInputElTextChange);