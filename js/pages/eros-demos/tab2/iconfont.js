// { "framework": "Vue" }

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ({

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(112)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(113)\n\n/* template */\nvar __vue_template__ = __webpack_require__(114)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/tab2/iconfont.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-23ebc5ca\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/tab2/iconfont.vue?entry=true\n// module id = 111\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/iconfont.vue?");

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"title1\": {\n    \"color\": \"#FF0000\",\n    \"fontSize\": 36,\n    \"fontFamily\": \"iconfont1\"\n  },\n  \"title2\": {\n    \"color\": \"#808080\",\n    \"fontSize\": 36,\n    \"fontFamily\": \"iconfont2\"\n  },\n  \"title3\": {\n    \"color\": \"#FFC0CB\",\n    \"fontSize\": 36,\n    \"fontFamily\": \"iconfont3\"\n  },\n  \"title4\": {\n    \"color\": \"#FF0000\",\n    \"fontSize\": 36,\n    \"fontFamily\": \"iconfont4\"\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-23ebc5ca!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/pages/eros-demos/tab2/iconfont.vue\n// module id = 112\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/iconfont.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-23ebc5ca!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nmodule.exports = {\n  beforeCreate: function beforeCreate() {\n    var domModule = weex.requireModule('dom');\n    // 目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/\n\n    domModule.addRule('fontFace', {\n      'fontFamily': 'iconfont2',\n      'src': 'url(\\'bmlocal://iconfont/font_1469606063_76593.ttf\\')'\n    });\n    domModule.addRule('fontFace', {\n      'fontFamily': 'iconfont3',\n      'src': 'url(\\'bmlocal://iconfont/font_1469606522_9417143.woff\\')'\n    });\n\n    domModule.addRule('fontFace', {\n      'fontFamily': 'iconfont4',\n      'src': 'url(\\'bmlocal://iconfont/font_zn5b3jswpofuhaor.ttf\\')'\n    });\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/tab2/iconfont.vue\n// module id = 113\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/iconfont.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _vm._m(0)\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('scroller', {\n    staticStyle: {\n      alignItems: \"center\"\n    }\n  }, [_c('div', {\n    staticStyle: {\n      marginTop: \"20px\"\n    }\n  }, [_c('text', {\n    staticStyle: {\n      color: \"red\",\n      fontSize: \"50px\"\n    }\n  }, [_vm._v(\"only support font for ttf and woff\")])]), _c('text', {\n    staticClass: [\"title2\"],\n    staticStyle: {\n      marginTop: \"50px\",\n      width: \"500px\"\n    }\n  }, [_vm._v(\"http ttf: \")]), _c('text', {\n    staticClass: [\"title3\"],\n    staticStyle: {\n      marginTop: \"50px\",\n      width: \"500px\"\n    }\n  }, [_vm._v(\"http woff: \")]), _c('div', {\n    staticStyle: {\n      flexDirection: \"row\",\n      marginTop: \"50px\"\n    }\n  }, [_c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"50\",\n      color: \"green\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"50\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"60\",\n      color: \"blue\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"60\",\n      color: \"green\"\n    }\n  }, [_vm._v(\"\")])]), _c('div', {\n    staticStyle: {\n      flexDirection: \"row\",\n      marginTop: \"50px\"\n    }\n  }, [_c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"50\",\n      color: \"green\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"50\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"60\",\n      color: \"blue\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"60\",\n      color: \"green\"\n    }\n  }, [_vm._v(\"\")])]), _c('div', [_c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"100\",\n      marginTop: \"50px\"\n    }\n  }, [_vm._v(\"\")])]), _c('div', [_c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"100\",\n      color: \"green\",\n      marginTop: \"50px\"\n    }\n  }, [_vm._v(\"\")]), _c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"100\",\n      marginTop: \"50px\"\n    }\n  })]), _c('div', {\n    staticStyle: {\n      flexDirection: \"row\"\n    }\n  }, [_c('text', {\n    staticStyle: {\n      fontFamily: \"iconfont4\",\n      fontSize: \"70\",\n      width: \"750px\"\n    }\n  }, [_vm._v(\"\")])])])\n}]}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-23ebc5ca!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/tab2/iconfont.vue\n// module id = 114\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/iconfont.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-23ebc5ca!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ })

/******/ });