/* Отображаем или скрываем кнопку clear completed */

function toggleDisplayBtn() {
  const btn = document.querySelector(".clear-completed");
  const completedTasks = tasksList.filter((task) => task.completed);
  btn.style.display = completedTasks.length > 0 ? "block" : "none";
}

toggleDisplayBtn()

/* Удаляем выполненные задачи*/

function clearCompleted() {
  let newTaskList = tasksList.filter((task) => !task.completed);
  tasksList = newTaskList;
  renderTask(tasksList);
  toggleDisplayBtn();
  checkFooter();
}


/* Фильтры */

/* все задачи */

function filterAll() {
  renderTask(tasksList);
}

/* выполненные задачи */

function filterCompleted() {
  const newTasksList = tasksList.filter((task) => task.completed);
  renderTask(newTasksList);
}

/* активные задачи */

function filterActive() {
  const newTasksList = tasksList.filter((task) => !task.completed);
  renderTask(newTasksList);
}

/* Отображаем или скрываем футер в зависимости от наличия задач */

function checkFooter() {
  const footer = document.querySelector("footer");
  footer.style.display = tasksList.length == 0 ? "none" : "block";
}

/* Сохраняем выбранный фильтр после перезагрузки страницы */

function checkFilter() {
  const hash = window.location.hash;
  if (hash == "#/all") {
    filterAll();
  } else if (hash == "#/active") {
    filterActive();
  } else if (hash == "#/completed") {
    filterCompleted();
  }
}
checkFilter();

