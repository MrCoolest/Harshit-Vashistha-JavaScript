// project using event delegation


const todoForm = document.querySelector('.form-todo');

const todoInput = document.querySelector(".form-todo input[type='text']");

const todoList = document.querySelector('.todo-list');

console.log(todoInput);

todoForm.addEventListener('submit',(e) => {
     e.preventDefault();
     // console.log(todoInput.value);
     const newTodoText = todoInput.value;
     const newli  = document.createElement('li')
     const newLiInnerHtml = `<span class="form-todo">${newTodoText}</span>
     <div class="todo-buttons">
          <button class="todo-btn done">Done</button>
          <button class="todo-btn remove">Remove</button>
     </div>`
     newli.innerHTML = newLiInnerHtml;
     todoList.appendChild(newli);
     console.log(newli)
     todoInput.value = "";

})

todoList.addEventListener('click', (e)=>{
     // console.log(e.target);
     // cleck user is click on 
     if(e.target.classList.contains('done')){
          const liSpan = e.target.parentNode.previousElementSibling;
          // console.log(liSpan);
          liSpan.style.textDecoration = 'Line-through';
     }
     if(e.target.classList.contains('remove')){
          const targetedli = e.target.parentNode.parentNode;
          // console.log(targetedli);
          targetedli.remove();



          
     }
})