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

function renderTask(tasks) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (let task of tasksList) {
    const li = createListItem(task);
    ul.appendChild(li);
  }
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
  renderTask();
  input.value = "";
}

function deleteTask(event) {
  let id = event.target.parentNode.parentNode.id;
  let newTasksList = tasksList.filter((task) => task.id !== id);
  tasksList = newTasksList;
  renderTask(tasksList);
}

function toggleTask(event) {
  let li = event.target.parentNode.parentNode;
  let newTasksList = tasksList.map((task) => {
    if (task.id === li.id) {
      return { id: li.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
  tasksList = newTasksList;
  renderTask(tasksList);
  console.log(tasksList);
}
