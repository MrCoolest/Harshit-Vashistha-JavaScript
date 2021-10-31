// some old Method to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;


const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = "new todo";
const referenceNode = document.querySelector('.first-todo')
// const li2 = li.cloneNode(true);
// ul.appendChild(li);
// ul.insertBefore(li, referenceNode);

// ul.replaceChild(li, referenceNode);
ul.removeChild(referenceNode);

