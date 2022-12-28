"use strict";

const c = console.log.bind(document);

const addForm = document.querySelector(".add");
const todoList = document.querySelector(".todos");
const search = document.querySelector(".search input")



const filteredTerm = (term) => {
    const listLI = todoList.children;
    Array.from(listLI)
         .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term);
         })
         .forEach( todo => todo.classList.add("filtered"));


         Array.from(listLI)
         .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
         })
         .forEach( todo => todo.classList.remove("filtered"));
   
}

// Searching Todo
search.addEventListener("keyup", () =>{
    const term = search.value.toLowerCase().trim();
    filteredTerm(term);
});







// Create Template data(Todo list item) to the browser
const generateTodos = todo => {
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todoList.innerHTML += html;
} 

// Adding Event listener on form
addForm.addEventListener('submit', e => {
    e.preventDefault();

   const todo =  addForm.add.value.trim();

   if(todo.length){
     generateTodos(todo);
     addForm.reset();
   }

})

// Delete Tdoo
const deleteTodoList = delet => {
    if(delet.target.tagName == "I"){
        delet.target.parentElement.remove();
    }
}
todoList.addEventListener("click", deleteTodoList)