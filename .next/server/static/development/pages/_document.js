module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/fid":
/*!***************************************************!*\
  !*** external "next/dist/next-server/lib/fid.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/fid.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/@expo/next-adapter/document.js":
/*!*****************************************************!*\
  !*** ./node_modules/@expo/next-adapter/document.js ***!
  \*****************************************************/
/*! exports provided: style, getInitialProps, Document, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web/dist/exports/AppRegistry */ "./node_modules/react-native-web/dist/exports/AppRegistry/index.js");







var _jsxFileName = "/Users/loictorres/Desktop/task-runner/node_modules/@expo/next-adapter/document.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8__["createElement"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var style = "\n/**\n * Building on the RNWeb reset:\n * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js\n */\nhtml, body, #__next {\n  width: 100%;\n  /* To smooth any scrolling behavior */\n  -webkit-overflow-scrolling: touch;\n  margin: 0px;\n  padding: 0px;\n  /* Allows content to fill the viewport and go beyond the bottom */\n  min-height: 100%;\n}\n#__next {\n  flex-shrink: 0;\n  flex-basis: auto;\n  flex-direction: column;\n  flex-grow: 1;\n  display: flex;\n  flex: 1;\n}\nhtml {\n  scroll-behavior: smooth;\n  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */\n  -webkit-text-size-adjust: 100%;\n  height: 100%;\n}\nbody {\n  display: flex;\n  /* Allows you to scroll below the viewport; default value is visible */\n  overflow-y: auto;\n  overscroll-behavior-y: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -ms-overflow-style: scrollbar;\n}\n";
function getInitialProps(_ref) {
  var _jsx;

  var renderPage, _AppRegistry$getAppli, getStyleElement, page, styles;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.async(function getInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          renderPage = _ref.renderPage;
          react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_9__["default"].registerComponent('Main', function () {
            return next_document__WEBPACK_IMPORTED_MODULE_7__["Main"];
          });
          _AppRegistry$getAppli = react_native_web_dist_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_9__["default"].getApplication('Main'), getStyleElement = _AppRegistry$getAppli.getStyleElement;
          page = renderPage();
          styles = [__jsx("style", (_jsx = {
            dangerouslySetInnerHTML: {
              __html: style
            },
            __self: this
          }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx, "__source", {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 19
          }), _jsx)), getStyleElement()];
          return _context.abrupt("return", _objectSpread({}, page, {
            styles: react__WEBPACK_IMPORTED_MODULE_8__["Children"].toArray(styles)
          }));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, null, Promise);
}
var Document = function (_NextDocument) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Document, _NextDocument);

  var _super = _createSuper(Document);

  function Document() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Document);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Document, [{
    key: "render",
    value: function render() {
      var _jsx2, _jsx3, _jsx4, _jsx5, _jsx6, _jsx7;

      return __jsx(next_document__WEBPACK_IMPORTED_MODULE_7__["Html"], (_jsx7 = {
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx7, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx7, "__source", {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }), _jsx7), __jsx(next_document__WEBPACK_IMPORTED_MODULE_7__["Head"], (_jsx3 = {
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx3, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx3, "__source", {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }), _jsx3), __jsx("meta", (_jsx2 = {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx2, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }), _jsx2))), __jsx("body", (_jsx6 = {
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx6, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx6, "__source", {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }), _jsx6), __jsx(next_document__WEBPACK_IMPORTED_MODULE_7__["Main"], (_jsx4 = {
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx4, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx4, "__source", {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }), _jsx4)), __jsx(next_document__WEBPACK_IMPORTED_MODULE_7__["NextScript"], (_jsx5 = {
        __self: this
      }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx5, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_jsx5, "__source", {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }), _jsx5))));
    }
  }]);

  return Document;
}(next_document__WEBPACK_IMPORTED_MODULE_7___default.a);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Document, "getInitialProps", getInitialProps);

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-enhance-app-server!./":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-enhance-app-server ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-get-styles-server!./":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-get-styles-server ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js");var _toConsumableArray=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");var _classCallCheck=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");var _createClass=__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");var _inherits=__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");var _possibleConstructorReturn=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");var _getPrototypeOf=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");var _regeneratorRuntime=__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it;if(typeof Symbol==="undefined"||o[Symbol.iterator]==null){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;return function(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}it=o[Symbol.iterator]();return it.next.bind(it);}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}exports.__esModule=true;exports.middleware=middleware;exports.NextScript=exports.Main=exports.Head=exports.Html=exports.default=void 0;var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _server=_interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));var _constants=__webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");var _documentContext=__webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");var _utils=__webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");exports.DocumentContext=_utils.DocumentContext;exports.DocumentInitialProps=_utils.DocumentInitialProps;exports.DocumentProps=_utils.DocumentProps;var _fid=_interopRequireDefault(__webpack_require__(/*! ../next-server/lib/fid */ "../next-server/lib/fid"));var _utils2=__webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");var _htmlescape=__webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function middleware(_ref){var req,res;return _regeneratorRuntime.async(function middleware$(_context){while(1){switch(_context.prev=_context.next){case 0:req=_ref.req,res=_ref.res;case 1:case"end":return _context.stop();}}},null,null,null,Promise);}function dedupe(bundles){var files=new Set();var kept=[];for(var _iterator=_createForOfIteratorHelperLoose(bundles),_step;!(_step=_iterator()).done;){var bundle=_step.value;if(files.has(bundle.file))continue;files.add(bundle.file);kept.push(bundle);}return kept;}function getOptionalModernScriptVariant(path){if(false){}return path;}var Document=function(_react$Component){_inherits(Document,_react$Component);var _super=_createSuper(Document);function Document(){_classCallCheck(this,Document);return _super.apply(this,arguments);}_createClass(Document,[{key:"render",value:function render(){return _react.default.createElement(Html,null,_react.default.createElement(Head,null),_react.default.createElement("body",null,_react.default.createElement(Main,null),_react.default.createElement(NextScript,null)));}}],[{key:"getInitialProps",value:function getInitialProps(ctx){var enhancers,enhanceApp,_await$ctx$renderPage,html,head,styles;return _regeneratorRuntime.async(function getInitialProps$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(true){_context2.next=6;break;}_context2.next=3;return _regeneratorRuntime.awrap(Promise.resolve().then(function(){return _interopRequireWildcard(__webpack_require__(/*! next-plugin-loader?middleware=unstable-enhance-app-server */ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-enhance-app-server!./"));}).then(function(mod){return mod.default(ctx);}));case 3:_context2.t0=_context2.sent;_context2.next=7;break;case 6:_context2.t0=[];case 7:enhancers=_context2.t0;enhanceApp=function enhanceApp(App){for(var _iterator2=_createForOfIteratorHelperLoose(enhancers),_step2;!(_step2=_iterator2()).done;){var enhancer=_step2.value;App=enhancer(App);}return function(props){return _react.default.createElement(App,props);};};_context2.next=11;return _regeneratorRuntime.awrap(ctx.renderPage({enhanceApp:enhanceApp}));case 11:_await$ctx$renderPage=_context2.sent;html=_await$ctx$renderPage.html;head=_await$ctx$renderPage.head;_context2.t1=[];_context2.t2=_toConsumableArray((0,_server.default)());_context2.t3=_toConsumableArray;if(true){_context2.next=23;break;}_context2.next=20;return _regeneratorRuntime.awrap(Promise.resolve().then(function(){return _interopRequireWildcard(__webpack_require__(/*! next-plugin-loader?middleware=unstable-get-styles-server */ "./node_modules/next/dist/build/webpack/loaders/next-plugin-loader.js?middleware=unstable-get-styles-server!./"));}).then(function(mod){return mod.default(ctx);}));case 20:_context2.t4=_context2.sent;_context2.next=24;break;case 23:_context2.t4=[];case 24:_context2.t5=_context2.t4;_context2.t6=(0,_context2.t3)(_context2.t5);styles=_context2.t1.concat.call(_context2.t1,_context2.t2,_context2.t6);return _context2.abrupt("return",{html:html,head:head,styles:styles});case 28:case"end":return _context2.stop();}}},null,null,null,Promise);}},{key:"renderDocument",value:function renderDocument(_Document,props){return _react.default.createElement(_documentContext.DocumentContext.Provider,{value:{_documentProps:props,_devOnlyInvalidateCacheQueryString:true?'?ts='+Date.now():undefined}},_react.default.createElement(_Document,props));}}]);return Document;}(_react.Component);exports.default=Document;Document.headTagsMiddleware= false?undefined:function(){return[];};Document.bodyTagsMiddleware= false?undefined:function(){return[];};Document.htmlPropsMiddleware= false?undefined:function(){return[];};var Html=function(_react$Component2){_inherits(Html,_react$Component2);var _super2=_createSuper(Html);function Html(){var _this;_classCallCheck(this,Html);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super2.call.apply(_super2,[this].concat(args));_this.context=void 0;return _this;}_createClass(Html,[{key:"render",value:function render(){var _this$context$_docume=this.context._documentProps,inAmpMode=_this$context$_docume.inAmpMode,htmlProps=_this$context$_docume.htmlProps;return _react.default.createElement("html",_extends({},htmlProps,this.props,{amp:inAmpMode?'':undefined,"data-ampdevmode":inAmpMode&&true?'':undefined}));}}]);return Html;}(_react.Component);exports.Html=Html;Html.contextType=_documentContext.DocumentContext;Html.propTypes={children:_propTypes.default.node.isRequired};var Head=function(_react$Component3){_inherits(Head,_react$Component3);var _super3=_createSuper(Head);function Head(){var _this2;_classCallCheck(this,Head);for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this2=_super3.call.apply(_super3,[this].concat(args));_this2.context=void 0;return _this2;}_createClass(Head,[{key:"getCssLinks",value:function getCssLinks(){var _this3=this;var _this$context$_docume2=this.context._documentProps,assetPrefix=_this$context$_docume2.assetPrefix,files=_this$context$_docume2.files;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;var cssFiles=files&&files.length?files.filter(function(f){return /\.css$/.test(f);}):[];var cssLinkElements=[];cssFiles.forEach(function(file){cssLinkElements.push(_react.default.createElement("link",{key:file+"-preload",nonce:_this3.props.nonce,rel:"preload",href:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,as:"style",crossOrigin:_this3.props.crossOrigin||undefined}),_react.default.createElement("link",{key:file,nonce:_this3.props.nonce,rel:"stylesheet",href:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,crossOrigin:_this3.props.crossOrigin||undefined}));});return cssLinkElements.length===0?null:cssLinkElements;}},{key:"getPreloadDynamicChunks",value:function getPreloadDynamicChunks(){var _this4=this;var _this$context$_docume3=this.context._documentProps,dynamicImports=_this$context$_docume3.dynamicImports,assetPrefix=_this$context$_docume3.assetPrefix;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return dedupe(dynamicImports).map(function(bundle){if(!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))){return null;}return _react.default.createElement("link",{rel:"preload",key:bundle.file,href:assetPrefix+"/_next/"+encodeURI(bundle.file)+_devOnlyInvalidateCacheQueryString,as:"script",nonce:_this4.props.nonce,crossOrigin:_this4.props.crossOrigin||undefined});}).filter(Boolean);}},{key:"getPreloadMainLinks",value:function getPreloadMainLinks(){var _this5=this;var _this$context$_docume4=this.context._documentProps,assetPrefix=_this$context$_docume4.assetPrefix,files=_this$context$_docume4.files;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;var preloadFiles=files&&files.length?files.filter(function(file){return file.endsWith(getOptionalModernScriptVariant('.js'));}):[];return preloadFiles.length===0?null:preloadFiles.map(function(file){return _react.default.createElement("link",{key:file,nonce:_this5.props.nonce,rel:"preload",href:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,as:"script",crossOrigin:_this5.props.crossOrigin||undefined});});}},{key:"getFidPolyfill",value:function getFidPolyfill(){if(true){return null;}return _react.default.createElement("script",{dangerouslySetInnerHTML:{__html:"("+_fid.default+")(addEventListener, removeEventListener)"}});}},{key:"render",value:function render(){var _react$default;var _this$context$_docume5=this.context._documentProps,styles=_this$context$_docume5.styles,ampPath=_this$context$_docume5.ampPath,inAmpMode=_this$context$_docume5.inAmpMode,assetPrefix=_this$context$_docume5.assetPrefix,hybridAmp=_this$context$_docume5.hybridAmp,canonicalBase=_this$context$_docume5.canonicalBase,__NEXT_DATA__=_this$context$_docume5.__NEXT_DATA__,dangerousAsPath=_this$context$_docume5.dangerousAsPath,headTags=_this$context$_docume5.headTags;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;var page=__NEXT_DATA__.page,buildId=__NEXT_DATA__.buildId;var head=this.context._documentProps.head;var children=this.props.children;if(true){children=_react.default.Children.map(children,function(child){var isReactHelmet=child&&child.props&&child.props['data-react-helmet'];if(child&&child.type==='title'&&!isReactHelmet){console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");}return child;});if(this.props.crossOrigin)console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');}var hasAmphtmlRel=false;var hasCanonicalRel=false;head=_react.default.Children.map(head||[],function(child){if(!child)return child;var type=child.type,props=child.props;if(inAmpMode){var badProp='';if(type==='meta'&&props.name==='viewport'){badProp='name="viewport"';}else if(type==='link'&&props.rel==='canonical'){hasCanonicalRel=true;}else if(type==='script'){if(props.src&&props.src.indexOf('ampproject')<-1||props.dangerouslySetInnerHTML&&(!props.type||props.type==='text/javascript')){badProp='<script';Object.keys(props).forEach(function(prop){badProp+=" "+prop+"=\""+props[prop]+"\"";});badProp+='/>';}}if(badProp){console.warn("Found conflicting amp tag \""+child.type+"\" with conflicting prop "+badProp+" in "+__NEXT_DATA__.page+". https://err.sh/next.js/conflicting-amp-tag");return null;}}else{if(type==='link'&&props.rel==='amphtml'){hasAmphtmlRel=true;}}return child;});var curStyles=Array.isArray(styles)?styles:[];if(inAmpMode&&styles&&styles.props&&Array.isArray(styles.props.children)){var hasStyles=function hasStyles(el){return el&&el.props&&el.props.dangerouslySetInnerHTML&&el.props.dangerouslySetInnerHTML.__html;};styles.props.children.forEach(function(child){if(Array.isArray(child)){child.map(function(el){return hasStyles(el)&&curStyles.push(el);});}else if(hasStyles(child)){curStyles.push(child);}});}return _react.default.createElement("head",this.props,this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("style",{"data-next-hide-fouc":true,"data-ampdevmode":inAmpMode?'true':undefined,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),_react.default.createElement("noscript",{"data-next-hide-fouc":true,"data-ampdevmode":inAmpMode?'true':undefined},_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}}))),children,head,_react.default.createElement("meta",{name:"next-head-count",content:_react.default.Children.count(head||[]).toString()}),inAmpMode&&_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!hasCanonicalRel&&_react.default.createElement("link",{rel:"canonical",href:canonicalBase+(0,_utils2.cleanAmpPath)(dangerousAsPath)}),_react.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),styles&&_react.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:curStyles.map(function(style){return style.props.dangerouslySetInnerHTML.__html;}).join('').replace(/\/\*# sourceMappingURL=.*\*\//g,'').replace(/\/\*@ sourceURL=.*?\*\//g,'')}}),_react.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),_react.default.createElement("noscript",null,_react.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),_react.default.createElement("script",{async:true,src:"https://cdn.ampproject.org/v0.js"})),!inAmpMode&&_react.default.createElement(_react.default.Fragment,null,!hasAmphtmlRel&&hybridAmp&&_react.default.createElement("link",{rel:"amphtml",href:canonicalBase+getAmpPath(ampPath,dangerousAsPath)}),this.getCssLinks(),page!=='/_error'&&_react.default.createElement("link",{rel:"preload",href:assetPrefix+getOptionalModernScriptVariant(encodeURI("/_next/static/"+buildId+"/pages"+getPageFile(page)))+_devOnlyInvalidateCacheQueryString,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}),_react.default.createElement("link",{rel:"preload",href:assetPrefix+getOptionalModernScriptVariant(encodeURI("/_next/static/"+buildId+"/pages/_app.js"))+_devOnlyInvalidateCacheQueryString,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&_react.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),styles||null),this.getFidPolyfill(),(_react$default=_react.default).createElement.apply(_react$default,[_react.default.Fragment,{}].concat(_toConsumableArray(headTags||[]))));}}]);return Head;}(_react.Component);exports.Head=Head;Head.contextType=_documentContext.DocumentContext;Head.propTypes={nonce:_propTypes.default.string,crossOrigin:_propTypes.default.string};var Main=function(_react$Component4){_inherits(Main,_react$Component4);var _super4=_createSuper(Main);function Main(){var _this6;_classCallCheck(this,Main);for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}_this6=_super4.call.apply(_super4,[this].concat(args));_this6.context=void 0;return _this6;}_createClass(Main,[{key:"render",value:function render(){var _this$context$_docume6=this.context._documentProps,inAmpMode=_this$context$_docume6.inAmpMode,html=_this$context$_docume6.html;if(inAmpMode)return _constants.AMP_RENDER_TARGET;return _react.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:html}});}}]);return Main;}(_react.Component);exports.Main=Main;Main.contextType=_documentContext.DocumentContext;var NextScript=function(_react$Component5){_inherits(NextScript,_react$Component5);var _super5=_createSuper(NextScript);function NextScript(){var _this7;_classCallCheck(this,NextScript);for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}_this7=_super5.call.apply(_super5,[this].concat(args));_this7.context=void 0;return _this7;}_createClass(NextScript,[{key:"getDynamicChunks",value:function getDynamicChunks(){var _this8=this;var _this$context$_docume7=this.context._documentProps,dynamicImports=_this$context$_docume7.dynamicImports,assetPrefix=_this$context$_docume7.assetPrefix,files=_this$context$_docume7.files;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return dedupe(dynamicImports).map(function(bundle){var modernProps={};if(false){}if(!/\.js$/.test(bundle.file)||files.includes(bundle.file))return null;return _react.default.createElement("script",_extends({async:true,key:bundle.file,src:assetPrefix+"/_next/"+encodeURI(bundle.file)+_devOnlyInvalidateCacheQueryString,nonce:_this8.props.nonce,crossOrigin:_this8.props.crossOrigin||undefined},modernProps));});}},{key:"getScripts",value:function getScripts(){var _this9=this;var _this$context$_docume8=this.context._documentProps,assetPrefix=_this$context$_docume8.assetPrefix,files=_this$context$_docume8.files,lowPriorityFiles=_this$context$_docume8.lowPriorityFiles;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;var normalScripts=files===null||files===void 0?void 0:files.filter(function(file){return file.endsWith('.js');});var lowPriorityScripts=lowPriorityFiles===null||lowPriorityFiles===void 0?void 0:lowPriorityFiles.filter(function(file){return file.endsWith('.js');});return[].concat(_toConsumableArray(normalScripts),_toConsumableArray(lowPriorityScripts)).map(function(file){var modernProps={};if(false){}return _react.default.createElement("script",_extends({key:file,src:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,nonce:_this9.props.nonce,async:true,crossOrigin:_this9.props.crossOrigin||undefined},modernProps));});}},{key:"getPolyfillScripts",value:function getPolyfillScripts(){var _this10=this;var _this$context$_docume9=this.context._documentProps,assetPrefix=_this$context$_docume9.assetPrefix,polyfillFiles=_this$context$_docume9.polyfillFiles;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return polyfillFiles.filter(function(polyfill){return polyfill.endsWith('.js')&&!/\.module\.js$/.test(polyfill);}).map(function(polyfill){return _react.default.createElement("script",{key:polyfill,nonce:_this10.props.nonce,crossOrigin:_this10.props.crossOrigin||undefined,noModule:true,src:assetPrefix+"/_next/"+polyfill+_devOnlyInvalidateCacheQueryString});});}},{key:"render",value:function render(){var _this11=this,_react$default3;var _this$context$_docume10=this.context._documentProps,staticMarkup=_this$context$_docume10.staticMarkup,assetPrefix=_this$context$_docume10.assetPrefix,inAmpMode=_this$context$_docume10.inAmpMode,devFiles=_this$context$_docume10.devFiles,__NEXT_DATA__=_this$context$_docume10.__NEXT_DATA__,bodyTags=_this$context$_docume10.bodyTags;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;if(inAmpMode){var _react$default2;if(false){}var _devFiles=[_constants.CLIENT_STATIC_FILES_RUNTIME_AMP,_constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];return _react.default.createElement(_react.default.Fragment,null,staticMarkup?null:_react.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined,dangerouslySetInnerHTML:{__html:NextScript.getInlineScriptSource(this.context._documentProps)},"data-ampdevmode":true}),_devFiles?_devFiles.map(function(file){return _react.default.createElement("script",{key:file,src:assetPrefix+"/_next/"+file+_devOnlyInvalidateCacheQueryString,nonce:_this11.props.nonce,crossOrigin:_this11.props.crossOrigin||undefined,"data-ampdevmode":true});}):null,(_react$default2=_react.default).createElement.apply(_react$default2,[_react.default.Fragment,{}].concat(_toConsumableArray(bodyTags||[]))));}var page=__NEXT_DATA__.page,buildId=__NEXT_DATA__.buildId;if(true){if(this.props.crossOrigin)console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');}var pageScript=[_react.default.createElement("script",_extends({async:true,"data-next-page":page,key:page,src:assetPrefix+encodeURI("/_next/static/"+buildId+"/pages"+getPageFile(page))+_devOnlyInvalidateCacheQueryString,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}, false?undefined:{})), false&&false];var appScript=[_react.default.createElement("script",_extends({async:true,"data-next-page":"/_app",src:assetPrefix+("/_next/static/"+buildId+"/pages/_app.js")+_devOnlyInvalidateCacheQueryString,key:"_app",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}, false?undefined:{})), false&&false];return _react.default.createElement(_react.default.Fragment,null,devFiles?devFiles.map(function(file){return!file.match(/\.js\.map/)&&_react.default.createElement("script",{key:file,src:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,nonce:_this11.props.nonce,crossOrigin:_this11.props.crossOrigin||undefined});}):null,staticMarkup?null:_react.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined,dangerouslySetInnerHTML:{__html:NextScript.getInlineScriptSource(this.context._documentProps)}}), false?undefined:null,this.getPolyfillScripts(),page!=='/_error'&&pageScript,appScript,staticMarkup?null:this.getDynamicChunks(),staticMarkup?null:this.getScripts(),(_react$default3=_react.default).createElement.apply(_react$default3,[_react.default.Fragment,{}].concat(_toConsumableArray(bodyTags||[]))));}}],[{key:"getInlineScriptSource",value:function getInlineScriptSource(documentProps){var __NEXT_DATA__=documentProps.__NEXT_DATA__;try{var data=JSON.stringify(__NEXT_DATA__);return(0,_htmlescape.htmlEscapeJsonString)(data);}catch(err){if(err.message.indexOf('circular structure')){throw new Error("Circular structure in \"getInitialProps\" result of page \""+__NEXT_DATA__.page+"\". https://err.sh/zeit/next.js/circular-structure");}throw err;}}}]);return NextScript;}(_react.Component);exports.NextScript=NextScript;NextScript.contextType=_documentContext.DocumentContext;NextScript.propTypes={nonce:_propTypes.default.string,crossOrigin:_propTypes.default.string};NextScript.safariNomoduleFix='!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';function getAmpPath(ampPath,asPath){return ampPath?ampPath:""+asPath+(asPath.includes('?')?'&':'?')+"amp=1";}function getPageFile(page,buildId){if(page==='/'){return buildId?"/index."+buildId+".js":'/index.js';}return buildId?page+"."+buildId+".js":page+".js";}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppContainer; });
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var RootTagContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(null);
function AppContainer(props) {
  var children = props.children,
      WrapperComponent = props.WrapperComponent;
  var innerView = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: children,
    key: 1,
    pointerEvents: "box-none",
    style: styles.appContainer
  });

  if (WrapperComponent) {
    innerView = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrapperComponent, null, innerView);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RootTagContext.Provider, {
    value: props.rootTag
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pointerEvents: "box-none",
    style: styles.appContainer
  }, innerView));
}
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  appContainer: {
    flex: 1
  }
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/AppRegistry/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRegistry; });
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/invariant */ "fbjs/lib/invariant");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unmountComponentAtNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unmountComponentAtNode */ "./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js");
/* harmony import */ var _renderApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderApplication */ "./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var emptyObject = {};
var runnables = {};

