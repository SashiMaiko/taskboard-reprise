(function (root) {
  "use strict";

  function renderTasks(tasks, list, onToggle) {
    const rows = tasks.map((task) => {
      const row = document.createElement("li");
      row.className = task.done ? "done" : "";
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.addEventListener("change", () => onToggle(task.id));
      const title = document.createElement("span");
      title.textContent = task.title;
      label.append(checkbox, title);
      row.append(label);
      return row;
    });
    list.replaceChildren(...rows);
  }

  root.TaskView = { renderTasks };
})(globalThis);
