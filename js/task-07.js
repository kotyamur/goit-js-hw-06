const fontSizeControlInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlInputEl.value = 16;

fontSizeControlInputEl.addEventListener('click', event => {
    console.log(event.currentTarget.value);
    console.log(textEl);
    
    textEl.style.fontSize = event.currentTarget.value + 'px';
});