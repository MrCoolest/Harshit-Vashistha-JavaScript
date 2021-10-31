// Static list Vs Live list
4
// querySelectorAll humie static list degi

// getElementsbySomthing humie live list degi
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthli = document.createElement('li');
// sixthli.textContent = 'item 6';
// const ul = document.querySelector('.todo-list');
// ul.append(sixthli);

// console.log(listItems);



const sixthli = document.createElement('li');
sixthli.textContent = 'item 6';
const ul = document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName("li");

ul.append(sixthli);

console.log(listItems);
