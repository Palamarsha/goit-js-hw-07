const howMuchUl = document.querySelectorAll(".item");
console.log(`Number of categories: ${howMuchUl.length}`);
const titles = document.querySelectorAll("h2");
console.log(titles);
titles.forEach (function (title) {
const  titleName = title.textContent;
console.log(`Category: ${titleName}`);
const categoriesNames = title.parentElement.querySelectorAll("ul > li");
console.log(`Elements: ${categoriesNames.length}`);
});