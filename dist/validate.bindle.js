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

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/***/ (() => {

eval("checkInput = () => {\r\n    const url = \"https://www.google.com/\"\r\n\r\n    const markComponent = (component, isValid) => {\r\n        const borderColor = isValid ? \"green\" : \"red\";\r\n        const background = isValid ? \"rgba(0, 252, 63, 0.1)\" : \"rgba(255, 5, 5, 0.1)\";\r\n\r\n        component.style.borderColor = borderColor;\r\n        component.style.background = background;\r\n    }\r\n\r\n    const fields = [\r\n        {\r\n            component: document.getElementById('email'),\r\n            regexp: /^[A-z0-9._-]+@[A-z0-9.-]+\\.[A-z]{2,4}$/\r\n        },\r\n        {\r\n            component: document.getElementById('fullName'),\r\n            regexp: /^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)/\r\n        },\r\n        {\r\n            component: document.getElementById('message'),\r\n            regexp: /^(?!\\s*$).+/\r\n        }\r\n    ];\r\n\r\n    const testReg = (component, regexp) => regexp.test(component.value);\r\n    fields.forEach(({ component, regexp }) => {\r\n        markComponent(component, testReg(component, regexp))\r\n    })\r\n    const isFormValid = fields.every(({ component, regexp }) => testReg(component, regexp))\r\n\r\n    if (isFormValid) {\r\n        const xhr = new XMLHttpRequest();\r\n        xhr.open(\"GET\", url);\r\n        xhr.send({\r\n            fullName: fullName.value,\r\n            email: email.value,\r\n            message: message.value\r\n        });\r\n        successShow();\r\n    }\r\n}\r\n\r\nsuccessShow = () => {\r\n    const popup = document.getElementById('success');\r\n    popup.classList.toggle('active');\r\n    setTimeout(() => { popup.classList.toggle('active'); }, 2000)\r\n}\n\n//# sourceURL=webpack://test_work/./src/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/validate.js"]();
/******/ 	
/******/ })()
;