module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FilmsList/FilmsList.jsx":
/*!********************************************!*\
  !*** ./components/FilmsList/FilmsList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilmsListStyles */ "./components/FilmsList/FilmsListStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FilmsList = ({
  films
}) => {
  return __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx("h3", null, "Films"), __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Table"], null, __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Headings"], null, __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], null, "Title"), __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Heading"], null, "Director")), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, films.map(film => __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["Film"], {
    key: film.Title
  }, __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["FilmTitle"], null, __jsx("span", null, film.Title), __jsx("time", {
    dateTime: film.ReleaseDate
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(film.ReleaseDate).format('DD MMM YYYY')), __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["FilmDirector"], null, film.Director)), __jsx(_FilmsListStyles__WEBPACK_IMPORTED_MODULE_2__["FilmDirector"], null, film.Director))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FilmsList);

/***/ }),

/***/ "./components/FilmsList/FilmsListStyles.js":
/*!*************************************************!*\
  !*** ./components/FilmsList/FilmsListStyles.js ***!
  \*************************************************/
/*! exports provided: Container, Table, Headings, Heading, Film, FilmDirector, FilmTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headings", function() { return Headings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDirector", function() { return FilmDirector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmTitle", function() { return FilmTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils */ "./styles/utils.js");


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-143xdyl-0"
})(["margin-top:2rem;padding:2rem;background-color:", ";", " h3{margin-bottom:1.5rem;font-size:1.8rem;}"], props => props.theme.color.white, _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].mobile`
    padding: 4rem;
  `);
const Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Table",
  componentId: "sc-143xdyl-1"
})(["margin-top:2.5rem;"]);
const Headings = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headings",
  componentId: "sc-143xdyl-2"
})(["display:flex;flex-direction:row;margin-bottom:2rem;padding-bottom:1rem;border-bottom:.1rem solid ", ";"], props => props.theme.color.lightgrey);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "Heading",
  componentId: "sc-143xdyl-3"
})(["font-size:1.2rem;text-transform:uppercase;margin-bottom:.5rem;color:", ";:last-of-type{display:none;margin-left:auto;", "}"], props => props.theme.color.grey, _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].mobile`
      display: block;
    `);
const Film = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Film",
  componentId: "sc-143xdyl-4"
})(["display:flex;flex-direction:row;margin-bottom:2rem;padding-bottom:2rem;border-bottom:.1rem solid ", ";:last-of-type{margin-bottom:0;}"], props => props.theme.color.lightgrey);
const FilmDirector = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "FilmDirector",
  componentId: "sc-143xdyl-5"
})(["display:none;padding-left:2rem;margin-left:auto;text-align:right;", ""], _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].mobile`
    display: block;
  `);
const FilmTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "FilmTitle",
  componentId: "sc-143xdyl-6"
})(["padding-right:2rem;span{display:block;margin-bottom:.2rem;}time{color:", ";font-style:italic;font-size:1.3rem;}", "{text-align:left;padding:0;font-size:1.3rem;margin-top:.2rem;", "}"], props => props.theme.color.grey, FilmDirector, _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].mobile`
      display: none;
    `);

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

/***/ "./components/PlanetInfo/PlanetInfo.jsx":
/*!**********************************************!*\
  !*** ./components/PlanetInfo/PlanetInfo.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_TextLabel_TextLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/TextLabel/TextLabel */ "./components/UI/TextLabel/TextLabel.jsx");
/* harmony import */ var _PlanetInfoStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlanetInfoStyles */ "./components/PlanetInfo/PlanetInfoStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PlanetInfo = ({
  Name,
  Climate,
  Population
}) => {
  return __jsx(_PlanetInfoStyles__WEBPACK_IMPORTED_MODULE_2__["PlanetInfo"], null, __jsx(_PlanetInfoStyles__WEBPACK_IMPORTED_MODULE_2__["Name"], null, Name), __jsx(_PlanetInfoStyles__WEBPACK_IMPORTED_MODULE_2__["Info"], null, __jsx(_UI_TextLabel_TextLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Climate",
    text: Climate
  })), __jsx(_PlanetInfoStyles__WEBPACK_IMPORTED_MODULE_2__["Info"], null, __jsx(_UI_TextLabel_TextLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Population",
    text: Population
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PlanetInfo);

/***/ }),

