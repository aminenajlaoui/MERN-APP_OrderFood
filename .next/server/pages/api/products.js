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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
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

/***/ "(api)/./models/Products.js":
/*!****************************!*\
  !*** ./models/Products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true,\n        maxlength: 60\n    },\n    desc: {\n        type: String,\n        required: true,\n        maxlength: 300\n    },\n    img: {\n        type: String\n    },\n    prices: {\n        type: [\n            Number\n        ],\n        required: true\n    },\n    extraOption: {\n        type: [\n            {\n                text: {\n                    type: String,\n                    required: true\n                },\n                price: {\n                    type: Number,\n                    required: true\n                }\n            }\n        ]\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", ProductSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUN2QztJQUNFRyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtRQUFFQyxXQUFXO0lBQUc7SUFDckRDLE1BQU07UUFBRUosTUFBTUM7UUFBUUMsVUFBVSxJQUFJO1FBQUVDLFdBQVc7SUFBSTtJQUNyREUsS0FBSztRQUFFTCxNQUFNQztJQUFPO0lBQ3BCSyxRQUFRO1FBQUVOLE1BQU07WUFBQ087U0FBTztRQUFFTCxVQUFVLElBQUk7SUFBQztJQUN6Q00sYUFBYTtRQUNYUixNQUFNO1lBQ0o7Z0JBQ0VTLE1BQU07b0JBQUVULE1BQU1DO29CQUFRQyxVQUFVLElBQUk7Z0JBQUM7Z0JBQ3JDUSxPQUFPO29CQUFFVixNQUFNTztvQkFBUUwsVUFBVSxJQUFJO2dCQUFDO1lBQ3hDO1NBQ0Q7SUFDSDtBQUNGLEdBQ0E7SUFBRVMsWUFBWSxJQUFJO0FBQUM7QUFHckIsaUVBQWVmLGdFQUF1QixJQUNwQ0EscURBQWMsQ0FBQyxXQUFXQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL21vZGVscy9Qcm9kdWN0cy5qcz81MDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDYwIH0sXG4gICAgZGVzYzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhsZW5ndGg6IDMwMCB9LFxuICAgIGltZzogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcmljZXM6IHsgdHlwZTogW051bWJlcl0sIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZXh0cmFPcHRpb246IHtcbiAgICAgIHR5cGU6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgICAgICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8XG4gIG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByb2R1Y3RTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heGxlbmd0aCIsImRlc2MiLCJpbWciLCJwcmljZXMiLCJOdW1iZXIiLCJleHRyYU9wdGlvbiIsInRleHQiLCJwcmljZSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Products.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConnect.js */ \"(api)/./lib/dbConnect.js\");\n/* harmony import */ var _models_Products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Products.js */ \"(api)/./models/Products.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    (0,_lib_dbConnect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (method === \"GET\") {\n        try {\n            const getProduct = await _models_Products_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n            res.status(200).json(getProduct);\n        } catch (er) {\n            res.status(500).json(er);\n        }\n    }\n    if (method === \"POST\") {\n        try {\n            const product = await _models_Products_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n            res.status(201).json(product);\n        } catch (er1) {\n            res.status(500).json(er1);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ0E7QUFFbkMsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFDbkJILDZEQUFTQTtJQUVULElBQUlLLFdBQVcsT0FBTztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsYUFBYSxNQUFNTCxnRUFBWTtZQUNyQ0csSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7UUFDdkIsRUFBRSxPQUFPSSxJQUFJO1lBQ1hOLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO1FBQ3ZCO0lBQ0YsQ0FBQztJQUVELElBQUlMLFdBQVcsUUFBUTtRQUNyQixJQUFJO1lBQ0YsTUFBTU0sVUFBVSxNQUFNVixrRUFBYyxDQUFDRSxJQUFJVSxJQUFJO1lBQzdDVCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtRQUN2QixFQUFFLE9BQU9ELEtBQUk7WUFDWE4sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7UUFDdkI7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanM/NTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi9saWIvZGJDb25uZWN0LmpzXCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Byb2R1Y3RzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcbiAgZGJDb25uZWN0KCk7XG5cbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBnZXRQcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihnZXRQcm9kdWN0KTtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihwcm9kdWN0KTtcbiAgICB9IGNhdGNoIChlcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXIpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlByb2R1Y3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0UHJvZHVjdCIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXIiLCJwcm9kdWN0IiwiY3JlYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();