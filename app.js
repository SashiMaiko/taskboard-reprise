"use strict";
const tasks = [];
let nextId = 1;
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-title");
const list = document.querySelector("#task-list");
const message = document.querySelector("#message");

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (task) task.done = !task.done;
  TaskView.renderTasks(tasks, list, toggleTask);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  try {
    const task = TaskLogic.createTask(input.value, nextId);
    if (task) {
      tasks.push(task);
      nextId += 1;
      input.value = "";
      TaskView.renderTasks(tasks, list, toggleTask);
    }
  } catch (error) {
    message.textContent = error.message;
  }
  input.focus();
});
TaskView.renderTasks(tasks, list, toggleTask);
