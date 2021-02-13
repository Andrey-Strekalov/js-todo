let tasksList = [];

/* загружаем задачи в localStorage */

function addLocalStorage() {
  localStorage.setItem("task", JSON.stringify(tasksList));
}

if (localStorage.getItem("task")) {
  tasksList = JSON.parse(localStorage.getItem("task"));
}


/* Создаем новую задачу */

function createListItem(task) {
  const div = document.createElement("div");
  div.className = "view";

  const input = document.createElement("input");
  input.className = "toggle";
  input.type = "checkbox";
  input.checked = task.completed;
  input.onclick = toggleTask;

  const label = document.createElement("label");
  label.innerHTML = task.text;

  const btn = document.createElement("button");
  btn.className = "destroy";
  btn.onclick = deleteTask;

  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(btn);

  const li = document.createElement("li");
  li.setAttribute("id", task.id);
  li.appendChild(div);
  if(task.completed){
    li.className = "completed"
  }

  return li;
}

/* Рендерим массив задач */

function renderTask(tasks) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (let task of tasks) {
    const li = createListItem(task);
    ul.appendChild(li);
    addLocalStorage(task);
  }
  countActiveTasks();
}

renderTask(tasksList);