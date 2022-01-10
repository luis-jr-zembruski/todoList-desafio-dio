function addTodo() {
  if (todo.value === "") {
    alert("Digite um valor para a Task!");
  } else {
    todoList.innerHTML = `${todoList.innerHTML} 
      <div class="todoItem">
        <input type="checkbox" id="${todo.value}">
        <label for="${todo.value}">${todo.value}</label>
        <br>
      </div>
    `;
    todo.value = "";
  }
}