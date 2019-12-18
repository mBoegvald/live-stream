/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/btnHover.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/btnHover.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".btn:hover {\n  background-color: #bbae83 !important;\n}\n\n.hover1 {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.hover1,\n.hover1:hover,\n.hover1:focus,\n.hover1:active {\n  text-decoration: none;\n}\n\n.hover1::after {\n  content: \"\";\n  position: absolute;\n}\n.hover1::after {\n  top: 100%;\n  height: 2px !important;\n  width: 40%;\n  left: 30%;\n  background-color: var(--white);\n  transition: 0.3s ease-out all 0.1s;\n}\n\n.btn:hover .hover1:after {\n  width: 90%;\n  left: 5%;\n  transition: 0.3s ease all;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".brandon-thin {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 100;\n}\n\n.brandon-thin-italic {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 100;\n  font-style: italic;\n}\n\n.brandon-light {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 300;\n}\n\n.brandon-light-italic {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.brandon-regular {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 400;\n}\n\n.brandon-bold {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 700;\n}\n\n.sans-light {\n  font-family: source-sans-pro, sans-serif;\n  font-weight: 300;\n}\n\n.sans-regular {\n  font-family: source-sans-pro, sans-serif;\n  font-weight: 400;\n}\n\n.sans-bold {\n  font-family: source-sans-pro, sans-serif;\n  font-weight: 700;\n}\n\n.text-sec {\n  color: var(--secondary-color);\n}\n\n.text-pri {\n  color: var(--primary-color);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "footer {\n  background-color: var(--primary-color);\n}\n\nfooter h1 {\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n  border-bottom: 1px var(--secondary-color) solid;\n}\n\nfooter,\nfooter a {\n  color: var(--white);\n  transition: 0.2s;\n}\n\nfooter a:hover {\n  color: var(--secondary-color);\n  text-decoration: none;\n}\n\n/* Weather */\n\n#temp {\n  font-size: 2rem;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/grid.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/grid.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  grid-gap: 1rem;\n  height: 90vh;\n}\n\n.grid-col {\n  grid-column: span 1;\n  grid-row: span 5;\n  background-size: cover;\n  height: 100%;\n  overflow: hidden;\n}\n\n.col-tall {\n  grid-column: span 2;\n}\n.col-content {\n  grid-column: span 1;\n}\n\n.col-content.col-content-a {\n  grid-column: 1 / span 2;\n}\n\n.col-content.col-content-b {\n  grid-column: 1 / span 2;\n}\n\n.grid-col.boxOverlay {\n  position: relative;\n}\n.grid-col.boxOverlay:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: var(--black);\n  z-index: 0;\n  -webkit-transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n  -ms-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n.fadedBox {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n.fadedBox {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n@media (max-width: 992px) {\n  .fadedBox h2 {\n    font-size: 1rem;\n  }\n  .fadedBox p {\n    font-size: 0.5rem;\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 992px) {\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 1rem;\n    height: 70vh;\n  }\n  .grid-col {\n    grid-column: span 1;\n    grid-row: span 1;\n    background-size: cover;\n    height: 100%;\n    overflow: hidden;\n  }\n  .col-tall {\n    grid-column: 1;\n    grid-row: 1/3;\n    height: 100%;\n  }\n\n  .grid-col.boxOverlay:hover:after {\n    opacity: 0.1;\n  }\n  .fadedBox {\n    -webkit-transition: all 0.3s ease-out;\n    -moz-transition: all 0.3s ease-out;\n    -o-transition: all 0.3s ease-out;\n    -ms-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n    transform: translateY(1rem);\n    -webkit-transform: translateY(1rem);\n  }\n\n  .grid-col.boxOverlay:hover .fadedBox {\n    opacity: 0.8;\n  }\n  .hideText {\n    opacity: 0;\n    transition-duration: 0.3s;\n  }\n  .grid-col.boxOverlay:hover .fadedBox,\n  .grid-col.boxOverlay:hover .hideText {\n    opacity: 1;\n    transform: translateY(0px);\n    -webkit-transform: translateY(0px);\n  }\n  .fadedBox {\n    background-color: transparent;\n  }\n  .grid-col.boxOverlay:hover .fadedBox {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n  .col-content.col-content-a {\n    grid-column: 2 / span 1;\n    grid-row: 4;\n  }\n\n  .col-content.col-content-b {\n    grid-column: 1 / span 1;\n    grid-row: 4;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ":root {\n  --primary-color: rgb(32, 32, 32);\n  --secondary-color: #b7a15b;\n  --white: #fff;\n  --black: #000;\n}\n\n/* HUSK AT GØR COMPATIBLE MED IE */\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n}\n\n.wrapper {\n  position: relative;\n  height: 100vh;\n  min-height: 100vh;\n  width: 100vw;\n}\nsection {\n  overflow: hidden;\n  position: relative;\n}\n\n.wrapper video {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -2;\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.wrapper .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: var(--black);\n  opacity: 0.7;\n  z-index: -1;\n}\n\n.btn {\n  background-color: var(--secondary-color) !important;\n  color: var(--white) !important;\n  text-transform: uppercase;\n  padding: 0.7rem 2rem !important;\n}\n\n.container > .heading {\n  max-height: 0px;\n  overflow: hidden;\n  transition: 2s;\n  z-index: 2;\n}\n.container > .heading > h1 {\n  font-size: 3rem;\n}\n.container > .heading > p {\n  font-size: 1.2rem;\n}\n.container > .heading.show {\n  max-height: 100%;\n}\n\n/* Showroom section */\n\n#showroom {\n  background-color: var(--primary-color);\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/margins.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/margins.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".mt-50 {\n  margin-top: 5rem;\n}\n\n.mb-50 {\n  margin-bottom: 5rem;\n}\n\n.my-50 {\n  margin: 5rem 0;\n}\n\n.mt-30 {\n  margin-top: 3rem;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navbar {\n  z-index: 100;\n  font-size: 1.5rem;\n  transition: 1s;\n  background-color: var(--primary-color);\n}\n\n.darkMode {\n  background-color: var(--primary-color) !important;\n}\n\n.navbar-brand img {\n  max-width: 100px;\n}\n\n@media (min-width: 992px) {\n  .navbar {\n    background-color: transparent;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/stockfotos.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/stockfotos.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ejendomsfoto {\n  background: url(\"/img/ejendomsfoto.jpg\") no-repeat center center;\n}\n\n.luftfoto {\n  background: url(\"/img/luftfoto.jpg\") no-repeat center center;\n}\n\n.taginspektion {\n  background: url(\"/img/inspektion.jpg\") no-repeat center center;\n}\n\n.byggeplads {\n  background: url(\"/img/byggeplads.jpg\") no-repeat center center;\n}\n\n.panorama {\n  background: url(\"/img/360panorama.png\") no-repeat center center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./margins.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/margins.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/fonts.css"), "");
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css);", ""]);
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/grid.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./stockfotos.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/stockfotos.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./swiper.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/swiper.css"), "");
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./btnHover.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/btnHover.css"), "");

// Module
exports.push([module.i, "\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/swiper.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/swiper.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".swiper-container {\n  width: 100%;\n  height: auto;\n  overflow: hidden;\n  z-index: 3;\n  border-radius: 0.25rem;\n}\n.swiper-wrapper {\n  height: 100%;\n  width: 100%;\n}\n.swiper-slide img {\n  width: 100%;\n}\n.swiper-wrapper > .swiper-button-prev,\n.swiper-button-next {\n  color: var(--secondary-color);\n}\n.slide-overlay {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: 0.2s linear;\n  background-color: var(--black);\n}\n.slide-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: var(--white);\n  font-size: 3.5rem;\n  opacity: 0;\n  transition: 0.2s linear;\n}\n.swiper-container:hover .slide-overlay {\n  opacity: 0.7;\n}\n.swiper-container:hover .slide-text {\n  opacity: 1;\n}\n.swiper-button-prev {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23b7a15b'%2F%3E%3C%2Fsvg%3E\") !important;\n}\n.swiper-button-next {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23b7a15b'%2F%3E%3C%2Fsvg%3E\") !important;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/App */ "./src/scripts/App.js");
// Styles
 // Main app


document.addEventListener("DOMContentLoaded", function () {
  return new _scripts_App__WEBPACK_IMPORTED_MODULE_1__["default"]();
});

/***/ }),

/***/ "./src/scripts/App.js":
/*!****************************!*\
  !*** ./src/scripts/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_Swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/Swiper */ "./src/scripts/Swiper.js");
/* harmony import */ var _scripts_ChangeNavColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/ChangeNavColor */ "./src/scripts/ChangeNavColor.js");
/* harmony import */ var _scripts_FormValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/FormValidation */ "./src/scripts/FormValidation.js");
/* harmony import */ var _scripts_ShowHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/ShowHeader */ "./src/scripts/ShowHeader.js");
/* harmony import */ var _scripts_Weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/Weather */ "./src/scripts/Weather.js");
/* harmony import */ var _scripts_HideNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/HideNav */ "./src/scripts/HideNav.js");
/* harmony import */ var _scripts_SendMail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/SendMail */ "./src/scripts/SendMail.js");