var componentProviderInstrumentationHook = function componentProviderInstrumentationHook(component) {
  return component();
};

var wrapperComponentProvider;

var AppRegistry = function () {
  function AppRegistry() {}

  AppRegistry.getAppKeys = function getAppKeys() {
    return Object.keys(runnables);
  };

  AppRegistry.getApplication = function getApplication(appKey, appParameters) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(runnables[appKey] && runnables[appKey].getApplication, "Application " + appKey + " has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    return runnables[appKey].getApplication(appParameters);
  };

  AppRegistry.registerComponent = function registerComponent(appKey, componentProvider) {
    runnables[appKey] = {
      getApplication: function getApplication(appParameters) {
        return Object(_renderApplication__WEBPACK_IMPORTED_MODULE_2__["getApplication"])(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : emptyObject, wrapperComponentProvider && wrapperComponentProvider(appParameters));
      },
      run: function run(appParameters) {
        return Object(_renderApplication__WEBPACK_IMPORTED_MODULE_2__["default"])(componentProviderInstrumentationHook(componentProvider), wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback, {
          hydrate: appParameters.hydrate || false,
          initialProps: appParameters.initialProps || emptyObject,
          rootTag: appParameters.rootTag
        });
      }
    };
    return appKey;
  };

  AppRegistry.registerConfig = function registerConfig(config) {
    config.forEach(function (_ref) {
      var appKey = _ref.appKey,
          component = _ref.component,
          run = _ref.run;

      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(component, 'No component provider passed in');
        AppRegistry.registerComponent(appKey, component);
      }
    });
  };

  AppRegistry.registerRunnable = function registerRunnable(appKey, run) {
    runnables[appKey] = {
      run: run
    };
    return appKey;
  };

  AppRegistry.runApplication = function runApplication(appKey, appParameters) {
    var isDevelopment =  true && "development" !== 'test';

    if (isDevelopment) {
      var params = _objectSpread({}, appParameters);

      params.rootTag = "#" + params.rootTag.id;
      console.log("Running application \"" + appKey + "\" with appParams:\n", params, "\nDevelopment-level warnings: " + (isDevelopment ? 'ON' : 'OFF') + "." + ("\nPerformance optimizations: " + (isDevelopment ? 'OFF' : 'ON') + "."));
    }

    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(runnables[appKey] && runnables[appKey].run, "Application \"" + appKey + "\" has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    runnables[appKey].run(appParameters);
  };

  AppRegistry.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(hook) {
    componentProviderInstrumentationHook = hook;
  };

  AppRegistry.setWrapperComponentProvider = function setWrapperComponentProvider(provider) {
    wrapperComponentProvider = provider;
  };

  AppRegistry.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(rootTag) {
    Object(_unmountComponentAtNode__WEBPACK_IMPORTED_MODULE_1__["default"])(rootTag);
  };

  return AppRegistry;
}();



