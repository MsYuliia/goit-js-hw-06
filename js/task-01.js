const categories = document.querySelector("#categories");
const listItems = categories.children.length;
console.log(`Number of categories:`, listItems);

[...categories.children].forEach((item) => {
  console.log(`
    Category: ${item.firstElementChild.textContent}
    Elements: ${item.firstElementChild.nextElementSibling.children.length}
    `);
});