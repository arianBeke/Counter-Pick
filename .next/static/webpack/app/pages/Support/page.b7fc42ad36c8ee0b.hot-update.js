"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Support/page",{

/***/ "(app-pages-browser)/./src/app/components/Navbar/page.jsx":
/*!********************************************!*\
  !*** ./src/app/components/Navbar/page.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Dialog_headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Dialog!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/dialog/dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js\");\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon,XMarkIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst navigation = [\n    {\n        name: \"Tank\",\n        href: \"../../pages/Tank\"\n    },\n    {\n        name: \"Damage\",\n        href: \"../../pages/Damage\"\n    },\n    {\n        name: \"Support\",\n        href: \"../../pages/Support\"\n    },\n    {\n        name: \"Favorites\",\n        href: \"../../pages/Hero\"\n    }\n];\nconst mobileNavigation = [\n    {\n        name: \"Tank\",\n        href: \"../../pages/Tank\"\n    },\n    {\n        name: \"Damage\",\n        href: \"../pages/Damage\"\n    },\n    {\n        name: \"Support\",\n        href: \"../pages/Support\"\n    },\n    {\n        name: \"Favorites\",\n        href: \"../pages/Hero\"\n    }\n];\nfunction Navbar() {\n    var _session_data_user, _session_data, _session_data_user1, _session_data1;\n    _s();\n    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.redirect)(\"/pages/signin\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \" pl-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8\",\n                    \"aria-label\": \"Global\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex lg:flex-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"../pages/Hero\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-full text-xl font-bold text-[#00df9a] cursor-pointer\",\n                                    children: \"Counter Pick\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400\",\n                                onClick: ()=>setMobileMenuOpen(true),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Open main menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"h-6 w-6\",\n                                        \"aria-hidden\": \"true\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden lg:flex lg:gap-x-12\",\n                            children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: item.href,\n                                    className: \"text-l font-semibold leading-6 hover:text-[#00df9a]  text-white\",\n                                    children: item.name\n                                }, item.name, false, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden space-x-4 lg:flex lg:flex-1 lg:justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white mt-2\",\n                                    children: session === null || session === void 0 ? void 0 : (_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email\n                                }, void 0, false, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"rounded-lg w-20 h-10 bg-[#00df9a] text-gray-700 hover:bg-gray-700 hover:text-[#00df9a] hover:duration-300\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dialog_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog, {\n                    as: \"div\",\n                    className: \"lg:hidden\",\n                    open: mobileMenuOpen,\n                    onClose: setMobileMenuOpen,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 z-10\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Dialog_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Dialog.Panel, {\n                            className: \"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#282c34] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"-m-1.5 p-1.5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"w-full text-s font-bold text-[#00df9a] cursor-pointer\",\n                                                children: \"Counter Pick\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            className: \"-m-2.5 rounded-md p-2.5 text-gray-400\",\n                                            onClick: ()=>setMobileMenuOpen(false),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    children: \"Close menu\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 15\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_XMarkIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                    className: \"h-6 w-6\",\n                                                    \"aria-hidden\": \"true\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 15\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-6 flow-root\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-my-6 divide-y divide-gray-500/25\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"space-y-2 py-6\",\n                                                children: mobileNavigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: item.href,\n                                                        className: \"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800\",\n                                                        children: item.name\n                                                    }, item.name, false, {\n                                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 19\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \" mt-60 space-y-2 flex flex-col items-center justify-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-white mt-2\",\n                                                        children: session === null || session === void 0 ? void 0 : (_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.email\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 17\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"rounded-lg justify-center w-20 h-10 bg-[#00df9a] text-gray-700 hover:bg-gray-700 hover:text-[#00df9a] hover:duration-300\",\n                                                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                                        children: \"Log Out\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 17\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Arian/Desktop/CounterPick/Counter-Pick-OW/src/app/components/Navbar/page.jsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"6zJULeLQ6WmRz7hnRo4qWrqyzyc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Navbar;\nNavbar.requireAuth = true;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2M7QUFDWDtBQUNBO0FBQ3dCO0FBQ3RDO0FBRTdCLE1BQU1TLGFBQWE7SUFDakI7UUFBRUMsTUFBTTtRQUFRQyxNQUFNO0lBQW1CO0lBQ3pDO1FBQUVELE1BQU07UUFBVUMsTUFBTTtJQUFxQjtJQUM3QztRQUFFRCxNQUFNO1FBQVdDLE1BQU07SUFBc0I7SUFDL0M7UUFBRUQsTUFBTTtRQUFhQyxNQUFNO0lBQW1CO0NBQy9DO0FBQ0QsTUFBTUMsbUJBQW1CO0lBQ3ZCO1FBQUVGLE1BQU07UUFBUUMsTUFBTTtJQUFtQjtJQUN6QztRQUFFRCxNQUFNO1FBQVVDLE1BQU07SUFBa0I7SUFDMUM7UUFBRUQsTUFBTTtRQUFXQyxNQUFNO0lBQW1CO0lBQzVDO1FBQUVELE1BQU07UUFBYUMsTUFBTTtJQUFnQjtDQUM1QztBQUVjLFNBQVNFO1FBb0NvQkMsb0JBQUFBLGVBa0NNQSxxQkFBQUE7O0lBckVoRCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1hLFVBQVVaLDJEQUFVQSxDQUFDO1FBQ3pCZSxVQUFVO1FBQ1ZDO1lBQ0VkLHlEQUFRQSxDQUFDO1FBQ1g7SUFDRjtJQUVBLHFCQUNFO2tCQUNBLDRFQUFDZTtZQUFPQyxXQUFVOzs4QkFDaEIsOERBQUNDO29CQUFJRCxXQUFVO29CQUFrRUUsY0FBVzs7c0NBQzFGLDhEQUFDQzs0QkFBSUgsV0FBVTtzQ0FDWCw0RUFBQ1osa0RBQUlBO2dDQUFDRyxNQUFLOzBDQUNULDRFQUFDYTtvQ0FBS0osV0FBVTs4Q0FBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRy9FLDhEQUFDRzs0QkFBSUgsV0FBVTtzQ0FDYiw0RUFBQ0s7Z0NBQ0NDLE1BQUs7Z0NBQ0xOLFdBQVU7Z0NBQ1ZPLFNBQVMsSUFBTVgsa0JBQWtCOztrREFFakMsOERBQUNRO3dDQUFLSixXQUFVO2tEQUFVOzs7Ozs7a0RBQzFCLDhEQUFDZCw2R0FBU0E7d0NBQUNjLFdBQVU7d0NBQVVRLGVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcvQyw4REFBQ0w7NEJBQUlILFdBQVU7c0NBQ1pYLFdBQVdvQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2YsOERBQUNDO29DQUFrQnBCLE1BQU1tQixLQUFLbkIsSUFBSTtvQ0FBRVMsV0FBVTs4Q0FDM0NVLEtBQUtwQixJQUFJO21DQURKb0IsS0FBS3BCLElBQUk7Ozs7Ozs7Ozs7c0NBS3JCLDhEQUFDYTs0QkFBSUgsV0FBVTs7OENBQ2IsOERBQUNHO29DQUFJSCxXQUFVOzhDQUFtQk4sb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU2tCLElBQUksY0FBYmxCLHFDQUFBQSxxQkFBQUEsY0FBZW1CLElBQUksY0FBbkJuQix5Q0FBQUEsbUJBQXFCb0IsS0FBSzs7Ozs7OzhDQUM1RCw4REFBQ1Q7b0NBQU9MLFdBQVU7b0NBQTRHTyxTQUFTLElBQU14Qix3REFBT0E7OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHNUosOERBQUNFLGtGQUFNQTtvQkFBQzhCLElBQUc7b0JBQU1mLFdBQVU7b0JBQVlnQixNQUFNckI7b0JBQWdCc0IsU0FBU3JCOztzQ0FDcEUsOERBQUNPOzRCQUFJSCxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNmLGtGQUFNQSxDQUFDaUMsS0FBSzs0QkFBQ2xCLFdBQVU7OzhDQUN0Qiw4REFBQ0c7b0NBQUlILFdBQVU7O3NEQUNiLDhEQUFDVzs0Q0FBRXBCLE1BQUs7NENBQUlTLFdBQVU7c0RBQ3BCLDRFQUFDbUI7Z0RBQUduQixXQUFVOzBEQUF3RDs7Ozs7Ozs7Ozs7c0RBRXhFLDhEQUFDSzs0Q0FDQ0MsTUFBSzs0Q0FDTE4sV0FBVTs0Q0FDVk8sU0FBUyxJQUFNWCxrQkFBa0I7OzhEQUVqQyw4REFBQ1E7b0RBQUtKLFdBQVU7OERBQVU7Ozs7Ozs4REFDMUIsOERBQUNiLDZHQUFTQTtvREFBQ2EsV0FBVTtvREFBVVEsZUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUcvQyw4REFBQ0w7b0NBQUlILFdBQVU7OENBQ2IsNEVBQUNHO3dDQUFJSCxXQUFVOzswREFDYiw4REFBQ0c7Z0RBQUlILFdBQVU7MERBQ1pSLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDckIsOERBQUNDO3dEQUVDcEIsTUFBTW1CLEtBQUtuQixJQUFJO3dEQUNmUyxXQUFVO2tFQUVUVSxLQUFLcEIsSUFBSTt1REFKTG9CLEtBQUtwQixJQUFJOzs7Ozs7Ozs7OzBEQVFwQiw4REFBQ2E7Z0RBQUlILFdBQVU7O2tFQUNiLDhEQUFDRzt3REFBSUgsV0FBVTtrRUFBbUJOLG9CQUFBQSwrQkFBQUEsaUJBQUFBLFFBQVNrQixJQUFJLGNBQWJsQixzQ0FBQUEsc0JBQUFBLGVBQWVtQixJQUFJLGNBQW5CbkIsMENBQUFBLG9CQUFxQm9CLEtBQUs7Ozs7OztrRUFDNUQsOERBQUNUO3dEQUFPTCxXQUFVO3dEQUEySE8sU0FBUyxJQUFNeEIsd0RBQU9BO2tFQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkw7R0FoRndCVTs7UUFFTlgsdURBQVVBOzs7S0FGSlc7QUFrRnhCQSxPQUFPMkIsV0FBVyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZiYXIvcGFnZS5qc3g/MzMxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IHsgQmFyczNJY29uLCBYTWFya0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiAnVGFuaycsIGhyZWY6ICcuLi8uLi9wYWdlcy9UYW5rJyB9LFxuICB7IG5hbWU6ICdEYW1hZ2UnLCBocmVmOiAnLi4vLi4vcGFnZXMvRGFtYWdlJyB9LFxuICB7IG5hbWU6ICdTdXBwb3J0JywgaHJlZjogJy4uLy4uL3BhZ2VzL1N1cHBvcnQnIH0sXG4gIHsgbmFtZTogJ0Zhdm9yaXRlcycsIGhyZWY6ICcuLi8uLi9wYWdlcy9IZXJvJyB9LFxuXTtcbmNvbnN0IG1vYmlsZU5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogJ1RhbmsnLCBocmVmOiAnLi4vLi4vcGFnZXMvVGFuaycgfSxcbiAgeyBuYW1lOiAnRGFtYWdlJywgaHJlZjogJy4uL3BhZ2VzL0RhbWFnZScgfSxcbiAgeyBuYW1lOiAnU3VwcG9ydCcsIGhyZWY6ICcuLi9wYWdlcy9TdXBwb3J0JyB9LFxuICB7IG5hbWU6ICdGYXZvcml0ZXMnLCBocmVmOiAnLi4vcGFnZXMvSGVybycgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcbiAgICAgIHJlZGlyZWN0KCcvcGFnZXMvc2lnbmluJyk7IFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIiBwbC0zXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBtYXgtdy03eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTYgbGc6cHgtOFwiIGFyaWEtbGFiZWw9XCJHbG9iYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGxnOmZsZXgtMVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi4uL3BhZ2VzL0hlcm9cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQteGwgZm9udC1ib2xkIHRleHQtWyMwMGRmOWFdIGN1cnNvci1wb2ludGVyXCI+Q291bnRlciBQaWNrPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsZzpoaWRkZW5cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIi1tLTIuNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBwLTIuNSB0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKHRydWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cbiAgICAgICAgICAgIDxCYXJzM0ljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGxnOmdhcC14LTEyXCI+XG4gICAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8YSBrZXk9e2l0ZW0ubmFtZX0gaHJlZj17aXRlbS5ocmVmfSBjbGFzc05hbWU9XCJ0ZXh0LWwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgaG92ZXI6dGV4dC1bIzAwZGY5YV0gIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNCBsZzpmbGV4IGxnOmZsZXgtMSBsZzpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG10LTInPntzZXNzaW9uPy5kYXRhPy51c2VyPy5lbWFpbH08L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncm91bmRlZC1sZyB3LTIwIGgtMTAgYmctWyMwMGRmOWFdIHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6dGV4dC1bIzAwZGY5YV0gaG92ZXI6ZHVyYXRpb24tMzAwJyBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPERpYWxvZyBhcz1cImRpdlwiIGNsYXNzTmFtZT1cImxnOmhpZGRlblwiIG9wZW49e21vYmlsZU1lbnVPcGVufSBvbkNsb3NlPXtzZXRNb2JpbGVNZW51T3Blbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTEwXCIgLz5cbiAgICAgICAgPERpYWxvZy5QYW5lbCBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC15LTAgcmlnaHQtMCB6LTEwIHctZnVsbCBvdmVyZmxvdy15LWF1dG8gYmctWyMyODJjMzRdIHB4LTYgcHktNiBzbTptYXgtdy1zbSBzbTpyaW5nLTEgc206cmluZy13aGl0ZS8xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIi1tLTEuNSBwLTEuNVwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtcyBmb250LWJvbGQgdGV4dC1bIzAwZGY5YV0gY3Vyc29yLXBvaW50ZXJcIj5Db3VudGVyIFBpY2s8L2gxPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLW0tMi41IHJvdW5kZWQtbWQgcC0yLjUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkNsb3NlIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxvdy1yb290XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teS02IGRpdmlkZS15IGRpdmlkZS1ncmF5LTUwMC8yNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBweS02XCI+XG4gICAgICAgICAgICAgICAge21vYmlsZU5hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbXgtMyBibG9jayByb3VuZGVkLWxnIHB4LTMgcHktMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTcgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC02MCBzcGFjZS15LTIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBtdC0yJz57c2Vzc2lvbj8uZGF0YT8udXNlcj8uZW1haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGp1c3RpZnktY2VudGVyIHctMjAgaC0xMCBiZy1bIzAwZGY5YV0gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LVsjMDBkZjlhXSBob3ZlcjpkdXJhdGlvbi0zMDBcIiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PkxvZyBPdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2cuUGFuZWw+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5OYXZiYXIucmVxdWlyZUF1dGggPSB0cnVlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsInJlZGlyZWN0IiwiRGlhbG9nIiwiQmFyczNJY29uIiwiWE1hcmtJY29uIiwiTGluayIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaHJlZiIsIm1vYmlsZU5hdmlnYXRpb24iLCJOYXZiYXIiLCJzZXNzaW9uIiwibW9iaWxlTWVudU9wZW4iLCJzZXRNb2JpbGVNZW51T3BlbiIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJuYXYiLCJhcmlhLWxhYmVsIiwiZGl2Iiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiYXJpYS1oaWRkZW4iLCJtYXAiLCJpdGVtIiwiYSIsImRhdGEiLCJ1c2VyIiwiZW1haWwiLCJhcyIsIm9wZW4iLCJvbkNsb3NlIiwiUGFuZWwiLCJoMSIsInJlcXVpcmVBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Navbar/page.jsx\n"));

/***/ })

});