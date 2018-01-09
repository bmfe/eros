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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(101);\n\nObject.defineProperty(exports, 'default', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_index).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.js\n// module id = 100\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.js?");

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(102)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(103)\n\n/* template */\nvar __vue_template__ = __webpack_require__(105)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-2646d2a0\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue\n// module id = 101\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue?");

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"wxc-btn\": {\n    \"width\": 702,\n    \"height\": 88,\n    \"alignItems\": \"center\",\n    \"justifyContent\": \"center\",\n    \"borderRadius\": 12\n  },\n  \"btn-text\": {\n    \"textOverflow\": \"ellipsis\",\n    \"lines\": 1,\n    \"fontSize\": 36,\n    \"color\": \"#FFFFFF\"\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-2646d2a0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue\n// module id = 102\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-2646d2a0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _type = __webpack_require__(104);\n\nexports.default = {\n  props: {\n    text: {\n      type: String,\n      default: '确认'\n    },\n    type: {\n      type: String,\n      default: 'red'\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    },\n    btnStyle: Object,\n    textStyle: Object\n  },\n  computed: {\n    mrBtnStyle: function mrBtnStyle() {\n      var type = this.type,\n          disabled = this.disabled,\n          btnStyle = this.btnStyle;\n\n      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle);\n      return disabled ? _extends({}, mrBtnStyle, {\n        backgroundColor: 'rgba(0, 0, 0, 0.1)',\n        borderWidth: 0\n      }) : mrBtnStyle;\n    },\n    mrTextStyle: function mrTextStyle() {\n      var type = this.type,\n          disabled = this.disabled,\n          textStyle = this.textStyle;\n\n      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle);\n      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;\n    }\n  },\n  methods: {\n    onClicked: function onClicked(e) {\n      var type = this.type,\n          disabled = this.disabled;\n\n      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue\n// module id = 103\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar STYLE_MAP = exports.STYLE_MAP = {\n  red: {\n    backgroundColor: '#FF5000'\n  },\n  yellow: {\n    backgroundColor: '#FFC900'\n  },\n  normal: {\n    backgroundColor: '#FFFFFF',\n    borderColor: '#A5A5A5',\n    borderWidth: '1px'\n  },\n  highlight: {\n    backgroundColor: '#FFFFFF',\n    borderColor: '#EE9900',\n    borderWidth: '1px'\n  }\n};\n\nvar TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {\n  taobao: {\n    color: '#FFFFFF'\n  },\n  fliggy: {\n    color: '#3D3D3D'\n  },\n  normal: {\n    color: '#3D3D3D'\n  },\n  highlight: {\n    color: '#EE9900'\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/type.js\n// module id = 104\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/type.js?");

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"wxc-btn\"],\n    style: _vm.mrBtnStyle,\n    attrs: {\n      \"accessible\": true,\n      \"ariaLabel\": _vm.text\n    },\n    on: {\n      \"click\": _vm.onClicked\n    }\n  }, [_c('text', {\n    staticClass: [\"btn-text\"],\n    style: _vm.mrTextStyle\n  }, [_vm._v(_vm._s(_vm.text))])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-2646d2a0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue\n// module id = 105\n// module chunks = 4\n\n//# sourceURL=webpack:///./node_modules/_weex-ui@0.3.10@weex-ui/packages/wxc-button/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-2646d2a0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('list', {\n    ref: \"list\",\n    staticStyle: {\n      flexDirection: \"column\",\n      width: \"750\",\n      top: \"0\"\n    },\n    attrs: {\n      \"showRefresh\": \"true\"\n    },\n    on: {\n      \"refresh\": _vm.onrefresh\n    }\n  }, [_c('cell', {\n    appendAsTree: true,\n    attrs: {\n      \"append\": \"tree\"\n    }\n  }, [_c('text', [_vm._v(\"这是一个新的路由页面\")]), _vm._l((_vm.imgUrls), function(imgUrl, index) {\n    return _c('image', {\n      key: index,\n      staticStyle: {\n        width: \"500px\",\n        height: \"500px\"\n      },\n      attrs: {\n        \"src\": imgUrl,\n        \"resize\": \"contain\"\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.preview(index)\n        }\n      }\n    })\n  }), _c('WxcButton', {\n    attrs: {\n      \"text\": \"修改 mediator-store\"\n    },\n    on: {\n      \"wxcButtonClicked\": _vm.changeStore\n    }\n  }), _c('text', [_vm._v(_vm._s(_vm.store))]), _c('text', [_vm._v(_vm._s(_vm.contacts))])], 2)])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-48d342cb!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/tab2/router.vue\n// module id = 106\n// module chunks = 4\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/router.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-48d342cb!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* script */\n__vue_exports__ = __webpack_require__(99)\n\n/* template */\nvar __vue_template__ = __webpack_require__(106)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/tab2/router.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/tab2/router.vue?entry=true\n// module id = 98\n// module chunks = 4\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/router.vue?");

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _wxcButton = __webpack_require__(100);\n\nvar _wxcButton2 = _interopRequireDefault(_wxcButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar bmImage = weex.requireModule('bmImage');\nexports.default = {\n    created: function created() {\n        this.bindEvent();\n    },\n\n    components: {\n        WxcButton: _wxcButton2.default\n    },\n    data: function data() {\n        return {\n            store: null,\n            imgUrls: [],\n            contacts: null\n        };\n    },\n\n    methods: {\n        bindEvent: function bindEvent() {\n            var _this = this;\n\n            this.$event.on('store.count.get', function (data) {\n                _this.store = data;\n            });\n            this.$event.on('store.change', function (data) {\n                _this.store = data;\n            });\n        },\n        changeStore: function changeStore() {\n            var _this2 = this;\n\n            // var self = this\n            // this.$event.emit('store.count.add')\n            // this.$storage.setSync('name',222)\n            // var resData = this.$storage.getSync('name')\n            // var test = this.$storage.getSync(\"name\")\n            this.$image.pick({\n                maxCount: 9,\n                imageWidth: '800',\n                allowCrop: true\n            }).then(function (imgUrls) {\n                _this2.imgUrls = imgUrls;\n            }, function (error) {\n                console.log(error);\n            });\n            // this.$coms.contacts().then(data => {\n            //     this.contacts = data\n            // })\n        },\n        pick: function pick() {\n            var _this3 = this;\n\n            bmImage.pick({\n                maxCount: 9,\n                imageWidth: 1000\n            }, function (data) {\n                _this3.imgUrl = data.data[0];\n            });\n        },\n        preview: function preview(index) {\n            this.$image.preview({\n                index: index,\n                images: this.imgUrls\n            });\n        },\n        onrefresh: function onrefresh() {\n            var _this4 = this;\n\n            this.$geo.get().then(function (resData) {\n                setTimeout(function () {\n                    _this4.$refs['list'].refreshEnd();\n                }, 1000);\n            });\n        }\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/tab2/router.vue\n// module id = 99\n// module chunks = 4\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/router.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ })

/******/ });