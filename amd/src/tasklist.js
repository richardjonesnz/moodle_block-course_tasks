// Simplified from code by: https://www.udemy.com/user/brad-traversy/
import * as Str from 'core/str';
var error = [ {key:'notask', component: 'block_course_tasks'}];

// Define UI elements.
const form = document.querySelector("#block_course_tasks-task-form");
const tasklist = document.querySelector(".block_course_tasks-collection");
const clearBtn = document.querySelector(".block_course_tasks-clear-tasks");
const taskInput = document.querySelector("#block_course_tasks-task");
const messages = document.querySelector('#block_coursetasks-messages');

loadEventListeners();

// Load all event listeners.
function loadEventListeners() {
    // Add task event.
    form.addEventListener('submit', addTask);
    // Remove task event.
    tasklist.addEventListener("click", removeTask);
    // Clear all tasks.
    clearBtn.addEventListener("click", clearTasks);
}

function addTask() {

    if (taskInput.value !== '') {
        // Create a new li element, add class and text node.
        const li = document.createElement('li');
        li.className = 'block_course_tasks-collection-item list-group-item';
        li.appendChild(document.createTextNode(taskInput.value));

        // Create new link element with fa icon, add to li.
        const link = document.createElement('a');
        link.className = 'block_course_tasks-delete-item';
        link.innerHTML = '<i class="fa fa-times"></i>';

        li.appendChild(link);
        tasklist.appendChild(li);
        messages.innerHTML = " ";

    } else {
        Str.get_strings(error).then(function(result) {
            messages.innerHTML = result.toString();
        });
    }

    taskInput.value = '';
    event.preventDefault();
}

function removeTask() {
    // We put the event listener on the ul so find the a link.
    if (event.target.parentElement.parentElement.classList.contains('block_course_tasks-collection-item')) {
        event.target.parentElement.parentElement.remove();
    }
}

function clearTasks() {
    // window.console.log(tasklist.firstChild);
    while(tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild);
    }
}

export const get_tasks = () => {
    return 'task list';
};