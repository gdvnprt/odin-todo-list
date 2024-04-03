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
    display: flex;
    justify-content: center;
    align-items: center;
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

.project-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #959595;
}

#proj-info {
    grid-row: 1 / 2;
    border-bottom: 2px solid black;
    display: grid;
    grid-template-columns: 2fr 3fr 3fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
    align-items: center;
    padding-bottom: 2vh;
}

.change-button {
    width: 4vw;
    height: 4vh;
    font-size: .7rem;
}

#title-info {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

#title-change-btn {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

#desc-info {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
}

#desc-change-btn {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

#due-info {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
}

#due-change-btn {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

#prio-info {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
}

#prio-change-btn {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
}

#complete-project, #undo-complete-project {
    grid-column: 5 / 6;
    grid-row: 1 / 3;
    height: 6vh;
    width: 5vw;
    color: white;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
}

#complete-project {
    background-color: #1B8926;
}

#undo-complete-project {
    background-color: #A00000;
}

#todo {
    grid-row: 2 / 3;
    border: 1px solid green;
    overflow: scroll;
}

.to-do-item {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 2fr 3fr;
    align-items: center;
    padding-left: 3vw;
    gap: 8vw;
    border-bottom: 2px solid #959595;
}

.to-do-checkbox {
    -ms-transform: scale(2.5); /* IE */
    -moz-transform: scale(2.5); /* FF */
    -webkit-transform: scale(2.5); /* Safari and Chrome */
    -o-transform: scale(2.5); /* Opera */
    transform: scale(2.5);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;GACb,aAAa;GACb,8BAA8B;GAC9B,2BAA2B;AAC9B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,0CAA0C;IAC1C,2BAA2B;IAC3B,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;IACnB,iBAAiB;IACjB,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,yBAAyB,EAAE,OAAO;IAClC,0BAA0B,EAAE,OAAO;IACnC,6BAA6B,EAAE,sBAAsB;IACrD,wBAAwB,EAAE,UAAU;IACpC,qBAAqB;AACzB","sourcesContent":["body {\n    height: 100vh;\n    width: 100vw;\n   display: grid;\n   grid-template-columns: 1fr 4fr;\n   grid-template-rows: 1fr 9fr;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    border-bottom: 2px solid black;\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border-right: 2px solid black;\n}\n\n#project {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 5fr;\n}\n\n.project-div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-bottom: 1px solid #959595;\n}\n\n#proj-info {\n    grid-row: 1 / 2;\n    border-bottom: 2px solid black;\n    display: grid;\n    grid-template-columns: 2fr 3fr 3fr 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 2vh;\n}\n\n.change-button {\n    width: 4vw;\n    height: 4vh;\n    font-size: .7rem;\n}\n\n#title-info {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n#title-change-btn {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#desc-info {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n#desc-change-btn {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n#due-info {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\n#due-change-btn {\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n}\n\n#prio-info {\n    grid-column: 4 / 5;\n    grid-row: 1 / 2;\n}\n\n#prio-change-btn {\n    grid-column: 4 / 5;\n    grid-row: 2 / 3;\n}\n\n#complete-project, #undo-complete-project {\n    grid-column: 5 / 6;\n    grid-row: 1 / 3;\n    height: 6vh;\n    width: 5vw;\n    color: white;\n    font-weight: bold;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#complete-project {\n    background-color: #1B8926;\n}\n\n#undo-complete-project {\n    background-color: #A00000;\n}\n\n#todo {\n    grid-row: 2 / 3;\n    border: 1px solid green;\n    overflow: scroll;\n}\n\n.to-do-item {\n    display: grid;\n    grid-template-columns: 1fr 1fr 3fr 1fr 2fr 3fr;\n    align-items: center;\n    padding-left: 3vw;\n    gap: 8vw;\n    border-bottom: 2px solid #959595;\n}\n\n.to-do-checkbox {\n    -ms-transform: scale(2.5); /* IE */\n    -moz-transform: scale(2.5); /* FF */\n    -webkit-transform: scale(2.5); /* Safari and Chrome */\n    -o-transform: scale(2.5); /* Opera */\n    transform: scale(2.5);\n}"],"sourceRoot":""}]);
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
    // have methods to change all project info
    const projChangeDia = document.createElement('dialog');
    projChangeDia.id = '#change-proj-dia';
    projInfo.appendChild(projChangeDia);
    projChangeDia.open = false;

    const projChangeForm = document.createElement('form');
    projChangeForm.id = '#change-proj-form';
    projChangeDia.appendChild(projChangeForm);

    const projTitle = document.createElement('h2');
    projTitle.id = 'title-info';
    projTitle.innerHTML = object.title;
    projInfo.appendChild(projTitle);
    const changeTitleBtn = document.createElement('button');
        changeTitleBtn.classList.add('change-button');
        changeTitleBtn.id = 'title-change-btn'
        changeTitleBtn.innerHTML = 'Change Title';
        changeTitleBtn.addEventListener('click', () => {
            projChangeDia.open = true;
            const changeTitle = document.createElement('input');
            changeTitle.type = 'text';
            changeTitle.name = 'title';
            changeTitle.id = 'change-title';
            changeTitle.placeholder = object.title;
            projChangeForm.appendChild(changeTitle);

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
                localStorage.setItem('toDoProjects', JSON.stringify(projectList));
                clearProjects();
                populateProjects();
                clearToDo();
                populateToDo(object);
                projChangeDia.open = false;
            });
        });
    projInfo.appendChild(changeTitleBtn);

    const projDesc = document.createElement('p');
    projDesc.id = 'desc-info';
    projDesc.innerHTML = object.description;
    projInfo.appendChild(projDesc);
    const changeDescBtn = document.createElement('button');
        changeDescBtn.classList.add('change-button');
        changeDescBtn.id = 'desc-change-btn';
        changeDescBtn.innerHTML = 'Change Description'
        changeDescBtn.addEventListener('click', () => {
            const changeDesc = document.createElement('input');
            changeDesc.type = 'text';
            changeDesc.name = 'desc';
            changeDesc.id = 'change-desc';
            changeDesc.placeholder = object.desc || "Description";
            projChangeForm.appendChild(changeDesc);

            const changeButton = document.createElement('button');
            changeButton.type = 'submit';
            changeButton.id = 'proj-change-submit';
            changeButton.innerHTML = 'Change';
            projChangeForm.appendChild(changeButton)

            projChangeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const fd = new FormData(projChangeForm);
                const formObj = Object.fromEntries(fd);
                object.description = formObj.desc;
                localStorage.setItem('toDoProjects', JSON.stringify(projectList));
                clearProjects();
                populateProjects();
                clearToDo();
                populateToDo(object);
                projChangeDia.open = false;
            });
            projChangeDia.open = true;
        });
    projInfo.appendChild(changeDescBtn);

    const projDue = document.createElement('p');
    projDue.id = 'due-info';
    projDue.innerHTML = "Due: " + object.dueDate;
    projInfo.appendChild(projDue);
    const changeDueBtn = document.createElement('button');
        changeDueBtn.classList.add('change-button');
        changeDueBtn.id = 'due-change-btn';
        changeDueBtn.innerHTML = 'Change Due Date'
        changeDueBtn.addEventListener('click', () => {
            const changeDate = document.createElement('input');
            changeDate.type = 'date';
            changeDate.name = 'dueDate';
            changeDate.id = 'change-due';
            projChangeForm.appendChild(changeDate);

            const changeButton = document.createElement('button');
            changeButton.type = 'submit';
            changeButton.id = 'proj-change-submit';
            changeButton.innerHTML = 'Change';
            projChangeForm.appendChild(changeButton)

            projChangeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const fd = new FormData(projChangeForm);
                const formObj = Object.fromEntries(fd);
                object.dueDate = formObj.dueDate;
                localStorage.setItem('toDoProjects', JSON.stringify(projectList));
                clearProjects();
                populateProjects();
                clearToDo();
                populateToDo(object);
                projChangeDia.open = false;
            });
            projChangeDia.open = true;
        });
    projInfo.appendChild(changeDueBtn);

    const projPrio = document.createElement('p');
    projPrio.id = 'prio-info';
    projPrio.innerHTML = "Priority: " + object.priority;
    projInfo.appendChild(projPrio);
    const changePrioBtn = document.createElement('button');
        changePrioBtn.classList.add('change-button');
        changePrioBtn.id = 'prio-change-btn';
        changePrioBtn.innerHTML = 'Change Priority'
        changePrioBtn.addEventListener('click', () => {
            const changePrio = document.createElement('select');
            changePrio.id = 'change-prio';
            changePrio.name = 'priority';
            projChangeForm.appendChild(changePrio);

            const changeHighPrio = document.createElement('option');
            changeHighPrio.value = 'High';
            changeHighPrio.innerHTML = 'High';
            changePrio.appendChild(changeHighPrio);

            const changeMedPrio = document.createElement('option');
            changeMedPrio.value = 'Medium';
            changeMedPrio.innerHTML = 'Medium';
            changePrio.appendChild(changeMedPrio);

            const changeLowPrio = document.createElement('option');
            changeLowPrio.value = 'Low';
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
                object.priority = formObj.priority;
                localStorage.setItem('toDoProjects', JSON.stringify(projectList));
                clearProjects();
                populateProjects();
                clearToDo();
                populateToDo(object);
                projChangeDia.open = false;
            });
            projChangeDia.open = true;
        });
    projInfo.appendChild(changePrioBtn);

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

    //new project button to open new project form
    const newProjBtn = document.createElement('button');
    newProjBtn.id = 'new-project'
    newProjBtn.innerHTML = 'New Project'
    newProjBtn.addEventListener('click', () => {
        newProjDia.open = true
    });
    projectDisplay.appendChild(newProjBtn);
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
populateProjects();

