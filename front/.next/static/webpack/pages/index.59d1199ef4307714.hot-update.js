"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction HomePage(props) {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.data.blogs);\n    const getpage = async (pn)=>{\n        const response = await fetch(\"http://localhost:8000/api/blogs?page=\".concat(pn));\n        const data = await response.json();\n        setList(data.blogs);\n    };\n    const prevblogs = async ()=>{\n        if (parseInt(props.data.currentPage) > 1) {\n            const num = parseInt(props.data.currentPage);\n            console.log(num);\n            const prevnum = num - 1;\n            const response = await fetch(\"http://localhost:8000/api/blogs?page=\".concat(prevnum));\n            const data = await response.json();\n            setList(data.blogs);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            list.map((item)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 card p-4 shadow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-4 col-md-12\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"img-fluid\",\n                                    src: item.img\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-8 col-md-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-dark\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-2 d-flex align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"me-2\",\n                                                children: \"Categories\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"mb-0 list-inline\",\n                                                children: item.categories.map((cat)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-inline-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/category/\".concat(cat),\n                                                            className: \"btn btn-dark\",\n                                                            children: cat\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 42\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 9\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex align-items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                className: \"me-2\",\n                                                children: \"tags\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 7\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"mb-0 list-inline\",\n                                                children: item.tags.map((cat)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"list-inline-item\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            href: \"/tag/\".concat(cat),\n                                                            className: \"btn btn-dark\",\n                                                            children: cat\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 42\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 9\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 7\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex align-items-center justify-content-end\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/single/\".concat(item._id),\n                                            className: \"btn btn-primary\",\n                                            children: \"View\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 10\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 8\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 4\n                }, this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                \"aria-label\": \"Page navigation example\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"pagination\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>prevblogs(),\n                                className: \"page-link\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 82,\n                                columnNumber: 31\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 82,\n                            columnNumber: 5\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>getpage(1),\n                                className: \"page-link\",\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 84,\n                            columnNumber: 2\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>getpage(2),\n                                className: \"page-link\",\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 2\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>getpage(3),\n                                className: \"page-link\",\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 2\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"page-item\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"page-link\",\n                                href: \"#\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 2\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 81,\n                    columnNumber: 3\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\mern\\\\blog\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"MrvLRFkm0AAB/FafnziR4cLXsMA=\");\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUU3QixTQUFTRSxTQUFTQyxLQUFLLEVBQUU7O0lBRXZCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFDTCwrQ0FBUUEsQ0FBQ0csTUFBTUcsSUFBSSxDQUFDQyxLQUFLO0lBSy9DLE1BQU1DLFVBQVEsT0FBTUMsS0FBSztRQUN6QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQTJDLE9BQUhGO1FBQ3RFLE1BQU1ILE9BQUssTUFBTUksU0FBU0UsSUFBSTtRQUU1QlAsUUFBUUMsS0FBS0MsS0FBSztJQUNuQjtJQUVBLE1BQU1NLFlBQVUsVUFBUztRQUUxQixJQUFHQyxTQUFTWCxNQUFNRyxJQUFJLENBQUNTLFdBQVcsSUFBRSxHQUFFO1lBQ25DLE1BQU1DLE1BQUlGLFNBQVNYLE1BQU1HLElBQUksQ0FBQ1MsV0FBVztZQUM1Q0UsUUFBUUMsR0FBRyxDQUFDRjtZQUNULE1BQU1HLFVBQVFILE1BQUk7WUFDckIsTUFBTU4sV0FBVyxNQUFNQyxNQUFNLHdDQUFnRCxPQUFSUTtZQUNyRSxNQUFNYixPQUFLLE1BQU1JLFNBQVNFLElBQUk7WUFFOUJQLFFBQVFDLEtBQUtDLEtBQUs7UUFDbEIsQ0FBQztJQUNBO0lBRUEscUJBQ0U7O1lBRUFILEtBQUtnQixHQUFHLENBQUMsQ0FBQ0MsT0FBTztnQkFDakIscUJBR0QsOERBQUNDO29CQUFJQyxXQUFVOzhCQUNaLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNmLDRFQUFDQztvQ0FBSUQsV0FBVTtvQ0FBWUUsS0FBS0osS0FBS0csR0FBRzs7Ozs7Ozs7Ozs7MENBRXhDLDhEQUFDRjtnQ0FBSUMsV0FBVTs7a0RBRWYsOERBQUNHO3dDQUFHSCxXQUFVO2tEQUFhRixLQUFLTSxLQUFLOzs7Ozs7a0RBQ3JDLDhEQUFDTDt3Q0FBSUMsV0FBVTs7MERBQ2YsOERBQUNLO2dEQUFHTCxXQUFVOzBEQUFPOzs7Ozs7MERBQ3JCLDhEQUFDTTtnREFBR04sV0FBVTswREFDWEYsS0FBS1MsVUFBVSxDQUFDVixHQUFHLENBQUMsQ0FBQ1csTUFBTTtvREFDOUIscUJBQ0UsOERBQUNDO3dEQUFHVCxXQUFVO2tFQUFtQiw0RUFBQ3RCLGtEQUFJQTs0REFBQ2dDLE1BQU0sYUFBaUIsT0FBSkY7NERBQU9SLFdBQVU7c0VBQWdCUTs7Ozs7Ozs7Ozs7Z0RBRTlGOzs7Ozs7Ozs7Ozs7a0RBR0MsOERBQUNUO3dDQUFJQyxXQUFVOzswREFDZiw4REFBQ0s7Z0RBQUdMLFdBQVU7MERBQU87Ozs7OzswREFDckIsOERBQUNNO2dEQUFHTixXQUFVOzBEQUNYRixLQUFLYSxJQUFJLENBQUNkLEdBQUcsQ0FBQyxDQUFDVyxNQUFNO29EQUN4QixxQkFDRSw4REFBQ0M7d0RBQUdULFdBQVU7a0VBQW1CLDRFQUFDdEIsa0RBQUlBOzREQUFDZ0MsTUFBTSxRQUFZLE9BQUpGOzREQUFPUixXQUFVO3NFQUFnQlE7Ozs7Ozs7Ozs7O2dEQUV6Rjs7Ozs7Ozs7Ozs7O2tEQUlFLDhEQUFDVDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ3RCLGtEQUFJQTs0Q0FBQ2dDLE1BQU0sV0FBb0IsT0FBVFosS0FBS2MsR0FBRzs0Q0FBSVosV0FBVTtzREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRckU7MEJBSUQsOERBQUNhO2dCQUFJQyxjQUFXOzBCQUNoQiw0RUFBQ1I7b0JBQUdOLFdBQVU7O3NDQUNaLDhEQUFDUzs0QkFBR1QsV0FBVTtzQ0FBWSw0RUFBQ2U7Z0NBQU9DLFNBQVMsSUFBSTFCO2dDQUFhVSxXQUFVOzBDQUFZOzs7Ozs7Ozs7OztzQ0FFckYsOERBQUNTOzRCQUFHVCxXQUFVO3NDQUFZLDRFQUFDZTtnQ0FBT0MsU0FBUyxJQUFJL0IsUUFBUTtnQ0FBSWUsV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7c0NBQ2xGLDhEQUFDUzs0QkFBR1QsV0FBVTtzQ0FBWSw0RUFBQ2U7Z0NBQU9DLFNBQVMsSUFBSS9CLFFBQVE7Z0NBQUllLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7O3NDQUNsRiw4REFBQ1M7NEJBQUdULFdBQVU7c0NBQVksNEVBQUNlO2dDQUFPQyxTQUFTLElBQUkvQixRQUFRO2dDQUFJZSxXQUFVOzBDQUFhOzs7Ozs7Ozs7OztzQ0FHbEYsOERBQUNTOzRCQUFHVCxXQUFVO3NDQUFZLDRFQUFDaUI7Z0NBQUVqQixXQUFVO2dDQUFZVSxNQUFLOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0E3RlMvQjtLQUFBQTs7QUErRlQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cdFxyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XT11c2VTdGF0ZShwcm9wcy5kYXRhLmJsb2dzKTtcdFxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgY29uc3QgZ2V0cGFnZT1hc3luYyhwbik9PntcclxuXHQgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9ncz9wYWdlPSR7cG59YCk7XHJcblx0Y29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHJcblx0ICBzZXRMaXN0KGRhdGEuYmxvZ3MpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBwcmV2YmxvZ3M9YXN5bmMoKT0+e1xyXG5cdCAgXHJcblx0aWYocGFyc2VJbnQocHJvcHMuZGF0YS5jdXJyZW50UGFnZSk+MSl7IFxyXG4gICAgY29uc3QgbnVtPXBhcnNlSW50KHByb3BzLmRhdGEuY3VycmVudFBhZ2UpO1xyXG5cdGNvbnNvbGUubG9nKG51bSk7XHJcbiAgICBjb25zdCBwcmV2bnVtPW51bS0xO1x0XHJcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9ibG9ncz9wYWdlPSR7cHJldm51bX1gKTtcclxuXHRjb25zdCBkYXRhPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcclxuXHRzZXRMaXN0KGRhdGEuYmxvZ3MpO1xyXG5cdH1cclxuICB9XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHQgIFxyXG5cdFx0XHR7bGlzdC5tYXAoKGl0ZW0pPT57XHJcblx0XHRcdFx0cmV0dXJuKFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgY2FyZCBwLTQgc2hhZG93XCI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHQgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPXtpdGVtLmltZ30gLz5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdCAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHQgIFxyXG5cdFx0XHRcdCAgPGgyIGNsYXNzTmFtZT1cInRleHQtZGFya1wiPntpdGVtLnRpdGxlfTwvaDI+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdCAgPGg2IGNsYXNzTmFtZT1cIm1lLTJcIj5DYXRlZ29yaWVzPC9oNj5cclxuXHRcdFx0XHQgIDx1bCBjbGFzc05hbWU9XCJtYi0wIGxpc3QtaW5saW5lXCI+XHJcblx0XHRcdFx0ICAgIHtpdGVtLmNhdGVnb3JpZXMubWFwKChjYXQpPT57XHJcblx0XHRcdFx0XHRcdHJldHVybihcclxuXHRcdFx0XHRcdFx0ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPjxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXR9YH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCI+e2NhdH08L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0ICA8L3VsPlxyXG5cdFx0XHRcdCAgPC9kaXY+XHJcblx0XHRcdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHQgIDxoNiBjbGFzc05hbWU9XCJtZS0yXCI+dGFnczwvaDY+XHJcblx0XHRcdFx0ICA8dWwgY2xhc3NOYW1lPVwibWItMCBsaXN0LWlubGluZVwiPlxyXG5cdFx0XHRcdCAgICB7aXRlbS50YWdzLm1hcCgoY2F0KT0+e1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4oXHJcblx0XHRcdFx0XHRcdCAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj48TGluayBocmVmPXtgL3RhZy8ke2NhdH1gfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIj57Y2F0fTwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHQgIDwvdWw+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQgIFxyXG5cdFx0XHRcdCAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcblx0XHRcdFx0ICAgICA8TGluayBocmVmPXtgL3NpbmdsZS8ke2l0ZW0uX2lkfWB9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlZpZXc8L0xpbms+XHJcblx0XHRcdFx0ICAgPC9kaXY+XHJcblx0XHRcdFx0ICA8L2Rpdj5cclxuXHRcdFx0XHQgIDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSl9XHJcblx0XHRcdCAgICBcclxuXHRcdFx0XHRcclxuXHRcdFx0IFxyXG5cdFx0PG5hdiBhcmlhLWxhYmVsPVwiUGFnZSBuYXZpZ2F0aW9uIGV4YW1wbGVcIj5cclxuICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxidXR0b24gb25DbGljaz17KCk9PnByZXZibG9ncygpfSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIj5QcmV2aW91czwvYnV0dG9uPjwvbGk+XHJcblx0XHJcblx0PGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPjxidXR0b24gb25DbGljaz17KCk9PmdldHBhZ2UoMSl9IGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiID4xPC9idXR0b24+PC9saT5cclxuXHQ8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+PGJ1dHRvbiBvbkNsaWNrPXsoKT0+Z2V0cGFnZSgyKX0gY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgPjI8L2J1dHRvbj48L2xpPlxyXG5cdDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj48YnV0dG9uIG9uQ2xpY2s9eygpPT5nZXRwYWdlKDMpfSBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIiA+MzwvYnV0dG9uPjwvbGk+XHJcblx0XHJcbiBcclxuXHQ8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtXCI+PGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCIgaHJlZj1cIiNcIj5OZXh0PC9hPjwvbGk+XHJcbiAgPC91bD5cclxuPC9uYXY+XHJcblx0XHRcdFxyXG5cdFx0ICBcclxuXHRcdCAgXHJcblx0PC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYmxvZ3M/cGFnZT0xJyk7XHJcblx0Y29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblx0XHJcblx0cmV0dXJue1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRkYXRhXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSG9tZVBhZ2UiLCJwcm9wcyIsImxpc3QiLCJzZXRMaXN0IiwiZGF0YSIsImJsb2dzIiwiZ2V0cGFnZSIsInBuIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcmV2YmxvZ3MiLCJwYXJzZUludCIsImN1cnJlbnRQYWdlIiwibnVtIiwiY29uc29sZSIsImxvZyIsInByZXZudW0iLCJtYXAiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaDIiLCJ0aXRsZSIsImg2IiwidWwiLCJjYXRlZ29yaWVzIiwiY2F0IiwibGkiLCJocmVmIiwidGFncyIsIl9pZCIsIm5hdiIsImFyaWEtbGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});