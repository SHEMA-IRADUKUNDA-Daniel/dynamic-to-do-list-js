document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
      tasks.forEach((taskText) => {
        createTaskElement(taskText);
      });
    }
  }

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create and append a task <li>
  function createTaskElement(taskText) {
    const task = document.createElement("li");
    task.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      task.remove();
      tasks = tasks.filter((t) => t !== taskText);
      saveTasks();
    });

    task.appendChild(removeButton);
    taskList.appendChild(task);
  }
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
  }
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });
});

// addTask();
