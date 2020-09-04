//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoListItem = document.querySelectorAll('.todo-item');
const todoMark = document.querySelector('.todo-check');
const todoTrash = document.querySelector('.todo-trash');

//Event listeners
todoButton.addEventListener('click', addTodo);
//Functions

function addTodo(event) {
  //Prevent form submitting
  event.preventDefault();
  //Todo Container
  const todoContainer = document.createElement('li');
  todoContainer.innerText = todoInput.value;
  todoContainer.classList.add('todo-item');
  todoContainer.innerHTML = `
    <span class="todo-info">${todoInput.value}</span>
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

  const todoTrash = document.querySelector('.todo-trash');
  todoTrash.addEventListener('click', trashTodo);

  trashTodo(todoList);

}

function trashTodo() {
  for (i = 0, tmp = []; i < todoList.children.length; i++)
    tmp.push(todoList.children[i]);
  console.log(tmp);
  return tmp;
}

