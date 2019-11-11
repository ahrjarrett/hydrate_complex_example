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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/api */ \"./src/shared/api.js\");\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\nvar PORT = 3001;\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](\"public\"));\napp.get(\"*\", function (req, res, next) {\n  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_7__[\"routes\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n  promise.then(function (response) {\n    var data = response ? response.items : [];\n    var context = {\n      data: data\n    };\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_8__[\"App\"], null)));\n    res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>Hydrating SSR - ahrjarrett</title>\\n            <script src=\\\"/bundle.js\\\" defer></script>\\n            <script>window.__INITIAL_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_3___default()(data), \"</script>\\n            </head>\\n          <body>\\n            <div id=\\\"app\\\">\").concat(markup, \"</div>\\n          </body>\\n        </html>\\n      \"));\n  })[\"catch\"](next);\n});\napp.listen(PORT, function () {\n  console.log(\"server running on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./src/shared/Navbar.js\");\n/* harmony import */ var _MatchFail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MatchFail */ \"./src/shared/MatchFail.js\");\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nfunction App(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _shared_routes__WEBPACK_IMPORTED_MODULE_4__[\"routes\"].map(function (_ref2) {\n    var path = _ref2.path,\n        exact = _ref2.exact,\n        C = _ref2.component,\n        rest = _objectWithoutProperties(_ref2, [\"path\", \"exact\", \"component\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: path,\n      path: path,\n      exact: exact,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest));\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MatchFail__WEBPACK_IMPORTED_MODULE_3__[\"MatchFail\"], props);\n    }\n  })));\n}\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Grid.js":
/*!****************************!*\
  !*** ./src/shared/Grid.js ***!
  \****************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-react-router */ \"use-react-router\");\n/* harmony import */ var use_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/shared/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction Grid(_ref) {\n  var staticContext = _ref.staticContext;\n  var prevLang = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(false);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])( false ? undefined : staticContext.data),\n      _useState2 = _slicedToArray(_useState, 2),\n      repos = _useState2[0],\n      setRepos = _useState2[1];\n\n  if (false) {}\n\n  var _useReactRouter = use_react_router__WEBPACK_IMPORTED_MODULE_1___default()(),\n      match = _useReactRouter.match;\n\n  var lang = match.params.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (prevLang.current !== lang) {\n      Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchPopularRepos\"])(lang).then(function (newRepos) {\n        console.group(\"%c Oh my heavens! \", \"background: #222; color: #bada55\");\n        console.log(\"newRepos \", \"==> \", newRepos, \"\\n\\n\");\n        console.groupEnd();\n        setRepos(newRepos.items);\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n    }\n  }, [lang]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: {\n      display: \"flex\",\n      flexWrap: \"wrap\"\n    }\n  }, repos.map(function (_ref2) {\n    var name = _ref2.name,\n        owner = _ref2.owner,\n        stargazers_count = _ref2.stargazers_count,\n        html_url = _ref2.html_url;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: name,\n      style: {\n        margin: 30\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: html_url\n    }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"@\", owner.login), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, stargazers_count, \" stars\")));\n  }));\n}\n\n//# sourceURL=webpack:///./src/shared/Grid.js?");

/***/ }),

/***/ "./src/shared/Home.js":
/*!****************************!*\
  !*** ./src/shared/Home.js ***!
  \****************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Select a language\");\n}\n\n//# sourceURL=webpack:///./src/shared/Home.js?");

/***/ }),

/***/ "./src/shared/MatchFail.js":
/*!*********************************!*\
  !*** ./src/shared/MatchFail.js ***!
  \*********************************/
/*! exports provided: MatchFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MatchFail\", function() { return MatchFail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MatchFail() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404: No resource found\");\n}\n\n//# sourceURL=webpack:///./src/shared/MatchFail.js?");

/***/ }),

/***/ "./src/shared/Navbar.js":
/*!******************************!*\
  !*** ./src/shared/Navbar.js ***!
  \******************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navbar\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Navbar() {\n  var languages = [{\n    name: \"All\",\n    param: \"all\"\n  }, {\n    name: \"JavaScript\",\n    param: \"javascript\"\n  }, {\n    name: \"Ruby\",\n    param: \"ruby\"\n  }, {\n    name: \"Python\",\n    param: \"python\"\n  }, {\n    name: \"Java\",\n    param: \"java\"\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, languages.map(function (_ref) {\n    var name = _ref.name,\n        param = _ref.param;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: param\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      activeStyle: {\n        fontWeight: \"bold\"\n      },\n      to: \"/popular/\".concat(param)\n    }, name));\n  }));\n}\n\n//# sourceURL=webpack:///./src/shared/Navbar.js?");

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction fetchPopularRepos() {\n  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"all\";\n  console.log(\"from fetchPopularRepos: \", language);\n  var encodedURI = encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language:\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(encodedURI).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return json;\n  })[\"catch\"](function (e) {\n    return console.error(e);\n  });\n}\n\n//# sourceURL=webpack:///./src/shared/api.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/shared/Home.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid */ \"./src/shared/Grid.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/shared/api.js\");\n\n\n\nconsole.group(\"%c Oh my heavens! \", \"background: #222; color: #bada55\");\nconsole.log(\"Home \", \"==> \", _Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"], \"\\n\\n\");\nconsole.groupEnd();\nvar routes = [{\n  path: \"/\",\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"]\n}, {\n  path: \"/popular/:id\",\n  component: _Grid__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"],\n  fetchInitialData: function fetchInitialData() {\n    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n    return Object(_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchPopularRepos\"])(path.split(\"/\").pop());\n  }\n}];\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "use-react-router":
/*!***********************************!*\
  !*** external "use-react-router" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-react-router\");\n\n//# sourceURL=webpack:///external_%22use-react-router%22?");

/***/ })

/******/ });