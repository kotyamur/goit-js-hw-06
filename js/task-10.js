function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createListBtnEl = document.querySelector('button[data-create]');
const destroyListBtnEl = document.querySelector('button[data-destroy]');
const numberInputEl = document.querySelector('#controls > input');
const boxesCaseEl = document.querySelector('#boxes');

numberInputEl.addEventListener('input', event => {
  const val = event.currentTarget.value;

  const onClickCreateBtn = () => {
    createBoxes(val);
  };

  createListBtnEl.removeEventListener('click', onClickCreateBtn);
  createListBtnEl.addEventListener('click', onClickCreateBtn);
});

const createBoxes = amount => {
  boxesCaseEl.innerHTML = '';
  const boxesArr = [];

  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = index * 10 + 30 + 'px';
    box.style.width = index * 10 + 30 + 'px';
    boxesArr.push(box);
  }
  boxesCaseEl.append(...boxesArr);
  
};

const destroyBoxes = () => {
  boxesCaseEl.innerHTML = '';
  numberInputEl.value = '';
};

destroyListBtnEl.addEventListener('click', destroyBoxes);