/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js ***!
  \*************************************************************************************/
/*! exports provided: default, getApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplication", function() { return getApplication; });
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContainer */ "./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "fbjs/lib/invariant");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render */ "./node_modules/react-native-web/dist/exports/render/index.js");
/* harmony import */ var _StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StyleSheet/styleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}






function renderApplication(RootComponent, WrapperComponent, callback, options) {
  var shouldHydrate = options.hydrate,
      initialProps = options.initialProps,
      rootTag = options.rootTag;
  var renderFn = shouldHydrate ? _render__WEBPACK_IMPORTED_MODULE_2__["hydrate"] : _render__WEBPACK_IMPORTED_MODULE_2__["default"];
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  renderFn(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AppContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    rootTag: rootTag,
    WrapperComponent: WrapperComponent
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RootComponent, initialProps)), rootTag, callback);
}
function getApplication(RootComponent, initialProps, WrapperComponent) {
  var element = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AppContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    rootTag: {},
    WrapperComponent: WrapperComponent
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RootComponent, initialProps));

  var getStyleElement = function getStyleElement(props) {
    var sheet = _StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__["default"].getStyleSheet();
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("style", _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: sheet.textContent
      },
      id: sheet.id
    }));
  };

  return {
    element: element,
    getStyleElement: getStyleElement
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/I18nManager/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/I18nManager/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

var doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var onDirectionChange = function onDirectionChange() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default.a.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  },

  get doLeftAndRightSwapInRTL() {
    return doLeftAndRightSwapInRTL;
  },

  get isRTL() {
    return isRTL();
  }

};
/* harmony default export */ __webpack_exports__["default"] = (I18nManager);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactNativePropRegistry; });
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
};