var App = function App() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

  new _scripts_Swiper__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _scripts_ChangeNavColor__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _scripts_FormValidation__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _scripts_ShowHeader__WEBPACK_IMPORTED_MODULE_4__["default"]();
  new _scripts_Weather__WEBPACK_IMPORTED_MODULE_5__["default"]();
  new _scripts_HideNav__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _scripts_SendMail__WEBPACK_IMPORTED_MODULE_7__["default"]();
};



/***/ }),

/***/ "./src/scripts/ChangeNavColor.js":
/*!***************************************!*\
  !*** ./src/scripts/ChangeNavColor.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeNavColor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var ChangeNavColor = function ChangeNavColor() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChangeNavColor);

  function changeNavColor() {
    var scroll = window.scrollY;
    var nav = document.querySelector("nav");
    var navOffset = document.querySelector("nav").offsetHeight;

    if (scroll > navOffset) {
      return nav.classList.add("darkMode");
    } else {
      return nav.classList.remove("darkMode");
    }
  }

  document.addEventListener("scroll", changeNavColor);
};



/***/ }),

/***/ "./src/scripts/FormValidation.js":
/*!***************************************!*\
  !*** ./src/scripts/FormValidation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidation; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var FormValidation = function FormValidation() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FormValidation);

  // Form validation
  (function () {
    "use strict";

    window.addEventListener("load", function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation"); // Loop over them and prevent submission

      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        }, false);
      });
    }, false);
  })();
};



/***/ }),

