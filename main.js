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
    const title = ttle;
    const description = desc;
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
    const title = ttle;
    const description = desc;
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
function populateProjects() {
    // loop for all projects
    for (let i = 0; i < projectList.length; i++) {
        // create a project div within projectDisplay
        let projDiv = document.createElement('div');
        projDiv.classList.add('project-div');
        // make the div able to be highlighted on click
        projDiv.addEventListener('click', () => {
            projDiv.style.backgroundColor = 'blue';
            populateToDo();
        });
        // make the same event trigger populating ToDo with a separate function
        // when another project is clicked, all others remove highlight
        // show project title and due date if incomplete and complete if complete
    };
    
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
let projectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ007QUFDRzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3QodHRsZSwgZGVzYywgZHVlLCBwcmlvKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0dGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICBsZXQgZHVlRGF0ZSA9IGR1ZTsgXG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgbGV0IGRvbmUgPSBmYWxzZVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbGlzdCwgZG9uZSB9O1xufTtcbiIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbiAgXG4gIC8vIGlmIGxvY2FsIHN0b3JhZ2UgY2Fubm90IGJlIGFjY2Vzc2VkLCB0aHJvdyBhbiBlcnJvciBvciBhbGVydFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbiBiZSBhY2Nlc3NlZCwgcHVsbCBwcm9qZWN0IGxpc3QgYXJyYXkgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIC8vIGlmIG5vIHByb2plY3QgbGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBtYWtlIG9uZVxuICAvLyBiZSBhYmxlIHRvIHB1c2ggbmV3IHByb2plY3RzIHRvIHByb2plY3QgbGlzdCBhcnJheSBpbiBzdG9yYWdlXG4gIC8vIGJlIGFibGUgdG8gdXBkYXRlIHByb2plY3QgcHJvcGVydGllcyB3aXRoaW4gdGhlIHByb2plY3QgbGlzdFxuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY2Vzc1N0b3JhZ2UoKSB7XG4gICAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0TGlzdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiQ2Fubm90IGFjY2VzcyBsb2NhbCBzdG9yYWdlLiAgUGxlYXNlIHVwZGF0ZSB5b3VyIGJyb3dzZXIgb3IgdXNlIGEgZGlmZmVyZW50IG9uZS5cIilcbiAgICB9O1xuICB9OyIsIi8vY3JlYXRlIHRvIGRvIGl0ZW1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VG9Ebyh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBjb25zdCB0aXRsZSA9IHR0bGU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIGxldCBkdWVEYXRlID0gZHVlO1xuICAgIGxldCBwcmlvcml0eSA9IHByaW87XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbmV3VG9EbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IG5ld1Byb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBhY2Nlc3NTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5cbmNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuY29uc3QgcHJvakluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvai1pbmZvJyk7XG5jb25zdCB0b0RvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJyk7XG5cbi8vcG9wdWxhdGluZyBmdW5jdGlvbnNcbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoKSB7XG4gICAgLy8gbG9vcCBmb3IgYWxsIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9qZWN0IGRpdiB3aXRoaW4gcHJvamVjdERpc3BsYXlcbiAgICAgICAgbGV0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuICAgICAgICAvLyBtYWtlIHRoZSBkaXYgYWJsZSB0byBiZSBoaWdobGlnaHRlZCBvbiBjbGlja1xuICAgICAgICBwcm9qRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIG1ha2UgdGhlIHNhbWUgZXZlbnQgdHJpZ2dlciBwb3B1bGF0aW5nIFRvRG8gd2l0aCBhIHNlcGFyYXRlIGZ1bmN0aW9uXG4gICAgICAgIC8vIHdoZW4gYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGFsbCBvdGhlcnMgcmVtb3ZlIGhpZ2hsaWdodFxuICAgICAgICAvLyBzaG93IHByb2plY3QgdGl0bGUgYW5kIGR1ZSBkYXRlIGlmIGluY29tcGxldGUgYW5kIGNvbXBsZXRlIGlmIGNvbXBsZXRlXG4gICAgfTtcbiAgICBcbn07XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVG9EbygpIHtcbiAgICAvLyBwb3B1bGF0ZSBwcm9qZWN0IGluZm8gc2VjdGlvbiB3aXRoIHRpdGxlLCBkZXNjLCBkdWUgZGF0ZVxuICAgIC8vIGhhdmUgbWV0aG9kcyB0byBjaGFuZ2UgYWxsIHByb2plY3QgaW5mb1xuICAgIC8vIHByb2plY3QgaW5mbyBoYXMgYSBidXR0b24gdG8gbWFyayB0aGUgcHJvamVjdCBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4gICAgLy8gbG9vcCB0aGUgYmVsb3cgZm9yIGFsbCB0b0RvIGl0ZW1zXG4gICAgLy8gY3JlYXRlIGEgZGl2IHdpdGhpbiB0b0RvRGlzcGxheVxuICAgIC8vIHBvcHVsYXRlIHRoZSBkaXYgd2l0aCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWUgZGF0ZVxuICAgIC8vIGRpdiBoYXMgYSBwcm9taW5lbnQgY2hlY2tib3ggdG8gY2hhbmdlIGNvbXBsZXRlIHN0YXR1c1xufTtcblxuLy9jbGVhcmluZyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyVG9EbygpIHtcbiAgICB3aGlsZSAodG9Eb0Rpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b0RvRGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuLy8gb24gbG9hZCwgcHVsbCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCBwcm9qZWN0TGlzdCA9IGFjY2Vzc1N0b3JhZ2UoKTtcblxuLy8gbmV3IHByb2plY3QgYnV0dG9uIHBvcHVsYXRlcyBET00gYW5kIGxvY2FsIHN0b3JhZ2UgbGlzdFxuY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvakRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1kaWFsb2d1ZScpO1xubmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG5cbm5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3UHJvakRpYS5vcGVuID0gdHJ1ZVxufSk7XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qLWZvcm0nKTtcblxucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakZvcm0pO1xuICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgIHByb2plY3RMaXN0LnVuc2hpZnQobmV3UHJvamVjdChmb3JtT2JqLnRpdGxlLCAnJywgJycsICcnKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdExpc3QpO1xuICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAvLyBhZGQgcG9wdWxhdGUgcHJvamVjdHNcbiAgICAvLyBoaWdobGlnaHQgdGhlIG5ldyBwcm9qZWN0IGFzIGlmIHNlbGVjdGVkXG4gICAgY2xlYXJUb0RvKCk7XG4gICAgLy8gYWRkIHBvcHVsYXRlIHRvRG9cbiAgICBuZXdQcm9qRGlhLm9wZW4gPSBmYWxzZTtcbiAgICBwcm9qRm9ybS5yZXNldCgpO1xufSk7XG5cbi8vIG5ldyB0by1kbyBidXR0b24gYWRkcyBhIHRvLWRvIGl0ZW0gd2l0aGluIHRoZSBwcm9qZWN0XG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgaGF2ZSBhIGNoZWNrYm94IHRvIG1hcmsgY29tcGxldGVcbi8vIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyBkaXNwbGF5IGFzIGNvbXBsZXRlIG9yIGluY29tcGxldGVcbi8vIGNhbiByZWFycmFuZ2UgcGxhY2VtZW50IG9mIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==