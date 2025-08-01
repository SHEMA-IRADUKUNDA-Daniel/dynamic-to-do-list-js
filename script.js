document.addEventListener("DOMContentLoaded", (e) => {});
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
  } else {
    const task = document.createElement("li");
    task.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      task.remove();
    });
    task.appendChild(removeButton);
    taskList.appendChild(task);
    taskInput.value = "";
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", addTask);
}

addTask();