/***/ "./src/scripts/HideNav.js":
/*!********************************!*\
  !*** ./src/scripts/HideNav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HideNav; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var HideNav = function HideNav() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HideNav);

  $(function () {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar

    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
  });
};



/***/ }),

/***/ "./src/scripts/SendMail.js":
/*!*********************************!*\
  !*** ./src/scripts/SendMail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SendMail; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var SendMail = function SendMail() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SendMail);

  $(function () {
    $("#myForm").submit(function (e) {
      e.preventDefault();
      var form_data = $(this).serialize();
      var name = document.querySelector("input[name=name]").value;
      var email = document.querySelector("input[name=email]").value;

      if (!name || !email) {
        return alert("Navn og Email er påkrævet");
      }

      $.ajax({
        type: "POST",
        url: "form-to-email.php",
        dataType: "json",
        // Add datatype
        data: form_data
      }).done(function (data) {
        alert("Din email er sendt!");
      }).fail(function (data) {
        alert("Noget gik galt, prøv igen.");
      });
    });
  });
};



/***/ }),

/***/ "./src/scripts/ShowHeader.js":
/*!***********************************!*\
  !*** ./src/scripts/ShowHeader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowHeader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var ShowHeader = function ShowHeader() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ShowHeader);

  setTimeout(function () {
    document.querySelector(".heading").classList.add("show");
  }, 1000);
};



/***/ }),

/***/ "./src/scripts/Swiper.js":
/*!*******************************!*\
  !*** ./src/scripts/Swiper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Slider = function Slider() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Slider);

  fetch("https://fra-oven.dk/wordpress/wp-json/acf/v3/slideshow_post/").then(function (data) {
    return data.json();
  }).then(function (data) {
    for (var i = 0; i < data.length; i++) {
      var element = "<div class=\"swiper-slide\"><img src=\"".concat(data[i].acf.pic, "\" alt=\"").concat(data[i].acf.text, "\"/><div class=\"slide-overlay\"></div><h2 class=\"slide-text sans-regular\">").concat(data[i].acf.text, "</h2></div>");
      swiper.appendSlide(element);
    }
  })["catch"](function (err) {
    console.error(err);
  });
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
};



/***/ }),

/***/ "./src/scripts/Weather.js":
/*!********************************!*\
  !*** ./src/scripts/Weather.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weather; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Weather = function Weather() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Weather);

  function weather() {
    var apiKey = "ce4206500db0e67c73e3e4d2112e2687";
    var url = "https://api.forecast.io/forecast/";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?lang=da&units=auto&callback=?", function (data) {
        console.log(data);
        var temp = Math.round(data.currently.temperature);
        var summary = data.currently.summary;
        var iconName = data.currently.icon.replace(/-/g, "_").toUpperCase();
        console.log(summary);
        console.log(iconName);
        $("#temp").html("".concat(temp, "\xB0"));
        $("#minutely").html("".concat(summary));
        var skycons = new Skycons({
          color: "white"
        });
        skycons.set("weatherIcon", iconName);
        skycons.play();
      });
    }

    function error() {
      $("#minutely").html("Unable to retrieve your location");
    }
  }

  weather();
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map