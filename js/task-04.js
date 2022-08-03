let counterValue = 0;
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const setCounterValue = number => {
    valueEl.textContent = number
};

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    setCounterValue(counterValue);
});
incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
    setCounterValue(counterValue);
});