var ReactNativePropRegistry = function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (true) {
      Object.freeze(object);
    }

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();



/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativePropRegistry */ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");


var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(absoluteFillObject);
var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (true) {
      var len = arguments.length;

      if (len > 2) {
        var readableStyles = Array.prototype.slice.call(arguments).map(function (a) {
          return Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
        });
        throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
      }
    }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (true) {
        var validate = __webpack_require__(/*! ./validate */ "./node_modules/react-native-web/dist/exports/StyleSheet/validate.js");

        var interopValidate = validate["default"] ? validate["default"] : validate;
        interopValidate(key, styles);
      }

      var id = styles[key] && _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: _flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"],
  hairlineWidth: 1
};
/* harmony default export */ __webpack_exports__["default"] = (StyleSheet);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/compile.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/compile.js ***!
  \**************************************************************************/
/*! exports provided: atomic, classic, inline, stringifyValueWithProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atomic", function() { return atomic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classic", function() { return classic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline", function() { return inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyValueWithProperty", function() { return stringifyValueWithProperty; });
/* harmony import */ var _createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReactDOMStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js");
/* harmony import */ var _vendor_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/hash */ "./node_modules/react-native-web/dist/vendor/hash/index.js");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hyphenate-style-name */ "hyphenate-style-name");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/prefixStyles */ "./node_modules/react-native-web/dist/modules/prefixStyles/index.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var cache = {
  get: function get(property, value) {
    if (cache[property] != null && cache[property].hasOwnProperty(value) && cache[property][value] != null) {
      return cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (cache[property] == null) {
      cache[property] = {};
    }

    return cache[property][value] = object;
  }
};
function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = _objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread({}, rest, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
function inline(style) {
  return Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["prefixInlineStyles"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
}
function stringifyValueWithProperty(value, property) {
  var normalizedValue = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}

function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }

    case 'pointerEvents':
      {
        var _createDeclarationBlo3;

        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _createDeclarationBlo;

            var _block3 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = 'none', _createDeclarationBlo));

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _createDeclarationBlo2;

            var _block4 = createDeclarationBlock((_createDeclarationBlo2 = {}, _createDeclarationBlo2[property] = 'auto', _createDeclarationBlo2));

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock((_createDeclarationBlo3 = {}, _createDeclarationBlo3[property] = finalValue, _createDeclarationBlo3));

        rules.push("" + selector + _block2);
        break;
      }

    case 'scrollbarWidth':
      {
        var _createDeclarationBlo4;

        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}");
        }

        var _block5 = createDeclarationBlock((_createDeclarationBlo4 = {}, _createDeclarationBlo4[property] = value, _createDeclarationBlo4));

        rules.push("" + selector + _block5);
        break;
      }

    default:
      {
        var _createDeclarationBlo5;

        var _block6 = createDeclarationBlock((_createDeclarationBlo5 = {}, _createDeclarationBlo5[property] = value, _createDeclarationBlo5));

        rules.push("" + selector + _block6);
        break;
      }
  }

  return rules;
}

function createDeclarationBlock(style) {
  var domStyle = Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2___default()(property);

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }).sort().join(';');
  return "{" + declarationsString + ";}";
}

function createIdentifier(prefix, name, value) {
  var hashedString = Object(_vendor_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(name + stringifyValueWithProperty(value, name));
  return  true ? prefix + "-" + name + "-" + hashedString : undefined;
}

function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}

function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/constants.js ***!
  \****************************************************************************/
/*! exports provided: STYLE_ELEMENT_ID, STYLE_GROUPS, STYLE_SHORT_FORM_EXPANSIONS, MONOSPACE_FONT_STACK, SYSTEM_FONT_STACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_ELEMENT_ID", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_GROUPS", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_SHORT_FORM_EXPANSIONS", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONOSPACE_FONT_STACK", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_FONT_STACK", function() { return SYSTEM_FONT_STACK; });
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCSSStyleSheet; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

function createCSSStyleSheet(id) {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    var element = document.getElementById(id);

    if (element != null) {
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveShadowValue */ "./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = Object(_resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__["default"])(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(radius);
  var color = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

/* harmony default export */ __webpack_exports__["default"] = (createCompileableStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createOrderedCSSStyleSheet; });
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText;

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }

      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue);

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group);
        groups[group] = {
          start: null,
          rules: [markerRule]
        };

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }

      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");



var emptyObject = {};
var supportsCSS3TextDecoration = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));

var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(transform[type], type);
  return type + "(" + value + ")";
};

var convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  var matrix = transformMatrix.join(',');
  return "matrix3d(" + matrix + ")";
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }

  resolvedStyle.transform = transform;
};

var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(style[prop], prop);

    if (value == null) {
      return;
    }

    switch (prop) {
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }

      case 'flex':
        {
          if (value > 0) {
            resolvedStyle.flexGrow = value;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = '0%';
          } else if (value === 0) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 0;
            resolvedStyle.flexBasis = '0%';
          } else if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"]);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"];
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = _constants__WEBPACK_IMPORTED_MODULE_1__["MONOSPACE_FONT_STACK"];
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = _constants__WEBPACK_IMPORTED_MODULE_1__["STYLE_SHORT_FORM_EXPANSIONS"][prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (createReactDOMStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyleResolver; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCSSStyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js");
/* harmony import */ var _createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCompileableStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js");
/* harmony import */ var _createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createOrderedCSSStyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js");
/* harmony import */ var _modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/flattenArray */ "./node_modules/react-native-web/dist/modules/flattenArray/index.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _i18nStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18nStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compile */ "./node_modules/react-native-web/dist/exports/StyleSheet/compile.js");
/* harmony import */ var _initialRules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./initialRules */ "./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js");
/* harmony import */ var _modality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modality */ "./node_modules/react-native-web/dist/exports/StyleSheet/modality.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");












