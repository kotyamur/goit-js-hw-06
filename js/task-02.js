const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsItemsList = ingredientsObj => {
  return ingredientsObj.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add('.item');
    return ingredientEl;
  });
};
const ingredientsItems = makeIngredientsItemsList(ingredients);
ingredientsListEl.append(...ingredientsItems);