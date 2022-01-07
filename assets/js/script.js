
function addTodo() {
  if (todo.value === "") {
    alert("Digite um valor para a Task!");
  } else {
    console.log(todoList.innerHTML)
    todoList.innerHTML = todoList.innerHTML + `<input type="checkbox" class="item" > ${todo.value} </input><br>`;
    todo.value = "";
  }
}