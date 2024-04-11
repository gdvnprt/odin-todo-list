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
            let deleteIndex = projectList.indexOf(object);
            (0,_array_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"])(projectList, deleteIndex);
            localStorage.setItem('toDoProjects', JSON.stringify(projectList));
            clearProjects();
            populateProjects();
            clearToDo();
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
        toDoItem.appendChild(toDoDate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVEQUFhO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1REFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FycmF5LWVkaXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbn1cblxuI2hlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGViYXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG59XG5cbiNzaWRlYmFyIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NTk1OTU7XG4gICAgcGFkZGluZy1ib3R0b206IDJ2aDtcbn1cblxuI3Byb2plY3QtbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcm9qZWN0IHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5wcm9qZWN0LWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTU5NTk1O1xufVxuXG4ucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNwcm9qLWluZm8ge1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XG59XG5cbi5jaGFuZ2UtYnV0dG9uIHtcbiAgICB3aWR0aDogNHZ3O1xuICAgIGhlaWdodDogNHZoO1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG59XG5cbiN0aXRsZS1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jdGl0bGUtY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI2Rlc2MtaW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuI2Rlc2MtY2hhbmdlLWJ0biB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuI2R1ZS1pbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4jZHVlLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNwcmlvLWluZm8ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG59XG5cbiNwcmlvLWNoYW5nZS1idG4ge1xuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbiNjb21wbGV0ZS1wcm9qZWN0LCAjdW5kby1jb21wbGV0ZS1wcm9qZWN0IHtcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICAgIGhlaWdodDogNnZoO1xuICAgIHdpZHRoOiA1dnc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvbXBsZXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQjg5MjY7XG59XG5cbiN1bmRvLWNvbXBsZXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMDAwMDA7XG59XG5cbiN0b2RvIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50by1kby1pdGVtIHtcbiAgICBoZWlnaHQ6IDh2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzZnIgMWZyIDJmciAzZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzdnc7XG4gICAgZ2FwOiA4dnc7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NTk1OTU7XG59XG5cbi50by1kby1jaGVja2JveCB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogSUUgKi9cbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogRkYgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIE9wZXJhICovXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xufVxuXG4udG8tZG8tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25ldy10b2RvLWJ0biB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtHQUNiLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsMkJBQTJCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSxPQUFPO0lBQ2xDLDBCQUEwQixFQUFFLE9BQU87SUFDbkMsNkJBQTZCLEVBQUUsc0JBQXNCO0lBQ3JELHdCQUF3QixFQUFFLFVBQVU7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jc2lkZWJhciBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5NTk1OTU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAydmg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4jbmV3LXByb2plY3Qge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk1OTU5NTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Byb2otaW5mbyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uY2hhbmdlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA0dnc7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICBmb250LXNpemU6IC43cmVtO1xcbn1cXG5cXG4jdGl0bGUtaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4jdGl0bGUtY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jZGVzYy1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbiNkZXNjLWNoYW5nZS1idG4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI2R1ZS1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbiNkdWUtY2hhbmdlLWJ0biB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4jcHJpby1pbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbiNwcmlvLWNoYW5nZS1idG4ge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuI2NvbXBsZXRlLXByb2plY3QsICN1bmRvLWNvbXBsZXRlLXByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogNSAvIDY7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjb21wbGV0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFCODkyNjtcXG59XFxuXFxuI3VuZG8tY29tcGxldGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMDAwMDA7XFxufVxcblxcbiN0b2RvIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvLWRvLWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzZnIgMWZyIDJmciAzZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAzdnc7XFxuICAgIGdhcDogOHZ3O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzk1OTU5NTtcXG59XFxuXFxuLnRvLWRvLWNoZWNrYm94IHtcXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMi41KTsgLyogSUUgKi9cXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIEZGICovXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyLjUpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIuNSk7IC8qIE9wZXJhICovXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcXG59XFxuXFxuLnRvLWRvLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI25ldy10b2RvLWJ0biB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUFycmF5SXRlbShhcnJheSwgaSkge1xuICAgIGFycmF5LnNwbGljZShpLCAxKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdCh0dGxlLCBkZXNjLCBkdWUsIHByaW8pIHtcbiAgICBsZXQgdGl0bGUgPSB0dGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgbGV0IGR1ZURhdGUgPSBkdWU7IFxuICAgIGxldCBwcmlvcml0eSA9IHByaW9cbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGxldCBkb25lID0gZmFsc2VcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxpc3QsIGRvbmUgfTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2Nlc3NTdG9yYWdlKCkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb1Byb2plY3RzJykgfHwgJ1tdJyk7XG59O1xuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH07XG4gIH07XG4gIFxuICAvLyBpZiBsb2NhbCBzdG9yYWdlIGNhbm5vdCBiZSBhY2Nlc3NlZCwgdGhyb3cgYW4gZXJyb3Igb3IgYWxlcnRcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBjYW4gYmUgYWNjZXNzZWQsIHB1bGwgcHJvamVjdCBsaXN0IGFycmF5IGZyb20gbG9jYWwgc3RvcmFnZVxuICAvLyBpZiBubyBwcm9qZWN0IGxpc3QgaW4gbG9jYWwgc3RvcmFnZSwgbWFrZSBvbmVcbiAgLy8gYmUgYWJsZSB0byBwdXNoIG5ldyBwcm9qZWN0cyB0byBwcm9qZWN0IGxpc3QgYXJyYXkgaW4gc3RvcmFnZVxuICAvLyBiZSBhYmxlIHRvIHVwZGF0ZSBwcm9qZWN0IHByb3BlcnRpZXMgd2l0aGluIHRoZSBwcm9qZWN0IGxpc3QiLCIvL2NyZWF0ZSB0byBkbyBpdGVtXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1RvRG8odHRsZSwgZGVzYywgZHVlLCBwcmlvKSB7XG4gICAgbGV0IHRpdGxlID0gdHRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIGxldCBkdWVEYXRlID0gZHVlO1xuICAgIGxldCBwcmlvcml0eSA9IHByaW87XG4gICAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBuZXdUb0RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGFjY2Vzc1N0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCByZW1vdmVBcnJheUl0ZW0gZnJvbSAnLi9hcnJheS1lZGl0LmpzJztcblxuY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5jb25zdCBwcm9qSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLWluZm8nKTtcbmNvbnN0IHRvRG9EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcblxuLy9wb3B1bGF0aW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gcG9wdWxhdGVUb0RvKG9iamVjdCkge1xuICAgIC8vIHBvcHVsYXRlIHByb2plY3QgaW5mbyBzZWN0aW9uIHdpdGggdGl0bGUsIGRlc2MsIGR1ZSBkYXRlXG4gICAgLy8gaGF2ZSBtZXRob2RzIHRvIGNoYW5nZSBhbGwgcHJvamVjdCBpbmZvXG4gICAgY29uc3QgcHJvakNoYW5nZURpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIHByb2pDaGFuZ2VEaWEuaWQgPSAnI2NoYW5nZS1wcm9qLWRpYSc7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQocHJvakNoYW5nZURpYSk7XG4gICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9qQ2hhbmdlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qQ2hhbmdlRm9ybS5pZCA9ICcjY2hhbmdlLXByb2otZm9ybSc7XG4gICAgcHJvakNoYW5nZURpYS5hcHBlbmRDaGlsZChwcm9qQ2hhbmdlRm9ybSk7XG5cbiAgICBjb25zdCBwcm9qVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2pUaXRsZS5pZCA9ICd0aXRsZS1pbmZvJztcbiAgICBwcm9qVGl0bGUuaW5uZXJIVE1MID0gb2JqZWN0LnRpdGxlO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pUaXRsZSk7XG4gICAgY29uc3QgY2hhbmdlVGl0bGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlVGl0bGVCdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5pZCA9ICd0aXRsZS1jaGFuZ2UtYnRuJ1xuICAgICAgICBjaGFuZ2VUaXRsZUJ0bi5pbm5lckhUTUwgPSAnQ2hhbmdlIFRpdGxlJztcbiAgICAgICAgY2hhbmdlVGl0bGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGNoYW5nZVRpdGxlLm5hbWUgPSAndGl0bGUnO1xuICAgICAgICAgICAgY2hhbmdlVGl0bGUuaWQgPSAnY2hhbmdlLXRpdGxlJztcbiAgICAgICAgICAgIGNoYW5nZVRpdGxlLnBsYWNlaG9sZGVyID0gb2JqZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYXBwZW5kQ2hpbGQoY2hhbmdlVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC50aXRsZSA9IGZvcm1PYmoudGl0bGU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VUaXRsZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qRGVzYy5pZCA9ICdkZXNjLWluZm8nO1xuICAgIHByb2pEZXNjLmlubmVySFRNTCA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qRGVzYyk7XG4gICAgY29uc3QgY2hhbmdlRGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1idXR0b24nKTtcbiAgICAgICAgY2hhbmdlRGVzY0J0bi5pZCA9ICdkZXNjLWNoYW5nZS1idG4nO1xuICAgICAgICBjaGFuZ2VEZXNjQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgRGVzY3JpcHRpb24nXG4gICAgICAgIGNoYW5nZURlc2NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNoYW5nZURlc2MudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgIGNoYW5nZURlc2MubmFtZSA9ICdkZXNjJztcbiAgICAgICAgICAgIGNoYW5nZURlc2MuaWQgPSAnY2hhbmdlLWRlc2MnO1xuICAgICAgICAgICAgY2hhbmdlRGVzYy5wbGFjZWhvbGRlciA9IG9iamVjdC5kZXNjIHx8IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZURlc2MpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5kZXNjcmlwdGlvbiA9IGZvcm1PYmouZGVzYztcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChjaGFuZ2VEZXNjQnRuKTtcblxuICAgIGNvbnN0IHByb2pEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvakR1ZS5pZCA9ICdkdWUtaW5mbyc7XG4gICAgcHJvakR1ZS5pbm5lckhUTUwgPSBcIkR1ZTogXCIgKyBvYmplY3QuZHVlRGF0ZTtcbiAgICBwcm9qSW5mby5hcHBlbmRDaGlsZChwcm9qRHVlKTtcbiAgICBjb25zdCBjaGFuZ2VEdWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2hhbmdlRHVlQnRuLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZS1idXR0b24nKTtcbiAgICAgICAgY2hhbmdlRHVlQnRuLmlkID0gJ2R1ZS1jaGFuZ2UtYnRuJztcbiAgICAgICAgY2hhbmdlRHVlQnRuLmlubmVySFRNTCA9ICdDaGFuZ2UgRHVlIERhdGUnXG4gICAgICAgIGNoYW5nZUR1ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS5uYW1lID0gJ2R1ZURhdGUnO1xuICAgICAgICAgICAgY2hhbmdlRGF0ZS5pZCA9ICdjaGFuZ2UtZHVlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZURhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5kdWVEYXRlID0gZm9ybU9iai5kdWVEYXRlO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2pDaGFuZ2VEaWEub3BlbiA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGNoYW5nZUR1ZUJ0bik7XG5cbiAgICBjb25zdCBwcm9qUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qUHJpby5pZCA9ICdwcmlvLWluZm8nO1xuICAgIHByb2pQcmlvLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgb2JqZWN0LnByaW9yaXR5O1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKHByb2pQcmlvKTtcbiAgICBjb25zdCBjaGFuZ2VQcmlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uY2xhc3NMaXN0LmFkZCgnY2hhbmdlLWJ1dHRvbicpO1xuICAgICAgICBjaGFuZ2VQcmlvQnRuLmlkID0gJ3ByaW8tY2hhbmdlLWJ0bic7XG4gICAgICAgIGNoYW5nZVByaW9CdG4uaW5uZXJIVE1MID0gJ0NoYW5nZSBQcmlvcml0eSdcbiAgICAgICAgY2hhbmdlUHJpb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGNoYW5nZVByaW8uaWQgPSAnY2hhbmdlLXByaW8nO1xuICAgICAgICAgICAgY2hhbmdlUHJpby5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZVByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VIaWdoUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlSGlnaFByaW8udmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICBjaGFuZ2VIaWdoUHJpby5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLmFwcGVuZENoaWxkKGNoYW5nZUhpZ2hQcmlvKTtcblxuICAgICAgICAgICAgY29uc3QgY2hhbmdlTWVkUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY2hhbmdlTWVkUHJpby52YWx1ZSA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgY2hhbmdlTWVkUHJpby5pbm5lckhUTUwgPSAnTWVkaXVtJztcbiAgICAgICAgICAgIGNoYW5nZVByaW8uYXBwZW5kQ2hpbGQoY2hhbmdlTWVkUHJpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGNoYW5nZUxvd1ByaW8udmFsdWUgPSAnTG93JztcbiAgICAgICAgICAgIGNoYW5nZUxvd1ByaW8uaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgICAgICAgICBjaGFuZ2VQcmlvLmFwcGVuZENoaWxkKGNoYW5nZUxvd1ByaW8pO1xuXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgICAgICBjaGFuZ2VCdXR0b24uaWQgPSAncHJvai1jaGFuZ2Utc3VibWl0JztcbiAgICAgICAgICAgIGNoYW5nZUJ1dHRvbi5pbm5lckhUTUwgPSAnQ2hhbmdlJztcbiAgICAgICAgICAgIHByb2pDaGFuZ2VGb3JtLmFwcGVuZENoaWxkKGNoYW5nZUJ1dHRvbilcblxuICAgICAgICAgICAgcHJvakNoYW5nZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakNoYW5nZUZvcm0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5wcmlvcml0eSA9IGZvcm1PYmoucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBwcm9qQ2hhbmdlRGlhLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvakNoYW5nZURpYS5vcGVuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY2hhbmdlUHJpb0J0bik7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2ouaWQgPSAnZGVsZXRlLXByb2plY3QnO1xuICAgICAgICBkZWxldGVQcm9qLmlubmVySFRNTCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgICAgIGRlbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKG9iamVjdCk7XG4gICAgICAgICAgICByZW1vdmVBcnJheUl0ZW0ocHJvamVjdExpc3QsIGRlbGV0ZUluZGV4KTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgIH0pO1xuICAgIHByb2pJbmZvLmFwcGVuZENoaWxkKGRlbGV0ZVByb2opO1xuXG4gLy8gcHJvamVjdCBpbmZvIGhhcyBhIGJ1dHRvbiB0byBtYXJrIHRoZSBwcm9qZWN0IGNvbXBsZXRlIG9yIGluY29tcGxldGVcbiAgICBjb25zdCBjb21wbGV0ZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpZiAob2JqZWN0LmRvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pZCA9ICdjb21wbGV0ZS1wcm9qZWN0JztcbiAgICAgICAgY29tcGxldGVQcm9qLmlubmVySFRNTCA9ICdNYXJrIFByb2plY3QgQ29tcGxldGUnXG4gICAgICAgIGNvbXBsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICAgICAgICAgICAgY2xlYXJUb0RvKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGVQcm9qLmlkID0gJ3VuZG8tY29tcGxldGUtcHJvamVjdCc7XG4gICAgICAgIGNvbXBsZXRlUHJvai5pbm5lckhUTUwgPSAnTWFyayBQcm9qZWN0IEluY29tcGxldGUnXG4gICAgICAgIGNvbXBsZXRlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHMoKTtcbiAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKG9iamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcHJvakluZm8uYXBwZW5kQ2hpbGQoY29tcGxldGVQcm9qKTtcbiAgICBcbiAgICAvLyBsb29wIHRoZSBiZWxvdyBmb3IgYWxsIHRvRG8gaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGRpdiB3aXRoaW4gdG9Eb0Rpc3BsYXlcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG8tZG8taXRlbScpO1xuICAgICAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvSXRlbSk7IFxuICAgICAgICAvLyBkaXYgaGFzIGEgcHJvbWluZW50IGNoZWNrYm94IHRvIGNoYW5nZSBjb21wbGV0ZSBzdGF0dXNcbiAgICAgICAgY29uc3QgdG9Eb0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9Eb0NoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICB0b0RvQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgndG8tZG8tY2hlY2tib3gnKTtcbiAgICAgICAgaWYgKG9iamVjdC5saXN0W2ldLmRvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRvRG9DaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMUI4OTI2JztcbiAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgfTtcbiAgICAgICAgdG9Eb0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMUI4OTI2JztcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lmxpc3RbaV0uZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIG9iamVjdC5saXN0W2ldLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKHRvRG9DaGVja2JveCk7XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgdGhlIGRpdiB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZSBkYXRlXG4gICAgICAgIGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJyk7XG4gICAgICAgIHRvRG9UaXRsZS5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS50aXRsZTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcblxuICAgICAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdG9Eb0Rlc2MuY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVzYycpO1xuICAgICAgICB0b0RvRGVzYy5pbm5lckhUTUwgPSBvYmplY3QubGlzdFtpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0Rlc2MpO1xuXG4gICAgICAgIGNvbnN0IHRvRG9QcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0b0RvUHJpby5jbGFzc0xpc3QuYWRkKCd0by1kby1wcmlvJyk7XG4gICAgICAgIHRvRG9QcmlvLmlubmVySFRNTCA9IG9iamVjdC5saXN0W2ldLnByaW9yaXR5O1xuICAgICAgICB0b0RvSXRlbS5hcHBlbmRDaGlsZCh0b0RvUHJpbyk7XG5cbiAgICAgICAgY29uc3QgdG9Eb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRvRG9EYXRlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLWRhdGUnKTtcbiAgICAgICAgdG9Eb0RhdGUuaW5uZXJIVE1MID0gb2JqZWN0Lmxpc3RbaV0uZHVlRGF0ZTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuXG4gICAgICAgIC8vIGl0ZW1zIHNob3VsZCBiZSBhYmxlIHRvIGJlIGRlbGV0ZWRcbiAgICAgICAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgICAgIGRlbGV0ZVRvRG8uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgICAgIGRlbGV0ZVRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVBcnJheUl0ZW0ob2JqZWN0Lmxpc3QsIGkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgICAgICAgICBjbGVhclRvRG8oKTtcbiAgICAgICAgICAgIHBvcHVsYXRlVG9EbyhvYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQodG9Eb0RhdGUpO1xuICAgIH07XG4gICAgLy8gaGF2ZSBhIGJ1dHRvbiB0byBjcmVhdGUgYSBuZXcgdG8tZG8gaXRlbVxuXG4gICAgY29uc3QgdG9Eb0RpYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIHRvRG9EaWEuaWQgPSAnbmV3LXRvZG8tZGlhJztcbiAgICB0b0RvRGlhLm9wZW4gPSBmYWxzZTtcbiAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZCh0b0RvRGlhKTtcblxuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvRG9Gb3JtLmlkID0gJ25ldy10b2RvLWZvcm0nO1xuICAgIHRvRG9EaWEuYXBwZW5kQ2hpbGQodG9Eb0Zvcm0pO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0VGl0bGUubmFtZSA9ICd0aXRsZSc7XG4gICAgaW5wdXRUaXRsZS5pZCA9ICd0b2RvLXRpdGxlJztcbiAgICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gJ1RvLURvJztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREZXNjLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXREZXNjLm5hbWUgPSAnZGVzYyc7XG4gICAgaW5wdXREZXNjLmlkID0gJ3RvZG8tZGVzYyc7XG4gICAgaW5wdXREZXNjLnBsYWNlaG9sZGVyID0gJ0RldGFpbHMnO1xuICAgIHRvRG9Gb3JtLmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG5cbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0RGF0ZS5uYW1lID0gJ2R1ZURhdGUnO1xuICAgIGlucHV0RGF0ZS5pZCA9ICd0b2RvLWR1ZSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcblxuICAgIGNvbnN0IHNlbGVjdFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3RQcmlvLmlkID0gJ3RvZG8tcHJpbyc7XG4gICAgc2VsZWN0UHJpby5uYW1lID0gJ3ByaW9yaXR5JztcbiAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcmlvKTtcblxuICAgIGNvbnN0IGhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaGlnaFByaW8udmFsdWUgPSAnaGlnaCc7XG4gICAgaGlnaFByaW8uaW5uZXJIVE1MID0gJ0hpZ2gnO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQoaGlnaFByaW8pO1xuXG4gICAgY29uc3QgbWVkUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG1lZFByaW8udmFsdWUgPSAnbWVkaXVtJztcbiAgICBtZWRQcmlvLmlubmVySFRNTCA9ICdNZWRpdW0nO1xuICAgIHNlbGVjdFByaW8uYXBwZW5kQ2hpbGQobWVkUHJpbyk7XG5cbiAgICBjb25zdCBsb3dQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93UHJpby52YWx1ZSA9ICdsb3cnO1xuICAgIGxvd1ByaW8uaW5uZXJIVE1MID0gJ0xvdyc7XG4gICAgc2VsZWN0UHJpby5hcHBlbmRDaGlsZChsb3dQcmlvKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnV0dG9uLmlkID0gJ3RvZG8tc3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gJ0NyZWF0ZSc7XG4gICAgdG9Eb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxuXG4gICAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSh0b0RvRm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgICAgICBvYmplY3QubGlzdC5wdXNoKG5ld1RvRG8oZm9ybU9iai50aXRsZSwgZm9ybU9iai5kZXNjLCBmb3JtT2JqLmR1ZURhdGUsIGZvcm1PYmoucHJpb3JpdHkpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICBwb3B1bGF0ZVRvRG8ob2JqZWN0KTtcbiAgICAgICAgdG9Eb0RpYS5vcGVuID0gZmFsc2U7XG4gICAgICAgIHRvRG9Gb3JtLnJlc2V0KCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb0RvQnRuLmlkID0gJ25ldy10b2RvLWJ0bic7XG4gICAgbmV3VG9Eb0J0bi5pbm5lckhUTUwgPSAnTmV3IEl0ZW0nXG4gICAgbmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9Eb0RpYS5vcGVuID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0b0RvRGlzcGxheS5hcHBlbmRDaGlsZChuZXdUb0RvQnRuKTtcbn07XG5cblxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0cygpIHtcbiAgICAvLyBsb29wIGZvciBhbGwgcHJvamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHByb2plY3QgZGl2IHdpdGhpbiBwcm9qZWN0RGlzcGxheVxuICAgICAgICBsZXQgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gICAgICAgIC8vIG1ha2UgdGhlIGRpdiBhYmxlIHRvIGJlIGhpZ2hsaWdodGVkIG9uIGNsaWNrXG4gICAgICAgIHByb2pEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyB3aGVuIGFub3RoZXIgcHJvamVjdCBpcyBjbGlja2VkLCBhbGwgb3RoZXJzIHJlbW92ZSBoaWdobGlnaHRcbiAgICAgICAgICAgIGxldCBhbGxQcm9qcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRpdicpO1xuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBhbGxQcm9qcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGFsbFByb2pzW2FdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgYWxsUHJvanNbYV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgLy8gbWFrZSB0aGUgc2FtZSBldmVudCB0cmlnZ2VyIHBvcHVsYXRpbmcgVG9EbyB3aXRoIGEgc2VwYXJhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgIGNsZWFyVG9EbygpO1xuICAgICAgICAgICAgcG9wdWxhdGVUb0RvKHByb2plY3RMaXN0W2ldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNob3cgcHJvamVjdCB0aXRsZSBhbmQgZHVlIGRhdGUgaWYgaW5jb21wbGV0ZSBhbmQgY29tcGxldGUgaWYgY29tcGxldGVcbiAgICAgICAgY29uc3QgcHJvalR0bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJvalR0bC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIHByb2pUdGwuaW5uZXJIVE1MID0gcHJvamVjdExpc3RbaV0udGl0bGU7XG4gICAgICAgIGNvbnN0IHByb2pEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0uZG9uZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2otaW5jb21wbGV0ZScpO1xuICAgICAgICAgICAgcHJvakR1ZURhdGUuaW5uZXJIVE1MID0gJ0R1ZTogJyArIHByb2plY3RMaXN0W2ldLmR1ZURhdGU7XG4gICAgICAgICAgICBwcm9qRGl2LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2otY29tcGxldGUnKTtcbiAgICAgICAgICAgIHByb2pEdWVEYXRlLmlubmVySFRNTCA9ICdDT01QTEVURSc7XG4gICAgICAgICAgICBwcm9qRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMUI4OTI2JztcbiAgICAgICAgICAgIHByb2pEaXYuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qRGl2KTtcbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZChwcm9qVHRsKTtcbiAgICAgICAgcHJvakRpdi5hcHBlbmRDaGlsZChwcm9qRHVlRGF0ZSlcbiAgICB9O1xuXG4gICAgLy9uZXcgcHJvamVjdCBidXR0b24gdG8gb3BlbiBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgbmV3UHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Byb2pCdG4uaWQgPSAnbmV3LXByb2plY3QnXG4gICAgbmV3UHJvakJ0bi5pbm5lckhUTUwgPSAnTmV3IFByb2plY3QnXG4gICAgbmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3UHJvakRpYS5vcGVuID0gdHJ1ZVxuICAgIH0pO1xuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKG5ld1Byb2pCdG4pO1xufTtcblxuLy9jbGVhcmluZyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdHMoKSB7XG4gICAgd2hpbGUgKHByb2plY3REaXNwbGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdERpc3BsYXkucmVtb3ZlQ2hpbGQocHJvamVjdERpc3BsYXkuZmlyc3RDaGlsZCk7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGNsZWFyVG9EbygpIHtcbiAgICB3aGlsZSAodG9Eb0Rpc3BsYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b0RvRGlzcGxheS5yZW1vdmVDaGlsZCh0b0RvRGlzcGxheS5maXJzdENoaWxkKTtcbiAgICB9O1xuICAgIHdoaWxlIChwcm9qSW5mby5maXJzdENoaWxkKSB7XG4gICAgICAgIHByb2pJbmZvLnJlbW92ZUNoaWxkKHByb2pJbmZvLmZpcnN0Q2hpbGQpO1xuICAgIH07XG59O1xuXG4vLyBvbiBsb2FkLCBwdWxsIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZVxubGV0IHByb2plY3RMaXN0ID0gYWNjZXNzU3RvcmFnZSgpO1xucG9wdWxhdGVQcm9qZWN0cygpO1xuXG4vLyBuZXcgcHJvamVjdCBmb3JtIHBvcHVsYXRlcyBET00gYW5kIGxvY2FsIHN0b3JhZ2UgbGlzdFxuY29uc3QgbmV3UHJvakRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvai1kaWFsb2d1ZScpO1xubmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG5cbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qLWZvcm0nKTtcblxucHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEocHJvakZvcm0pO1xuICAgIGNvbnN0IGZvcm1PYmogPSBPYmplY3QuZnJvbUVudHJpZXMoZmQpO1xuICAgIHByb2plY3RMaXN0LnVuc2hpZnQobmV3UHJvamVjdChmb3JtT2JqLnRpdGxlLCAnJywgZm9ybU9iai5kdWUsICcnKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9Qcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gICAgY2xlYXJQcm9qZWN0cygpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICAvLyBoaWdobGlnaHQgdGhlIG5ldyBwcm9qZWN0IGFzIGlmIHNlbGVjdGVkXG4gICAgY29uc3QgcHJvakRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKTtcbiAgICBwcm9qRGl2c1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG5cbiAgICBjbGVhclRvRG8oKTtcbiAgICBwb3B1bGF0ZVRvRG8ocHJvamVjdExpc3RbMF0pO1xuXG4gICAgbmV3UHJvakRpYS5vcGVuID0gZmFsc2U7XG4gICAgcHJvakZvcm0ucmVzZXQoKTtcbn0pO1xuXG4vLyBuZXcgdG8tZG8gYnV0dG9uIGFkZHMgYSB0by1kbyBpdGVtIHdpdGhpbiB0aGUgcHJvamVjdFxuLy8gcHJvamVjdHMgYW5kIHRvLWRvIGl0ZW1zIGhhdmUgYSBjaGVja2JveCB0byBtYXJrIGNvbXBsZXRlXG4vLyBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMgZGlzcGxheSBhcyBjb21wbGV0ZSBvciBpbmNvbXBsZXRlXG4vLyBjYW4gcmVhcnJhbmdlIHBsYWNlbWVudCBvZiBwcm9qZWN0cyBhbmQgdG8tZG8gaXRlbXMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=