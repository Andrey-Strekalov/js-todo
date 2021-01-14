var tasksList = [{ id: "1", text: "выучить html", completed: true }];

function createListItem(task) {
  const div = document.createElement("div");
  div.className = "view";

  const input = document.createElement("input");
  input.className = "toggle";
  input.type = "checkbox";
  input.checked = task.completed;

  const label = document.createElement("label");
  label.innerHTML = task.text;

  const btn = document.createElement("button");
  btn.className = "destroy";


  div.appendChild(input);
  div.appendChild(label);
  div.appendChild(btn);

  const li = document.createElement("li");
  li.setAttribute("id", task.id);
  li.appendChild(div);

  return li;
}

function renderTask(tasks) {
  let ul = document.querySelector("ul");
  for (let task of tasksList) {
    let li = createListItem(task);
    ul.appendChild(li);
  }
}

renderTask(tasksList);