// new project form populates DOM and local storage list
const newProjDia = document.querySelector('#new-proj-dialogue');
newProjDia.open = false;

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
    const projDivs = document.querySelectorAll('.project-div');
    projDivs[0].style.backgroundColor = 'blue';

    clearToDo();
    populateToDo(projectList[0]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBYTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xufVxuXG4jaGVhZGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2lkZWJhciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI3Byb2plY3Qge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XG59XG5cbi5wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xufVxuXG4jcHJvai1pbmZvIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDNmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufVxuXG4uY2hhbmdlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDR2dztcbiAgICBoZWlnaHQ6IDR2aDtcbiAgICBmb250LXNpemU6IC43cmVtO1xufVxuXG4jdGl0bGUtaW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuI3RpdGxlLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNkZXNjLWluZm8ge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbiNkZXNjLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNkdWUtaW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuI2R1ZS1jaGFuZ2UtYnRuIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4jcHJpby1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jcHJpby1jaGFuZ2UtYnRuIHtcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4jY29tcGxldGUtcHJvamVjdCwgI3VuZG8tY29tcGxldGUtcHJvamVjdCB7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xuICAgIGdyaWQtcm93OiAxIC8gMztcbiAgICBoZWlnaHQ6IDZ2aDtcbiAgICB3aWR0aDogNXZ3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNjb21wbGV0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI4OTI2O1xufVxuXG4jdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTAwMDAwO1xufVxuXG4jdG9kbyB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi50by1kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzZnIgMWZyIDJmciAzZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICBnYXA6IDh2dztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1OTU5NTtcbn1cblxuLnRvLWRvLWNoZWNrYm94IHtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBJRSAqL1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBGRiAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogT3BlcmEgKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7R0FDYixhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLDJCQUEyQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLE9BQU87SUFDbEMsMEJBQTBCLEVBQUUsT0FBTztJQUNuQyw2QkFBNkIsRUFBRSxzQkFBc0I7SUFDckQsd0JBQXdCLEVBQUUsVUFBVTtJQUNwQyxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3Byb2plY3Qge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xcbn1cXG5cXG4jcHJvai1pbmZvIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAzZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxufVxcblxcbi5jaGFuZ2UtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbiN0aXRsZS1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbiN0aXRsZS1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNkZXNjLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI2Rlc2MtY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jZHVlLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI2R1ZS1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNwcmlvLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI3ByaW8tY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jY29tcGxldGUtcHJvamVjdCwgI3VuZG8tY29tcGxldGUtcHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NvbXBsZXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI4OTI2O1xcbn1cXG5cXG4jdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EwMDAwMDtcXG59XFxuXFxuI3RvZG8ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzZnIgMWZyIDJmciAzZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogM3Z3O1xcbiAgICBnYXA6IDh2dztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NTk1OTU7XFxufVxcblxcbi50by1kby1jaGVja2JveCB7XFxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIElFICovXFxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBGRiAqL1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBPcGVyYSAqL1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0KHR0bGUsIGRlc2MsIGR1ZSwgcHJpbykge1xuICAgIGxldCB0aXRsZSA9IHR0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICBsZXQgZHVlRGF0ZSA9IGR1ZTsgXG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgbGV0IGRvbmUgPSBmYWxzZVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbGlzdCwgZG9uZSB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY2Vzc1N0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvUHJvamVjdHMnKSB8fCAnW10nKTtcbn07XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbiAgXG4gIC8vIGlmIGxvY2FsIHN0b3JhZ2UgY2Fubm90IGJlIGFjY2Vzc2VkLCB0aHJvdyBhbiBlcnJvciBvciBhbGVydFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbiBiZSBhY2Nlc3NlZCwgcHVsbCBwcm9qZWN0IGxpc3QgYXJyYXkgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIC8vIGlmIG5vIHByb2plY3QgbGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBtYWtlIG9uZVxuICAvLyBiZSBhYmxlIHRvIHB1c2ggbmV3IHByb2plY3RzIHRvIHByb2plY3QgbGlzdCBhcnJheSBpbiBzdG9yYWdlXG4gIC8vIGJlIGFibGUgdG8gdXBkYXRlIHByb2plY3QgcHJvcGVydGllcyB3aXRoaW4gdGhlIHByb2plY3QgbGlzdCIsIi8vY3JlYXRlIHRvIGRvIGl0ZW1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VG9Ebyh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBsZXQgdGl0bGUgPSB0dGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgbGV0IGR1ZURhdGUgPSBkdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gcHJpbztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG5ld1RvRG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgYWNjZXNzU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHByb2pJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otaW5mbycpO1xuY29uc3QgdG9Eb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuXG4vL3BvcHVsYXRpbmcgZnVuY3Rpb25zXG5mdW5jdGlvbiBwb3B1bGF0ZVRvRG8ob2JqZWN0KSB7XG4gICAgLy8gcG9wdWxhdGUgcHJvamVjdCBpbmZvIHNlY3Rpb24gd2l0aCB0aXRsZSwgZGVzYywgZHVlIGRhdGVcbiAgICAvLyBoYXZlIG1ldGhvZHMgdG8gY2hhbmdlIGFsbCBwcm9qZWN0IGluZm9cbiAgICBjb25zdCBwcm9qQ2hhbmdlRGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgcHJvakNoYW5nZURpYS5pZCA9ICcjY2hhbmdlLXByb2otZGlhJztcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qQ2hhbmdlRGlhKTtcbiAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2pDaGFuZ2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2pDaGFuZ2VGb3JtLmlkID0gJyNjaGFuZ2UtcHJvai1mb3JtJztcbiAgICBwcm9qQ2hhbmdlRGlhLmFwcGVuZENoaWxkKHByb2pDaGFuZ2VGb3JtKTtcblxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvalRpdGxlLmlkID0gJ3RpdGxlLWluZm8nO1xuICAgIHByb2pUaXRsZS5pbm5lckhUTUwgPSBvYmplY3QudGl0bGU7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICBjb25zdCBjaGFuZ2VUaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVRpdGxlQnRuLmlkID0gJ3RpdGxlLWNoYW5nZS1idG4nXG4gICAgICAgIGNoYW5nZVRpdGxlQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgVGl0bGUnO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGFuZ2VUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgICAgICBjaGFuZ2VUaXRsZS5pZCA9ICdjaGFuZ2UtdGl0bGUnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUucGxhY2Vob2xkZXIgPSBvYmplY3QudGl0bGU7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hcHBlbmRDaGlsZChjaGFuZ2VUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnRpdGxlID0gZm9ybU9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZVRpdGxlQnRuKTtcblxuICAgIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pEZXNjLmlkID0gJ2Rlc2MtaW5mbyc7XG4gICAgcHJvakRlc2MuaW5uZXJIVE1MID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEZXNjKTtcbiAgICBjb25zdCBjaGFuZ2VEZXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZURlc2NCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmlkID0gJ2Rlc2MtY2hhbmdlLWJ0bic7XG4gICAgICAgIGNoYW5nZURlc2NCdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBEZXNjcmlwdGlvbidcbiAgICAgICAgY2hhbmdlRGVzY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5uYW1lID0gJ2Rlc2MnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5pZCA9ICdjaGFuZ2UtZGVzYyc7XG4gICAgICAgICAgICBjaGFuZ2VEZXNjLnBsYWNlaG9sZGVyID0gb2JqZWN0LmRlc2MgfHwgXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlRGVzYyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmRlc2NyaXB0aW9uID0gZm9ybU9iai5kZXNjO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZURlc2NCdG4pO1xuXG4gICAgY29uc3QgcHJvakR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRHVlLmlkID0gJ2R1ZS1pbmZvJztcbiAgICBwcm9qRHVlLmlubmVySFRNTCA9IFwiRHVlOiBcIiArIG9iamVjdC5kdWVEYXRlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEdWUpO1xuICAgIGNvbnN0IGNoYW5nZUR1ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uaWQgPSAnZHVlLWNoYW5nZS1idG4nO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBEdWUgRGF0ZSdcbiAgICAgICAgY2hhbmdlRHVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLmlkID0gJ2NoYW5nZS1kdWUnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmR1ZURhdGUgPSBmb3JtT2JqLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY2hhbmdlRHVlQnRuKTtcblxuICAgIGNvbnN0IHByb2pQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pQcmlvLmlkID0gJ3ByaW8taW5mbyc7XG4gICAgcHJvalByaW8uaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCIgKyBvYmplY3QucHJpb3JpdHk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvalByaW8pO1xuICAgIGNvbnN0IGNoYW5nZVByaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uaWQgPSAncHJpby1jaGFuZ2UtYnRuJztcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5pbm5lckhUTUwgPSAnQ2hhbmdlIFByaW9yaXR5J1xuICAgICAgICBjaGFuZ2VQcmlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5pZCA9ICdjaGFuZ2UtcHJpbyc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlUHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjaGFuZ2VIaWdoUHJpby52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgIGNoYW5nZUhpZ2hQcmlvLmlubmVySFRNTCA9ICdIaWdoJztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlSGlnaFByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VNZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjaGFuZ2VNZWRQcmlvLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICBjaGFuZ2VNZWRQcmlvLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5hcHBlbmRDaGlsZChjaGFuZ2VNZWRQcmlvKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTG93UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlTG93UHJpby52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgY2hhbmdlTG93UHJpby5pbm5lckhUTUwgPSAnTG93JztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlTG93UHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnByaW9yaXR5ID0gZm9ybU9iai5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvQnRuKTtcblxuIC8vIHByb2plY3QgaW5mbyBoYXMgYSBidXR0b24gdG8gbWFyayB0aGUgcHJvamVjdCBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4gICAgY29uc3QgY29tcGxldGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaWYgKG9iamVjdC5kb25lID09PSBmYWxzZSkge1xuICAgICAgICBjb21wbGV0ZVByb2ouaWQgPSAnY29tcGxldGUtcHJvamVjdCc7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pbm5lckhUTUwgPSAnTWFyayBQcm9qZWN0IENvbXBsZXRlJ1xuICAgICAgICBjb21wbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBvYmplY3QuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pZCA9ICd1bmRvLWNvbXBsZXRlLXByb2plY3QnO1xuICAgICAgICBjb21wbGV0ZVByb2ouaW5uZXJIVE1MID0gJ01hcmsgUHJvamVjdCBJbmNvbXBsZXRlJ1xuICAgICAgICBjb21wbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBvYmplY3QuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNvbXBsZXRlUHJvaik7XG4gICAgXG4gICAgLy8gbG9vcCB0aGUgYmVsb3cgZm9yIGFsbCB0b0RvIGl0ZW1zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBkaXYgd2l0aGluIHRvRG9EaXNwbGF5XG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWl0ZW0nKTtcbiAgICAgICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pOyBcbiAgICAgICAgLy8gZGl2IGhhcyBhIHByb21pbmVudCBjaGVja2JveCB0byBjaGFuZ2UgY29tcGxldGUgc3RhdHVzXG4gICAgICAgIGNvbnN0IHRvRG9DaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvRG9DaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgdG9Eb0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWNoZWNrYm94Jyk7XG4gICAgICAgIGlmIChvYmplY3QubGlzdFtpXS5kb25lID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0b0RvQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9O1xuICAgICAgICB0b0RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICBvYmplY3QubGlzdFtpXS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBvYmplY3QubGlzdFtpXS5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvQ2hlY2tib3gpO1xuXG4gICAgICAgIC8vIHBvcHVsYXRlIHRoZSBkaXYgd2l0aCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWUgZGF0ZVxuICAgICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0by1kby10aXRsZScpO1xuICAgICAgICB0b0RvVGl0bGUuaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0udGl0bGU7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9EZXNjLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRlc2MnKTtcbiAgICAgICAgdG9Eb0Rlc2MuaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9EZXNjKTtcblxuICAgICAgICBjb25zdCB0b0RvUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb1ByaW8uY2xhc3NMaXN0LmFkZCgndG8tZG8tcHJpbycpO1xuICAgICAgICB0b0RvUHJpby5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS5wcmlvcml0eTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb1ByaW8pO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvRGF0ZS5jbGFzc0xpc3QuYWRkKCd0by1kby1kYXRlJyk7XG4gICAgICAgIHRvRG9EYXRlLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLmR1ZURhdGU7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9EYXRlKTtcbiAgICAgICAgLy8gcHJpb3JpdHkgc2hvdWxkIGFkanVzdCBwb3NpdGlvbiBpbiBsaXN0XG4gICAgICAgIC8vIGl0ZW1zIHNob3VsZCBiZSBhYmxlIHRvIGJlIGRlbGV0ZWRcbiAgICB9O1xuICAgIC8vIGhhdmUgYSBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHRvLWRvIGl0ZW1cblxuICAgIGNvbnN0IHRvRG9EaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICB0b0RvRGlhLmlkID0gJ25ldy10b2RvLWRpYSc7XG4gICAgdG9Eb0RpYS5vcGVuID0gZmFsc2U7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0RpYSk7XG5cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b0RvRm9ybS5pZCA9ICduZXctdG9kby1mb3JtJztcbiAgICB0b0RvRGlhLmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRpdGxlLm5hbWUgPSAndGl0bGUnO1xuICAgIGlucHV0VGl0bGUuaWQgPSAndG9kby10aXRsZSc7XG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9ICdUby1Ebyc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGVzYy50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RGVzYy5uYW1lID0gJ2Rlc2MnO1xuICAgIGlucHV0RGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xuICAgIGlucHV0RGVzYy5wbGFjZWhvbGRlciA9ICdEZXRhaWxzJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERhdGUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dERhdGUubmFtZSA9ICdkdWVEYXRlJztcbiAgICBpbnB1dERhdGUuaWQgPSAndG9kby1kdWUnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICBjb25zdCBzZWxlY3RQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0UHJpby5pZCA9ICd0b2RvLXByaW8nO1xuICAgIHNlbGVjdFByaW8ubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJpbyk7XG5cbiAgICBjb25zdCBoaWdoUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hQcmlvLnZhbHVlID0gJ2hpZ2gnO1xuICAgIGhpZ2hQcmlvLmlubmVySFRNTCA9ICdIaWdoJztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKGhpZ2hQcmlvKTtcblxuICAgIGNvbnN0IG1lZFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRQcmlvLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgbWVkUHJpby5pbm5lckhUTUwgPSAnTWVkaXVtJztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKG1lZFByaW8pO1xuXG4gICAgY29uc3QgbG93UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvd1ByaW8udmFsdWUgPSAnbG93JztcbiAgICBsb3dQcmlvLmlubmVySFRNTCA9ICdMb3cnO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQobG93UHJpbyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9ICd0b2RvLXN1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICdDcmVhdGUnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcblxuICAgIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEodG9Eb0Zvcm0pO1xuICAgICAgICBjb25zdCBmb3JtT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZkKTtcbiAgICAgICAgb2JqZWN0Lmxpc3QucHVzaChuZXdUb0RvKGZvcm1PYmoudGl0bGUsIGZvcm1PYmouZGVzYywgZm9ybU9iai5kdWVEYXRlLCBmb3JtT2JqLnByaW9yaXR5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICB0b0RvRm9ybS5yZXNldCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VG9Eb0J0bi5pZCA9ICduZXctdG9kby1idG4nO1xuICAgIG5ld1RvRG9CdG4uaW5uZXJIVE1MID0gJ05ldyBJdGVtJ1xuICAgIG5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IHRydWU7XG4gICAgfSk7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmV3VG9Eb0J0bik7XG59O1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoKSB7XG4gICAgLy8gbG9vcCBmb3IgYWxsIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9qZWN0IGRpdiB3aXRoaW4gcHJvamVjdERpc3BsYXlcbiAgICAgICAgbGV0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuICAgICAgICAvLyBtYWtlIHRoZSBkaXYgYWJsZSB0byBiZSBoaWdobGlnaHRlZCBvbiBjbGlja1xuICAgICAgICBwcm9qRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgYWxsIG90aGVycyByZW1vdmUgaGlnaGxpZ2h0XG4gICAgICAgICAgICBsZXQgYWxsUHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsUHJvanMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qc1thXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgc2FtZSBldmVudCB0cmlnZ2VyIHBvcHVsYXRpbmcgVG9EbyB3aXRoIGEgc2VwYXJhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKHByb2plY3RMaXN0W2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNob3cgcHJvamVjdCB0aXRsZSBhbmQgZHVlIGRhdGUgaWYgaW5jb21wbGV0ZSBhbmQgY29tcGxldGUgaWYgY29tcGxldGVcbiAgICAgICAgY29uc3QgcHJvalR0bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvalR0bC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHByb2pUdGwuaW5uZXJIVE1MID0gcHJvamVjdExpc3RbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IHByb2pEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2otaW5jb21wbGV0ZScpO1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuaW5uZXJIVE1MID0gJ0R1ZTogJyArIHByb2plY3RMaXN0W2ldLmR1ZURhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qLWNvbXBsZXRlJyk7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5pbm5lckhUTUwgPSAnQ09NUExFVEUnO1xuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qRGl2KTtcbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZChwcm9qVHRsKTtcbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZChwcm9qRHVlRGF0ZSlcbiAgICB9O1xuXG4gICAgLy9uZXcgcHJvamVjdCBidXR0b24gdG8gb3BlbiBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2pCdG4uaWQgPSAnbmV3LXByb2plY3QnXG4gICAgbmV3UHJvakJ0bi5pbm5lckhUTUwgPSAnTmV3IFByb2plY3QnXG4gICAgbmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3UHJvakRpYS5vcGVuID0gdHJ1ZVxuICAgIH0pO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKG5ld1Byb2pCdG4pO1xufTtcblxuLy9jbGVhcmluZyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyVG9EbygpIHtcbiAgICB3aGlsZSAodG9Eb0Rpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b0RvRGlzcGxheS5yZW1vdmVDaGlsZCh0b0RvRGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlIChwcm9qSW5mby5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2pJbmZvLnJlbW92ZUNoaWxkKHByb2pJbmZvLmZpcnN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG4vLyBvbiBsb2FkLCBwdWxsIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZVxubGV0IHByb2plY3RMaXN0ID0gYWNjZXNzU3RvcmFnZSgpO1xucG9wdWxhdGVQcm9qZWN0cygpO1xuXG4vLyBuZXcgcHJvamVjdCBmb3JtIHBvcHVsYXRlcyBET00gYW5kIGxvY2FsIHN0b3JhZ2UgbGlzdFxuY29uc3QgbmV3UHJvakRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1kaWFsb2d1ZScpO1xubmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qLWZvcm0nKTtcblxucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakZvcm0pO1xuICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgIHByb2plY3RMaXN0LnVuc2hpZnQobmV3UHJvamVjdChmb3JtT2JqLnRpdGxlLCAnJywgZm9ybU9iai5kdWUsICcnKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgY2xlYXJQcm9qZWN0cygpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAvLyBoaWdobGlnaHQgdGhlIG5ldyBwcm9qZWN0IGFzIGlmIHNlbGVjdGVkXG4gICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcbiAgICBwcm9qRGl2c1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG5cbiAgICBjbGVhclRvRG8oKTtcbiAgICBwb3B1bGF0ZVRvRG8ocHJvamVjdExpc3RbMF0pO1xuXG4gICAgbmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG4gICAgcHJvakZvcm0ucmVzZXQoKTtcbn0pO1xuXG4vLyBuZXcgdG8tZG8gYnV0dG9uIGFkZHMgYSB0by1kbyBpdGVtIHdpdGhpbiB0aGUgcHJvamVjdFxuLy8gcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIGhhdmUgYSBjaGVja2JveCB0byBtYXJrIGNvbXBsZXRlXG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgZGlzcGxheSBhcyBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4vLyBjYW4gcmVhcnJhbmdlIHBsYWNlbWVudCBvZiBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=