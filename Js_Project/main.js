let todo_form = document.querySelector('.todo_form')
let inputTodo = document.getElementById('inputTodo')
let addBtn = document.getElementById('addBtn')
let todoList = document.querySelector('.list')
let todoMassage = document.getElementById('Massage')



// getTodoFromLocalStorage
const getTodoFromLocalStorage = () => {
    return localStorage.getItem('myTodo') 
        ? JSON.parse(localStorage.getItem('myTodo')) 
        : [];
}


// creteTodo
const createTodo = (todoId, todoValue) => {
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('li_style')
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span> <button class="btn" id="deleteBtn">x</button> </span>
    `
    todoList.appendChild(todoElement)
}

// show Message
const showMassage = (text, status) => {
    todoMassage.textContent = text;
    todoMassage.classList.add(`bg-${status}`)
    setTimeout(() => {
        todoMassage.textContent = " "
        todoMassage.classList.remove(`bg-${status}`)
    }, 2000);
}

// addTodo
const addTodo = (e) => {
    e.preventDefault()
    const todoValue = inputTodo.value;
    const todoId = Date.now().toString();
    createTodo( todoId ,todoValue);
    showMassage("Todo is Crated" , "Success");

    // add todo localStorage
    const todo = getTodoFromLocalStorage();
    todo.push({todoId, todoValue});
    localStorage.setItem('myTodo', JSON.stringify(todo));

    inputTodo.value =" ";
}


todo_form.addEventListener('submit' , addTodo)