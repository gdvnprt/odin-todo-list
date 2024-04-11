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

#sidebar h2 {
    text-align: center;
    border-bottom: 1px solid #959595;
    padding-bottom: 2vh;
}

#project-list {
    display: grid;
    margin-top: 0;
}

#new-project {
    justify-self: center;
    align-self: center;
    margin: 10px;
}

#project {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    margin-top: 0;
}

.project-div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #959595;
}

.project-title {
    font-weight: bold;
}

#proj-info {
    grid-row: 1 / 2;
    border-bottom: 2px solid black;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr 1fr 1fr;
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

#delete-project {
    grid-column: 5 / 6;
    grid-row: 2 / 3;
}

#todo {
    grid-row: 2 / 3;
    border: 1px solid green;
    overflow: scroll;
    display: flex;
    flex-direction: column;
}

.to-do-item {
    height: 8vh;
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr 2fr 3fr;
    align-items: center;
    justify-items: center;
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
}

.to-do-title {
    font-weight: bold;
    text-align: center;
}

#new-todo-btn {
    align-self: center;
    justify-self: center;
    margin: 20px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;GACb,aAAa;GACb,8BAA8B;GAC9B,2BAA2B;AAC9B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,0CAA0C;IAC1C,2BAA2B;IAC3B,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,yBAAyB,EAAE,OAAO;IAClC,0BAA0B,EAAE,OAAO;IACnC,6BAA6B,EAAE,sBAAsB;IACrD,wBAAwB,EAAE,UAAU;IACpC,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB","sourcesContent":["body {\n    height: 100vh;\n    width: 100vw;\n   display: grid;\n   grid-template-columns: 1fr 4fr;\n   grid-template-rows: 1fr 9fr;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    border-bottom: 2px solid black;\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border-right: 2px solid black;\n}\n\n#sidebar h2 {\n    text-align: center;\n    border-bottom: 1px solid #959595;\n    padding-bottom: 2vh;\n}\n\n#project-list {\n    display: grid;\n    margin-top: 0;\n}\n\n#new-project {\n    justify-self: center;\n    align-self: center;\n    margin: 10px;\n}\n\n#project {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 5fr;\n    margin-top: 0;\n}\n\n.project-div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-bottom: 1px solid #959595;\n}\n\n.project-title {\n    font-weight: bold;\n}\n\n#proj-info {\n    grid-row: 1 / 2;\n    border-bottom: 2px solid black;\n    display: grid;\n    grid-template-columns: 2fr 3fr 1fr 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 2vh;\n}\n\n.change-button {\n    width: 4vw;\n    height: 4vh;\n    font-size: .7rem;\n}\n\n#title-info {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n#title-change-btn {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#desc-info {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n#desc-change-btn {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n#due-info {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\n#due-change-btn {\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n}\n\n#prio-info {\n    grid-column: 4 / 5;\n    grid-row: 1 / 2;\n}\n\n#prio-change-btn {\n    grid-column: 4 / 5;\n    grid-row: 2 / 3;\n}\n\n#complete-project, #undo-complete-project {\n    grid-column: 5 / 6;\n    grid-row: 1 / 3;\n    height: 6vh;\n    width: 5vw;\n    color: white;\n    font-weight: bold;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#complete-project {\n    background-color: #1B8926;\n}\n\n#undo-complete-project {\n    background-color: #A00000;\n}\n\n#delete-project {\n    grid-column: 5 / 6;\n    grid-row: 2 / 3;\n}\n\n#todo {\n    grid-row: 2 / 3;\n    border: 1px solid green;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n}\n\n.to-do-item {\n    height: 8vh;\n    width: auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 3fr 1fr 2fr 3fr;\n    align-items: center;\n    justify-items: center;\n    padding-left: 3vw;\n    gap: 8vw;\n    border-bottom: 2px solid #959595;\n}\n\n.to-do-checkbox {\n    -ms-transform: scale(2.5); /* IE */\n    -moz-transform: scale(2.5); /* FF */\n    -webkit-transform: scale(2.5); /* Safari and Chrome */\n    -o-transform: scale(2.5); /* Opera */\n    transform: scale(2.5);\n}\n\n.to-do-title {\n    font-weight: bold;\n    text-align: center;\n}\n\n#new-todo-btn {\n    align-self: center;\n    justify-self: center;\n    margin: 20px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/array-edit.js":
