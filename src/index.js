import newToDo from './todo.js';
import newProject from './project.js';
import accessStorage from './storage.js';

const projectDisplay = document.querySelector('#project-list');
const projInfo = document.querySelector('#proj-info');
const toDoDisplay = document.querySelector('#todo');

//populating functions
function populateToDo(object) {
    // populate project info section with title, desc, due date
    const projTitle = document.createElement('h2');
    projTitle.innerHTML = object.title;
    projInfo.appendChild(projTitle);

    const projDesc = document.createElement('p');
    projDesc.classList.add('project-description');
    projDesc.innerHTML = object.description;
    projInfo.appendChild(projDesc);

    const projDue = document.createElement('p');
    projDue.id = 'due-date';
    projDue.innerHTML = object.dueDate;
    projInfo.appendChild(projDue);
    // have methods to change all project info
    // project info has a button to mark the project complete or incomplete
    const completeProj = document.createElement('button');
    if (object.done = false) {
        completeProj.id = 'complete-project';
        completeProj.innerHTML = 'Mark Project Complete'
        completeProj.addEventListener('click', () => {
            object.done = true;
            populateToDo(object);
        });
    } else {
        completeProj.id = 'undo-complete-project';
        completeProj.innerHTML = 'Mark Project Incomplete'
        completeProj.addEventListener('click', () => {
            object.done = false;
            populateToDo(object);
        });
    };
    // loop the below for all toDo items
    for (let i = 0; i < object.list.length; i++) {
        // create a div within toDoDisplay
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('to-do-item');
        toDoDisplay.appendChild(toDoItem); 
        // div has a prominent checkbox to change complete status
        toDoCheckbox = document.createElement('input');
        toDoCheckbox.type = 'checkbox';
        toDoCheckbox.classList.add('to-do-checkbox');
        toDoCheckbox.addEventListener('select', () => {
            toDoCheckbox.style.backgroundColor = 'green';
        });
        toDoCheckbox.addEventListener('unselect', () => {
            toDoCheckbox.style.backgroundColor = 'white';
        });
        toDoItem.appendChild(toDoCheckbox);
        // populate the div with title, description, priority, due date
        const toDoTitle = document.createElement('p');
        toDoTitle.classList.add('to-do-title');
        toDoItem.appendChild(toDoTitle);

        const toDoDesc = document.createElement('p');
        toDoDesc.classList.add('to-do-desc');
        toDoItem.appendChild(toDoDesc);

        const toDoPrio = document.createElement('p');
        toDoPrio.classList.add('to-do-prio');
        toDoItem.appendChild(toDoPrio);

        const toDoDate = document.createElement('p');
        toDoDate.classList.add('to-do-date');
        toDoItem.appendChild(toDoDate);
        // priority should adjust position in list
        // items should be able to be edited
    };
    // have a button to create a new to-do item
    
};


function populateProjects() {
    // loop for all projects
    for (let i = 0; i < projectList.length; i++) {
        // create a project div within projectDisplay
        let projDiv = document.createElement('div');
        projDiv.classList.add('project-div');
        // make the div able to be highlighted on click
        projDiv.addEventListener('click', () => {
            // when another project is clicked, all others remove highlight
            let allProjs = document.querySelectorAll('.project-div');
            for (let a = 0; a < allProjs.length; a++) {
                allProjs[a].style.backgroundColor = 'white';
            };
            projDiv.style.backgroundColor = 'blue';
            // make the same event trigger populating ToDo with a separate function
            populateToDo(projectList[i]);
        });
        // show project title and due date if incomplete and complete if complete
        const projTtl = document.createElement('p');
        projTtl.classList.add('project-title');
        projTtl.innerHTML = projectList[i].title;
        const projDueDate = document.createElement('p');
        if (projectList[i].done = false) {
            projDueDate.classList.add('proj-incomplete');
            projDueDate.innerHTML = projectList[i].dueDate;
        } else {
            projDueDate.classList.add('proj-complete');
            projDueDate.innerHTML = 'COMPLETE';
        };
        projectDisplay.appendChild(projDiv);
        projDiv.appendChild(projTtl);
        projDiv.appendChild(projDueDate)
    };
    
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
populateProjects();
populateToDo(projectList[0]);

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
    localStorage.setItem(projectList);
    clearProjects();
    populateProjects();
    // highlight the new project as if selected
    clearToDo();
    const listPlace = projectList.length - 1;
    populateToDo(projectList[listPlace]);
    newProjDia.open = false;
    projForm.reset();
});

// new to-do button adds a to-do item within the project
// projects and to-do items have a checkbox to mark complete
// projects and to-do items display as complete or incomplete
// can rearrange placement of projects and to-do items