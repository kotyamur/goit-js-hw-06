const listEl = document.querySelector('#categories');
const listItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', listEl.children.length);

listItemEl.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});