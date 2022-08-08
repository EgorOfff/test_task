/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ (() => {

eval("popupToggle = () => {\r\n    const popup = document.getElementById('popup');\r\n    popup.classList.toggle('active');\r\n    const overlay = document.getElementById('overlay');\r\n    overlay.classList.toggle('active');\r\n    const body = document.body;\r\n    body.style.overflow = \"hidden\";\r\n}\r\n\r\npopupClose = () => {\r\n    const popup = document.getElementById('popup');\r\n    popup.classList.toggle('active')\r\n    const overlay = document.getElementById('overlay');\r\n    overlay.classList.toggle('active');\r\n    const body = document.body;\r\n    body.style.overflow = \"\";\r\n}\n\n//# sourceURL=webpack://test_work/./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/popup.js"]();
/******/ 	
/******/ })()
;