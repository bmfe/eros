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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* script */\n__vue_exports__ = __webpack_require__(40)\n\n/* template */\nvar __vue_template__ = __webpack_require__(49)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/index.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/index.vue?entry=true\n// module id = 39\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/index.vue?");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _bar = __webpack_require__(41);\n\nvar _bar2 = _interopRequireDefault(_bar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar IMAGE = 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png'; //\n//\n//\n//\n\nvar SELECTED_IMAGE = 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png';\n\nexports.default = {\n    globalEvent: {\n        appActive: function appActive() {\n            console.log('active');\n        },\n        appDeactive: function appDeactive() {\n            console.log('deactive');\n        }\n    },\n    bmRouter: {\n        viewWillAppear: function viewWillAppear() {\n            console.log('viewWillAppearTrigger');\n        }\n    },\n    created: function created() {\n        var _this = this;\n\n        var globalEvent = weex.requireModule('globalEvent');\n        globalEvent.addEventListener('homeBack', function (options) {\n            _this.curHomeBackTriggerTimes === _this.maxHomeBackTriggerTimes && _this.$router.finish();\n            _this.curHomeBackTriggerTimes++;\n            _this.$notice.toast({ message: '\\u70B9\\u51FB\\u8FD4\\u56DE' + _this.maxHomeBackTriggerTimes + '\\u6B21\\u4E4B\\u540E\\uFF0C\\u4F1A\\u5173\\u95ED\\u5E94\\u7528\\uFF0C\\u5F53\\u524D\\u70B9\\u51FB\\u7B2C' + _this.curHomeBackTriggerTimes + '\\u6B21' });\n        });\n    },\n    data: function data() {\n        return {\n            curHomeBackTriggerTimes: 0,\n            maxHomeBackTriggerTimes: 5,\n            bundleUrl: '',\n            tabItems: [{\n                index: 0,\n                title: 'weex-ui',\n                titleColor: '#000000',\n                icon: '',\n                image: IMAGE,\n                selectedImage: SELECTED_IMAGE,\n                src: weex.config.eros.jsServer + '/dist/js/pages/eros-demos/tab1/tab-page/index.js',\n                visibility: 'visible'\n            }, {\n                index: 1,\n                title: 'eros-widget',\n                titleColor: '#000000',\n                icon: '',\n                image: IMAGE,\n                selectedImage: SELECTED_IMAGE,\n                src: weex.config.eros.jsServer + '/dist/js/pages/eros-demos/tab2/index.js',\n                visibility: 'hidden'\n            }, {\n                index: 2,\n                title: 'eros-demo',\n                titleColor: '#000000',\n                icon: '',\n                image: IMAGE,\n                selectedImage: SELECTED_IMAGE,\n                src: weex.config.eros.jsServer + '/dist/js/pages/eros-demos/tab3/index.js',\n                visibility: 'hidden'\n            }]\n        };\n    },\n\n    components: {\n        tabs: _bar2.default\n    },\n    methods: {\n        tabBarOnClick: function tabBarOnClick(e) {\n            console.log('tabsOnClick', e.index);\n        }\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/index.vue\n// module id = 40\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(42)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(43)\n\n/* template */\nvar __vue_template__ = __webpack_require__(48)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/components/tabs/bar.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-6170f42b\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/tabs/bar.vue\n// module id = 41\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/bar.vue?");

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"wrapper\": {\n    \"width\": 750,\n    \"position\": \"absolute\",\n    \"top\": 0,\n    \"left\": 0,\n    \"right\": 0,\n    \"bottom\": 0\n  },\n  \"content\": {\n    \"position\": \"absolute\",\n    \"top\": 0,\n    \"left\": 0,\n    \"right\": 0,\n    \"bottom\": 0,\n    \"marginTop\": 0,\n    \"marginBottom\": 100\n  },\n  \"tabbar\": {\n    \"flexDirection\": \"row\",\n    \"position\": \"fixed\",\n    \"bottom\": 0,\n    \"left\": 0,\n    \"right\": 0,\n    \"height\": 100\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-6170f42b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/tabs/bar.vue\n// module id = 42\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/bar.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-6170f42b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _item = __webpack_require__(44);\n\nvar _item2 = _interopRequireDefault(_item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  props: {\n    tabItems: { default: [] },\n    selectedColor: { default: '#ff0000' },\n    unselectedColor: { default: '#000000' }\n  },\n  data: function data() {\n    return {\n      selectedIndex: 0\n    };\n  },\n\n  components: {\n    BarItem: _item2.default\n  },\n  created: function created() {\n    this.select(this.selectedIndex);\n  },\n\n  methods: {\n    tabItemOnClick: function tabItemOnClick(e) {\n      this.selectedIndex = e.index;\n      this.select(e.index);\n      this.$emit('tabBarOnClick', e);\n    },\n\n    select: function select(index) {\n      for (var i = 0; i < this.tabItems.length; i++) {\n        var tabItem = this.tabItems[i];\n        if (i === index) {\n          tabItem.icon = tabItem.selectedImage;\n          tabItem.titleColor = this.selectedColor;\n          tabItem.visibility = 'visible';\n        } else {\n          tabItem.icon = tabItem.image;\n          tabItem.titleColor = this.unselectedColor;\n          tabItem.visibility = 'hidden';\n        }\n      }\n    }\n  }\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/components/tabs/bar.vue\n// module id = 43\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/bar.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(45)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(46)\n\n/* template */\nvar __vue_template__ = __webpack_require__(47)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/components/tabs/item.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-7e14452b\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/tabs/item.vue\n// module id = 44\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/item.vue?");

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"container\": {\n    \"flex\": 1,\n    \"flexDirection\": \"column\",\n    \"alignItems\": \"center\",\n    \"justifyContent\": \"center\",\n    \"height\": 100\n  },\n  \"top-line\": {\n    \"position\": \"absolute\",\n    \"top\": 0,\n    \"left\": 0,\n    \"right\": 0,\n    \"height\": 2\n  },\n  \"tab-icon\": {\n    \"marginTop\": 5,\n    \"width\": 49,\n    \"height\": 49\n  },\n  \"tab-text\": {\n    \"marginTop\": 5,\n    \"textAlign\": \"center\",\n    \"fontSize\": 20\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-7e14452b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/components/tabs/item.vue\n// module id = 45\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/item.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-7e14452b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  props: {\n    index: { default: 0 },\n    title: { default: '' },\n    titleColor: { default: '#000000' },\n    icon: { default: '' },\n    backgroundColor: { default: '#ffffff' }\n  },\n  methods: {\n    onclickitem: function onclickitem(e) {\n      var params = {\n        index: this.index\n      };\n      this.$emit('tabItemOnClick', params);\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/components/tabs/item.vue\n// module id = 46\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/item.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"container\"],\n    on: {\n      \"click\": _vm.onclickitem\n    }\n  }, [_c('image', {\n    staticClass: [\"top-line\"],\n    attrs: {\n      \"src\": \"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png\"\n    }\n  }), _c('image', {\n    staticClass: [\"tab-icon\"],\n    attrs: {\n      \"src\": _vm.icon\n    }\n  }), _c('text', {\n    staticClass: [\"tab-text\"],\n    style: {\n      color: _vm.titleColor\n    }\n  }, [_vm._v(_vm._s(_vm.title))])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-7e14452b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/components/tabs/item.vue\n// module id = 47\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/item.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-7e14452b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"wrapper\"]\n  }, [_vm._l((_vm.tabItems), function(item, i) {\n    return _c('embed', {\n      key: i,\n      staticClass: [\"content\"],\n      style: {\n        visibility: item.visibility\n      },\n      attrs: {\n        \"src\": item.src,\n        \"type\": \"weex\"\n      }\n    })\n  }), _c('div', {\n    staticClass: [\"tabbar\"],\n    appendAsTree: true,\n    attrs: {\n      \"append\": \"tree\"\n    }\n  }, _vm._l((_vm.tabItems), function(item) {\n    return _c('BarItem', {\n      key: item.index,\n      attrs: {\n        \"index\": item.index,\n        \"icon\": item.icon,\n        \"title\": item.title,\n        \"titleColor\": item.titleColor\n      },\n      on: {\n        \"tabItemOnClick\": _vm.tabItemOnClick\n      }\n    })\n  }))], 2)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-6170f42b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/components/tabs/bar.vue\n// module id = 48\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/components/tabs/bar.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-6170f42b!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('tabs', {\n    attrs: {\n      \"tabItems\": _vm.tabItems\n    },\n    on: {\n      \"tabBarOnClick\": _vm.tabBarOnClick\n    }\n  })\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-963fb87c!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/index.vue\n// module id = 49\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-963fb87c!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ })

/******/ });