function createStyleResolver() {
  var inserted, sheet, cache;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = Object(_createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"]));
    cache = {};
    Object(_modality__WEBPACK_IMPORTED_MODULE_10__["default"])(function (rule) {
      return sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].modality);
    });
    _initialRules__WEBPACK_IMPORTED_MODULE_9__["default"].forEach(function (rule) {
      sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].reset);
    });
  };

  init();

  function addToCache(className, prop, value) {
    if (!cache[prop]) {
      cache[prop] = {};
    }

    cache[prop][value] = className;
  }

  function getClassName(prop, value) {
    var val = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["stringifyValueWithProperty"])(value, prop);
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].doLeftAndRightSwapInRTL,
        isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(id)));
      var results = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToCache(identifier, property, value);
        rules.forEach(function (rule) {
          var group = _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].custom[property] || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }

  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      props = _resolveStyle(style);
    } else {
      var flatArray = Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }

  function _resolveStyle(style, key) {
    var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].doLeftAndRightSwapInRTL,
        isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(style);
    var localizedStyle = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(flatStyle));
    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.keys(a).forEach(function (key) {
              var _a$key = a[key],
                  identifier = _a$key.identifier,
                  rules = _a$key.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            }

            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["inline"])(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent();

      if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
        init();
      }

      return {
        id: _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"],
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["classic"])(style, name);
        Object.keys(compiled).forEach(function (key) {
          var _compiled$key = compiled[key],
              identifier = _compiled$key.identifier,
              rules = _compiled$key.rules;
          resolved.css[identifier] = {
            group: group || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,
    sheet: sheet
  };
}

var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/css.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");

var css = {
  create: function create(rules, group) {
    return _styleResolver__WEBPACK_IMPORTED_MODULE_0__["default"].createCSS(rules, group);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativePropRegistry */ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "fbjs/lib/invariant");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (true) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(style !== true, 'style may be false but not true');
  }

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (flattenStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/multiplyStyleLengthValue */ "./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js");


var emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left';
var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: left
};
var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
var PROPERTIES_VALUE = {
  clear: true,
  "float": true,
  textAlign: true
};

var additiveInverse = function additiveInverse(value) {
  return Object(_modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__["default"])(value, -1);
};

var i18nStyle = function i18nStyle(originalStyle) {
  var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_0__["default"].doLeftAndRightSwapInRTL,
      isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_0__["default"].isRTL;
  var style = originalStyle || emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    }

    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    }

    if (prop === 'transitionProperty') {
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalValue]) {
        value = PROPERTIES_FLIP[originalValue];
      }
    }

    if (isRTL && prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = additiveInverse(value.width);
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (i18nStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js");



if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].flatten;
}

/* harmony default export */ __webpack_exports__["default"] = (_StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resets = ['html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', 'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
/* harmony default export */ __webpack_exports__["default"] = (resets);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/modality.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/modality.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality = function modality(insertRule) {
  insertRule(rule);

  if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }

  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }

  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }

  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }

  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }

  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }

  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }

  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  function onInitialPointerMove(e) {
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

/* harmony default export */ __webpack_exports__["default"] = (modality);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeValueWithProperty; });
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/unitlessNumbers */ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js");


var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  }

  return returnValue;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");


var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(shadowRadius || 0);
  var color = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__["default"])(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (resolveShadowValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js");

var styleResolver = Object(_createStyleResolver__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (styleResolver);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/validate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/validate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/warning */ "fbjs/lib/warning");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0__);

var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};

function error(message) {
  fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0___default()(false, message);
}

function validate(key, styles) {
  var obj = styles[key];

  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;

    if (value === null) {
      continue;
    }

    if (typeof value === 'string' && value.indexOf('!important') > -1) {
      error("Invalid style declaration \"" + prop + ":" + value + "\". Values cannot include \"!important\"");
      isInvalid = true;
    } else {
      var suggestion = '';

      if (prop === 'animation' || prop === 'animationName') {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === 'direction') {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (prop === 'verticalAlign') {
        suggestion = 'Did you mean "textAlignVertical"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = 'Please use long-form properties.';
        isInvalid = true;
      }

      if (suggestion !== '') {
        error("Invalid style property of \"" + prop + "\". " + suggestion);
      }
    }

    if (isInvalid) {
      delete obj[k];
    }
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TextAncestorContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/* harmony default export */ __webpack_exports__["default"] = (TextAncestorContext);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/UIManager/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/UIManager/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/getBoundingClientRect */ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/* harmony import */ var _vendor_react_dom_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/react-dom/setValueForStyles */ "./node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js");



var getRect = function getRect(node) {
  var _getBoundingClientRec = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(relativeNode);

      var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName;

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            Object(_vendor_react_dom_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(node, value);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
/* harmony default export */ __webpack_exports__["default"] = (UIManager);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/View/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/View/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/exports/createElement/index.js");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/pick */ "./node_modules/react-native-web/dist/modules/pick/index.js");
/* harmony import */ var _hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useElementLayout */ "./node_modules/react-native-web/dist/hooks/useElementLayout.js");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/useMergeRefs */ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js");
/* harmony import */ var _hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/usePlatformMethods */ "./node_modules/react-native-web/dist/hooks/usePlatformMethods.js");
/* harmony import */ var _hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useResponderEvents */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/index.js");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Text/TextAncestorContext */ "./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js");











var forwardPropsList = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessible: true,
  children: true,
  classList: true,
  disabled: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onKeyDown: true,
  onKeyUp: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  pointerEvents: true,
  ref: true,
  style: true,
  testID: true,
  dataSet: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true,
  onScroll: true,
  onWheel: true,
  href: true,
  rel: true,
  target: true
};

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_3__["default"])(props, forwardPropsList);
};

var View = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, forwardedRef) {
  var onLayout = props.onLayout,
      onMoveShouldSetResponder = props.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
      onResponderEnd = props.onResponderEnd,
      onResponderGrant = props.onResponderGrant,
      onResponderMove = props.onResponderMove,
      onResponderReject = props.onResponderReject,
      onResponderRelease = props.onResponderRelease,
      onResponderStart = props.onResponderStart,
      onResponderTerminate = props.onResponderTerminate,
      onResponderTerminationRequest = props.onResponderTerminationRequest,
      onScrollShouldSetResponder = props.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture;

  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(props.children).forEach(function (item) {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }

  var hasTextAncestor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var classList = [classes.view];
  var style = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].compose(hasTextAncestor && styles.inline, props.style);
  Object(_hooks_useElementLayout__WEBPACK_IMPORTED_MODULE_4__["default"])(hostRef, onLayout);
  Object(_hooks_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__["default"])(hostRef, {
    onMoveShouldSetResponder: onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
    onResponderEnd: onResponderEnd,
    onResponderGrant: onResponderGrant,
    onResponderMove: onResponderMove,
    onResponderReject: onResponderReject,
    onResponderRelease: onResponderRelease,
    onResponderStart: onResponderStart,
    onResponderTerminate: onResponderTerminate,
    onResponderTerminationRequest: onResponderTerminationRequest,
    onScrollShouldSetResponder: onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture: onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder: onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture: onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder: onStartShouldSetResponder,
    onStartShouldSetResponderCapture: onStartShouldSetResponderCapture
  });
  var supportedProps = pickProps(props);
  supportedProps.classList = classList;
  supportedProps.style = style;
  var platformMethodsRef = Object(_hooks_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__["default"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__["default"])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', supportedProps);
});
View.displayName = 'View';
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  }
});
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/createElement/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/createElement/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/AccessibilityUtil */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/createDOMProps */ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var createElement = function createElement(component, props) {
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, props);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_2___default.a, [Component, domProps].concat(children));
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/processColor/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/processColor/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-css-color */ "normalize-css-color");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);


var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  }

  var int32Color = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

/* harmony default export */ __webpack_exports__["default"] = (processColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/render/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/render/index.js ***!
  \********************************************************************/
/*! exports provided: hydrate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });



/* harmony default export */ __webpack_exports__["default"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]);

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useElementLayout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useElementLayout.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useElementLayout; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLayoutEffect */ "./node_modules/react-native-web/dist/hooks/useLayoutEffect.js");
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exports/UIManager */ "./node_modules/react-native-web/dist/exports/UIManager/index.js");



var DOM_LAYOUT_HANDLER_NAME = '__reactLayoutHandler';
var didWarn = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"];
var resizeObserver = null;

