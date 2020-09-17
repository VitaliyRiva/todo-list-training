//Selectors
const todoInput = document.querySelector('.todo-input');
const entrySection = document.getElementById('entrySection');
const todoButton = document.querySelector('.todo-button');
const todoListItem = document.querySelectorAll('.todo-item');
const todoList = document.querySelector('.todo-list');


//Event listeners
todoButton.addEventListener('click', addTodoHandler);
// todoList.addEventListener('click', markToDo);
//Functions

let todoElements = [];

function updateUI() {
  if (todoElements.length === 0) {
    entrySection.style.display = 'flex';
  } else {
    entrySection.style.display = 'none';
  }
};

function addTodo(id, title) {
  //Prevent form submitting
  event.preventDefault();
  //Todo Container
  const todoContainer = document.createElement('li');
  todoContainer.classList.add('todo-item');
  todoContainer.setAttribute('id', id);
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
  todoList.addEventListener('click', deleteHandler.bind(null, id));
  todoList.appendChild(todoContainer);
  //Clear Input Value
  todoInput.value = '';
  updateUI();
};


function addTodoHandler() {
  const titleValue = todoInput.value;

  // add object with key and value
  const newTodo = {
    id: Math.floor(Math.random() * 10),
    title: titleValue
  };

  //call fn add with params
  addTodo(
    newTodo.id,
    newTodo.title);
  //pushing elements
  todoElements.push(newTodo);
  updateUI();
};


function deleteTodo(todoId) {
  let identifiedIndex = 0;
  for (const el of todoElements) {
    if (el.id === todoId) {
      break;
    }
    identifiedIndex++;
  }
  todoElements.splice(identifiedIndex, 1);
  todoList.children[identifiedIndex].remove();
  console.log(todoId);
  updateUI();
}

function deleteHandler(todoId) {
  let todoBtntnTrash = document.querySelector('.todo-trash');
  todoBtntnTrash.addEventListener('click', deleteTodo.bind(null, todoId));
  updateUI();
}