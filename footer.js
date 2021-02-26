/* Отображаем или скрываем кнопку clear completed */

function toggleDisplayBtn() {
  const btn = document.querySelector(".clear-completed");
  const completedTasks = tasksList.filter((task) => task.completed);
  btn.style.display = completedTasks.length > 0 ? "block" : "none";
}

toggleDisplayBtn();

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
  const FilterValue = document.getElementById("all").getAttribute("href");
  toggleFilterClass(FilterValue);
}

/* выполненные задачи */

function filterCompleted() {
  const newTasksList = tasksList.filter((task) => task.completed);
  renderTask(newTasksList);
  const FilterValue = document.getElementById("completed").getAttribute("href");
  toggleFilterClass(FilterValue);
}

/* активные задачи */

function filterActive() {
  const newTasksList = tasksList.filter((task) => !task.completed);
  renderTask(newTasksList);
  const FilterValue = document.getElementById("active").getAttribute("href");
  toggleFilterClass(FilterValue);
}

/* Отображаем или скрываем футер в зависимости от наличия задач */

function checkFooter() {
  const footer = document.querySelector("footer");
  if (localStorage.getItem("task") !== 0) {
    footer.style.display = "block"
  } else{
    footer.style.display = "none"
  }
}

/* Сохраняем выбранный фильтр после перезагрузки страницы */

function checkFilter() {
  const hash = window.location.hash;
  if (hash == "#/") {
    filterAll();
  } else if (hash == "#/active") {
    filterActive();
  } else if (hash == "#/completed") {
    filterCompleted();
  }
  toggleFilterClass(hash);
}

function toggleFilterClass(href) {
  document.querySelectorAll(".FilterBtn").forEach((link) => {
    if (link.getAttribute("href") == href) {
      link.classList.add("selected");
    } else {
      link.classList.remove("selected");
    }
  });
}

checkFilter();
checkFooter();