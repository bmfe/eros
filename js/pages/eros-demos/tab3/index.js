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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(95)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(96)\n\n/* template */\nvar __vue_template__ = __webpack_require__(97)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/tab3/index.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-d2628afe\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/tab3/index.vue?entry=true\n// module id = 94\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab3/index.vue?");

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"container\": {\n    \"backgroundColor\": \"#f2f3f4\"\n  },\n  \"list\": {\n    \"width\": 750,\n    \"alignItems\": \"center\",\n    \"justifyContent\": \"center\",\n    \"backgroundColor\": \"#f2f3f4\"\n  },\n  \"panel\": {\n    \"backgroundColor\": \"#ffffff\",\n    \"width\": 750,\n    \"height\": 100,\n    \"paddingLeft\": 24,\n    \"justifyContent\": \"center\",\n    \"borderBottomWidth\": 1,\n    \"borderStyle\": \"solid\",\n    \"borderColor\": \"#e0e0e0\"\n  },\n  \"category\": {\n    \"marginBottom\": 10,\n    \"marginTop\": 0,\n    \"paddingLeft\": 24,\n    \"width\": 750,\n    \"height\": 200,\n    \"backgroundColor\": \"#ffffff\",\n    \"justifyContent\": \"center\"\n  },\n  \"category-text\": {\n    \"fontWeight\": \"600\",\n    \"fontSize\": 50\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-d2628afe!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/pages/eros-demos/tab3/index.vue\n// module id = 95\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab3/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-d2628afe!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nexports.default = {\n  data: function data() {\n    return {\n      lists: [1, 2, 3, 4, 5]\n    };\n  },\n\n  methods: {\n    goDemo: function goDemo() {\n      this.$router.open({\n        name: 'tab3.slider'\n      });\n    },\n    goWaterfall: function goWaterfall() {\n      this.$router.open({\n        name: 'tab3.waterfall',\n        params: {\n          name: 123\n        }\n      });\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/tab3/index.vue\n// module id = 96\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab3/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"container\"]\n  }, [_vm._m(0), _c('list', {\n    staticClass: [\"list\"]\n  }, [_c('cell', {\n    staticClass: [\"panel\"],\n    appendAsTree: true,\n    attrs: {\n      \"append\": \"tree\"\n    }\n  }, [_c('text', {\n    staticClass: [\"text\"],\n    on: {\n      \"click\": _vm.goWaterfall\n    }\n  }, [_vm._v(\"weex 官方瀑布流\")])]), _c('cell', {\n    staticClass: [\"panel\"],\n    appendAsTree: true,\n    attrs: {\n      \"append\": \"tree\"\n    }\n  }, [_c('text', {\n    staticClass: [\"text\"],\n    on: {\n      \"click\": _vm.goDemo\n    }\n  }, [_vm._v(\"eros 支持手势滑动的列表滚动\")])])])])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"category\"]\n  }, [_c('text', {\n    staticClass: [\"category-text\"]\n  }, [_vm._v(\"demo\")])])\n}]}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-d2628afe!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/tab3/index.vue\n// module id = 97\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab3/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-d2628afe!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ })

/******/ });