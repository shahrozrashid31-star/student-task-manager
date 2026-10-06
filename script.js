function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    let task = document.createElement("div");
    task.className = "task";

    let taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    let taskTitle = document.createElement("h3");
    taskTitle.innerText = taskInput.value;

    let date = document.createElement("p");
    date.innerText = taskDate.value === ""
        ? "No due date"
        : "Due Date: " + taskDate.value;

    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(date);

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "complete-btn";

    completeButton.onclick = function () {
        taskInfo.classList.toggle("completed");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        task.remove();
    };

    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);

    task.appendChild(taskInfo);
    task.appendChild(buttons);

    taskList.appendChild(task);

    taskInput.value = "";
    taskDate.value = "";
}