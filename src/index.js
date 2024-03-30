import './style.css'
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
    projDue.innerHTML = "Due: " + object.dueDate;
    projInfo.appendChild(projDue);

    const projPrio = document.createElement('p');
    projPrio.id = 'priority';
    projPrio.innerHTML = "Priority: " + object.priority;
    projInfo.appendChild(projPrio);

    // have methods to change all project info
    const projChangeDia = document.createElement('dialog');
    projChangeDia.id = 'change-proj-dia';
    projChangeDia.open = false;
    projInfo.appendChild(projChangeDia);

    const projChangeForm = document.createElement('form');
    projChangeForm.id = 'change-proj-form';
    projChangeDia.appendChild(projChangeForm);

    const changeTitle = document.createElement('input');
    changeTitle.type = 'text';
    changeTitle.name = 'title';
    changeTitle.id = 'change-title';
    changeTitle.placeholder = object.title;
    projChangeForm.appendChild(changeTitle);

    const changeDesc = document.createElement('input');
    changeDesc.type = 'text';
    changeDesc.name = 'desc';
    changeDesc.id = 'change-desc';
    changeDesc.placeholder = object.desc || "Description";
    projChangeForm.appendChild(changeDesc);

    const changeDate = document.createElement('input');
    changeDate.type = 'date';
    changeDate.name = 'dueDate';
    changeDate.id = 'change-due';
    projChangeForm.appendChild(changeDate);

    const changePrio = document.createElement('select');
    changePrio.id = 'change-prio';
    changePrio.name = 'priority';
    projChangeForm.appendChild(changePrio);

    const changeHighPrio = document.createElement('option');
    changeHighPrio.value = 'high';
    changeHighPrio.innerHTML = 'High';
    changePrio.appendChild(changeHighPrio);

    const changeMedPrio = document.createElement('option');
    changeMedPrio.value = 'medium';
    changeMedPrio.innerHTML = 'Medium';
    changePrio.appendChild(changeMedPrio);

    const changeLowPrio = document.createElement('option');
    changeLowPrio.value = 'low';
    changeLowPrio.innerHTML = 'Low';
    changePrio.appendChild(changeLowPrio);

    const changeButton = document.createElement('button');
    changeButton.type = 'submit';
    changeButton.id = 'proj-change-submit';
    changeButton.innerHTML = 'Change';
    projChangeForm.appendChild(changeButton)

    projChangeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(projChangeForm);
        const formObj = Object.fromEntries(fd);
        object.title = formObj.title;
        object.description = formObj.desc;
        object.dueDate = formObj.dueDate;
        object.priority = formObj.priority;
        localStorage.setItem('toDoProjects', JSON.stringify(projectList));
        clearProjects();
        populateProjects();
        clearToDo();
        populateToDo(object);
        projChangeDia.open = false;
        projChangeForm.reset();
    });


    const projChangeBtn = document.createElement('button');
    projChangeBtn.id = 'change-proj-btn';
    projChangeBtn.innerHTML = 'Change Project Info'
    projChangeBtn.addEventListener('click', () => {
        projChangeDia.open = true;
    });
    projInfo.appendChild(projChangeBtn);

    // project info has a button to mark the project complete or incomplete
    const completeProj = document.createElement('button');
    if (object.done === false) {
        completeProj.id = 'complete-project';
        completeProj.innerHTML = 'Mark Project Complete'
        completeProj.addEventListener('click', () => {
            object.done = true;
            localStorage.setItem('toDoProjects', JSON.stringify(projectList));
            clearProjects();
            populateProjects();
            clearToDo();
            populateToDo(object);
        });
    } else {
        completeProj.id = 'undo-complete-project';
        completeProj.innerHTML = 'Mark Project Incomplete'
        completeProj.addEventListener('click', () => {
            object.done = false;
            localStorage.setItem('toDoProjects', JSON.stringify(projectList));
            clearProjects();
            populateProjects();
            clearToDo();
            populateToDo(object);
        });
    };
    projInfo.appendChild(completeProj);
    
    // loop the below for all toDo items
    for (let i = 0; i < object.list.length; i++) {
        // create a div within toDoDisplay
        const toDoItem = document.createElement('div');
        toDoItem.classList.add('to-do-item');
        toDoDisplay.appendChild(toDoItem); 
        // div has a prominent checkbox to change complete status
        const toDoCheckbox = document.createElement('input');
        toDoCheckbox.type = 'checkbox';
        toDoCheckbox.classList.add('to-do-checkbox');
        if (object.list[i].done === true) {
            toDoCheckbox.checked = true;
            toDoItem.style.backgroundColor = 'green';
        };
        toDoCheckbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                toDoItem.style.backgroundColor = 'green';
                object.list[i].done = true;
            } else {
                toDoItem.style.backgroundColor = 'white';
                object.list[i].done = false;
            };
            localStorage.setItem('toDoProjects', JSON.stringify(projectList));
        });
        toDoItem.appendChild(toDoCheckbox);

        // populate the div with title, description, priority, due date
        const toDoTitle = document.createElement('p');
        toDoTitle.classList.add('to-do-title');
        toDoTitle.innerHTML = object.list[i].title;
        toDoItem.appendChild(toDoTitle);

        const toDoDesc = document.createElement('p');
        toDoDesc.classList.add('to-do-desc');
        toDoDesc.innerHTML = object.list[i].description;
        toDoItem.appendChild(toDoDesc);

        const toDoPrio = document.createElement('p');
        toDoPrio.classList.add('to-do-prio');
        toDoPrio.innerHTML = object.list[i].priority;
        toDoItem.appendChild(toDoPrio);

        const toDoDate = document.createElement('p');
        toDoDate.classList.add('to-do-date');
        toDoDate.innerHTML = object.list[i].dueDate;
        toDoItem.appendChild(toDoDate);
        // priority should adjust position in list
        // items should be able to be deleted
    };
    // have a button to create a new to-do item

    const toDoDia = document.createElement('dialog');
    toDoDia.id = 'new-todo-dia';
    toDoDia.open = false;
    toDoDisplay.appendChild(toDoDia);

    const toDoForm = document.createElement('form');
    toDoForm.id = 'new-todo-form';
    toDoDia.appendChild(toDoForm);

    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.name = 'title';
    inputTitle.id = 'todo-title';
    inputTitle.placeholder = 'To-Do';
    toDoForm.appendChild(inputTitle);

    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.name = 'desc';
    inputDesc.id = 'todo-desc';
    inputDesc.placeholder = 'Details';
    toDoForm.appendChild(inputDesc);

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.name = 'dueDate';
    inputDate.id = 'todo-due';
    toDoForm.appendChild(inputDate);

    const selectPrio = document.createElement('select');
    selectPrio.id = 'todo-prio';
    selectPrio.name = 'priority';
    toDoForm.appendChild(selectPrio);

    const highPrio = document.createElement('option');
    highPrio.value = 'high';
    highPrio.innerHTML = 'High';
    selectPrio.appendChild(highPrio);

    const medPrio = document.createElement('option');
    medPrio.value = 'medium';
    medPrio.innerHTML = 'Medium';
    selectPrio.appendChild(medPrio);

    const lowPrio = document.createElement('option');
    lowPrio.value = 'low';
    lowPrio.innerHTML = 'Low';
    selectPrio.appendChild(lowPrio);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'todo-submit';
    submitButton.innerHTML = 'Create';
    toDoForm.appendChild(submitButton)

    toDoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(toDoForm);
        const formObj = Object.fromEntries(fd);
        object.list.push(newToDo(formObj.title, formObj.desc, formObj.dueDate, formObj.priority));
        localStorage.setItem('toDoProjects', JSON.stringify(projectList));
        clearToDo();
        populateToDo(object);
        toDoDia.open = false;
        toDoForm.reset();
    });


    const newToDoBtn = document.createElement('button');
    newToDoBtn.id = 'new-todo-btn';
    newToDoBtn.innerHTML = 'New Item'
    newToDoBtn.addEventListener('click', () => {
        toDoDia.open = true;
    });
    toDoDisplay.appendChild(newToDoBtn);
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
            clearToDo();
            populateToDo(projectList[i]);
        });
        // show project title and due date if incomplete and complete if complete
        const projTtl = document.createElement('p');
        projTtl.classList.add('project-title');
        projTtl.innerHTML = projectList[i].title;
        const projDueDate = document.createElement('p');
        if (projectList[i].done === false) {
            projDueDate.classList.add('proj-incomplete');
            projDueDate.innerHTML = 'Due: ' + projectList[i].dueDate;
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
        toDoDisplay.removeChild(toDoDisplay.firstChild);
    };
    while (projInfo.firstChild) {
        projInfo.removeChild(projInfo.firstChild);
    };
};

// on load, pull projects from local storage
let projectList = accessStorage();

if (projectList.length > 0) {
    populateProjects();
};

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
    projectList.unshift(newProject(formObj.title, '', formObj.due, ''));
    localStorage.setItem('toDoProjects', JSON.stringify(projectList));
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