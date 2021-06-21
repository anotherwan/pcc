/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar slides = _toConsumableArray(document.querySelectorAll('.slides .slide'));\n\nvar questions = _toConsumableArray(document.querySelectorAll('.questions .question'));\n\nvar _loop = function _loop(i) {\n  document.addEventListener(\"keydown\", function (event) {\n    if (event.key == i) {\n      slides.forEach(function (slide) {\n        slide.classList.remove('current');\n      });\n      slides[i].classList.add('current');\n      currentSlide = i;\n    }\n  });\n};\n\nfor (var i = 0; i < slides.length; i++) {\n  _loop(i);\n}\n\n;\ncurrentSlide = 0;\ndocument.addEventListener(\"keydown\", function (event) {\n  if (event.defaultPrevented) {\n    return;\n  }\n\n  if (event.key == \"ArrowLeft\") {\n    if (currentSlide > 0) {\n      slides[currentSlide].classList.remove('current');\n      currentSlide = (currentSlide - 1) % slides.length;\n      slides[currentSlide].classList.add('current');\n    }\n  }\n\n  if (event.key == \"ArrowRight\") {\n    if (currentSlide < slides.length - 1) {\n      slides[currentSlide].classList.remove('current');\n      currentSlide = (currentSlide + 1) % slides.length;\n      slides[currentSlide].classList.add('current');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b20td29yZHByZXNzLXRoZW1lLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sIm5hbWVzIjpbInNsaWRlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInF1ZXN0aW9ucyIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJmb3JFYWNoIiwic2xpZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjdXJyZW50U2xpZGUiLCJsZW5ndGgiLCJkZWZhdWx0UHJldmVudGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLHNCQUFPQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFQLENBQVo7O0FBQ0EsSUFBTUMsU0FBUyxzQkFBT0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixzQkFBMUIsQ0FBUCxDQUFmOzsyQkFFU0UsQztBQUNMSCxFQUFBQSxRQUFRLENBQUNJLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQVVDLEtBQVYsRUFBaUI7QUFDbEQsUUFBSUEsS0FBSyxDQUFDQyxHQUFOLElBQWFILENBQWpCLEVBQW9CO0FBQ2hCSixNQUFBQSxNQUFNLENBQUNRLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVc7QUFDdEJBLFFBQUFBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsU0FBdkI7QUFDSCxPQUZEO0FBR0FYLE1BQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOLENBQVVNLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLFNBQXhCO0FBQ0FDLE1BQUFBLFlBQVksR0FBR1QsQ0FBZjtBQUNIO0FBQ0osR0FSRDs7O0FBREosS0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixNQUFNLENBQUNjLE1BQTNCLEVBQW1DVixDQUFDLEVBQXBDLEVBQXdDO0FBQUEsUUFBL0JBLENBQStCO0FBVXZDOztBQUFBO0FBQ0RTLFlBQVksR0FBRyxDQUFmO0FBQ0FaLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVUMsS0FBVixFQUFpQjtBQUNsRCxNQUFJQSxLQUFLLENBQUNTLGdCQUFWLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBQ0QsTUFBSVQsS0FBSyxDQUFDQyxHQUFOLElBQWEsV0FBakIsRUFBOEI7QUFDMUIsUUFBSU0sWUFBWSxHQUFHLENBQW5CLEVBQXNCO0FBQ2xCYixNQUFBQSxNQUFNLENBQUNhLFlBQUQsQ0FBTixDQUFxQkgsU0FBckIsQ0FBK0JDLE1BQS9CLENBQXNDLFNBQXRDO0FBQ0FFLE1BQUFBLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUMsQ0FBZCxJQUFpQmIsTUFBTSxDQUFDYyxNQUF2QztBQUNBZCxNQUFBQSxNQUFNLENBQUNhLFlBQUQsQ0FBTixDQUFxQkgsU0FBckIsQ0FBK0JFLEdBQS9CLENBQW1DLFNBQW5DO0FBQ0g7QUFDSjs7QUFDRCxNQUFJTixLQUFLLENBQUNDLEdBQU4sSUFBYSxZQUFqQixFQUErQjtBQUMzQixRQUFJTSxZQUFZLEdBQUdiLE1BQU0sQ0FBQ2MsTUFBUCxHQUFlLENBQWxDLEVBQXFDO0FBQ2pDZCxNQUFBQSxNQUFNLENBQUNhLFlBQUQsQ0FBTixDQUFxQkgsU0FBckIsQ0FBK0JDLE1BQS9CLENBQXNDLFNBQXRDO0FBQ0FFLE1BQUFBLFlBQVksR0FBRyxDQUFDQSxZQUFZLEdBQUMsQ0FBZCxJQUFpQmIsTUFBTSxDQUFDYyxNQUF2QztBQUNBZCxNQUFBQSxNQUFNLENBQUNhLFlBQUQsQ0FBTixDQUFxQkgsU0FBckIsQ0FBK0JFLEdBQS9CLENBQW1DLFNBQW5DO0FBQ0g7QUFDSjtBQUNKLENBbEJEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXMgLnNsaWRlJyldO1xuY29uc3QgcXVlc3Rpb25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbnMgLnF1ZXN0aW9uJyldO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IGkpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzbGlkZXNbaV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gaTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuY3VycmVudFNsaWRlID0gMDtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPiAwKSB7XG4gICAgICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAoY3VycmVudFNsaWRlLTEpJXNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgc2xpZGVzLmxlbmd0aCAtMSkge1xuICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gKGN1cnJlbnRTbGlkZSsxKSVzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICB9XG4gICAgfVxufSkiXSwiZmlsZSI6Ii4vc3JjL2pzL2FwcC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b20td29yZHByZXNzLXRoZW1lLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/ZWZiOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/styles.scss\n");

/***/ }),

/***/ "./src/scss/template-home.scss":
/*!*************************************!*\
  !*** ./src/scss/template-home.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b20td29yZHByZXNzLXRoZW1lLWJvaWxlcnBsYXRlLy4vc3JjL3Njc3MvdGVtcGxhdGUtaG9tZS5zY3NzPzYxNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL3Njc3MvdGVtcGxhdGUtaG9tZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/template-home.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/wp-content/themes/pcc/js/app": 0,
/******/ 			"public/wp-content/themes/pcc/css/template-home": 0,
/******/ 			"public/wp-content/themes/pcc/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcustom_wordpress_theme_boilerplate"] = self["webpackChunkcustom_wordpress_theme_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/wp-content/themes/pcc/css/template-home","public/wp-content/themes/pcc/css/styles"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["public/wp-content/themes/pcc/css/template-home","public/wp-content/themes/pcc/css/styles"], () => (__webpack_require__("./src/scss/styles.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/wp-content/themes/pcc/css/template-home","public/wp-content/themes/pcc/css/styles"], () => (__webpack_require__("./src/scss/template-home.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;