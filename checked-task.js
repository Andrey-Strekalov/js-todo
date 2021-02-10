

/* Смена статуса задачи*/

function toggleTask(event) {
  const li = event.target.parentNode.parentNode;
  let newTasksList = tasksList.map((task) =>
    task.id !== li.id ? task : { ...task, completed: !task.completed }
  );
  tasksList = newTasksList;
  renderTask(tasksList);
  toggleDisplayBtn();
}

/* Считаем активные задачи */

function countActiveTasks() {
  const strong = document.querySelector("strong");
  let term = tasksList.filter((task) => !task.completed).length;
  strong.innerHTML = term;
}
