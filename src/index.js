import newToDo from './todo.js';
import newProject from './project.js';
import accessStorage from './storage.js';

const projectDisplay = document.querySelector('#project-list');
const projInfo = document.querySelector('#proj-info');
const toDoDisplay = document.querySelector('#todo');

//clearing functions
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

// on load, pull projects from local storage
let projectList = accessStorage();

// new project button populates DOM and local storage list
const newProjBtn = document.querySelector('#new-project');
const newProjDia = document.querySelector('new-proj-dialogue');
newProjDia.open = false;

newProjBtn.addEventListener('click', () => {
    newProjDia.open = true
});

const projForm = document.querySelector('#new-proj-form');

projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(projForm);
    const formObj = Object.fromEntries(fd);
    projectList.push(newProject(formObj.title, '', '', ''));
    clearProjects();
    // add populate projects
    clearToDo();
    // add populate toDo
    newProjDia.open = false;
    projForm.reset();
});

// new to-do button adds a to-do item within the project
// projects and to-do items have a checkbox to mark complete
// projects and to-do items display as complete or incomplete
// can rearrange placement of projects and to-do items