"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Succesfull\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRTVCLE1BQU1DLFVBQVUsQ0FBQ0MsS0FBS0MsTUFBUTtJQUM1QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFLEdBQUdKLElBQUlLLElBQUk7UUFDdkMsSUFDRUYsYUFBYUcsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLElBQ3ZDSixhQUFhRSxRQUFRQyxHQUFHLENBQUNFLGNBQWMsRUFDdkM7WUFDQVIsSUFBSVMsU0FBUyxDQUNYLGNBQ0FaLHVEQUFnQixDQUFDLFNBQVNRLFFBQVFDLEdBQUcsQ0FBQ0ssS0FBSyxFQUFFO2dCQUMzQ0MsUUFBUSxLQUFLO2dCQUNiQyxVQUFVO2dCQUNWQyxNQUFNO1lBQ1I7WUFFRmQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUN2QixPQUFPO1lBQ0xoQixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0FBQ0g7QUFFQSxpRUFBZWxCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgIGlmIChcbiAgICAgIHVzZXJuYW1lID09PSBwcm9jZXNzLmVudi5BRE1JTl9VU0VSTkFNRSAmJlxuICAgICAgcGFzc3dvcmQgPT09IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEXG4gICAgKSB7XG4gICAgICByZXMuc2V0SGVhZGVyKFxuICAgICAgICBcIlNldC1Db29raWVcIixcbiAgICAgICAgY29va2llLnNlcmlhbGl6ZShcInRva2VuXCIsIHByb2Nlc3MuZW52LlRPS0VOLCB7XG4gICAgICAgICAgbWF4QWdlOiA2MCAqIDYwLFxuICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwiU3VjY2VzZnVsbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oXCJXcm9uZyBDcmVkZW50aWFscyFcIik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImNvb2tpZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInByb2Nlc3MiLCJlbnYiLCJBRE1JTl9VU0VSTkFNRSIsIkFETUlOX1BBU1NXT1JEIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiVE9LRU4iLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();