const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDos(event) {
    const btn = event.target;
    const li = btn.parentNode;
    
    toDoList.removeChild(li);

    const cleanToDo = toDos.filter(
        function(toDo) {
            return toDo.id !== parseInt(li.id);
        }
    );
    toDos = cleanToDo;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    span.innerText = text;

    delBtn.addEventListener("click", deleteToDos)
    
    toDoList.appendChild(li);

    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);

    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    paintToDos(currentValue);

    toDoInput.value = "";
}


function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDo = JSON.parse(loadedToDos);
        parsedToDo.forEach(function (toDo) {
            paintToDos(toDo.text);
        })
    }
}


function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();