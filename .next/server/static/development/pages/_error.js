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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Error/Error.jsx":
/*!************************************!*\
  !*** ./components/Error/Error.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/ButtonLink/ButtonLink */ "./components/UI/ButtonLink/ButtonLink.jsx");
/* harmony import */ var _pages_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/globalStyles */ "./pages/globalStyles.js");
/* harmony import */ var _ErrorStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorStyles */ "./components/Error/ErrorStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Error = ({
  statusCode
}) => {
  let message;
  let caption;

  switch (statusCode) {
    case 404:
      message = 'Not found';
      caption = 'This page could not be found';
      break;

    case 500:
      message = 'Server error';
      caption = 'Something went wrong';
      break;

    default:
      statusCode = 500;
      message = 'Server error';
      caption = 'Something went wrong';
  }

  return __jsx(_pages_globalStyles__WEBPACK_IMPORTED_MODULE_2__["Main"], null, __jsx(_pages_globalStyles__WEBPACK_IMPORTED_MODULE_2__["Wrap"], null, __jsx(_ErrorStyles__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx("h1", null, statusCode, " ", message), __jsx("h4", null, caption), __jsx(_UI_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: "/",
    text: "Go to Homepage"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./components/Error/ErrorStyles.js":
/*!*****************************************!*\
  !*** ./components/Error/ErrorStyles.js ***!
  \*****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "z5h6y8-0"
})(["display:flex;text-align:center;flex-direction:column;align-items:center;h1{font-size:4rem;margin-bottom:2rem;}h4{font-size:2rem;margin-bottom:4rem;}"]);

/***/ }),

/***/ "./components/PlanetCard/PlanetCardStyles.js":
/*!***************************************************!*\
  !*** ./components/PlanetCard/PlanetCardStyles.js ***!
  \***************************************************/
/*! exports provided: PlanetCard, Name, ImageWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetCard", function() { return PlanetCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrap", function() { return ImageWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PlanetCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PlanetCard",
  componentId: "sx8oj-0"
})(["display:flex;flex-direction:column;background-color:", ";border-radius:.4rem;box-shadow:0 0 1.2rem rgba(0,0,0,0.2);a{display:block;text-decoration:none;color:", ";:hover{text-decoration:underline;}}"], props => props.theme.color.white, props => props.theme.color.black);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Name",
  componentId: "sx8oj-1"
})(["padding:2rem;"]);
const ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageWrap",
  componentId: "sx8oj-2"
})(["padding-bottom:56.25%;position:relative;height:0;"]);

/***/ }),

/***/ "./components/UI/ButtonLink/ButtonLink.jsx":
/*!*************************************************!*\
  !*** ./components/UI/ButtonLink/ButtonLink.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonLinkStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonLinkStyles */ "./components/UI/ButtonLink/ButtonLinkStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ButtonLink = ({
  text,
  url
}) => {
  return __jsx(_ButtonLinkStyles__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: url
  }, text);
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonLink);

/***/ }),

/***/ "./components/UI/ButtonLink/ButtonLinkStyles.js":
/*!******************************************************!*\
  !*** ./components/UI/ButtonLink/ButtonLinkStyles.js ***!
  \******************************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Link",
  componentId: "sc-68zad8-0"
})(["padding:1rem 2rem;text-align:center;text-decoration:none;color:", ";font-weight:old;border-radius:.3rem;background-color:", ";display:inline-block;:hover{text-decoration:underline;}"], props => props.theme.color.white, props => props.theme.color.blue);

/***/ }),

/***/ "./pages/_error.jsx":
/*!**************************!*\
  !*** ./pages/_error.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Error/Error */ "./components/Error/Error.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppError = ({
  statusCode
}) => __jsx(_components_Error_Error__WEBPACK_IMPORTED_MODULE_1__["default"], {
  statusCode: statusCode
});

AppError.getInitialProps = async props => {
  return {
    statusCode: props.query.statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (AppError);

/***/ }),

/***/ "./pages/globalStyles.js":
/*!*******************************!*\
  !*** ./pages/globalStyles.js ***!
  \*******************************/
/*! exports provided: Main, Wrap, CardsContainer, BackButtonWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsContainer", function() { return CardsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonWrap", function() { return BackButtonWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils */ "./styles/utils.js");
/* harmony import */ var _components_PlanetCard_PlanetCardStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PlanetCard/PlanetCardStyles */ "./components/PlanetCard/PlanetCardStyles.js");



const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "Main",
  componentId: "sc-10nxlqo-0"
})(["padding:1rem;", ""], _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].tablet`
    padding: 3rem;
  `);
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Wrap",
  componentId: "sc-10nxlqo-1"
})(["width:100%;max-width:76rem;margin:0 auto;"]);
const CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CardsContainer",
  componentId: "sc-10nxlqo-2"
})(["display:flex;flex-direction:column;margin-top:2rem;", " ", "{width:100%;margin-bottom:2rem;", "}"], _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].tablet`
    flex-direction: row;
  `, _components_PlanetCard_PlanetCardStyles__WEBPACK_IMPORTED_MODULE_2__["PlanetCard"], _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].tablet`
      margin-right: 2rem;
      width: calc(33.33% - 1rem);

      :nth-child(3n) {
        margin-right: 0;
      }
    `);
const BackButtonWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BackButtonWrap",
  componentId: "sc-10nxlqo-3"
})(["margin-bottom:2rem;"]);

/***/ }),

/***/ "./styles/utils.js":
/*!*************************!*\
  !*** ./styles/utils.js ***!
  \*************************/
/*! exports provided: sizes, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const sizes = {
  large: 1440,
  desktop: 1024,
  tablet: 768,
  mobile: 500
};
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (min-width:", "em){", ";}"], emSize, Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args));

  return accumulator;
}, {});

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/_error.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleytaylor/Documents/genting/pages/_error.jsx */"./pages/_error.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map