function getResizeObserver() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && typeof window.ResizeObserver !== 'undefined') {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];

          if (typeof onLayout === 'function') {
            _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__["default"].measure(node, function (x, y, width, height, left, top) {
              var event = {
                nativeEvent: {
                  layout: {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    left: left,
                    top: top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, 'target', {
                enumerable: true,
                get: function get() {
                  return entry.target;
                }
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (true) {
      console.warn('onLayout relies on ResizeObserver which is not supported by your browser. ' + 'Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill.');
      didWarn = true;
    }
  }

  return resizeObserver;
}

function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var node = ref.current;

    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var node = ref.current;

    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === 'function') {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }

    return function () {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useLayoutEffect.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useLayoutEffect.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useLayoutEffectImpl = fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useLayoutEffectImpl);

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/usePlatformMethods.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/usePlatformMethods.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePlatformMethods; });
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exports/UIManager */ "./node_modules/react-native-web/dist/exports/UIManager/index.js");
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/createDOMProps */ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





function setNativeProps(node, nativeProps, classList, pointerEvents, style, previousStyleRef) {
  if (node != null && nativeProps) {
    var domProps = Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__["default"])(null, _objectSpread({
      pointerEvents: pointerEvents
    }, nativeProps, {
      classList: [classList, nativeProps.className],
      style: [style, nativeProps.style]
    }));
    var nextDomStyle = domProps.style;

    if (previousStyleRef.current != null) {
      if (domProps.style == null) {
        domProps.style = {};
      }

      for (var styleName in previousStyleRef.current) {
        if (domProps.style[styleName] == null) {
          domProps.style[styleName] = '';
        }
      }
    }

    previousStyleRef.current = nextDomStyle;
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].updateView(node, domProps);
  }
}

function usePlatformMethods(props) {
  var previousStyleRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var classList = props.classList,
      style = props.style,
      pointerEvents = props.pointerEvents;
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return function (hostNode) {
      if (hostNode != null) {
        hostNode.measure = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measure(hostNode, callback);
        };

        hostNode.measureLayout = function (relativeToNode, success, failure) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measureLayout(hostNode, relativeToNode, failure, success);
        };

        hostNode.measureInWindow = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measureInWindow(hostNode, callback);
        };

        hostNode.setNativeProps = function (nativeProps) {
          return setNativeProps(hostNode, nativeProps, classList, pointerEvents, style, previousStyleRef);
        };
      }

      return hostNode;
    };
  }, [classList, pointerEvents, style]);
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderEventTypes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderEventTypes.js ***!
  \********************************************************************************************/
/*! exports provided: BLUR, CONTEXT_MENU, FOCUS_OUT, MOUSE_DOWN, MOUSE_MOVE, MOUSE_UP, MOUSE_CANCEL, TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL, SCROLL, SELECT, SELECTION_CHANGE, isStartish, isMoveish, isEndish, isCancelish, isScroll, isSelectionChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUR", function() { return BLUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_OUT", function() { return FOCUS_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_DOWN", function() { return MOUSE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_MOVE", function() { return MOUSE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_UP", function() { return MOUSE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_CANCEL", function() { return MOUSE_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_START", function() { return TOUCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_MOVE", function() { return TOUCH_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_END", function() { return TOUCH_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_CANCEL", function() { return TOUCH_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL", function() { return SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStartish", function() { return isStartish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoveish", function() { return isMoveish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEndish", function() { return isEndish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCancelish", function() { return isCancelish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScroll", function() { return isScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionChange", function() { return isSelectionChange; });
var BLUR = 'blur';
var CONTEXT_MENU = 'contextmenu';
var FOCUS_OUT = 'focusout';
var MOUSE_DOWN = 'mousedown';
var MOUSE_MOVE = 'mousemove';
var MOUSE_UP = 'mouseup';
var MOUSE_CANCEL = 'dragstart';
var TOUCH_START = 'touchstart';
var TOUCH_MOVE = 'touchmove';
var TOUCH_END = 'touchend';
var TOUCH_CANCEL = 'touchcancel';
var SCROLL = 'scroll';
var SELECT = 'select';
var SELECTION_CHANGE = 'selectionchange';
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderSystem.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderSystem.js ***!
  \****************************************************************************************/
/*! exports provided: attachListeners, addNode, removeNode, terminateResponder, getResponderNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachListeners", function() { return attachListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNode", function() { return addNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminateResponder", function() { return terminateResponder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponderNode", function() { return getResponderNode; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createResponderEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createResponderEvent */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/createResponderEvent.js");
/* harmony import */ var _ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponderEventTypes */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderEventTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/utils.js");
/* harmony import */ var _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponderTouchHistoryStore */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderTouchHistoryStore.js");





var emptyObject = {};
var startRegistration = ['onStartShouldSetResponderCapture', 'onStartShouldSetResponder', {
  bubbles: true
}];
var moveRegistration = ['onMoveShouldSetResponderCapture', 'onMoveShouldSetResponder', {
  bubbles: true
}];
var scrollRegistration = ['onScrollShouldSetResponderCapture', 'onScrollShouldSetResponder', {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};

function changeCurrentResponder(responder) {
  currentResponder = responder;
}

function getResponderConfig(id) {
  var config = responderListenersMap.get(id);
  return config != null ? config : emptyObject;
}

function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;

  if (eventType === 'touchstart') {
    isEmulatingMouseEvents = true;
  }

  if (eventType === 'touchmove' || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }

  if (eventType === 'mousedown' && isEmulatingMouseEvents || eventType === 'mousemove' && isEmulatingMouseEvents || eventType === 'mousemove' && trackedTouchCount < 1) {
    return;
  }

  if (isEmulatingMouseEvents && eventType === 'mouseup') {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }

    return;
  }

  var isStartEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isStartish"])(eventType) && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimaryPointerDown"])(domEvent);
  var isMoveEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isMoveish"])(eventType);
  var isEndEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isEndish"])(eventType);
  var isScrollEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isScroll"])(eventType);
  var isSelectionChangeEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isSelectionChange"])(eventType);
  var responderEvent = Object(_createResponderEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(domEvent);

  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }

    _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_4__["default"].recordTouchTrack(eventType, responderEvent.nativeEvent);
  }

  var eventPaths = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getResponderPaths"])(domEvent);
  var wasNegotiated = false;
  var wantsResponder;

  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;

    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLowestCommonAncestor"])(currentResponderIdPath, eventIdPath);

      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }

    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);

      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }

  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder,
        id = _currentResponder.id,
        node = _currentResponder.node;

    var _getResponderConfig = getResponderConfig(id),
        onResponderStart = _getResponderConfig.onResponderStart,
        onResponderMove = _getResponderConfig.onResponderMove,
        onResponderEnd = _getResponderConfig.onResponderEnd,
        onResponderRelease = _getResponderConfig.onResponderRelease,
        onResponderTerminate = _getResponderConfig.onResponderTerminate,
        onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;

    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;

    if (isStartEvent) {
      if (onResponderStart != null) {
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
        if (onResponderMove != null) {
          onResponderMove(responderEvent);
        }
      } else {
        var isTerminateEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isCancelish"])(eventType) || eventType === 'contextmenu' || eventType === 'blur' && eventTarget === window || eventType === 'blur' && eventTarget.contains(node) && domEvent.relatedTarget !== node || isScrollEvent && trackedTouchCount === 0 || isScrollEvent && eventTarget.contains(node) && eventTarget !== node || isSelectionChangeEvent && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hasValidSelection"])(domEvent);
        var isReleaseEvent = isEndEvent && !isTerminateEvent && !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hasTargetTouches"])(node, domEvent.touches);

        if (isEndEvent) {
          if (onResponderEnd != null) {
            onResponderEnd(responderEvent);
          }
        }

        if (isReleaseEvent) {
          if (onResponderRelease != null) {
            onResponderRelease(responderEvent);
          }

          changeCurrentResponder(emptyResponder);
        }

        if (isTerminateEvent) {
          var shouldTerminate = true;

          if (eventType === 'contextmenu' || eventType === 'scroll' || eventType === 'selectionchange') {
            if (wasNegotiated || onResponderTerminationRequest != null && onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }

          if (shouldTerminate) {
            if (onResponderTerminate != null) {
              onResponderTerminate(responderEvent);
            }

            changeCurrentResponder(emptyResponder);
            isEmulatingMouseEvents = false;
            trackedTouchCount = 0;
          }
        }
      }
  }
}

function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];

  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath,
        nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;

    var check = function check(id, node, callbackName) {
      var config = getResponderConfig(id);
      var shouldSetCallback = config[callbackName];

      if (shouldSetCallback != null) {
        if (shouldSetCallback(responderEvent) === true) {
          return {
            id: id,
            node: node,
            idPath: idPath
          };
        }
      }
    };

    for (var i = idPath.length - 1; i >= 0; i--) {
      var id = idPath[i];
      var node = nodePath[i];
      var result = check(id, node, shouldSetCallbackCaptureName);

      if (result != null) {
        return result;
      }

      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }

    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];

        var _result = check(_id, _node, shouldSetCallbackBubbleName);

        if (_result != null) {
          return _result;
        }

        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;

      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}

