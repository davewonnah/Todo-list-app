const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const inputValue = document.querySelector('#todo-input');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if(!inputValue.value){
    alert("Please fill out the todo");
    return;
  } 
  
  addTodo();
  inputValue.value = '';
});

function addTodo(){ 
  const newTodo = document.createElement('li');
  newTodo.textContent = inputValue.value;
  createButtons(newTodo);

  todoList.appendChild(newTodo);
}

function createButtons(parent) {
  const btns = document.createElement('div');
  btns.classList.add('btn');

  const editBtn = document.createElement('img');
  editBtn.setAttribute('src', 'pencil-line.png');
  editBtn.setAttribute('alt', 'Edit');

  const deleteBtn = document.createElement('img');
  deleteBtn.setAttribute('src', 'delete-bin-6-line.png');
  deleteBtn.setAttribute('alt', 'Delete');

  deleteBtn.addEventListener('click', function(event) {
    event.preventDefault();
    parent.remove();
  });

  editBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const editText = prompt("Edit your todo:", parent.textContent);
    if (editText !== null && editText !== '') {
      parent.textContent = editText;
      createButtons(parent);
    }
  });

  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  parent.appendChild(btns);
}

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim().toLowerCase();
  const todos = todoList.querySelectorAll('li');
  todos.forEach(function(todo) {
    const todoText = todo.textContent.toLowerCase();
    if (todoText.includes(searchTerm)) {
      todo.style.display = 'block';
    } else {
      todo.style.display = 'none';
    }
  });
});
