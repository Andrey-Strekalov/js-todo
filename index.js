let tasksList = [];

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

  return li;
}

function countActiveTasks() {
  const strong = document.querySelector("strong");
  let term = tasksList.filter((task) => !task.completed).length;
  strong.innerHTML = term;
}

function renderTask(tasks) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (let task of tasks) {
    const li = createListItem(task);
    ul.appendChild(li);
  }
  countActiveTasks();
}

renderTask(tasksList);

function getID() {
  let id;
  if (tasksList.length === 0) {
    id = 1;
  } else {
    let taskIds = tasksList.map((item) => item.id);
    id = Math.max.apply(null, taskIds) + 1;
  }
  return String(id);
}

function addNewTask() {
  let input = document.getElementById("newTask");
  tasksList.push({
    id: getID(),
    text: input.value,
    completed: false,
  });
  renderTask(tasksList);
  input.value = "";
}

function deleteTask(event) {
  let id = event.target.parentNode.parentNode.id;
  let newTasksList = tasksList.filter((task) => task.id !== id);
  tasksList = newTasksList;
  renderTask(tasksList);
}

function toggleDisplayBtn() {
  const btn = document.querySelector(".clear-completed");
  const completedTasks = tasksList.filter((task) => task.completed);
  btn.style.display = completedTasks.length > 0 ? "block" : "none";
}

function toggleTask(event) {
  const li = event.target.parentNode.parentNode;
  let newTasksList = tasksList.map((task) =>
    task.id !== li.id ? task : { ...task, completed: !task.completed }
  );
  tasksList = newTasksList;
  renderTask(tasksList);
  toggleDisplayBtn();
}

function clearCompleted() {
  let newTaskList = tasksList.filter((task) => !task.completed);
  tasksList = newTaskList;
  renderTask(tasksList);
  toggleDisplayBtn();
}

function filterAll() {
  renderTask(tasksList);
}

function filterCompleted() {
  let newTasksList = tasksList.filter((task) => task.completed);
  renderTask(newTasksList);
}

function filterActive() {
  let newTasksList = tasksList.filter((task) => !task.completed);
  renderTask(newTasksList);
}
