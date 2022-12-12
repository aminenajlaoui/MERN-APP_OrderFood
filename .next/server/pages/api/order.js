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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error(\"Please define the MONGO_URL environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFFdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJRyxNQUNSLHNFQUNBO0FBQ0osQ0FBQztBQUVEOzs7O0NBSUMsR0FDRCxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTSxJQUFJO1FBQUVDLFNBQVMsSUFBSTtJQUFDO0FBQ3pELENBQUM7QUFFRCxlQUFlQyxZQUFZO0lBQ3pCLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEIsQ0FBQztJQUVELElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCLEtBQUs7UUFDdkI7UUFFQU4sT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsV0FBV1MsTUFBTUcsSUFBSSxDQUFDLENBQUNiLFdBQWE7WUFDcEUsT0FBT0E7UUFDVDtJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0ZLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxPQUFPLEdBQUcsSUFBSTtRQUNyQixNQUFNTSxFQUFFO0lBQ1Y7SUFFQSxPQUFPVCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vbGliL2RiQ29ubmVjdC5qcz8xZDNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xuXG5pZiAoIU1PTkdPX1VSTCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT19VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwsIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJMIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/dbConnect.js\n");

/***/ }),

/***/ "(api)/./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst OrderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    customer: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    address: {\n        type: String,\n        required: true,\n        maxlength: 300\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: Number,\n        default: 0\n    },\n    method: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", OrderSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsSUFBSUQsd0RBQWUsQ0FDckM7SUFDRUcsVUFBVTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVLElBQUk7UUFBRUMsV0FBVztJQUFHO0lBQ3hEQyxTQUFTO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtRQUFFQyxXQUFXO0lBQUk7SUFDeERFLE9BQU87UUFBRUwsTUFBTU07UUFBUUosVUFBVSxJQUFJO0lBQUM7SUFDdENLLFFBQVE7UUFBRVAsTUFBTU07UUFBUUUsU0FBUztJQUFFO0lBQ25DQyxRQUFRO1FBQUVULE1BQU1NO1FBQVFKLFVBQVUsSUFBSTtJQUFDO0FBQ3pDLEdBQ0E7SUFBRVEsWUFBWSxJQUFJO0FBQUM7QUFHckIsaUVBQWVkLDhEQUFxQixJQUFJQSxxREFBYyxDQUFDLFNBQVNDLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vbW9kZWxzL09yZGVyLmpzP2ViMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBPcmRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBjdXN0b21lcjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0sXG4gICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDMwMCB9LFxuICAgIHRvdGFsOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBzdGF0dXM6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXG4gICAgbWV0aG9kOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbChcIk9yZGVyXCIsIE9yZGVyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk9yZGVyU2NoZW1hIiwiU2NoZW1hIiwiY3VzdG9tZXIiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJhZGRyZXNzIiwidG90YWwiLCJOdW1iZXIiLCJzdGF0dXMiLCJkZWZhdWx0IiwibWV0aG9kIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIk9yZGVyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Order.js\n");

/***/ }),

/***/ "(api)/./pages/api/order/index.js":
/*!**********************************!*\
  !*** ./pages/api/order/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConnect.js */ \"(api)/./lib/dbConnect.js\");\n/* harmony import */ var _models_Order_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Order.js */ \"(api)/./models/Order.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_lib_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const order = await _models_Order_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(order);\n        } catch (er) {\n            res.status(500).json(er);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const order1 = await _models_Order_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(order1);\n        } catch (er1) {\n            res.status(500).json(er1);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ0w7QUFFOUIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkJILDZEQUFTQTtJQUVULElBQUlLLFdBQVcsT0FBTztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxNQUFNTCw2REFBVTtZQUM5QkcsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDdkIsRUFBRSxPQUFPSSxJQUFJO1lBQ1hOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO1FBQ3ZCO0lBQ0YsQ0FBQztJQUVELElBQUlMLFdBQVcsUUFBUTtRQUNyQixJQUFJO1lBQ0YsTUFBTUMsU0FBUSxNQUFNTCwrREFBWSxDQUFDRSxJQUFJUyxJQUFJO1lBQ3pDUixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtRQUN2QixFQUFFLE9BQU9JLEtBQUk7WUFDWE4sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7UUFDdkI7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9wYWdlcy9hcGkvb3JkZXIvaW5kZXguanM/ODg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi9saWIvZGJDb25uZWN0LmpzXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9PcmRlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gIGRiQ29ubmVjdCgpO1xuXG4gIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBPcmRlci5maW5kKCk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcik7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVyKTtcbiAgICB9XG4gIH1cblxuICBpZiAobWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVyLmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihvcmRlcik7XG4gICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVyKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJPcmRlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJvcmRlciIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/index.js"));
module.exports = __webpack_exports__;

})();