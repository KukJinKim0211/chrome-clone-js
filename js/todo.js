const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";
// JSON.Stringify() => Array를 String으로 변환
// JSON.parse() => String을 Array로
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  //console.log(li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  li.remove();
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event){ 
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj ={
    text:newTodo,
    id: Date.now(),
  };
 // console.log(newTodo, toDoInput.value);
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // array 각각의 요소에 이벤트 실행
  parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}

[1, 2, 3, 4].filter(sexyFilter);