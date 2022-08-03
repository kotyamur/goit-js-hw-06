const fontSizeControlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = '56px';

fontSizeControlInputEl.addEventListener('click', event => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
});