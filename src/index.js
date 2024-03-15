import newToDo from './todo.js';
import newProject from './project.js';
import accessStorage from './storage.js';

console.log("Webpack Running");

// on load, pull projects from local storage
// new project button populates DOM and local storage list
// new to-do button adds a to-do item within the project
// projects and to-do items have a checkbox to mark complete
// projects and to-do items display as complete or incomplete

const projectDisplay = document.querySelector('#project-list');
const toDoDisplay = document.querySelector('#todo');

let projectList = accessStorage();

function clearProjects() {
    while (projectDisplay.firstChild) {
        projectDisplay.removeChild(projectDisplay.firstChild);
    };
};

function clearToDo() {
    while (toDoDisplay.firstChild) {
        toDoDisplay.removeChild(projectDisplay.firstChild);
    };
};