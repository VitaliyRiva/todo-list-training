//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoListItem = document.querySelectorAll('.todo-item');
const todoMark = document.querySelector('.todo-check');
const todoTrash = document.querySelector('.todo-trash');

//Event listeners
todoButton.addEventListener('click', addTodoHandler);
//Functions

const todoElements = [];

function addTodo(id, title) {
  //Prevent form submitting
  event.preventDefault();
  //Todo Container
  const todoContainer = document.createElement('li');
  todoContainer.classList.add('todo-item');
  todoContainer.innerHTML = `
    <span class="todo-info">${title}</span>
    <div class="todo-nav">
      <button class="todo-check">
        <i class="fas fa-check"></i>
      </button>
      <button class="todo-trash">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  todoList.appendChild(todoContainer);
  //Clear Input Value
  todoInput.value = '';
  console.log(todoElements)
}


function addTodoHandler() {
  const titleValue = todoInput.value;

  // add object with key and value
  const newTodo = {
    id: Math.floor(Math.random() * 16),
    title: titleValue,
  };

  //call fn add with params
  addTodo(
    newTodo.id,
    newTodo.title);

  //pushing elements
  todoElements.push(newTodo);
}


// добавить данные в массив с  id / title / poz /