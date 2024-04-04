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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,YAAY;GACb,aAAa;GACb,8BAA8B;GAC9B,2BAA2B;AAC9B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;IAChC,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,0CAA0C;IAC1C,2BAA2B;IAC3B,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,8CAA8C;IAC9C,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,yBAAyB,EAAE,OAAO;IAClC,0BAA0B,EAAE,OAAO;IACnC,6BAA6B,EAAE,sBAAsB;IACrD,wBAAwB,EAAE,UAAU;IACpC,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB","sourcesContent":["body {\n    height: 100vh;\n    width: 100vw;\n   display: grid;\n   grid-template-columns: 1fr 4fr;\n   grid-template-rows: 1fr 9fr;\n}\n\n#header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    border-bottom: 2px solid black;\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border-right: 2px solid black;\n}\n\n#sidebar h2 {\n    text-align: center;\n    border-bottom: 1px solid #959595;\n    padding-bottom: 2vh;\n}\n\n#project-list {\n    display: grid;\n    margin-top: 0;\n}\n\n#new-project {\n    justify-self: center;\n    align-self: center;\n    margin: 10px;\n}\n\n#project {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 5fr;\n    margin-top: 0;\n}\n\n.project-div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border-bottom: 1px solid #959595;\n}\n\n.project-title {\n    font-weight: bold;\n}\n\n#proj-info {\n    grid-row: 1 / 2;\n    border-bottom: 2px solid black;\n    display: grid;\n    grid-template-columns: 2fr 3fr 1fr 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    justify-items: center;\n    align-items: center;\n    padding-bottom: 2vh;\n}\n\n.change-button {\n    width: 4vw;\n    height: 4vh;\n    font-size: .7rem;\n}\n\n#title-info {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n#title-change-btn {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n#desc-info {\n    grid-column: 2 / 3;\n    grid-row: 1 / 2;\n}\n\n#desc-change-btn {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n#due-info {\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\n#due-change-btn {\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n}\n\n#prio-info {\n    grid-column: 4 / 5;\n    grid-row: 1 / 2;\n}\n\n#prio-change-btn {\n    grid-column: 4 / 5;\n    grid-row: 2 / 3;\n}\n\n#complete-project, #undo-complete-project {\n    grid-column: 5 / 6;\n    grid-row: 1 / 3;\n    height: 6vh;\n    width: 5vw;\n    color: white;\n    font-weight: bold;\n    border: 1px solid black;\n    border-radius: 5px;\n}\n\n#complete-project {\n    background-color: #1B8926;\n}\n\n#undo-complete-project {\n    background-color: #A00000;\n}\n\n#todo {\n    grid-row: 2 / 3;\n    border: 1px solid green;\n    overflow: scroll;\n    display: flex;\n    flex-direction: column;\n}\n\n.to-do-item {\n    height: 8vh;\n    width: auto;\n    display: grid;\n    grid-template-columns: 1fr 1fr 3fr 1fr 2fr 3fr;\n    align-items: center;\n    justify-items: center;\n    padding-left: 3vw;\n    gap: 8vw;\n    border-bottom: 2px solid #959595;\n}\n\n.to-do-checkbox {\n    -ms-transform: scale(2.5); /* IE */\n    -moz-transform: scale(2.5); /* FF */\n    -webkit-transform: scale(2.5); /* Safari and Chrome */\n    -o-transform: scale(2.5); /* Opera */\n    transform: scale(2.5);\n}\n\n.to-do-title {\n    font-weight: bold;\n    text-align: center;\n}\n\n#new-todo-btn {\n    align-self: center;\n    justify-self: center;\n    margin: 20px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQix1REFBYTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICBkaXNwbGF5OiBncmlkO1xuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xufVxuXG4jaGVhZGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2lkZWJhciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI3NpZGViYXIgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk1OTU5NTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xufVxuXG4jcHJvamVjdC1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbiNuZXctcHJvamVjdCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3Qge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnByb2plY3QtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NTk1OTU7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Byb2otaW5mbyB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbn1cblxuLmNoYW5nZS1idXR0b24ge1xuICAgIHdpZHRoOiA0dnc7XG4gICAgaGVpZ2h0OiA0dmg7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbn1cblxuI3RpdGxlLWluZm8ge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbiN0aXRsZS1jaGFuZ2UtYnRuIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4jZGVzYy1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jZGVzYy1jaGFuZ2UtYnRuIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4jZHVlLWluZm8ge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbiNkdWUtY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI3ByaW8taW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuI3ByaW8tY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI2NvbXBsZXRlLXByb2plY3QsICN1bmRvLWNvbXBsZXRlLXByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gICAgaGVpZ2h0OiA2dmg7XG4gICAgd2lkdGg6IDV2dztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4jY29tcGxldGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCODkyNjtcbn1cblxuI3VuZG8tY29tcGxldGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EwMDAwMDtcbn1cblxuI3RvZG8ge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvLWRvLWl0ZW0ge1xuICAgIGhlaWdodDogOHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDNmciAxZnIgMmZyIDNmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcbiAgICBnYXA6IDh2dztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1OTU5NTtcbn1cblxuLnRvLWRvLWNoZWNrYm94IHtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBJRSAqL1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBGRiAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogT3BlcmEgKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG59XG5cbi50by1kby10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbmV3LXRvZG8tYnRuIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0dBQ2IsYUFBYTtHQUNiLDhCQUE4QjtHQUM5QiwyQkFBMkI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QixFQUFFLE9BQU87SUFDbEMsMEJBQTBCLEVBQUUsT0FBTztJQUNuQyw2QkFBNkIsRUFBRSxzQkFBc0I7SUFDckQsd0JBQXdCLEVBQUUsVUFBVTtJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNzaWRlYmFyIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk1OTU5NTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3Byb2plY3Qge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jcHJvai1pbmZvIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxufVxcblxcbi5jaGFuZ2UtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIGZvbnQtc2l6ZTogLjdyZW07XFxufVxcblxcbiN0aXRsZS1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbiN0aXRsZS1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNkZXNjLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI2Rlc2MtY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jZHVlLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI2R1ZS1jaGFuZ2UtYnRuIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbiNwcmlvLWluZm8ge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuI3ByaW8tY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jY29tcGxldGUtcHJvamVjdCwgI3VuZG8tY29tcGxldGUtcHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiA1IC8gNjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NvbXBsZXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI4OTI2O1xcbn1cXG5cXG4jdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0EwMDAwMDtcXG59XFxuXFxuI3RvZG8ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG8tZG8taXRlbSB7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDNmciAxZnIgMmZyIDNmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gICAgZ2FwOiA4dnc7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTU5NTk1O1xcbn1cXG5cXG4udG8tZG8tY2hlY2tib3gge1xcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBJRSAqL1xcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogRkYgKi9cXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXFxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogT3BlcmEgKi9cXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xcbn1cXG5cXG4udG8tZG8tdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8tYnRuIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdCh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBsZXQgdGl0bGUgPSB0dGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgbGV0IGR1ZURhdGUgPSBkdWU7IFxuICAgIGxldCBwcmlvcml0eSA9IHByaW9cbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGxldCBkb25lID0gZmFsc2VcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxpc3QsIGRvbmUgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2Nlc3NTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Byb2plY3RzJykgfHwgJ1tdJyk7XG59O1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH07XG4gIH07XG4gIFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbm5vdCBiZSBhY2Nlc3NlZCwgdGhyb3cgYW4gZXJyb3Igb3IgYWxlcnRcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBjYW4gYmUgYWNjZXNzZWQsIHB1bGwgcHJvamVjdCBsaXN0IGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuICAvLyBpZiBubyBwcm9qZWN0IGxpc3QgaW4gbG9jYWwgc3RvcmFnZSwgbWFrZSBvbmVcbiAgLy8gYmUgYWJsZSB0byBwdXNoIG5ldyBwcm9qZWN0cyB0byBwcm9qZWN0IGxpc3QgYXJyYXkgaW4gc3RvcmFnZVxuICAvLyBiZSBhYmxlIHRvIHVwZGF0ZSBwcm9qZWN0IHByb3BlcnRpZXMgd2l0aGluIHRoZSBwcm9qZWN0IGxpc3QiLCIvL2NyZWF0ZSB0byBkbyBpdGVtXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1RvRG8odHRsZSwgZGVzYywgZHVlLCBwcmlvKSB7XG4gICAgbGV0IHRpdGxlID0gdHRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIGxldCBkdWVEYXRlID0gZHVlO1xuICAgIGxldCBwcmlvcml0eSA9IHByaW87XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBuZXdUb0RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGFjY2Vzc1N0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5jb25zdCBwcm9qSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWluZm8nKTtcbmNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcblxuLy9wb3B1bGF0aW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcG9wdWxhdGVUb0RvKG9iamVjdCkge1xuICAgIC8vIHBvcHVsYXRlIHByb2plY3QgaW5mbyBzZWN0aW9uIHdpdGggdGl0bGUsIGRlc2MsIGR1ZSBkYXRlXG4gICAgLy8gaGF2ZSBtZXRob2RzIHRvIGNoYW5nZSBhbGwgcHJvamVjdCBpbmZvXG4gICAgY29uc3QgcHJvakNoYW5nZURpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIHByb2pDaGFuZ2VEaWEuaWQgPSAnI2NoYW5nZS1wcm9qLWRpYSc7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvakNoYW5nZURpYSk7XG4gICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9qQ2hhbmdlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qQ2hhbmdlRm9ybS5pZCA9ICcjY2hhbmdlLXByb2otZm9ybSc7XG4gICAgcHJvakNoYW5nZURpYS5hcHBlbmRDaGlsZChwcm9qQ2hhbmdlRm9ybSk7XG5cbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2pUaXRsZS5pZCA9ICd0aXRsZS1pbmZvJztcbiAgICBwcm9qVGl0bGUuaW5uZXJIVE1MID0gb2JqZWN0LnRpdGxlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgY29uc3QgY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlVGl0bGVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5pZCA9ICd0aXRsZS1jaGFuZ2UtYnRuJ1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5pbm5lckhUTUwgPSAnQ2hhbmdlIFRpdGxlJztcbiAgICAgICAgY2hhbmdlVGl0bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGNoYW5nZVRpdGxlLm5hbWUgPSAndGl0bGUnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUuaWQgPSAnY2hhbmdlLXRpdGxlJztcbiAgICAgICAgICAgIGNoYW5nZVRpdGxlLnBsYWNlaG9sZGVyID0gb2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC50aXRsZSA9IGZvcm1PYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VUaXRsZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRGVzYy5pZCA9ICdkZXNjLWluZm8nO1xuICAgIHByb2pEZXNjLmlubmVySFRNTCA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qRGVzYyk7XG4gICAgY29uc3QgY2hhbmdlRGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1idXR0b24nKTtcbiAgICAgICAgY2hhbmdlRGVzY0J0bi5pZCA9ICdkZXNjLWNoYW5nZS1idG4nO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgRGVzY3JpcHRpb24nXG4gICAgICAgIGNoYW5nZURlc2NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNoYW5nZURlc2MudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGNoYW5nZURlc2MubmFtZSA9ICdkZXNjJztcbiAgICAgICAgICAgIGNoYW5nZURlc2MuaWQgPSAnY2hhbmdlLWRlc2MnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5wbGFjZWhvbGRlciA9IG9iamVjdC5kZXNjIHx8IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZURlc2MpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5kZXNjcmlwdGlvbiA9IGZvcm1PYmouZGVzYztcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VEZXNjQnRuKTtcblxuICAgIGNvbnN0IHByb2pEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvakR1ZS5pZCA9ICdkdWUtaW5mbyc7XG4gICAgcHJvakR1ZS5pbm5lckhUTUwgPSBcIkR1ZTogXCIgKyBvYmplY3QuZHVlRGF0ZTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qRHVlKTtcbiAgICBjb25zdCBjaGFuZ2VEdWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlRHVlQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1idXR0b24nKTtcbiAgICAgICAgY2hhbmdlRHVlQnRuLmlkID0gJ2R1ZS1jaGFuZ2UtYnRuJztcbiAgICAgICAgY2hhbmdlRHVlQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgRHVlIERhdGUnXG4gICAgICAgIGNoYW5nZUR1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS5uYW1lID0gJ2R1ZURhdGUnO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS5pZCA9ICdjaGFuZ2UtZHVlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5kdWVEYXRlID0gZm9ybU9iai5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZUR1ZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qUHJpby5pZCA9ICdwcmlvLWluZm8nO1xuICAgIHByb2pQcmlvLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgb2JqZWN0LnByaW9yaXR5O1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pQcmlvKTtcbiAgICBjb25zdCBjaGFuZ2VQcmlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VQcmlvQnRuLmlkID0gJ3ByaW8tY2hhbmdlLWJ0bic7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBQcmlvcml0eSdcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGNoYW5nZVByaW8uaWQgPSAnY2hhbmdlLXByaW8nO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZVByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VIaWdoUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlSGlnaFByaW8udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICBjaGFuZ2VIaWdoUHJpby5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLmFwcGVuZENoaWxkKGNoYW5nZUhpZ2hQcmlvKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTWVkUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlTWVkUHJpby52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgY2hhbmdlTWVkUHJpby5pbm5lckhUTUwgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlTWVkUHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNoYW5nZUxvd1ByaW8udmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgIGNoYW5nZUxvd1ByaW8uaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLmFwcGVuZENoaWxkKGNoYW5nZUxvd1ByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5wcmlvcml0eSA9IGZvcm1PYmoucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb0J0bik7XG5cbiAvLyBwcm9qZWN0IGluZm8gaGFzIGEgYnV0dG9uIHRvIG1hcmsgdGhlIHByb2plY3QgY29tcGxldGUgb3IgaW5jb21wbGV0ZVxuICAgIGNvbnN0IGNvbXBsZXRlUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmIChvYmplY3QuZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29tcGxldGVQcm9qLmlkID0gJ2NvbXBsZXRlLXByb2plY3QnO1xuICAgICAgICBjb21wbGV0ZVByb2ouaW5uZXJIVE1MID0gJ01hcmsgUHJvamVjdCBDb21wbGV0ZSdcbiAgICAgICAgY29tcGxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZVByb2ouaWQgPSAndW5kby1jb21wbGV0ZS1wcm9qZWN0JztcbiAgICAgICAgY29tcGxldGVQcm9qLmlubmVySFRNTCA9ICdNYXJrIFByb2plY3QgSW5jb21wbGV0ZSdcbiAgICAgICAgY29tcGxldGVQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjb21wbGV0ZVByb2opO1xuICAgIFxuICAgIC8vIGxvb3AgdGhlIGJlbG93IGZvciBhbGwgdG9EbyBpdGVtc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgZGl2IHdpdGhpbiB0b0RvRGlzcGxheVxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0by1kby1pdGVtJyk7XG4gICAgICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9JdGVtKTsgXG4gICAgICAgIC8vIGRpdiBoYXMgYSBwcm9taW5lbnQgY2hlY2tib3ggdG8gY2hhbmdlIGNvbXBsZXRlIHN0YXR1c1xuICAgICAgICBjb25zdCB0b0RvQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b0RvQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHRvRG9DaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0by1kby1jaGVja2JveCcpO1xuICAgICAgICBpZiAob2JqZWN0Lmxpc3RbaV0uZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdG9Eb0NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxQjg5MjYnO1xuICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9O1xuICAgICAgICB0b0RvQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxQjg5MjYnO1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBvYmplY3QubGlzdFtpXS5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lmxpc3RbaV0uZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0NoZWNrYm94KTtcblxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgZGl2IHdpdGggdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlIGRhdGVcbiAgICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tdGl0bGUnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLnRpdGxlO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvRGVzYy5jbGFzc0xpc3QuYWRkKCd0by1kby1kZXNjJyk7XG4gICAgICAgIHRvRG9EZXNjLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvRGVzYyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9QcmlvLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXByaW8nKTtcbiAgICAgICAgdG9Eb1ByaW8uaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0ucHJpb3JpdHk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9QcmlvKTtcblxuICAgICAgICBjb25zdCB0b0RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0RhdGUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGF0ZScpO1xuICAgICAgICB0b0RvRGF0ZS5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS5kdWVEYXRlO1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvRGF0ZSk7XG4gICAgICAgIC8vIHByaW9yaXR5IHNob3VsZCBhZGp1c3QgcG9zaXRpb24gaW4gbGlzdFxuICAgICAgICAvLyBpdGVtcyBzaG91bGQgYmUgYWJsZSB0byBiZSBkZWxldGVkXG4gICAgfTtcbiAgICAvLyBoYXZlIGEgYnV0dG9uIHRvIGNyZWF0ZSBhIG5ldyB0by1kbyBpdGVtXG5cbiAgICBjb25zdCB0b0RvRGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgdG9Eb0RpYS5pZCA9ICduZXctdG9kby1kaWEnO1xuICAgIHRvRG9EaWEub3BlbiA9IGZhbHNlO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKHRvRG9EaWEpO1xuXG4gICAgY29uc3QgdG9Eb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9Eb0Zvcm0uaWQgPSAnbmV3LXRvZG8tZm9ybSc7XG4gICAgdG9Eb0RpYS5hcHBlbmRDaGlsZCh0b0RvRm9ybSk7XG5cbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRUaXRsZS5uYW1lID0gJ3RpdGxlJztcbiAgICBpbnB1dFRpdGxlLmlkID0gJ3RvZG8tdGl0bGUnO1xuICAgIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSAnVG8tRG8nO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dERlc2MudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dERlc2MubmFtZSA9ICdkZXNjJztcbiAgICBpbnB1dERlc2MuaWQgPSAndG9kby1kZXNjJztcbiAgICBpbnB1dERlc2MucGxhY2Vob2xkZXIgPSAnRGV0YWlscyc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREYXRlLnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXREYXRlLm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgaW5wdXREYXRlLmlkID0gJ3RvZG8tZHVlJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgY29uc3Qgc2VsZWN0UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdFByaW8uaWQgPSAndG9kby1wcmlvJztcbiAgICBzZWxlY3RQcmlvLm5hbWUgPSAncHJpb3JpdHknO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW8pO1xuXG4gICAgY29uc3QgaGlnaFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBoaWdoUHJpby52YWx1ZSA9ICdoaWdoJztcbiAgICBoaWdoUHJpby5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChoaWdoUHJpbyk7XG5cbiAgICBjb25zdCBtZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkUHJpby52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIG1lZFByaW8uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChtZWRQcmlvKTtcblxuICAgIGNvbnN0IGxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBsb3dQcmlvLnZhbHVlID0gJ2xvdyc7XG4gICAgbG93UHJpby5pbm5lckhUTUwgPSAnTG93JztcbiAgICBzZWxlY3RQcmlvLmFwcGVuZENoaWxkKGxvd1ByaW8pO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uaWQgPSAndG9kby1zdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSAnQ3JlYXRlJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXG5cbiAgICB0b0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKHRvRG9Gb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgICAgIG9iamVjdC5saXN0LnB1c2gobmV3VG9Ebyhmb3JtT2JqLnRpdGxlLCBmb3JtT2JqLmRlc2MsIGZvcm1PYmouZHVlRGF0ZSwgZm9ybU9iai5wcmlvcml0eSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICB0b0RvRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgdG9Eb0Zvcm0ucmVzZXQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1RvRG9CdG4uaWQgPSAnbmV3LXRvZG8tYnRuJztcbiAgICBuZXdUb0RvQnRuLmlubmVySFRNTCA9ICdOZXcgSXRlbSdcbiAgICBuZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b0RvRGlhLm9wZW4gPSB0cnVlO1xuICAgIH0pO1xuICAgIHRvRG9EaXNwbGF5LmFwcGVuZENoaWxkKG5ld1RvRG9CdG4pO1xufTtcblxuXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RzKCkge1xuICAgIC8vIGxvb3AgZm9yIGFsbCBwcm9qZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgcHJvamVjdCBkaXYgd2l0aGluIHByb2plY3REaXNwbGF5XG4gICAgICAgIGxldCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXYnKTtcbiAgICAgICAgLy8gbWFrZSB0aGUgZGl2IGFibGUgdG8gYmUgaGlnaGxpZ2h0ZWQgb24gY2xpY2tcbiAgICAgICAgcHJvakRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gYW5vdGhlciBwcm9qZWN0IGlzIGNsaWNrZWQsIGFsbCBvdGhlcnMgcmVtb3ZlIGhpZ2hsaWdodFxuICAgICAgICAgICAgbGV0IGFsbFByb2pzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGl2Jyk7XG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGFsbFByb2pzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgYWxsUHJvanNbYV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBhbGxQcm9qc1thXS5zdHlsZS5jb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSBzYW1lIGV2ZW50IHRyaWdnZXIgcG9wdWxhdGluZyBUb0RvIHdpdGggYSBzZXBhcmF0ZSBmdW5jdGlvblxuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ocHJvamVjdExpc3RbaV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IHRpdGxlIGFuZCBkdWUgZGF0ZSBpZiBpbmNvbXBsZXRlIGFuZCBjb21wbGV0ZSBpZiBjb21wbGV0ZVxuICAgICAgICBjb25zdCBwcm9qVHRsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qVHRsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgcHJvalR0bC5pbm5lckhUTUwgPSBwcm9qZWN0TGlzdFtpXS50aXRsZTtcbiAgICAgICAgY29uc3QgcHJvakR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5kb25lID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvai1pbmNvbXBsZXRlJyk7XG4gICAgICAgICAgICBwcm9qRHVlRGF0ZS5pbm5lckhUTUwgPSAnRHVlOiAnICsgcHJvamVjdExpc3RbaV0uZHVlRGF0ZTtcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvai1jb21wbGV0ZScpO1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuaW5uZXJIVE1MID0gJ0NPTVBMRVRFJztcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMxQjg5MjYnO1xuICAgICAgICAgICAgcHJvakRpdi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgIH07XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pUdGwpO1xuICAgICAgICBwcm9qRGl2LmFwcGVuZENoaWxkKHByb2pEdWVEYXRlKVxuICAgIH07XG5cbiAgICAvL25ldyBwcm9qZWN0IGJ1dHRvbiB0byBvcGVuIG5ldyBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBuZXdQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3UHJvakJ0bi5pZCA9ICduZXctcHJvamVjdCdcbiAgICBuZXdQcm9qQnRuLmlubmVySFRNTCA9ICdOZXcgUHJvamVjdCdcbiAgICBuZXdQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdQcm9qRGlhLm9wZW4gPSB0cnVlXG4gICAgfSk7XG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQobmV3UHJvakJ0bik7XG59O1xuXG4vL2NsZWFyaW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2xlYXJQcm9qZWN0cygpIHtcbiAgICB3aGlsZSAocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5yZW1vdmVDaGlsZChwcm9qZWN0RGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gY2xlYXJUb0RvKCkge1xuICAgIHdoaWxlICh0b0RvRGlzcGxheS5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvRG9EaXNwbGF5LnJlbW92ZUNoaWxkKHRvRG9EaXNwbGF5LmZpcnN0Q2hpbGQpO1xuICAgIH07XG4gICAgd2hpbGUgKHByb2pJbmZvLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvakluZm8ucmVtb3ZlQ2hpbGQocHJvakluZm8uZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbi8vIG9uIGxvYWQsIHB1bGwgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgcHJvamVjdExpc3QgPSBhY2Nlc3NTdG9yYWdlKCk7XG5wb3B1bGF0ZVByb2plY3RzKCk7XG5cbi8vIG5ldyBwcm9qZWN0IGZvcm0gcG9wdWxhdGVzIERPTSBhbmQgbG9jYWwgc3RvcmFnZSBsaXN0XG5jb25zdCBuZXdQcm9qRGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qLWRpYWxvZ3VlJyk7XG5uZXdQcm9qRGlhLm9wZW4gPSBmYWxzZTtcblxuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2otZm9ybScpO1xuXG5wcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShwcm9qRm9ybSk7XG4gICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmZCk7XG4gICAgcHJvamVjdExpc3QudW5zaGlmdChuZXdQcm9qZWN0KGZvcm1PYmoudGl0bGUsICcnLCBmb3JtT2JqLmR1ZSwgJycpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBjbGVhclByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgIC8vIGhpZ2hsaWdodCB0aGUgbmV3IHByb2plY3QgYXMgaWYgc2VsZWN0ZWRcbiAgICBjb25zdCBwcm9qRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRpdicpO1xuICAgIHByb2pEaXZzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcblxuICAgIGNsZWFyVG9EbygpO1xuICAgIHBvcHVsYXRlVG9Ebyhwcm9qZWN0TGlzdFswXSk7XG5cbiAgICBuZXdQcm9qRGlhLm9wZW4gPSBmYWxzZTtcbiAgICBwcm9qRm9ybS5yZXNldCgpO1xufSk7XG5cbi8vIG5ldyB0by1kbyBidXR0b24gYWRkcyBhIHRvLWRvIGl0ZW0gd2l0aGluIHRoZSBwcm9qZWN0XG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgaGF2ZSBhIGNoZWNrYm94IHRvIG1hcmsgY29tcGxldGVcbi8vIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyBkaXNwbGF5IGFzIGNvbXBsZXRlIG9yIGluY29tcGxldGVcbi8vIGNhbiByZWFycmFuZ2UgcGxhY2VtZW50IG9mIHByb2plY3RzIGFuZCB0by1kbyBpdGVtcyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==