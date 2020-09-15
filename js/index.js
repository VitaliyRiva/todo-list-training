//Selectors
const todoInput = document.querySelector('.todo-input');
const entrySection = document.getElementById('entrySection');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoListItem = document.querySelectorAll('.todo-item');
const todoMark = document.querySelector('.todo-check');


//Event listeners
todoButton.addEventListener('click', addTodoHandler);

//Functions

const todoElements = [];

function updateUI() {
  if (todoElements.length === 0) {
    entrySection.style.display = 'block';
  } else {
    entrySection.style.display = 'none';
  }
};


function deleteToDo(todoId) {
  let identifiedIndex = 0;
  for (const todo of todoElements) {
    if (newTodo.id === todoId) {
      break;
    }
    identifiedIndex++;
  }
  todoElements.splice(identifiedIndex, 1);
  todoList.children[identifiedIndex].remove(todoId);
  updateUI();
}


function deleteHandler(todoId) {
  let todoTrash = document.querySelector('.todo-trash');
  todoTrash.replaceWith(todoTrash.cloneNode(true));
  todoTrash.addEventListener('click', deleteToDo.bind(null, todoId));
  console.log('deleted');
};


function addTodo(id, title) {
  //Prevent form submitting
  event.preventDefault();
  //Todo Container
  const todoContainer = document.createElement('li');
  todoContainer.classList.add('todo-item');
  todoContainer.innerHTML = `
    <span class="todo-info" id="${id}">${title}</span>
    <div class="todo-nav">
      <button class="todo-check">
        <i class="fas fa-check"></i>
      </button>
      <button class="todo-trash">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  todoContainer.addEventListener('click', deleteHandler.bind(null, id));
  const todoList = document.querySelector('.todo-list');
  todoList.appendChild(todoContainer);
  updateUI();

  //Clear Input Value
  todoInput.value = '';
};


function addTodoHandler() {
  const titleValue = todoInput.value;

  // add object with key and value
  const newTodo = {
    id: Math.floor(Math.random() * 16 + 1),
    title: titleValue,
  };

  //call fn add with params
  addTodo(
    newTodo.id,
    newTodo.title);
  //pushing elements
  todoElements.push(newTodo);
  updateUI();
};

