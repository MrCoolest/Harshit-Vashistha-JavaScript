//how to get the dimension of elements
// height width

const sectionTodo = document.querySelector('.todo-section');
// console.log(sectionTodo);
// const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().height;
const info = sectionTodo.getBoundingClientRect().width;
console.log(info);