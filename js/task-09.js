function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector('.widget > .change-color');
const backgroundColorDescriptorEl = document.querySelector('p > .color');

backgroundColorDescriptorEl.textContent = '#fafafa'; 

const onChangeBackgroundColor = event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  backgroundColorDescriptorEl.textContent = newColor;
};

changeColorBtnEl.addEventListener('click', onChangeBackgroundColor);
