const categories = document.querySelector("#categories").children;
console.log("Number of categories: " + categories.length);

for (const category of categories) {
    console.log('Category: ' + category.firstElementChild.innerHTML);
    console.log('Elements: ' + category.getElementsByTagName('li').length);
}