function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder,
      currentId = _currentResponder2.id,
      currentNode = _currentResponder2.node;
  var id = wantsResponder.id,
      node = wantsResponder.node;

  var _getResponderConfig2 = getResponderConfig(id),
      onResponderGrant = _getResponderConfig2.onResponderGrant,
      onResponderReject = _getResponderConfig2.onResponderReject;

  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;

  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
      onResponderGrant(responderEvent);
    }

    changeCurrentResponder(wantsResponder);
  } else {
      var _getResponderConfig3 = getResponderConfig(currentId),
          onResponderTerminate = _getResponderConfig3.onResponderTerminate,
          onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;

      var allowTransfer = onResponderTerminationRequest != null && onResponderTerminationRequest(responderEvent);

      if (allowTransfer) {
        if (onResponderTerminate != null) {
          responderEvent.currentTarget = currentNode;
          onResponderTerminate(responderEvent);
        }

        if (onResponderGrant != null) {
          onResponderGrant(responderEvent);
        }

        changeCurrentResponder(wantsResponder);
      } else {
        if (onResponderReject != null) {
          onResponderReject(responderEvent);
        }
      }
    }
}

var documentEventsCapturePhase = ['blur', 'scroll'];
var documentEventsBubblePhase = ['mousedown', 'mousemove', 'mouseup', 'dragstart', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'contextmenu', 'select', 'selectionchange'];
function attachListeners() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && window.__reactResponderSystemActive == null) {
    window.addEventListener('blur', eventListener);
    documentEventsBubblePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
function addNode(id, node, config) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setResponderId"])(node, id);
  responderListenersMap.set(id, config);
}
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }

  if (responderListenersMap.has(id)) {
    responderListenersMap["delete"](id);
  }
}
function terminateResponder() {
  var _currentResponder3 = currentResponder,
      id = _currentResponder3.id,
      node = _currentResponder3.node;

  if (id != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id),
        onResponderTerminate = _getResponderConfig4.onResponderTerminate;

    if (onResponderTerminate != null) {
      var event = Object(_createResponderEvent__WEBPACK_IMPORTED_MODULE_1__["default"])({});
      event.currentTarget = node;
      onResponderTerminate(event);
    }

    changeCurrentResponder(emptyResponder);
  }

  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderTouchHistoryStore.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderTouchHistoryStore.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponderEventTypes */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderEventTypes.js");


var __DEV__ = "development" !== 'production';

var MAX_TOUCH_BANK = 20;
var touchBank = [];
var touchHistory = {
  touchBank: touchBank,
  numberActiveTouches: 0,
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}

function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}

function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}

function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;

  if (identifier == null) {
    console.error('Touch object is missing identifier.');
  }

  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error('Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK);
    }
  }

  return identifier;
}

function recordTouchStart(touch) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchBank[identifier];

  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchBank[identifier] = createTouchRecord(touch);
  }

  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}

function recordTouchMove(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch move without a touch start.\n', "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function recordTouchEnd(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch end without a touch start.\n', "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}

function printTouchBank() {
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));

  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ' (original size: ' + touchBank.length + ')';
  }

  return printed;
}

var ResponderTouchHistoryStore = {
  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
    if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isMoveish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchMove);
    } else if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isStartish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchStart);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isEndish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchEnd);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];

          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }

        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];

          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error('Cannot find single active touch.');
          }
        }
      }
    }
  },
  touchHistory: touchHistory
};
/* harmony default export */ __webpack_exports__["default"] = (ResponderTouchHistoryStore);

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/createResponderEvent.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/createResponderEvent.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createResponderEvent; });
/* harmony import */ var _modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/getBoundingClientRect */ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/* harmony import */ var _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponderTouchHistoryStore */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderTouchHistoryStore.js");



var emptyFunction = function emptyFunction() {};

var emptyObject = {};
var emptyArray = [];

function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}

function createResponderEvent(domEvent) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === 'function' ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;

  function normalizeTouches(touches) {
    return Array.prototype.slice.call(touches).map(function (touch) {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),

        get locationX() {
          return locationX(touch.clientX);
        },

        get locationY() {
          return locationY(touch.clientY);
        },

        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp: timestamp
      };
    });
  }

  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === 'mouseup' || domEventType === 'dragstart' ? emptyArray : emulatedTouches;
  }

  var responderEvent = {
    bubbles: true,
    cancelable: true,
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented: function isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped: function isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey: metaKey,
      shiftKey: shiftKey,
      changedTouches: changedTouches,
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp,
      touches: touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault: preventDefault,
    stopPropagation: function stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_1__["default"].touchHistory
  };

  function locationX(x) {
    rect = rect || Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(responderEvent.currentTarget);

    if (rect) {
      return x - rect.left;
    }
  }

  function locationY(y) {
    rect = rect || Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(responderEvent.currentTarget);

    if (rect) {
      return y - rect.top;
    }
  }

  return responderEvent;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResponderEvents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponderSystem */ "./node_modules/react-native-web/dist/hooks/useResponderEvents/ResponderSystem.js");


var emptyObject = {};
var idCounter = 0;

function useStable(getInitialValue) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  if (ref.current == null) {
    ref.current = getInitialValue();
  }

  return ref.current;
}

function useResponderEvents(hostRef, config) {
  if (config === void 0) {
    config = emptyObject;
  }

  var id = useStable(function () {
    return idCounter++;
  });
  var isAttachedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["attachListeners"]();
    return function () {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["removeNode"](id);
    };
  }, [id]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var _config = config,
        onMoveShouldSetResponder = _config.onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture,
        onScrollShouldSetResponder = _config.onScrollShouldSetResponder,
        onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture,
        onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder,
        onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture,
        onStartShouldSetResponder = _config.onStartShouldSetResponder,
        onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;

    if (requiresResponderSystem) {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["addNode"](id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["removeNode"](id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]({
    isResponder: hostRef.current === _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["getResponderNode"]()
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"](config);
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/hooks/useResponderEvents/utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/hooks/useResponderEvents/utils.js ***!
  \******************************************************************************/
/*! exports provided: setResponderId, getResponderPaths, getLowestCommonAncestor, hasTargetTouches, hasValidSelection, isPrimaryPointerDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponderId", function() { return setResponderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponderPaths", function() { return getResponderPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowestCommonAncestor", function() { return getLowestCommonAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTargetTouches", function() { return hasTargetTouches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValidSelection", function() { return hasValidSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimaryPointerDown", function() { return isPrimaryPointerDown; });
/* harmony import */ var _modules_isSelectionValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/isSelectionValid */ "./node_modules/react-native-web/dist/modules/isSelectionValid/index.js");

var keyName = '__reactResponderId';

function getEventPath(domEvent) {
  if (domEvent.type === 'selectionchange') {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}

function composedPathFallback(target) {
  var path = [];

  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }

  return path;
}

function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }

  return null;
}

function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);

  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id = getResponderId(node);

    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }

  return {
    idPath: idPath,
    nodePath: nodePath
  };
}
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;

  if (pathALength === 0 || pathBLength === 0 || pathA[pathALength - 1] !== pathB[pathBLength - 1]) {
    return null;
  }

  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;

  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }

  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }

  var depth = pathALength;

  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }

    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }

  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }

  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;

    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }

  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === 'selectionchange') {
    return Object(_modules_isSelectionValid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  return domEvent.type === 'select';
}
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey,
      button = domEvent.button,
      buttons = domEvent.buttons,
      ctrlKey = domEvent.ctrlKey,
      type = domEvent.type;
  var isTouch = type === 'touchstart' || type === 'touchmove';
  var isPrimaryMouseDown = type === 'mousedown' && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === 'mousemove' && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;

  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var buttonLikeRoles = {
  button: true,
  menuitem: true
};
/* harmony default export */ __webpack_exports__["default"] = (buttonLikeRoles);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttonLikeRoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonLikeRoles */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js");
/* harmony import */ var _isDisabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDisabled */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js");
/* harmony import */ var _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propsToAccessibilityComponent */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js");
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");




var AccessibilityUtil = {
  buttonLikeRoles: _buttonLikeRoles__WEBPACK_IMPORTED_MODULE_0__["default"],
  isDisabled: _isDisabled__WEBPACK_IMPORTED_MODULE_1__["default"],
  propsToAccessibilityComponent: _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  propsToAriaRole: _propsToAriaRole__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AccessibilityUtil);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ __webpack_exports__["default"] = (isDisabled);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");

var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
var emptyObject = {};

var propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
  }

  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = Object(_propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__["default"])(props);

  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'];

      if (level != null) {
        return "h" + level;
      }

      return 'h1';
    }

    return roleComponents[role];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAccessibilityComponent);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityRole = _ref.accessibilityRole;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAriaRole);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/createDOMProps/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AccessibilityUtil */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../exports/StyleSheet/constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var emptyObject = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var classes = _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__["STYLE_GROUPS"].classicReset);
