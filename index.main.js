/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    height: 100vh;
    width: 100vw;
   display: grid;
   grid-template-columns: 1fr 4fr;
   grid-template-rows: 1fr 9fr;
}

#header {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    border-bottom: 2px solid black;
    height: 10vh;
}

#sidebar {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    border-right: 2px solid black;
}

#project {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
}

#proj-info {
    grid-row: 1 / 2;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#todo {
    grid-row: 2 / 3;
    border: 1px solid green;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;GACb,aAAa;GACb,8BAA8B;GAC9B,2BAA2B;AAC9B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,uBAAuB;AAC3B","sourcesContent":["body {\n    height: 100vh;\n    width: 100vw;\n   display: grid;\n   grid-template-columns: 1fr 4fr;\n   grid-template-rows: 1fr 9fr;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    border-bottom: 2px solid black;\n    height: 10vh;\n}\n\n#sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border-right: 2px solid black;\n}\n\n#project {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n#proj-info {\n    grid-row: 1 / 2;\n    border-bottom: 2px solid black;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#todo {\n    grid-row: 2 / 3;\n    border: 1px solid green;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
function accessStorage() {
  return JSON.parse(localStorage.getItem('toDoProjects') || '[]');
};

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





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
        object.list.push((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(formObj.title, formObj.desc, formObj.dueDate, formObj.priority));
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
let projectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

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
    projectList.unshift((0,_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])(formObj.title, '', formObj.due, ''));
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgIGRpc3BsYXk6IGdyaWQ7XG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMTB2aDtcbn1cblxuI3NpZGViYXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG59XG5cbiNwcm9qZWN0IHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xufVxuXG4jcHJvai1pbmZvIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3RvZG8ge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtHQUNiLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsMkJBQTJCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Byb2plY3Qge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuI3Byb2otaW5mbyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdCh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBsZXQgdGl0bGUgPSB0dGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgbGV0IGR1ZURhdGUgPSBkdWU7IFxuICAgIGxldCBwcmlvcml0eSA9IHByaW9cbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGxldCBkb25lID0gZmFsc2VcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxpc3QsIGRvbmUgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2Nlc3NTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Byb2plY3RzJykgfHwgJ1tdJyk7XG59O1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH07XG4gIH07XG4gIFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbm5vdCBiZSBhY2Nlc3NlZCwgdGhyb3cgYW4gZXJyb3Igb3IgYWxlcnRcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBjYW4gYmUgYWNjZXNzZWQsIHB1bGwgcHJvamVjdCBsaXN0IGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuICAvLyBpZiBubyBwcm9qZWN0IGxpc3QgaW4gbG9jYWwgc3RvcmFnZSwgbWFrZSBvbmVcbiAgLy8gYmUgYWJsZSB0byBwdXNoIG5ldyBwcm9qZWN0cyB0byBwcm9qZWN0IGxpc3QgYXJyYXkgaW4gc3RvcmFnZVxuICAvLyBiZSBhYmxlIHRvIHVwZGF0ZSBwcm9qZWN0IHByb3BlcnRpZXMgd2l0aGluIHRoZSBwcm9qZWN0IGxpc3QiLCIvL2NyZWF0ZSB0byBkbyBpdGVtXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1RvRG8odHRsZSwgZGVzYywgZHVlLCBwcmlvKSB7XG4gICAgbGV0IHRpdGxlID0gdHRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIGxldCBkdWVEYXRlID0gZHVlO1xuICAgIGxldCBwcmlvcml0eSA9IHByaW87XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBuZXdUb0RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGFjY2Vzc1N0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5jb25zdCBwcm9qSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWluZm8nKTtcbmNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcblxuLy9wb3B1bGF0aW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcG9wdWxhdGVUb0RvKG9iamVjdCkge1xuICAgIC8vIHBvcHVsYXRlIHByb2plY3QgaW5mbyBzZWN0aW9uIHdpdGggdGl0bGUsIGRlc2MsIGR1ZSBkYXRlXG4gICAgY29uc3QgcHJvalRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwcm9qVGl0bGUuaW5uZXJIVE1MID0gb2JqZWN0LnRpdGxlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG5cbiAgICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRGVzYy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgcHJvakRlc2MuaW5uZXJIVE1MID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEZXNjKTtcblxuICAgIGNvbnN0IHByb2pEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvakR1ZS5pZCA9ICdkdWUtZGF0ZSc7XG4gICAgcHJvakR1ZS5pbm5lckhUTUwgPSBcIkR1ZTogXCIgKyBvYmplY3QuZHVlRGF0ZTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qRHVlKTtcblxuICAgIGNvbnN0IHByb2pQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pQcmlvLmlkID0gJ3ByaW9yaXR5JztcbiAgICBwcm9qUHJpby5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIG9iamVjdC5wcmlvcml0eTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qUHJpbyk7XG5cbiAgICAvLyBoYXZlIG1ldGhvZHMgdG8gY2hhbmdlIGFsbCBwcm9qZWN0IGluZm9cbiAgICBjb25zdCBwcm9qQ2hhbmdlRGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgcHJvakNoYW5nZURpYS5pZCA9ICdjaGFuZ2UtcHJvai1kaWEnO1xuICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pDaGFuZ2VEaWEpO1xuXG4gICAgY29uc3QgcHJvakNoYW5nZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvakNoYW5nZUZvcm0uaWQgPSAnY2hhbmdlLXByb2otZm9ybSc7XG4gICAgcHJvakNoYW5nZURpYS5hcHBlbmRDaGlsZChwcm9qQ2hhbmdlRm9ybSk7XG5cbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hhbmdlVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBjaGFuZ2VUaXRsZS5uYW1lID0gJ3RpdGxlJztcbiAgICBjaGFuZ2VUaXRsZS5pZCA9ICdjaGFuZ2UtdGl0bGUnO1xuICAgIGNoYW5nZVRpdGxlLnBsYWNlaG9sZGVyID0gb2JqZWN0LnRpdGxlO1xuICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZVRpdGxlKTtcblxuICAgIGNvbnN0IGNoYW5nZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoYW5nZURlc2MudHlwZSA9ICd0ZXh0JztcbiAgICBjaGFuZ2VEZXNjLm5hbWUgPSAnZGVzYyc7XG4gICAgY2hhbmdlRGVzYy5pZCA9ICdjaGFuZ2UtZGVzYyc7XG4gICAgY2hhbmdlRGVzYy5wbGFjZWhvbGRlciA9IG9iamVjdC5kZXNjIHx8IFwiRGVzY3JpcHRpb25cIjtcbiAgICBwcm9qQ2hhbmdlRm9ybS5hcHBlbmRDaGlsZChjaGFuZ2VEZXNjKTtcblxuICAgIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoYW5nZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICBjaGFuZ2VEYXRlLm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgY2hhbmdlRGF0ZS5pZCA9ICdjaGFuZ2UtZHVlJztcbiAgICBwcm9qQ2hhbmdlRm9ybS5hcHBlbmRDaGlsZChjaGFuZ2VEYXRlKTtcblxuICAgIGNvbnN0IGNoYW5nZVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjaGFuZ2VQcmlvLmlkID0gJ2NoYW5nZS1wcmlvJztcbiAgICBjaGFuZ2VQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZVByaW8pO1xuXG4gICAgY29uc3QgY2hhbmdlSGlnaFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjaGFuZ2VIaWdoUHJpby52YWx1ZSA9ICdoaWdoJztcbiAgICBjaGFuZ2VIaWdoUHJpby5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgY2hhbmdlUHJpby5hcHBlbmRDaGlsZChjaGFuZ2VIaWdoUHJpbyk7XG5cbiAgICBjb25zdCBjaGFuZ2VNZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY2hhbmdlTWVkUHJpby52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIGNoYW5nZU1lZFByaW8uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG4gICAgY2hhbmdlUHJpby5hcHBlbmRDaGlsZChjaGFuZ2VNZWRQcmlvKTtcblxuICAgIGNvbnN0IGNoYW5nZUxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjaGFuZ2VMb3dQcmlvLnZhbHVlID0gJ2xvdyc7XG4gICAgY2hhbmdlTG93UHJpby5pbm5lckhUTUwgPSAnTG93JztcbiAgICBjaGFuZ2VQcmlvLmFwcGVuZENoaWxkKGNoYW5nZUxvd1ByaW8pO1xuXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICBjaGFuZ2VCdXR0b24uaW5uZXJIVE1MID0gJ0NoYW5nZSc7XG4gICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICBvYmplY3QudGl0bGUgPSBmb3JtT2JqLnRpdGxlO1xuICAgICAgICBvYmplY3QuZGVzY3JpcHRpb24gPSBmb3JtT2JqLmRlc2M7XG4gICAgICAgIG9iamVjdC5kdWVEYXRlID0gZm9ybU9iai5kdWVEYXRlO1xuICAgICAgICBvYmplY3QucHJpb3JpdHkgPSBmb3JtT2JqLnByaW9yaXR5O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgIHByb2pDaGFuZ2VGb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IHByb2pDaGFuZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qQ2hhbmdlQnRuLmlkID0gJ2NoYW5nZS1wcm9qLWJ0bic7XG4gICAgcHJvakNoYW5nZUJ0bi5pbm5lckhUTUwgPSAnQ2hhbmdlIFByb2plY3QgSW5mbydcbiAgICBwcm9qQ2hhbmdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pDaGFuZ2VCdG4pO1xuXG4gICAgLy8gcHJvamVjdCBpbmZvIGhhcyBhIGJ1dHRvbiB0byBtYXJrIHRoZSBwcm9qZWN0IGNvbXBsZXRlIG9yIGluY29tcGxldGVcbiAgICBjb25zdCBjb21wbGV0ZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAob2JqZWN0LmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pZCA9ICdjb21wbGV0ZS1wcm9qZWN0JztcbiAgICAgICAgY29tcGxldGVQcm9qLmlubmVySFRNTCA9ICdNYXJrIFByb2plY3QgQ29tcGxldGUnXG4gICAgICAgIGNvbXBsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGVQcm9qLmlkID0gJ3VuZG8tY29tcGxldGUtcHJvamVjdCc7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pbm5lckhUTUwgPSAnTWFyayBQcm9qZWN0IEluY29tcGxldGUnXG4gICAgICAgIGNvbXBsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVQcm9qKTtcbiAgICBcbiAgICAvLyBsb29wIHRoZSBiZWxvdyBmb3IgYWxsIHRvRG8gaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB3aXRoaW4gdG9Eb0Rpc3BsYXlcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbScpO1xuICAgICAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7IFxuICAgICAgICAvLyBkaXYgaGFzIGEgcHJvbWluZW50IGNoZWNrYm94IHRvIGNoYW5nZSBjb21wbGV0ZSBzdGF0dXNcbiAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9Eb0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0b0RvQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgndG8tZG8tY2hlY2tib3gnKTtcbiAgICAgICAgaWYgKG9iamVjdC5saXN0W2ldLmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgIH07XG4gICAgICAgIHRvRG9DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgIG9iamVjdC5saXN0W2ldLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIG9iamVjdC5saXN0W2ldLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9DaGVja2JveCk7XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIGRpdiB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJyk7XG4gICAgICAgIHRvRG9UaXRsZS5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS50aXRsZTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVzYycpO1xuICAgICAgICB0b0RvRGVzYy5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9QcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvUHJpby5jbGFzc0xpc3QuYWRkKCd0by1kby1wcmlvJyk7XG4gICAgICAgIHRvRG9QcmlvLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLnByaW9yaXR5O1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvUHJpbyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcbiAgICAgICAgdG9Eb0RhdGUuaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0uZHVlRGF0ZTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgICAgICAvLyBwcmlvcml0eSBzaG91bGQgYWRqdXN0IHBvc2l0aW9uIGluIGxpc3RcbiAgICAgICAgLy8gaXRlbXMgc2hvdWxkIGJlIGFibGUgdG8gYmUgZGVsZXRlZFxuICAgIH07XG4gICAgLy8gaGF2ZSBhIGJ1dHRvbiB0byBjcmVhdGUgYSBuZXcgdG8tZG8gaXRlbVxuXG4gICAgY29uc3QgdG9Eb0RpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIHRvRG9EaWEuaWQgPSAnbmV3LXRvZG8tZGlhJztcbiAgICB0b0RvRGlhLm9wZW4gPSBmYWxzZTtcbiAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvRGlhKTtcblxuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvRG9Gb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nO1xuICAgIHRvRG9EaWEuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0VGl0bGUubmFtZSA9ICd0aXRsZSc7XG4gICAgaW5wdXRUaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcbiAgICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gJ1RvLURvJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREZXNjLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXREZXNjLm5hbWUgPSAnZGVzYyc7XG4gICAgaW5wdXREZXNjLmlkID0gJ3RvZG8tZGVzYyc7XG4gICAgaW5wdXREZXNjLnBsYWNlaG9sZGVyID0gJ0RldGFpbHMnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG5cbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0RGF0ZS5uYW1lID0gJ2R1ZURhdGUnO1xuICAgIGlucHV0RGF0ZS5pZCA9ICd0b2RvLWR1ZSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgIGNvbnN0IHNlbGVjdFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3RQcmlvLmlkID0gJ3RvZG8tcHJpbyc7XG4gICAgc2VsZWN0UHJpby5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvKTtcblxuICAgIGNvbnN0IGhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW8udmFsdWUgPSAnaGlnaCc7XG4gICAgaGlnaFByaW8uaW5uZXJIVE1MID0gJ0hpZ2gnO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQoaGlnaFByaW8pO1xuXG4gICAgY29uc3QgbWVkUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZFByaW8udmFsdWUgPSAnbWVkaXVtJztcbiAgICBtZWRQcmlvLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQobWVkUHJpbyk7XG5cbiAgICBjb25zdCBsb3dQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93UHJpby52YWx1ZSA9ICdsb3cnO1xuICAgIGxvd1ByaW8uaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChsb3dQcmlvKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gJ3RvZG8tc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ0NyZWF0ZSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuXG4gICAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSh0b0RvRm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICBvYmplY3QubGlzdC5wdXNoKG5ld1RvRG8oZm9ybU9iai50aXRsZSwgZm9ybU9iai5kZXNjLCBmb3JtT2JqLmR1ZURhdGUsIGZvcm1PYmoucHJpb3JpdHkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgdG9Eb0RpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgIHRvRG9Gb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb0RvQnRuLmlkID0gJ25ldy10b2RvLWJ0bic7XG4gICAgbmV3VG9Eb0J0bi5pbm5lckhUTUwgPSAnTmV3IEl0ZW0nXG4gICAgbmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9Eb0RpYS5vcGVuID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZChuZXdUb0RvQnRuKTtcbn07XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cygpIHtcbiAgICAvLyBsb29wIGZvciBhbGwgcHJvamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHByb2plY3QgZGl2IHdpdGhpbiBwcm9qZWN0RGlzcGxheVxuICAgICAgICBsZXQgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gICAgICAgIC8vIG1ha2UgdGhlIGRpdiBhYmxlIHRvIGJlIGhpZ2hsaWdodGVkIG9uIGNsaWNrXG4gICAgICAgIHByb2pEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCBhbGwgb3RoZXJzIHJlbW92ZSBoaWdobGlnaHRcbiAgICAgICAgICAgIGxldCBhbGxQcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxQcm9qcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGFsbFByb2pzW2FdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBzYW1lIGV2ZW50IHRyaWdnZXIgcG9wdWxhdGluZyBUb0RvIHdpdGggYSBzZXBhcmF0ZSBmdW5jdGlvblxuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ocHJvamVjdExpc3RbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IHRpdGxlIGFuZCBkdWUgZGF0ZSBpZiBpbmNvbXBsZXRlIGFuZCBjb21wbGV0ZSBpZiBjb21wbGV0ZVxuICAgICAgICBjb25zdCBwcm9qVHRsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qVHRsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvalR0bC5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdFtpXS50aXRsZTtcbiAgICAgICAgY29uc3QgcHJvakR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvai1pbmNvbXBsZXRlJyk7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5pbm5lckhUTUwgPSAnRHVlOiAnICsgcHJvamVjdExpc3RbaV0uZHVlRGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2otY29tcGxldGUnKTtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmlubmVySFRNTCA9ICdDT01QTEVURSc7XG4gICAgICAgIH07XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pUdGwpO1xuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pEdWVEYXRlKVxuICAgIH07XG4gICAgXG59O1xuXG4vL2NsZWFyaW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYXJQcm9qZWN0cygpIHtcbiAgICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gY2xlYXJUb0RvKCkge1xuICAgIHdoaWxlICh0b0RvRGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvRG9EaXNwbGF5LnJlbW92ZUNoaWxkKHRvRG9EaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKHByb2pJbmZvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvakluZm8ucmVtb3ZlQ2hpbGQocHJvakluZm8uZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbi8vIG9uIGxvYWQsIHB1bGwgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgcHJvamVjdExpc3QgPSBhY2Nlc3NTdG9yYWdlKCk7XG5cbmlmIChwcm9qZWN0TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgcG9wdWxhdGVQcm9qZWN0cygpO1xufTtcblxuLy8gbmV3IHByb2plY3QgYnV0dG9uIHBvcHVsYXRlcyBET00gYW5kIGxvY2FsIHN0b3JhZ2UgbGlzdFxuY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuY29uc3QgbmV3UHJvakRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1kaWFsb2d1ZScpO1xubmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG5cbm5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3UHJvakRpYS5vcGVuID0gdHJ1ZVxufSk7XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qLWZvcm0nKTtcblxucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakZvcm0pO1xuICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgIHByb2plY3RMaXN0LnVuc2hpZnQobmV3UHJvamVjdChmb3JtT2JqLnRpdGxlLCAnJywgZm9ybU9iai5kdWUsICcnKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgY2xlYXJQcm9qZWN0cygpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAvLyBoaWdobGlnaHQgdGhlIG5ldyBwcm9qZWN0IGFzIGlmIHNlbGVjdGVkXG4gICAgY2xlYXJUb0RvKCk7XG4gICAgY29uc3QgbGlzdFBsYWNlID0gcHJvamVjdExpc3QubGVuZ3RoIC0gMTtcbiAgICBwb3B1bGF0ZVRvRG8ocHJvamVjdExpc3RbbGlzdFBsYWNlXSk7XG4gICAgbmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG4gICAgcHJvakZvcm0ucmVzZXQoKTtcbn0pO1xuXG4vLyBuZXcgdG8tZG8gYnV0dG9uIGFkZHMgYSB0by1kbyBpdGVtIHdpdGhpbiB0aGUgcHJvamVjdFxuLy8gcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIGhhdmUgYSBjaGVja2JveCB0byBtYXJrIGNvbXBsZXRlXG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgZGlzcGxheSBhcyBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4vLyBjYW4gcmVhcnJhbmdlIHBsYWNlbWVudCBvZiBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=