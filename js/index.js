//Selectors
const todoInput = document.querySelector('.todo-input');
const entrySection = document.getElementById('entrySection');
const todoButton = document.querySelector('.todo-button');
const todoListItem = document.querySelectorAll('.todo-item');
const todoList = document.querySelector('.todo-list');


//Event listeners
todoButton.addEventListener('click', addTodoHandler);
todoList.addEventListener('click', markToDo);
//Functions

let todoElements = [];

function updateUI() {
  if (todoElements.length === 0) {
    entrySection.style.display = 'flex';
  } else {
    entrySection.style.display = 'none';
  }
};

function addTodo(title) {
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
      <button  class="todo-trash">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  todoList.appendChild(todoContainer);
  //Clear Input Value
  todoInput.value = '';
  updateUI();
};


function addTodoHandler() {
  const titleValue = todoInput.value;

  // add object with key and value
  const newTodo = {
    title: titleValue
  };

  //call fn add with params
  addTodo(
    newTodo.title);
  //pushing elements
  todoElements.push(newTodo);
  updateUI();
};


function markToDo(e) {
  const item = e.target;
  const todoMark = item.parentElement.parentElement;
  if (item.classList[0] === 'todo-trash') {
    todoMark.remove();
    todoElements.splice(0, 1);
    updateUI();
  }
  if (item.classList[0] === 'todo-check') {
    todoMark.children[0].classList.toggle('done');
  }
}