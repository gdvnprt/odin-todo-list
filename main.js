/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProject)
/* harmony export */ });
function newProject(ttle, desc, due, prio) {
    let title = ttle;
    let description = desc;
    let dueDate = due; 
    let priority = prio
    let list = [];
    let done = false

    return { title, description, dueDate, priority, list, done };
};


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ accessStorage)
/* harmony export */ });
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    };
  };
  
  // if local storage cannot be accessed, throw an error or alert
  // if local storage can be accessed, pull project list array from local storage
  // if no project list in local storage, make one
  // be able to push new projects to project list array in storage
  // be able to update project properties within the project list

  function accessStorage() {
    if (storageAvailable("localStorage")) {
        if (!localStorage.getItem("projectList")) {
            return localStorage.getItem("projectList");
        } else {
            return [];
        }
    } else {
        alert("Cannot access local storage.  Please update your browser or use a different one.")
    };
  };

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newToDo)
/* harmony export */ });
//create to do item

function newToDo(ttle, desc, due, prio) {
    let title = ttle;
    let description = desc;
    let dueDate = due;
    let priority = prio;
    let done = false;

    return { title, description, dueDate, priority, done };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




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
    inputDate.name = 'due-date';
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
        const fd = new FormData(projForm);
        const formObj = Object.fromEntries(fd);
        object.list.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(formObj.title, formObj.description, formObj.dueDate, formObj.priority));
        localStorage.setItem(projectList);
        clearToDo();
        populateToDo(object);
        toDoDia.open = false;
        toDoForm.reset();
    });


    const newToDoBtn = document.createElement('button');
    newToDoBtn.id = 'new-todo-btn';
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
let projectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
populateProjects();

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
    projectList.unshift((0,_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])(formObj.title, '', '', ''));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3QodHRsZSwgZGVzYywgZHVlLCBwcmlvKSB7XG4gICAgbGV0IHRpdGxlID0gdHRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIGxldCBkdWVEYXRlID0gZHVlOyBcbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvXG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBsZXQgZG9uZSA9IGZhbHNlXG5cbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsaXN0LCBkb25lIH07XG59O1xuIiwiZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9O1xuICB9O1xuICBcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBjYW5ub3QgYmUgYWNjZXNzZWQsIHRocm93IGFuIGVycm9yIG9yIGFsZXJ0XG4gIC8vIGlmIGxvY2FsIHN0b3JhZ2UgY2FuIGJlIGFjY2Vzc2VkLCBwdWxsIHByb2plY3QgbGlzdCBhcnJheSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgLy8gaWYgbm8gcHJvamVjdCBsaXN0IGluIGxvY2FsIHN0b3JhZ2UsIG1ha2Ugb25lXG4gIC8vIGJlIGFibGUgdG8gcHVzaCBuZXcgcHJvamVjdHMgdG8gcHJvamVjdCBsaXN0IGFycmF5IGluIHN0b3JhZ2VcbiAgLy8gYmUgYWJsZSB0byB1cGRhdGUgcHJvamVjdCBwcm9wZXJ0aWVzIHdpdGhpbiB0aGUgcHJvamVjdCBsaXN0XG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWNjZXNzU3RvcmFnZSgpIHtcbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdExpc3RcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJDYW5ub3QgYWNjZXNzIGxvY2FsIHN0b3JhZ2UuICBQbGVhc2UgdXBkYXRlIHlvdXIgYnJvd3NlciBvciB1c2UgYSBkaWZmZXJlbnQgb25lLlwiKVxuICAgIH07XG4gIH07IiwiLy9jcmVhdGUgdG8gZG8gaXRlbVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUb0RvKHR0bGUsIGRlc2MsIGR1ZSwgcHJpbykge1xuICAgIGxldCB0aXRsZSA9IHR0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICBsZXQgZHVlRGF0ZSA9IGR1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBwcmlvO1xuICAgIGxldCBkb25lID0gZmFsc2U7XG5cbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG5ld1RvRG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgYWNjZXNzU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHByb2pJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otaW5mbycpO1xuY29uc3QgdG9Eb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuXG4vL3BvcHVsYXRpbmcgZnVuY3Rpb25zXG5mdW5jdGlvbiBwb3B1bGF0ZVRvRG8ob2JqZWN0KSB7XG4gICAgLy8gcG9wdWxhdGUgcHJvamVjdCBpbmZvIHNlY3Rpb24gd2l0aCB0aXRsZSwgZGVzYywgZHVlIGRhdGVcbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2pUaXRsZS5pbm5lckhUTUwgPSBvYmplY3QudGl0bGU7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcblxuICAgIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pEZXNjLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICBwcm9qRGVzYy5pbm5lckhUTUwgPSBvYmplY3QuZGVzY3JpcHRpb247XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvakRlc2MpO1xuXG4gICAgY29uc3QgcHJvakR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRHVlLmlkID0gJ2R1ZS1kYXRlJztcbiAgICBwcm9qRHVlLmlubmVySFRNTCA9IG9iamVjdC5kdWVEYXRlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEdWUpO1xuICAgIC8vIGhhdmUgbWV0aG9kcyB0byBjaGFuZ2UgYWxsIHByb2plY3QgaW5mb1xuICAgIC8vIHByb2plY3QgaW5mbyBoYXMgYSBidXR0b24gdG8gbWFyayB0aGUgcHJvamVjdCBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4gICAgY29uc3QgY29tcGxldGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKG9iamVjdC5kb25lID0gZmFsc2UpIHtcbiAgICAgICAgY29tcGxldGVQcm9qLmlkID0gJ2NvbXBsZXRlLXByb2plY3QnO1xuICAgICAgICBjb21wbGV0ZVByb2ouaW5uZXJIVE1MID0gJ01hcmsgUHJvamVjdCBDb21wbGV0ZSdcbiAgICAgICAgY29tcGxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pZCA9ICd1bmRvLWNvbXBsZXRlLXByb2plY3QnO1xuICAgICAgICBjb21wbGV0ZVByb2ouaW5uZXJIVE1MID0gJ01hcmsgUHJvamVjdCBJbmNvbXBsZXRlJ1xuICAgICAgICBjb21wbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBvYmplY3QuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gbG9vcCB0aGUgYmVsb3cgZm9yIGFsbCB0b0RvIGl0ZW1zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBkaXYgd2l0aGluIHRvRG9EaXNwbGF5XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0nKTtcbiAgICAgICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pOyBcbiAgICAgICAgLy8gZGl2IGhhcyBhIHByb21pbmVudCBjaGVja2JveCB0byBjaGFuZ2UgY29tcGxldGUgc3RhdHVzXG4gICAgICAgIHRvRG9DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9DaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdG9Eb0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNoZWNrYm94Jyk7XG4gICAgICAgIHRvRG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCd1bnNlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0NoZWNrYm94KTtcbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIGRpdiB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJyk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9EZXNjLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRlc2MnKTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9QcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvUHJpby5jbGFzc0xpc3QuYWRkKCd0by1kby1wcmlvJyk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9QcmlvKTtcblxuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG4gICAgICAgIC8vIHByaW9yaXR5IHNob3VsZCBhZGp1c3QgcG9zaXRpb24gaW4gbGlzdFxuICAgICAgICAvLyBpdGVtcyBzaG91bGQgYmUgYWJsZSB0byBiZSBlZGl0ZWRcbiAgICB9O1xuICAgIC8vIGhhdmUgYSBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHRvLWRvIGl0ZW1cblxuICAgIGNvbnN0IHRvRG9EaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICB0b0RvRGlhLmlkID0gJ25ldy10b2RvLWRpYSc7XG4gICAgdG9Eb0RpYS5vcGVuID0gZmFsc2U7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0RpYSk7XG5cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b0RvRm9ybS5pZCA9ICduZXctdG9kby1mb3JtJztcbiAgICB0b0RvRGlhLmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRpdGxlLm5hbWUgPSAndGl0bGUnO1xuICAgIGlucHV0VGl0bGUuaWQgPSAndG9kby10aXRsZSc7XG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9ICdUby1Ebyc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGVzYy50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RGVzYy5uYW1lID0gJ2Rlc2MnO1xuICAgIGlucHV0RGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xuICAgIGlucHV0RGVzYy5wbGFjZWhvbGRlciA9ICdEZXRhaWxzJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERhdGUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dERhdGUubmFtZSA9ICdkdWUtZGF0ZSc7XG4gICAgaW5wdXREYXRlLmlkID0gJ3RvZG8tZHVlJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgY29uc3Qgc2VsZWN0UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdFByaW8uaWQgPSAndG9kby1wcmlvJztcbiAgICBzZWxlY3RQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW8pO1xuXG4gICAgY29uc3QgaGlnaFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoUHJpby52YWx1ZSA9ICdoaWdoJztcbiAgICBoaWdoUHJpby5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChoaWdoUHJpbyk7XG5cbiAgICBjb25zdCBtZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkUHJpby52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIG1lZFByaW8uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChtZWRQcmlvKTtcblxuICAgIGNvbnN0IGxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dQcmlvLnZhbHVlID0gJ2xvdyc7XG4gICAgbG93UHJpby5pbm5lckhUTUwgPSAnTG93JztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKGxvd1ByaW8pO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uaWQgPSAndG9kby1zdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnQ3JlYXRlJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXG5cbiAgICB0b0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKHByb2pGb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgIG9iamVjdC5saXN0LnB1c2gobmV3VG9Ebyhmb3JtT2JqLnRpdGxlLCBmb3JtT2JqLmRlc2NyaXB0aW9uLCBmb3JtT2JqLmR1ZURhdGUsIGZvcm1PYmoucHJpb3JpdHkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdExpc3QpO1xuICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICB0b0RvRm9ybS5yZXNldCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VG9Eb0J0bi5pZCA9ICduZXctdG9kby1idG4nO1xuICAgIG5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IHRydWU7XG4gICAgfSk7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmV3VG9Eb0J0bik7XG59O1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoKSB7XG4gICAgLy8gbG9vcCBmb3IgYWxsIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9qZWN0IGRpdiB3aXRoaW4gcHJvamVjdERpc3BsYXlcbiAgICAgICAgbGV0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuICAgICAgICAvLyBtYWtlIHRoZSBkaXYgYWJsZSB0byBiZSBoaWdobGlnaHRlZCBvbiBjbGlja1xuICAgICAgICBwcm9qRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgYWxsIG90aGVycyByZW1vdmUgaGlnaGxpZ2h0XG4gICAgICAgICAgICBsZXQgYWxsUHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsUHJvanMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qc1thXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgc2FtZSBldmVudCB0cmlnZ2VyIHBvcHVsYXRpbmcgVG9EbyB3aXRoIGEgc2VwYXJhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgIHBvcHVsYXRlVG9Ebyhwcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzaG93IHByb2plY3QgdGl0bGUgYW5kIGR1ZSBkYXRlIGlmIGluY29tcGxldGUgYW5kIGNvbXBsZXRlIGlmIGNvbXBsZXRlXG4gICAgICAgIGNvbnN0IHByb2pUdGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2pUdGwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qVHRsLmlubmVySFRNTCA9IHByb2plY3RMaXN0W2ldLnRpdGxlO1xuICAgICAgICBjb25zdCBwcm9qRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmRvbmUgPSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvai1pbmNvbXBsZXRlJyk7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdFtpXS5kdWVEYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvai1jb21wbGV0ZScpO1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuaW5uZXJIVE1MID0gJ0NPTVBMRVRFJztcbiAgICAgICAgfTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gICAgICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvalR0bCk7XG4gICAgICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvakR1ZURhdGUpXG4gICAgfTtcbiAgICBcbn07XG5cbi8vY2xlYXJpbmcgZnVuY3Rpb25zXG5mdW5jdGlvbiBjbGVhclByb2plY3RzKCkge1xuICAgIHdoaWxlIChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBjbGVhclRvRG8oKSB7XG4gICAgd2hpbGUgKHRvRG9EaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9Eb0Rpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbi8vIG9uIGxvYWQsIHB1bGwgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgcHJvamVjdExpc3QgPSBhY2Nlc3NTdG9yYWdlKCk7XG5wb3B1bGF0ZVByb2plY3RzKCk7XG5cbi8vIG5ldyBwcm9qZWN0IGJ1dHRvbiBwb3B1bGF0ZXMgRE9NIGFuZCBsb2NhbCBzdG9yYWdlIGxpc3RcbmNvbnN0IG5ld1Byb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcbmNvbnN0IG5ld1Byb2pEaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2otZGlhbG9ndWUnKTtcbm5ld1Byb2pEaWEub3BlbiA9IGZhbHNlO1xuXG5uZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2pEaWEub3BlbiA9IHRydWVcbn0pO1xuXG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1mb3JtJyk7XG5cbnByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKHByb2pGb3JtKTtcbiAgICBjb25zdCBmb3JtT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZkKTtcbiAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KG5ld1Byb2plY3QoZm9ybU9iai50aXRsZSwgJycsICcnLCAnJykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RMaXN0KTtcbiAgICBjbGVhclByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgbmV3IHByb2plY3QgYXMgaWYgc2VsZWN0ZWRcbiAgICBjbGVhclRvRG8oKTtcbiAgICBjb25zdCBsaXN0UGxhY2UgPSBwcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgIHBvcHVsYXRlVG9Ebyhwcm9qZWN0TGlzdFtsaXN0UGxhY2VdKTtcbiAgICBuZXdQcm9qRGlhLm9wZW4gPSBmYWxzZTtcbiAgICBwcm9qRm9ybS5yZXNldCgpO1xufSk7XG5cbi8vIG5ldyB0by1kbyBidXR0b24gYWRkcyBhIHRvLWRvIGl0ZW0gd2l0aGluIHRoZSBwcm9qZWN0XG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgaGF2ZSBhIGNoZWNrYm94IHRvIG1hcmsgY29tcGxldGVcbi8vIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyBkaXNwbGF5IGFzIGNvbXBsZXRlIG9yIGluY29tcGxldGVcbi8vIGNhbiByZWFycmFuZ2UgcGxhY2VtZW50IG9mIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==