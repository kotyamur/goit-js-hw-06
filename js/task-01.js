const list = document.querySelector('#categories');
const listItem = document.querySelectorAll('.item');
console.log('Number of categories:', list.children.length);

listItem.forEach(category => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});