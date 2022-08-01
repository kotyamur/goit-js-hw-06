const list = document.querySelector('#categories');
const listItem = document.querySelectorAll('.item');
// console.log(list);
// console.log(list.children);
console.log('Number of categories:', list.children.length);
// console.log(listItem);
// 1 variant

const listInfo = Array.from(listItem).map(category => {
  return `Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`;
});
console.log(listInfo.join('\n'));

// 2 variant
// listItem.forEach(category => {
//   console.log(`Category: ${category.firstElementChild.textContent}`);
//   console.log(`Elements: ${category.lastElementChild.children.length}`);
// });