const btn = document.getElementById("addBtn");

const tasklist = document.getElementById("task-list");

const taskInput = document.getElementById("taskInput");

// console.log(taskInput, btn, tasklist);

// create element

// btn.addEventListener("click", () => {
//   let li = document.createElement("li");
//   li.textContent = taskInput.value;
//   tasklist.appendChild(li);

//   let span = document.createElement("span");
//   let btnWrapper = document.createElement("div");

//   let completeButton = document.createElement("button");

//   completeButton.textContent = "✅";

//   let deleteButton = document.createElement("button");

//   deleteButton.textContent = "❌";

//   btnWrapper.appendChild(completeButton);

//   btnWrapper.appendChild(deleteButton);

//   li.appendChild(span);

//   li.appendChild(btnWrapper);

//   taskInput.value = "";
// });

let tasks = [];

let taskIdCounter = 1;

function rander() {
  tasklist.innerHTML = "";
  tasks.forEach((t) => {
    let li = document.createElement("li");

    li.classList.add("taskItem");
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = `${t.task} ${t.completed}`;

    let btnWrapper = document.createElement("div");
    btnWrapper.classList.add("task-button");

    let completeButton = document.createElement("button");
    completeButton.textContent = "✅";

    completeButton.addEventListener("click", () => {
      completeTask(tasks.id);
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    btnWrapper.appendChild(completeButton);
    btnWrapper.appendChild(deleteButton);

    li.appendChild(span);
    li.appendChild(btnWrapper);

    tasklist.appendChild(li);
  });
}

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText == "") {
    return;
  }

  let newtask = {
    id: taskIdCounter,
    task: taskText,
    completed: false,
  };

  tasks.push(newtask);
  taskInput.value = "";
  rander();
}

btn.addEventListener("click", addTask);

function completeTask(id) {
  let task = tasks.find((task) => task.id == id);
}
