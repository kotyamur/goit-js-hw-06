let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const setCounterValue = number => {
    valueEl.textContent = number
};

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    setCounterValue(counterValue);
});
incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    setCounterValue(counterValue);
});