/***/ "./components/PlanetInfo/PlanetInfoStyles.js":
/*!***************************************************!*\
  !*** ./components/PlanetInfo/PlanetInfoStyles.js ***!
  \***************************************************/
/*! exports provided: PlanetInfo, Name, Info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetInfo", function() { return PlanetInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils */ "./styles/utils.js");


const PlanetInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PlanetInfo",
  componentId: "sc-1jz6luw-0"
})(["display:flex;flex-direction:column;background-color:", ";padding:2rem;", ""], props => props.theme.color.white, _styles_utils__WEBPACK_IMPORTED_MODULE_1__["media"].mobile`
    padding: 4rem;
  `);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Name",
  componentId: "sc-1jz6luw-1"
})(["margin-bottom:2rem;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Info",
  componentId: "sc-1jz6luw-2"
})(["margin-bottom:1rem;padding-bottom:1rem;border-bottom:.1rem solid ", ";"], props => props.theme.color.lightgrey);

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

/***/ "./components/UI/TextLabel/TextLabel.jsx":
/*!***********************************************!*\
  !*** ./components/UI/TextLabel/TextLabel.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextLabelStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextLabelStyles */ "./components/UI/TextLabel/TextLabelStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TextLabel = ({
  label,
  text
}) => {
  return __jsx(_TextLabelStyles__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx("h5", null, label), __jsx("span", null, text));
};

/* harmony default export */ __webpack_exports__["default"] = (TextLabel);

/***/ }),

/***/ "./components/UI/TextLabel/TextLabelStyles.js":
/*!****************************************************!*\
  !*** ./components/UI/TextLabel/TextLabelStyles.js ***!
  \****************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "sc-1vaz981-0"
})(["display:flex;flex-direction:column;h5{font-size:1.2rem;text-transform:uppercase;margin-bottom:.5rem;color:", ";}span{font-size:1.6rem;}"], props => props.theme.color.grey);

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

/***/ "./pages/planets/[stub].jsx":
/*!**********************************!*\
  !*** ./pages/planets/[stub].jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PlanetInfo_PlanetInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PlanetInfo/PlanetInfo */ "./components/PlanetInfo/PlanetInfo.jsx");
/* harmony import */ var _components_FilmsList_FilmsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FilmsList/FilmsList */ "./components/FilmsList/FilmsList.jsx");
/* harmony import */ var _components_UI_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UI/ButtonLink/ButtonLink */ "./components/UI/ButtonLink/ButtonLink.jsx");
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globalStyles */ "./pages/globalStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const PlanetPage = ({
  data
}) => {
  const {
    Films
  } = data,
        props = _objectWithoutProperties(data, ["Films"]);

  return __jsx(_globalStyles__WEBPACK_IMPORTED_MODULE_5__["Main"], null, __jsx(_globalStyles__WEBPACK_IMPORTED_MODULE_5__["Wrap"], null, __jsx(_globalStyles__WEBPACK_IMPORTED_MODULE_5__["BackButtonWrap"], null, __jsx(_components_UI_ButtonLink_ButtonLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: "/",
    text: "Back"
  })), __jsx(_components_PlanetInfo_PlanetInfo__WEBPACK_IMPORTED_MODULE_2__["default"], props), __jsx(_components_FilmsList_FilmsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    films: Films
  })));
};

PlanetPage.getInitialProps = async ({
  res,
  query
}) => {
  try {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:3000/api/planets/${query.stub}`);
    const data = await response.json();

    if (Object.entries(data).length === 0) {
      if (res) res.statusCode = 404;
      return {
        statusCode: 404
      };
    }

    if (res) res.statusCode = 200;
    return {
      data
    };
  } catch (err) {
    if (res) res.statusCode = 500;
    return {
      err,
      statusCode: 500,
      message: 'Server error'
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PlanetPage);

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

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/planets/[stub].jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleytaylor/Documents/genting/pages/planets/[stub].jsx */"./pages/planets/[stub].jsx");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=[stub].js.map