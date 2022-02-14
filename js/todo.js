const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function checkToDo(e) {
  const span = e.target.previousElementSibling;

  span.classList.toggle("done");
  
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.style.marginBottom = "30px";
  li.style.color = "white";

  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const delButton = document.createElement("delButton");
  delButton.innerText = "❌";
  delButton.style.border = "none";
  delButton.style.outline = "none";
  delButton.style.backgroundColor = "rgba(0, 0, 0, 0)";
  delButton.style.fontSize = "30px";
  delButton.style.marginLeft = "15px";

  const checkButton = document.createElement("delButton");
  checkButton.innerText = "✅";
  checkButton.style.border = "none";
  checkButton.style.outline = "none";
  checkButton.style.backgroundColor = "rgba(0, 0, 0, 0)";
  checkButton.style.fontSize = "30px";
  checkButton.style.marginLeft = "15px";

  delButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", checkToDo);
  li.appendChild(span);
  li.appendChild(checkButton);
  li.appendChild(delButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}