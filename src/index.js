import newToDo from './todo.js';
import newProject from './project.js';
import accessStorage from './storage.js';

const projectDisplay = document.querySelector('#project-list');
const projInfo = document.querySelector('#proj-info');
const toDoDisplay = document.querySelector('#todo');

//populating functions
function populateProjects() {
    // loop for all projects
    // create a project div within projectDisplay
    // make the div able to be highlighted on click
    // make the same event trigger populating ToDo with a separate function
    // when another project is clicked, all others remove highlight
    // show project title and due date if incomplete and complete if complete
};

function populateToDo() {
    // populate project info section with title, desc, due date
    // have methods to change all project info
    // project info has a button to mark the project complete or incomplete
    // loop the below for all toDo items
    // create a div within toDoDisplay
    // populate the div with title, description, priority, due date
    // div has a prominent checkbox to change complete status
};

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
const newProjDia = document.querySelector('#new-proj-dialogue');
newProjDia.open = false;

newProjBtn.addEventListener('click', () => {
    newProjDia.open = true
});

const projForm = document.querySelector('#new-proj-form');

projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(projForm);
    const formObj = Object.fromEntries(fd);
    projectList.unshift(newProject(formObj.title, '', '', ''));
    clearProjects();
    // add populate projects
    // highlight the new project as if selected
    clearToDo();
    // add populate toDo
    newProjDia.open = false;
    projForm.reset();
});

// new to-do button adds a to-do item within the project
// projects and to-do items have a checkbox to mark complete
// projects and to-do items display as complete or incomplete
// can rearrange placement of projects and to-do items