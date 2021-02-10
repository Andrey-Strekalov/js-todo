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

/* Добавляем задачу */

function addNewTask() {
  let input = document.getElementById("newTask");
  tasksList.push({
    id: getID(),
    text: input.value,
    completed: false,
  });
  renderTask(tasksList);
  input.value = "";
  checkFooter();
}

/* Удаляем задачу */

function deleteTask(event) {
  let id = event.target.parentNode.parentNode.id;
  let newTasksList = tasksList.filter((task) => task.id !== id);
  tasksList = newTasksList;
  renderTask(tasksList);
  checkFooter();
}
