// Define UI elements.
const form = document.querySelector("#block_coursetasks-task-form");
const tasklist = document.querySelector(".block_coursetasks-collection");
const clearBtn = document.querySelector(".block_coursetasks-clear-tasks");
const taskInput = document.querySelector("#block_coursetasks-task");

// Load all event listeners.
function loadEventListeners() {
    // Add task event.
    form.addEventListener('submit', addTask);
    // Remove task event.
    tasklist.addEventListener("click", removeTask);
    // Clear all tasks.
    clearBtn.addEventListener("click", clearTasks);
    //  Filter tasks.
}

function addTask(e) {

    if (taskInput.value === "") {
        alert("Add a task");
    }

    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {

}

function clearTasks(e) {

}

export const get_tasks = () => {
    return 'task list';
}