/*!***************************!*\
  !*** ./src/array-edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeArrayItem)
/* harmony export */ });
function removeArrayItem(array, i) {
    array.splice(i, 1);
};

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
/* harmony import */ var _array_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array-edit.js */ "./src/array-edit.js");






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

    const deleteProj = document.createElement('button');
        deleteProj.id = 'delete-project';
        deleteProj.innerHTML = 'Delete Project';
        deleteProj.addEventListener('click', () => {
            let result = confirm("Are you sure you want to delete this project?");
            if (result) {
                let deleteIndex = projectList.indexOf(object);
                (0,_array_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectList, deleteIndex);
                localStorage.setItem('toDoProjects', JSON.stringify(projectList));
                clearProjects();
                populateProjects();
                clearToDo();
            };
        });
    projInfo.appendChild(deleteProj);

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
            toDoItem.style.backgroundColor = '#1B8926';
            toDoItem.style.color = 'white';
        };
        toDoCheckbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                toDoItem.style.backgroundColor = '#1B8926';
                toDoItem.style.color = 'white';
                object.list[i].done = true;
            } else {
                toDoItem.style.backgroundColor = 'white';
                toDoItem.style.color = 'black';
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

        // items should be able to be deleted
        const deleteToDo = document.createElement('button');
        deleteToDo.classList.add('delete-todo');
        deleteToDo.innerHTML = 'Delete';
        deleteToDo.addEventListener('click', () => {
            (0,_array_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object.list, i);
            localStorage.setItem('toDoProjects', JSON.stringify(projectList));
            clearProjects();
            populateProjects();
            clearToDo();
            populateToDo(object);
        });
        toDoItem.appendChild(deleteToDo);
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
                allProjs[a].style.color = 'black';
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
            projDiv.style.color = 'black';
        } else {
            projDueDate.classList.add('proj-complete');
            projDueDate.innerHTML = 'COMPLETE';
            projDiv.style.backgroundColor = '#1B8926';
            projDiv.style.color = 'white';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FycmF5LWVkaXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbn1cblxuI2hlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGViYXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG59XG5cbiNzaWRlYmFyIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NTk1OTU7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbn1cblxuI3Byb2plY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcm9qZWN0IHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNwcm9qLWluZm8ge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG59XG5cbi5jaGFuZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogNHZ3O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG59XG5cbiN0aXRsZS1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jdGl0bGUtY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI2Rlc2MtaW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuI2Rlc2MtY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI2R1ZS1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jZHVlLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNwcmlvLWluZm8ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbiNwcmlvLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNjb21wbGV0ZS1wcm9qZWN0LCAjdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIGhlaWdodDogNnZoO1xuICAgIHdpZHRoOiA1dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvbXBsZXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjg5MjY7XG59XG5cbiN1bmRvLWNvbXBsZXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMDAwMDA7XG59XG5cbiNkZWxldGUtcHJvamVjdCB7XG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI3RvZG8ge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvLWRvLWl0ZW0ge1xuICAgIGhlaWdodDogOHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDNmciAxZnIgMmZyIDNmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICBnYXA6IDh2dztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1OTU5NTtcbn1cblxuLnRvLWRvLWNoZWNrYm94IHtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBJRSAqL1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBGRiAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogT3BlcmEgKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG59XG5cbi50by1kby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbmV3LXRvZG8tYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0dBQ2IsYUFBYTtHQUNiLDhCQUE4QjtHQUM5QiwyQkFBMkI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsT0FBTztJQUNsQywwQkFBMEIsRUFBRSxPQUFPO0lBQ25DLDZCQUE2QixFQUFFLHNCQUFzQjtJQUNyRCx3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3NpZGViYXIgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NTk1OTU7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNwcm9qLWluZm8ge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG59XFxuXFxuLmNoYW5nZS1idXR0b24ge1xcbiAgICB3aWR0aDogNHZ3O1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgZm9udC1zaXplOiAuN3JlbTtcXG59XFxuXFxuI3RpdGxlLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI3RpdGxlLWNoYW5nZS1idG4ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI2Rlc2MtaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jZGVzYy1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNkdWUtaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jZHVlLWNoYW5nZS1idG4ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI3ByaW8taW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jcHJpby1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNjb21wbGV0ZS1wcm9qZWN0LCAjdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDUgLyA2O1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY29tcGxldGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjg5MjY7XFxufVxcblxcbiN1bmRvLWNvbXBsZXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTAwMDAwO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI3RvZG8ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDNmciAxZnIgMmZyIDNmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gICAgZ2FwOiA4dnc7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTU5NTk1O1xcbn1cXG5cXG4udG8tZG8tY2hlY2tib3gge1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBJRSAqL1xcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogRkYgKi9cXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogT3BlcmEgKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xcbn1cXG5cXG4udG8tZG8tdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8tYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQXJyYXlJdGVtKGFycmF5LCBpKSB7XG4gICAgYXJyYXkuc3BsaWNlKGksIDEpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0KHR0bGUsIGRlc2MsIGR1ZSwgcHJpbykge1xuICAgIGxldCB0aXRsZSA9IHR0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzYztcbiAgICBsZXQgZHVlRGF0ZSA9IGR1ZTsgXG4gICAgbGV0IHByaW9yaXR5ID0gcHJpb1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgbGV0IGRvbmUgPSBmYWxzZVxuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbGlzdCwgZG9uZSB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY2Vzc1N0b3JhZ2UoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvUHJvamVjdHMnKSB8fCAnW10nKTtcbn07XG5cbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfTtcbiAgfTtcbiAgXG4gIC8vIGlmIGxvY2FsIHN0b3JhZ2UgY2Fubm90IGJlIGFjY2Vzc2VkLCB0aHJvdyBhbiBlcnJvciBvciBhbGVydFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbiBiZSBhY2Nlc3NlZCwgcHVsbCBwcm9qZWN0IGxpc3QgYXJyYXkgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIC8vIGlmIG5vIHByb2plY3QgbGlzdCBpbiBsb2NhbCBzdG9yYWdlLCBtYWtlIG9uZVxuICAvLyBiZSBhYmxlIHRvIHB1c2ggbmV3IHByb2plY3RzIHRvIHByb2plY3QgbGlzdCBhcnJheSBpbiBzdG9yYWdlXG4gIC8vIGJlIGFibGUgdG8gdXBkYXRlIHByb2plY3QgcHJvcGVydGllcyB3aXRoaW4gdGhlIHByb2plY3QgbGlzdCIsIi8vY3JlYXRlIHRvIGRvIGl0ZW1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VG9Ebyh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBsZXQgdGl0bGUgPSB0dGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgbGV0IGR1ZURhdGUgPSBkdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gcHJpbztcbiAgICBsZXQgZG9uZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG5ld1RvRG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgYWNjZXNzU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuaW1wb3J0IHJlbW92ZUFycmF5SXRlbSBmcm9tICcuL2FycmF5LWVkaXQuanMnO1xuXG5jb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHByb2pJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2otaW5mbycpO1xuY29uc3QgdG9Eb0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuXG4vL3BvcHVsYXRpbmcgZnVuY3Rpb25zXG5mdW5jdGlvbiBwb3B1bGF0ZVRvRG8ob2JqZWN0KSB7XG4gICAgLy8gcG9wdWxhdGUgcHJvamVjdCBpbmZvIHNlY3Rpb24gd2l0aCB0aXRsZSwgZGVzYywgZHVlIGRhdGVcbiAgICAvLyBoYXZlIG1ldGhvZHMgdG8gY2hhbmdlIGFsbCBwcm9qZWN0IGluZm9cbiAgICBjb25zdCBwcm9qQ2hhbmdlRGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgcHJvakNoYW5nZURpYS5pZCA9ICcjY2hhbmdlLXByb2otZGlhJztcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qQ2hhbmdlRGlhKTtcbiAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb2pDaGFuZ2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2pDaGFuZ2VGb3JtLmlkID0gJyNjaGFuZ2UtcHJvai1mb3JtJztcbiAgICBwcm9qQ2hhbmdlRGlhLmFwcGVuZENoaWxkKHByb2pDaGFuZ2VGb3JtKTtcblxuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvalRpdGxlLmlkID0gJ3RpdGxlLWluZm8nO1xuICAgIHByb2pUaXRsZS5pbm5lckhUTUwgPSBvYmplY3QudGl0bGU7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvalRpdGxlKTtcbiAgICBjb25zdCBjaGFuZ2VUaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVRpdGxlQnRuLmlkID0gJ3RpdGxlLWNoYW5nZS1idG4nXG4gICAgICAgIGNoYW5nZVRpdGxlQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgVGl0bGUnO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGFuZ2VUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgICAgICBjaGFuZ2VUaXRsZS5pZCA9ICdjaGFuZ2UtdGl0bGUnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUucGxhY2Vob2xkZXIgPSBvYmplY3QudGl0bGU7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hcHBlbmRDaGlsZChjaGFuZ2VUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnRpdGxlID0gZm9ybU9iai50aXRsZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZVRpdGxlQnRuKTtcblxuICAgIGNvbnN0IHByb2pEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pEZXNjLmlkID0gJ2Rlc2MtaW5mbyc7XG4gICAgcHJvakRlc2MuaW5uZXJIVE1MID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEZXNjKTtcbiAgICBjb25zdCBjaGFuZ2VEZXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZURlc2NCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmlkID0gJ2Rlc2MtY2hhbmdlLWJ0bic7XG4gICAgICAgIGNoYW5nZURlc2NCdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBEZXNjcmlwdGlvbidcbiAgICAgICAgY2hhbmdlRGVzY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5uYW1lID0gJ2Rlc2MnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5pZCA9ICdjaGFuZ2UtZGVzYyc7XG4gICAgICAgICAgICBjaGFuZ2VEZXNjLnBsYWNlaG9sZGVyID0gb2JqZWN0LmRlc2MgfHwgXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlRGVzYyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmRlc2NyaXB0aW9uID0gZm9ybU9iai5kZXNjO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZURlc2NCdG4pO1xuXG4gICAgY29uc3QgcHJvakR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRHVlLmlkID0gJ2R1ZS1pbmZvJztcbiAgICBwcm9qRHVlLmlubmVySFRNTCA9IFwiRHVlOiBcIiArIG9iamVjdC5kdWVEYXRlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pEdWUpO1xuICAgIGNvbnN0IGNoYW5nZUR1ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uaWQgPSAnZHVlLWNoYW5nZS1idG4nO1xuICAgICAgICBjaGFuZ2VEdWVCdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBEdWUgRGF0ZSdcbiAgICAgICAgY2hhbmdlRHVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgICAgICAgICBjaGFuZ2VEYXRlLmlkID0gJ2NoYW5nZS1kdWUnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlRGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmR1ZURhdGUgPSBmb3JtT2JqLmR1ZURhdGU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY2hhbmdlRHVlQnRuKTtcblxuICAgIGNvbnN0IHByb2pQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2pQcmlvLmlkID0gJ3ByaW8taW5mbyc7XG4gICAgcHJvalByaW8uaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCIgKyBvYmplY3QucHJpb3JpdHk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvalByaW8pO1xuICAgIGNvbnN0IGNoYW5nZVByaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5jbGFzc0xpc3QuYWRkKCdjaGFuZ2UtYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uaWQgPSAncHJpby1jaGFuZ2UtYnRuJztcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5pbm5lckhUTUwgPSAnQ2hhbmdlIFByaW9yaXR5J1xuICAgICAgICBjaGFuZ2VQcmlvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5pZCA9ICdjaGFuZ2UtcHJpbyc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlUHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjaGFuZ2VIaWdoUHJpby52YWx1ZSA9ICdIaWdoJztcbiAgICAgICAgICAgIGNoYW5nZUhpZ2hQcmlvLmlubmVySFRNTCA9ICdIaWdoJztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlSGlnaFByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VNZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjaGFuZ2VNZWRQcmlvLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgICAgICAgICBjaGFuZ2VNZWRQcmlvLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5hcHBlbmRDaGlsZChjaGFuZ2VNZWRQcmlvKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTG93UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlTG93UHJpby52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgY2hhbmdlTG93UHJpby5pbm5lckhUTUwgPSAnTG93JztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlTG93UHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pZCA9ICdwcm9qLWNoYW5nZS1zdWJtaXQnO1xuICAgICAgICAgICAgY2hhbmdlQnV0dG9uLmlubmVySFRNTCA9ICdDaGFuZ2UnO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlQnV0dG9uKVxuXG4gICAgICAgICAgICBwcm9qQ2hhbmdlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qQ2hhbmdlRm9ybSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnByaW9yaXR5ID0gZm9ybU9iai5wcmlvcml0eTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VQcmlvQnRuKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvai5pZCA9ICdkZWxldGUtcHJvamVjdCc7XG4gICAgICAgIGRlbGV0ZVByb2ouaW5uZXJIVE1MID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgICAgZGVsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/XCIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGxldCBkZWxldGVJbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2Yob2JqZWN0KTtcbiAgICAgICAgICAgICAgICByZW1vdmVBcnJheUl0ZW0ocHJvamVjdExpc3QsIGRlbGV0ZUluZGV4KTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvaik7XG5cbiAvLyBwcm9qZWN0IGluZm8gaGFzIGEgYnV0dG9uIHRvIG1hcmsgdGhlIHByb2plY3QgY29tcGxldGUgb3IgaW5jb21wbGV0ZVxuICAgIGNvbnN0IGNvbXBsZXRlUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChvYmplY3QuZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29tcGxldGVQcm9qLmlkID0gJ2NvbXBsZXRlLXByb2plY3QnO1xuICAgICAgICBjb21wbGV0ZVByb2ouaW5uZXJIVE1MID0gJ01hcmsgUHJvamVjdCBDb21wbGV0ZSdcbiAgICAgICAgY29tcGxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZVByb2ouaWQgPSAndW5kby1jb21wbGV0ZS1wcm9qZWN0JztcbiAgICAgICAgY29tcGxldGVQcm9qLmlubmVySFRNTCA9ICdNYXJrIFByb2plY3QgSW5jb21wbGV0ZSdcbiAgICAgICAgY29tcGxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZVByb2opO1xuICAgIFxuICAgIC8vIGxvb3AgdGhlIGJlbG93IGZvciBhbGwgdG9EbyBpdGVtc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgZGl2IHdpdGhpbiB0b0RvRGlzcGxheVxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG4gICAgICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9JdGVtKTsgXG4gICAgICAgIC8vIGRpdiBoYXMgYSBwcm9taW5lbnQgY2hlY2tib3ggdG8gY2hhbmdlIGNvbXBsZXRlIHN0YXR1c1xuICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b0RvQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1jaGVja2JveCcpO1xuICAgICAgICBpZiAob2JqZWN0Lmxpc3RbaV0uZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxQjg5MjYnO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9O1xuICAgICAgICB0b0RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxQjg5MjYnO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBvYmplY3QubGlzdFtpXS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lmxpc3RbaV0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0NoZWNrYm94KTtcblxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgZGl2IHdpdGggdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGVcbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tdGl0bGUnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLnRpdGxlO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXNjJyk7XG4gICAgICAgIHRvRG9EZXNjLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvRGVzYyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9QcmlvLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXByaW8nKTtcbiAgICAgICAgdG9Eb1ByaW8uaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0ucHJpb3JpdHk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9QcmlvKTtcblxuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xuICAgICAgICB0b0RvRGF0ZS5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS5kdWVEYXRlO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG5cbiAgICAgICAgLy8gaXRlbXMgc2hvdWxkIGJlIGFibGUgdG8gYmUgZGVsZXRlZFxuICAgICAgICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICAgICAgZGVsZXRlVG9Eby5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUFycmF5SXRlbShvYmplY3QubGlzdCwgaSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZChkZWxldGVUb0RvKTtcbiAgICB9O1xuICAgIC8vIGhhdmUgYSBidXR0b24gdG8gY3JlYXRlIGEgbmV3IHRvLWRvIGl0ZW1cblxuICAgIGNvbnN0IHRvRG9EaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICB0b0RvRGlhLmlkID0gJ25ldy10b2RvLWRpYSc7XG4gICAgdG9Eb0RpYS5vcGVuID0gZmFsc2U7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQodG9Eb0RpYSk7XG5cbiAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b0RvRm9ybS5pZCA9ICduZXctdG9kby1mb3JtJztcbiAgICB0b0RvRGlhLmFwcGVuZENoaWxkKHRvRG9Gb3JtKTtcblxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRpdGxlLm5hbWUgPSAndGl0bGUnO1xuICAgIGlucHV0VGl0bGUuaWQgPSAndG9kby10aXRsZSc7XG4gICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9ICdUby1Ebyc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGVzYy50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0RGVzYy5uYW1lID0gJ2Rlc2MnO1xuICAgIGlucHV0RGVzYy5pZCA9ICd0b2RvLWRlc2MnO1xuICAgIGlucHV0RGVzYy5wbGFjZWhvbGRlciA9ICdEZXRhaWxzJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERhdGUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dERhdGUubmFtZSA9ICdkdWVEYXRlJztcbiAgICBpbnB1dERhdGUuaWQgPSAndG9kby1kdWUnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG5cbiAgICBjb25zdCBzZWxlY3RQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0UHJpby5pZCA9ICd0b2RvLXByaW8nO1xuICAgIHNlbGVjdFByaW8ubmFtZSA9ICdwcmlvcml0eSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJpbyk7XG5cbiAgICBjb25zdCBoaWdoUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2hQcmlvLnZhbHVlID0gJ2hpZ2gnO1xuICAgIGhpZ2hQcmlvLmlubmVySFRNTCA9ICdIaWdoJztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKGhpZ2hQcmlvKTtcblxuICAgIGNvbnN0IG1lZFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBtZWRQcmlvLnZhbHVlID0gJ21lZGl1bSc7XG4gICAgbWVkUHJpby5pbm5lckhUTUwgPSAnTWVkaXVtJztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKG1lZFByaW8pO1xuXG4gICAgY29uc3QgbG93UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGxvd1ByaW8udmFsdWUgPSAnbG93JztcbiAgICBsb3dQcmlvLmlubmVySFRNTCA9ICdMb3cnO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQobG93UHJpbyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9ICd0b2RvLXN1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9ICdDcmVhdGUnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbilcblxuICAgIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEodG9Eb0Zvcm0pO1xuICAgICAgICBjb25zdCBmb3JtT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZkKTtcbiAgICAgICAgb2JqZWN0Lmxpc3QucHVzaChuZXdUb0RvKGZvcm1PYmoudGl0bGUsIGZvcm1PYmouZGVzYywgZm9ybU9iai5kdWVEYXRlLCBmb3JtT2JqLnByaW9yaXR5KSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICB0b0RvRm9ybS5yZXNldCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VG9Eb0J0bi5pZCA9ICduZXctdG9kby1idG4nO1xuICAgIG5ld1RvRG9CdG4uaW5uZXJIVE1MID0gJ05ldyBJdGVtJ1xuICAgIG5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvRG9EaWEub3BlbiA9IHRydWU7XG4gICAgfSk7XG4gICAgdG9Eb0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmV3VG9Eb0J0bik7XG59O1xuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHMoKSB7XG4gICAgLy8gbG9vcCBmb3IgYWxsIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9qZWN0IGRpdiB3aXRoaW4gcHJvamVjdERpc3BsYXlcbiAgICAgICAgbGV0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuICAgICAgICAvLyBtYWtlIHRoZSBkaXYgYWJsZSB0byBiZSBoaWdobGlnaHRlZCBvbiBjbGlja1xuICAgICAgICBwcm9qRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiBhbm90aGVyIHByb2plY3QgaXMgY2xpY2tlZCwgYWxsIG90aGVycyByZW1vdmUgaGlnaGxpZ2h0XG4gICAgICAgICAgICBsZXQgYWxsUHJvanMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYWxsUHJvanMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qc1thXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGFsbFByb2pzW2FdLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm9qRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHNhbWUgZXZlbnQgdHJpZ2dlciBwb3B1bGF0aW5nIFRvRG8gd2l0aCBhIHNlcGFyYXRlIGZ1bmN0aW9uXG4gICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVG9Ebyhwcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzaG93IHByb2plY3QgdGl0bGUgYW5kIGR1ZSBkYXRlIGlmIGluY29tcGxldGUgYW5kIGNvbXBsZXRlIGlmIGNvbXBsZXRlXG4gICAgICAgIGNvbnN0IHByb2pUdGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2pUdGwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpO1xuICAgICAgICBwcm9qVHRsLmlubmVySFRNTCA9IHByb2plY3RMaXN0W2ldLnRpdGxlO1xuICAgICAgICBjb25zdCBwcm9qRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qLWluY29tcGxldGUnKTtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmlubmVySFRNTCA9ICdEdWU6ICcgKyBwcm9qZWN0TGlzdFtpXS5kdWVEYXRlO1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qLWNvbXBsZXRlJyk7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5pbm5lckhUTUwgPSAnQ09NUExFVEUnO1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzFCODkyNic7XG4gICAgICAgICAgICBwcm9qRGl2LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgfTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gICAgICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvalR0bCk7XG4gICAgICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQocHJvakR1ZURhdGUpXG4gICAgfTtcblxuICAgIC8vbmV3IHByb2plY3QgYnV0dG9uIHRvIG9wZW4gbmV3IHByb2plY3QgZm9ybVxuICAgIGNvbnN0IG5ld1Byb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdQcm9qQnRuLmlkID0gJ25ldy1wcm9qZWN0J1xuICAgIG5ld1Byb2pCdG4uaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0J1xuICAgIG5ld1Byb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2pEaWEub3BlbiA9IHRydWVcbiAgICB9KTtcbiAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChuZXdQcm9qQnRuKTtcbn07XG5cbi8vY2xlYXJpbmcgZnVuY3Rpb25zXG5mdW5jdGlvbiBjbGVhclByb2plY3RzKCkge1xuICAgIHdoaWxlIChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2plY3REaXNwbGF5LnJlbW92ZUNoaWxkKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBjbGVhclRvRG8oKSB7XG4gICAgd2hpbGUgKHRvRG9EaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdG9Eb0Rpc3BsYXkucmVtb3ZlQ2hpbGQodG9Eb0Rpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfTtcbiAgICB3aGlsZSAocHJvakluZm8uZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qSW5mby5yZW1vdmVDaGlsZChwcm9qSW5mby5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuLy8gb24gbG9hZCwgcHVsbCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCBwcm9qZWN0TGlzdCA9IGFjY2Vzc1N0b3JhZ2UoKTtcbnBvcHVsYXRlUHJvamVjdHMoKTtcblxuLy8gbmV3IHByb2plY3QgZm9ybSBwb3B1bGF0ZXMgRE9NIGFuZCBsb2NhbCBzdG9yYWdlIGxpc3RcbmNvbnN0IG5ld1Byb2pEaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2otZGlhbG9ndWUnKTtcbm5ld1Byb2pEaWEub3BlbiA9IGZhbHNlO1xuXG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1mb3JtJyk7XG5cbnByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKHByb2pGb3JtKTtcbiAgICBjb25zdCBmb3JtT2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKGZkKTtcbiAgICBwcm9qZWN0TGlzdC51bnNoaWZ0KG5ld1Byb2plY3QoZm9ybU9iai50aXRsZSwgJycsIGZvcm1PYmouZHVlLCAnJykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgLy8gaGlnaGxpZ2h0IHRoZSBuZXcgcHJvamVjdCBhcyBpZiBzZWxlY3RlZFxuICAgIGNvbnN0IHByb2pEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGl2Jyk7XG4gICAgcHJvakRpdnNbMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuXG4gICAgY2xlYXJUb0RvKCk7XG4gICAgcG9wdWxhdGVUb0RvKHByb2plY3RMaXN0WzBdKTtcblxuICAgIG5ld1Byb2pEaWEub3BlbiA9IGZhbHNlO1xuICAgIHByb2pGb3JtLnJlc2V0KCk7XG59KTtcblxuLy8gbmV3IHRvLWRvIGJ1dHRvbiBhZGRzIGEgdG8tZG8gaXRlbSB3aXRoaW4gdGhlIHByb2plY3Rcbi8vIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyBoYXZlIGEgY2hlY2tib3ggdG8gbWFyayBjb21wbGV0ZVxuLy8gcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIGRpc3BsYXkgYXMgY29tcGxldGUgb3IgaW5jb21wbGV0ZVxuLy8gY2FuIHJlYXJyYW5nZSBwbGFjZW1lbnQgb2YgcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9