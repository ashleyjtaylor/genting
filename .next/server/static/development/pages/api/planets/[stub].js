module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/responseFormat.js":
/*!*******************************!*\
  !*** ./lib/responseFormat.js ***!
  \*******************************/
/*! exports provided: formatStub, formatFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatStub", function() { return formatStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatFilm", function() { return formatFilm; });
const formatStub = data => {
  const {
    name,
    climate,
    films,
    population
  } = data;
  return {
    Name: name,
    Climate: climate,
    Population: population,
    Films: films
  };
};
const formatFilm = data => {
  const {
    title,
    director,
    release_date
  } = data;
  return {
    Title: title,
    Director: director,
    ReleaseDate: release_date
  };
};

/***/ }),

/***/ "./pages/api/planets/[stub].js":
/*!*************************************!*\
  !*** ./pages/api/planets/[stub].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_responseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/responseFormat */ "./lib/responseFormat.js");



const stubs = [{
  id: 1,
  planet: 'tatooine'
}, {
  id: 2,
  planet: 'alderaan'
}, {
  id: 3,
  planet: 'yavin'
}];

const fetchFilms = async films => {
  const data = await Promise.all(films.map(async url => {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url);
    const film = await response.json();
    return Object(_lib_responseFormat__WEBPACK_IMPORTED_MODULE_2__["formatFilm"])(film);
  }));
  return data.sort((a, b) => moment__WEBPACK_IMPORTED_MODULE_0___default()(b.ReleaseDate).diff(a.ReleaseDate, 'days'));
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const stub = stubs.find(stub => stub.planet === req.query.stub);

  if (!stub) {
    return res.status(404).json({});
  }

  try {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`https://swapi.co/api/planets/${stub.id}`);
    const data = await response.json();
    data.films = await fetchFilms(data.films);
    return res.status(200).json(Object(_lib_responseFormat__WEBPACK_IMPORTED_MODULE_2__["formatStub"])(data));
  } catch (err) {
    console.log('Error: /planets/:stub', err);
    return res.status(400).json({
      message: 'Error fetching planets',
      err
    });
  }
});

/***/ }),

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/api/planets/[stub].js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleytaylor/Documents/genting/pages/api/planets/[stub].js */"./pages/api/planets/[stub].js");


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

/***/ })

/******/ });
//# sourceMappingURL=[stub].js.map