var pointerEventsStyles = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var createDOMProps = function createDOMProps(component, props) {
  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityState = _props.accessibilityState,
      accessibilityValue = _props.accessibilityValue,
      accessible = _props.accessible,
      classList = _props.classList,
      dataSet = _props.dataSet,
      providedDisabled = _props.disabled,
      importantForAccessibility = _props.importantForAccessibility,
      nativeID = _props.nativeID,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessibilityRole = _props.accessibilityRole,
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityState", "accessibilityValue", "accessible", "classList", "dataSet", "disabled", "importantForAccessibility", "nativeID", "pointerEvents", "style", "testID", "accessibilityRole"]);

  var disabled = accessibilityState != null && accessibilityState.disabled === true || providedDisabled;
  var role = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAriaRole(props);
  var isNativeInteractiveElement = role === 'link' || component === 'a' || component === 'button' || component === 'input' || component === 'select' || component === 'textarea' || domProps.contentEditable != null;

  if (dataSet != null) {
    for (var prop in dataSet) {
      if (hasOwnProperty.call(dataSet, prop)) {
        var value = dataSet[prop];

        if (value != null) {
          domProps["data-" + prop] = value;
        }
      }
    }
  }

  if (accessibilityLabel != null) {
    domProps['aria-label'] = accessibilityLabel;
  }

  if (accessibilityLiveRegion != null) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }

  if (role != null) {
    domProps.role = role;
  }

  if (accessibilityState != null) {
    for (var _prop in accessibilityState) {
      var _value = accessibilityState[_prop];

      if (_value != null) {
        if (_prop === 'disabled' || _prop === 'hidden') {
          if (_value === true) {
            domProps["aria-" + _prop] = _value;
            domProps[_prop] = _value;
          }
        } else {
          domProps["aria-" + _prop] = _value;
        }
      }
    }
  }

  if (accessibilityValue != null) {
    for (var _prop2 in accessibilityValue) {
      var _value2 = accessibilityValue[_prop2];

      if (_value2 != null) {
        domProps["aria-value" + _prop2] = _value2;
      }
    }
  }

  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }

  if (disabled === true) {
    domProps['aria-disabled'] = true;
    domProps.disabled = true;
  }

  var focusable = !disabled && importantForAccessibility !== 'no' && importantForAccessibility !== 'no-hide-descendants';

  if (isNativeInteractiveElement) {
    if (accessible === false || !focusable) {
      domProps.tabIndex = '-1';
    } else {
      domProps['data-focusable'] = true;
    }
  } else if (role === 'button' || role === 'menuitem' || role === 'textbox') {
    if (accessible !== false && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } else {
    if (accessible === true && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  }

  var reactNativeStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].compose(pointerEvents && pointerEventsStyles[pointerEvents], providedStyle);
  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = component === 'a' || component === 'button' || component === 'li' || component === 'ul' || role === 'heading';
  var finalClassList = [needsReset && classes.reset, needsCursor && classes.cursor, classList];

  var _styleResolver$resolv = _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(reactNativeStyle, finalClassList),
      className = _styleResolver$resolv.className,
      style = _styleResolver$resolv.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  }

  if (nativeID != null) {
    domProps.id = nativeID;
  }

  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + " noopener noreferrer";
  }

  if (testID != null) {
    domProps['data-testid'] = testID;
  }

  if (domProps['data-focusable']) {
    var onClick = domProps.onClick;

    if (onClick != null) {
      if (disabled) {
        domProps.onClick = function (e) {
          e.stopPropagation();
        };
      } else if (!isNativeInteractiveElement) {
        var onKeyDown = domProps.onKeyDown;

        domProps.onKeyDown = function (e) {
          var key = e.key,
              repeat = e.repeat;
          var isSpacebarKey = key === ' ' || key === 'Spacebar';
          var isButtonRole = role === 'button' || role === 'menuitem';

          if (onKeyDown != null) {
            onKeyDown(e);
          }

          if (!repeat && key === 'Enter') {
            onClick(e);
          } else if (isSpacebarKey && isButtonRole) {
            if (!repeat) {
              onClick(e);
            }

            e.preventDefault();
          }
        };
      }
    }
  }

  return domProps;
};

/* harmony default export */ __webpack_exports__["default"] = (createDOMProps);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/flattenArray/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/flattenArray/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

/* harmony default export */ __webpack_exports__["default"] = (flattenArray);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node != null) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getBoundingClientRect);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/isSelectionValid/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/isSelectionValid/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSelectionValid; });
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== '\n' && isTextNode;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/isWebColor/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/isWebColor/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isWebColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/mergeRefs/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/mergeRefs/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function forwardRef(node) {
    args.forEach(function (ref) {
      if (ref == null) {
        return;
      }

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      if (typeof ref === 'object') {
        ref.current = node;
        return;
      }

      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (multiplyStyleLengthValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/normalizeColor/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isWebColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isWebColor */ "./node_modules/react-native-web/dist/modules/isWebColor/index.js");
/* harmony import */ var _exports_processColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/processColor */ "./node_modules/react-native-web/dist/exports/processColor/index.js");



var normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && Object(_isWebColor__WEBPACK_IMPORTED_MODULE_0__["default"])(color)) {
    return color;
  }

  var colorInt = Object(_exports_processColor__WEBPACK_IMPORTED_MODULE_1__["default"])(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (normalizeColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/pick/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/pick/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pick; });
function pick(obj, list) {
  var nextObj = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true || key.indexOf('aria-') === 0) {
        nextObj[key] = obj[key];
      }
    }
  }

  return nextObj;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/prefixStyles/index.js ***!
  \**************************************************************************/
/*! exports provided: default, prefixInlineStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixInlineStyles", function() { return prefixInlineStyles; });
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/createPrefixer */ "inline-style-prefixer/lib/createPrefixer");
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ "./node_modules/react-native-web/dist/modules/prefixStyles/static.js");


var prefixAll = inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_static__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (prefixAll);
var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style);
  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/static.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/prefixStyles/static.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/backgroundClip */ "inline-style-prefixer/lib/plugins/backgroundClip");
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/crossFade */ "inline-style-prefixer/lib/plugins/crossFade");
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/cursor */ "inline-style-prefixer/lib/plugins/cursor");
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/filter */ "inline-style-prefixer/lib/plugins/filter");
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flex */ "inline-style-prefixer/lib/plugins/flex");
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxIE */ "inline-style-prefixer/lib/plugins/flexboxIE");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxOld */ "inline-style-prefixer/lib/plugins/flexboxOld");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/gradient */ "inline-style-prefixer/lib/plugins/gradient");
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/grid */ "inline-style-prefixer/lib/plugins/grid");
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/imageSet */ "inline-style-prefixer/lib/plugins/imageSet");
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/logical */ "inline-style-prefixer/lib/plugins/logical");
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/position */ "inline-style-prefixer/lib/plugins/position");
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/sizing */ "inline-style-prefixer/lib/plugins/sizing");
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/transition */ "inline-style-prefixer/lib/plugins/transition");
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13__);














var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11___default.a, inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12___default.a, inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13___default.a],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridColumn: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
/* harmony default export */ __webpack_exports__["default"] = (unitlessNumbers);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useMergeRefs/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mergeRefs */ "./node_modules/react-native-web/dist/modules/mergeRefs/index.js");


function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return _mergeRefs__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, args);
  }, [].concat(args));
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/hash/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-native-web/dist/vendor/hash/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

/* harmony default export */ __webpack_exports__["default"] = (hash);

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/unitlessNumbers */ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");


function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(name) && _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][name])) {
    return value + 'px';
  }

  return ('' + value).trim();
}

/* harmony default export */ __webpack_exports__["default"] = (dangerousStyleValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dangerousStyleValue */ "./node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js");


function setValueForStyles(node, styles) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = Object(_dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__["default"])(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setValueForStyles);

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expo_next_adapter_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @expo/next-adapter/document */ "./node_modules/@expo/next-adapter/document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _expo_next_adapter_document__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "fbjs/lib/ExecutionEnvironment":
/*!************************************************!*\
  !*** external "fbjs/lib/ExecutionEnvironment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "fbjs/lib/warning":
/*!***********************************!*\
  !*** external "fbjs/lib/warning" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "hyphenate-style-name":
/*!***************************************!*\
  !*** external "hyphenate-style-name" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hyphenate-style-name");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/backgroundClip":
/*!*******************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/backgroundClip" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/cursor":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/cursor" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/filter":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/filter" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flex":
/*!*********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flex" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flex");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flexboxIE":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flexboxIE" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxIE");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flexboxOld":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flexboxOld" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxOld");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/gradient":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/gradient" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/gradient");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/grid":
/*!*********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/grid" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/grid");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "normalize-css-color":
/*!**************************************!*\
  !*** external "normalize-css-color" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("normalize-css-color");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map