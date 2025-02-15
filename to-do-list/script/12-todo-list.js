const todoList = [{
  name: 'wash clothes',
  dueDate: '2022-12-22'
},{
  name: 'prepare lunch',
  dueDate: '2022-12-22'
}];


renderTodoList();

function renderTodoList(){
  let todolistHTML = '';

  todoList.forEach(function(todoObject, index){
    
    const {name, dueDate} = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todolistHTML = todolistHTML + html;
  });

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dataInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dataInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}