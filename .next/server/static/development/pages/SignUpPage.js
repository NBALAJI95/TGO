module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/InputWithLabel.js":
/*!**************************************!*\
  !*** ./components/InputWithLabel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField/TextField */ "@material-ui/core/TextField/TextField");
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var InputWithLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputWithLabel, _React$Component);

  function InputWithLabel() {
    _classCallCheck(this, InputWithLabel);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputWithLabel).apply(this, arguments));
  }

  _createClass(InputWithLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value,
          type = _this$props.type,
          label = _this$props.label,
          onChange = _this$props.onChange;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 1,
        sm: 2,
        md: 3
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 10,
        sm: 8,
        md: 6
      }, this.props.children ? this.props.children : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: id,
        value: value,
        onChange: onChange,
        type: type,
        label: label,
        margin: "normal",
        fullWidth: true,
        required: this.props.required
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 2,
        sm: 2,
        md: 3
      })));
    }
  }]);

  return InputWithLabel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

InputWithLabel.defaultProps = {
  type: 'text',
  required: true
};
InputWithLabel.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  required: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (InputWithLabel);

/***/ }),

/***/ "./components/Page1.js":
/*!*****************************!*\
  !*** ./components/Page1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid/Grid */ "@material-ui/core/Grid/Grid");
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField/TextField */ "@material-ui/core/TextField/TextField");
/* harmony import */ var _material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _InputWithLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InputWithLabel */ "./components/InputWithLabel.js");
/* harmony import */ var _US_States__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./US_States */ "./components/US_States.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Page1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page1, _React$Component);

  function Page1() {
    _classCallCheck(this, Page1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page1).apply(this, arguments));
  }

  _createClass(Page1, [{
    key: "textHandler",
    value: function textHandler(event, id) {
      this.props.setState(id, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$State = this.props.State,
          name = _this$props$State.name,
          email = _this$props$State.email,
          phoneNumber = _this$props$State.phoneNumber,
          address = _this$props$State.address;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: 'name',
        value: name,
        label: "Name",
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'name');
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: 'email',
        value: email,
        label: "E-mail",
        type: 'email',
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'email');
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: 'phoneNumber',
        value: phoneNumber,
        label: "Phone Number",
        type: 'tel',
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'phoneNumber');
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: 'address_line1',
        value: address.line1,
        label: "Address Line 1",
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'address_line1');
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: 'address_line2',
        value: address.line2,
        label: "Address Line 2",
        required: false,
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'address_line2');
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: 'city',
        type: 'text',
        label: "City",
        value: address.city,
        margin: "normal",
        style: {
          width: '80%'
        },
        required: true,
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'address_city');
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 1
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4,
        md: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
        value: address.state,
        options: _US_States__WEBPACK_IMPORTED_MODULE_7__["states"],
        placeholder: 'STATE',
        onChange: function onChange(val) {
          return _this.textHandler({
            target: {
              value: val
            }
          }, 'address_state');
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        md: 1
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "zip",
        type: 'number',
        label: "Zip",
        value: address.zip,
        margin: "normal",
        style: {
          width: '80%'
        },
        required: true,
        onChange: function onChange(evt) {
          return _this.textHandler(evt, 'address_zip');
        }
      }))));
    }
  }]);

  return Page1;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log('State', state);
  return {
    State: state.SignUp
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setState: _redux_actions__WEBPACK_IMPORTED_MODULE_5__["setState"]
})(Page1));

/***/ }),

/***/ "./components/Page2.js":
/*!*****************************!*\
  !*** ./components/Page2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControl/FormControl */ "@material-ui/core/FormControl/FormControl");
/* harmony import */ var _material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid/Grid */ "@material-ui/core/Grid/Grid");
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormLabel/FormLabel */ "@material-ui/core/FormLabel/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel/FormControlLabel */ "@material-ui/core/FormControlLabel/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox/Checkbox */ "@material-ui/core/Checkbox/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/RadioGroup/RadioGroup */ "@material-ui/core/RadioGroup/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Radio/Radio */ "@material-ui/core/Radio/Radio");
/* harmony import */ var _material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _InputWithLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputWithLabel */ "./components/InputWithLabel.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Page2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page2, _React$Component);

  function Page2() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Page2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheck", function (name, id) {
      return function (event) {
        _this.props.setState(id, event.target.checked);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRadio", function (event, stateLabel) {
      _this.props.setState(stateLabel, event.target.value);
    });

    return _this;
  }

  _createClass(Page2, [{
    key: "textHandler",
    value: function textHandler(event, id) {
      this.props.setState(id, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$State = this.props.State,
          driveFor = _this$props$State.driveFor,
          fullTimeOrPartTime = _this$props$State.fullTimeOrPartTime,
          ridesPerWeek = _this$props$State.ridesPerWeek,
          drivingDuration = _this$props$State.drivingDuration,
          commission = _this$props$State.commission,
          referredBy = _this$props$State.referredBy;
      var formControlStyle = styles.formControlStyle,
          formLabelStyle = styles.formLabelStyle,
          radioStyle = styles.radioStyle;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
        component: "fieldset"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        container: true,
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          marginTop: '1rem',
          marginRight: '1rem'
        },
        component: "legend"
      }, ' I drive for: (Check all that apply) ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 4,
        sm: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "primary",
          checked: driveFor.Uber,
          onChange: this.handleCheck('Uber', 'driveFor_Uber'),
          value: "Uber"
        }),
        label: "Uber"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 4,
        sm: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "primary",
          checked: driveFor.Lyft,
          onChange: this.handleCheck('Lyft', 'driveFor_Lyft'),
          value: "Lyft"
        }),
        label: "Lyft"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
        item: true,
        xs: 4,
        sm: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {
          color: "primary",
          checked: driveFor.Neither,
          onChange: this.handleCheck('Neither', 'driveFor_Neither'),
          value: "Neither"
        }),
        label: "Neither"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          display: 'flex',
          flexDirection: 'row'
        },
        "aria-label": "ridesPerWeek",
        name: "ridesPerWeek",
        value: fullTimeOrPartTime,
        onChange: function onChange(evt) {
          _this2.handleRadio(evt, 'fullTimeOrPartTime');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: 'fullTime',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "Full Time",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: 'partTime',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "Part Time",
        labelPlacement: "end"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: formControlStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: formLabelStyle,
        component: "legend"
      }, "How many rides per week?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          display: 'flex',
          flexDirection: 'row'
        },
        "aria-label": "ridesPerWeek",
        name: "ridesPerWeek",
        value: ridesPerWeek,
        onChange: function onChange(evt) {
          _this2.handleRadio(evt, 'ridesPerWeek');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '<5',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "Less than 5",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '6-15',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "6 - 15",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '16-30',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "16 - 30",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '31-60',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "31 - 60",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '60+',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "60+",
        labelPlacement: "end"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: formControlStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: formLabelStyle,
        component: "legend"
      }, "How long have you been driving?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          display: 'flex',
          flexDirection: 'row'
        },
        "aria-label": "drivingDuration",
        name: "drivingDuration",
        value: drivingDuration,
        onChange: function onChange(evt) {
          _this2.handleRadio(evt, 'drivingDuration');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: 'Less than 6 months',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "Less than 6 months",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '6 months - 1 year',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "6 months - 1 year",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '1 year - 2 years',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "1 year - 2 years",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '2 years - 3 years',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "2 years - 3 years",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '3+ years',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "3+ years",
        labelPlacement: "end"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
        style: formControlStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: formLabelStyle,
        component: "legend"
      }, "Commission option"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          display: 'flex',
          flexDirection: 'row'
        },
        "aria-label": "drivingDuration",
        name: "drivingDuration",
        value: commission,
        onChange: function onChange(evt) {
          _this2.handleRadio(evt, 'commission');
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '80% commission',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "I would like to buy my products upfront (80% commission)",
        labelPlacement: "end"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {
        value: '50% commission',
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Radio_Radio__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: radioStyle,
          color: "primary"
        }),
        label: "I want $ 0 upfront (50% commission)",
        labelPlacement: "end"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputWithLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        id: 'referredBy',
        value: referredBy,
        label: "I was referred by",
        onChange: function onChange(evt) {
          return _this2.textHandler(evt, 'referredBy');
        },
        required: false
      }));
    }
  }]);

  return Page2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    State: state.SignUp
  };
};

var styles = {
  formControlStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  formLabelStyle: {
    margin: '1rem',
    marginBottom: 'inherit'
  },
  radioStyle: {
    width: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  setState: _redux_actions__WEBPACK_IMPORTED_MODULE_10__["setState"]
})(Page2));

/***/ }),

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid/Grid */ "@material-ui/core/Grid/Grid");
/* harmony import */ var _material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_NoSsr_NoSsr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/NoSsr/NoSsr */ "@material-ui/core/NoSsr/NoSsr");
/* harmony import */ var _material_ui_core_NoSsr_NoSsr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_NoSsr_NoSsr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar/AppBar */ "@material-ui/core/AppBar/AppBar");
/* harmony import */ var _material_ui_core_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs/Tabs */ "@material-ui/core/Tabs/Tabs");
/* harmony import */ var _material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tab/Tab */ "@material-ui/core/Tab/Tab");
/* harmony import */ var _material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper/Paper */ "@material-ui/core/Paper/Paper");
/* harmony import */ var _material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button/Button */ "@material-ui/core/Button/Button");
/* harmony import */ var _material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden/Hidden */ "@material-ui/core/Hidden/Hidden");
/* harmony import */ var _material_ui_core_Hidden_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Page1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Page1 */ "./components/Page1.js");
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page2 */ "./components/Page2.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















function LinkTab(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab_Tab__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
    component: "a",
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, props));
}

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUp).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event, value) {
      _this.setState({
        value: value
      });
    });

    _this.state = {
      value: 0
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " Sign Up "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        container: true,
        align: "center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        lg: 2,
        sm: 1
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        lg: 8,
        xs: 12,
        sm: 10
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_NoSsr_NoSsr__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "static"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
        fullWidth: true,
        value: value,
        onChange: this.handleChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkTab, {
        label: "Page One",
        href: "page1"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkTab, {
        label: "Page Two",
        href: "page2"
      }))), value === 0 &&
      /*' PART ONE '*/
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page1__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        sm: 4
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        fullWidth: true,
        size: 'large',
        variant: "contained",
        color: "primary",
        style: {
          backgroundColor: '#4caf50'
        },
        onClick: function onClick() {
          _this2.setState({
            value: 1
          });
        }
      }, "Next")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
        xsDown: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        sm: 4
      })))), value === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page2__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        sm: 4
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        xs: 12,
        sm: 4
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        fullWidth: true,
        size: 'large',
        variant: "contained",
        color: "primary",
        style: {
          backgroundColor: '#4caf50'
        },
        onClick: function onClick() {
          _this2.setState({
            value: 0
          });
        }
      }, "Previous")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
        xsDown: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        item: true,
        sm: 4
      })))))))), console.log(this.props.State));
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    State: state.SignUp
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  setState: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["setState"]
})(SignUp));

/***/ }),

/***/ "./components/US_States.js":
/*!*********************************!*\
  !*** ./components/US_States.js ***!
  \*********************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
var states = [{
  value: "Alabama",
  label: "AL"
}, {
  value: "Alaska",
  label: "AK"
}, {
  value: "American Samoa",
  label: "AS"
}, {
  value: "Arizona",
  label: "AZ"
}, {
  value: "Arkansas",
  label: "AR"
}, {
  value: "California",
  label: "CA"
}, {
  value: "Colorado",
  label: "CO"
}, {
  value: "Connecticut",
  label: "CT"
}, {
  value: "Delaware",
  label: "DE"
}, {
  value: "District Of Columbia",
  label: "DC"
}, {
  value: "Federated States Of Micronesia",
  label: "FM"
}, {
  value: "Florida",
  label: "FL"
}, {
  value: "Georgia",
  label: "GA"
}, {
  value: "Guam",
  label: "GU"
}, {
  value: "Hawaii",
  label: "HI"
}, {
  value: "Idaho",
  label: "ID"
}, {
  value: "Illinois",
  label: "IL"
}, {
  value: "Indiana",
  label: "IN"
}, {
  value: "Iowa",
  label: "IA"
}, {
  value: "Kansas",
  label: "KS"
}, {
  value: "Kentucky",
  label: "KY"
}, {
  value: "Louisiana",
  label: "LA"
}, {
  value: "Maine",
  label: "ME"
}, {
  value: "Marshall Islands",
  label: "MH"
}, {
  value: "Maryland",
  label: "MD"
}, {
  value: "Massachusetts",
  label: "MA"
}, {
  value: "Michigan",
  label: "MI"
}, {
  value: "Minnesota",
  label: "MN"
}, {
  value: "Mississippi",
  label: "MS"
}, {
  value: "Missouri",
  label: "MO"
}, {
  value: "Montana",
  label: "MT"
}, {
  value: "Nebraska",
  label: "NE"
}, {
  value: "Nevada",
  label: "NV"
}, {
  value: "New Hampshire",
  label: "NH"
}, {
  value: "New Jersey",
  label: "NJ"
}, {
  value: "New Mexico",
  label: "NM"
}, {
  value: "New York",
  label: "NY"
}, {
  value: "North Carolina",
  label: "NC"
}, {
  value: "North Dakota",
  label: "ND"
}, {
  value: "Northern Mariana Islands",
  label: "MP"
}, {
  value: "Ohio",
  label: "OH"
}, {
  value: "Oklahoma",
  label: "OK"
}, {
  value: "Oregon",
  label: "OR"
}, {
  value: "Palau",
  label: "PW"
}, {
  value: "Pennsylvania",
  label: "PA"
}, {
  value: "Puerto Rico",
  label: "PR"
}, {
  value: "Rhode Island",
  label: "RI"
}, {
  value: "South Carolina",
  label: "SC"
}, {
  value: "South Dakota",
  label: "SD"
}, {
  value: "Tennessee",
  label: "TN"
}, {
  value: "Texas",
  label: "TX"
}, {
  value: "Utah",
  label: "UT"
}, {
  value: "Vermont",
  label: "VT"
}, {
  value: "Virgin Islands",
  label: "VI"
}, {
  value: "Virginia",
  label: "VA"
}, {
  value: "Washington",
  label: "WA"
}, {
  value: "West Virginia",
  label: "WV"
}, {
  value: "Wisconsin",
  label: "WI"
}, {
  value: "Wyoming",
  label: "WY"
}];

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/SignUpPage.js":
/*!*****************************!*\
  !*** ./pages/SignUpPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogTitle_DialogTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogTitle/DialogTitle */ "@material-ui/core/DialogTitle/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle_DialogTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent/DialogContent */ "@material-ui/core/DialogContent/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText/DialogContentText */ "@material-ui/core/DialogContentText/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions/DialogActions */ "@material-ui/core/DialogActions/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog/Dialog */ "@material-ui/core/Dialog/Dialog");
/* harmony import */ var _material_ui_core_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SignUp */ "./components/SignUp.js");
/* harmony import */ var _TGO_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TGO logo.png */ "./pages/TGO logo.png");
/* harmony import */ var _TGO_logo_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TGO_logo_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "SignUp",
    value: function SignUp() {
      var _this2 = this;

      fetch('http://172.20.5.56:3001/emailMLS', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          State: this.props.State
        })
      }).then(function (res) {
        console.log('ORDER SUCCESS!!!', res);

        _this2.setState({
          open: true
        });

        _this2.props.reset();
      }).catch(function () {
        console.log('ORDER FAILED PLEASE TRY AGAIN...');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog_Dialog__WEBPACK_IMPORTED_MODULE_8___default.a, {
        open: this.state.open,
        keepMounted: true,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-slide-title",
        "aria-describedby": "alert-dialog-slide-description"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle_DialogTitle__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "alert-dialog-slide-title"
      }, 'Confirmation'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "alert-dialog-slide-description"
      }, "Thank you! You will receive a confirmation email with the next steps. Be ready for a phone call from one of our service representatives! Happy driving!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.handleClose,
        color: "primary"
      }, "Close"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        height: '170rem',
        src: _TGO_logo_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "Titanium Go"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SignUp__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        spacing: 24
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        sm: 4
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        sm: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        fullWidth: true,
        onClick: function onClick() {
          return _this3.SignUp();
        },
        size: 'large',
        variant: "contained",
        color: "primary",
        disabled: !this.props.State.valid
      }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: 12,
        sm: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        fullWidth: true,
        size: 'large',
        variant: "contained",
        onClick: function onClick() {
          return _this3.props.reset();
        }
      }, "Reset")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        sm: 4
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    State: state.SignUp
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getState: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["getState"],
  reset: _redux_actions__WEBPACK_IMPORTED_MODULE_12__["reset"]
})(App));

/***/ }),

/***/ "./pages/TGO logo.png":
/*!****************************!*\
  !*** ./pages/TGO logo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/TGO logo-bda4ac44edb458fb454bd0faeebf24c8.png";

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: addToCart, emptyCart, resetCounter, resetted, removeFromCart, setState, getState, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCart", function() { return emptyCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCounter", function() { return resetCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetted", function() { return resetted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
var addToCart = function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};
var emptyCart = function emptyCart() {
  return {
    type: 'EMPTY _CART'
  };
};
var resetCounter = function resetCounter() {
  return {
    type: 'RESET_COUNTER'
  };
};
var resetted = function resetted() {
  return {
    type: 'RESETTED'
  };
};
var removeFromCart = function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
}; // SignUp actions

var setState = function setState(property, value) {
  return {
    type: 'SET_STATE',
    payload: {
      property: property,
      value: value
    }
  };
};
var getState = function getState() {
  return {
    type: 'GET_STATE'
  };
};
var reset = function reset() {
  return {
    type: 'RESET'
  };
};

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/SignUpPage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/SignUpPage.js */"./pages/SignUpPage.js");


/***/ }),

/***/ "@material-ui/core/AppBar/AppBar":
/*!**************************************************!*\
  !*** external "@material-ui/core/AppBar/AppBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Button/Button":
/*!**************************************************!*\
  !*** external "@material-ui/core/Button/Button" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox/Checkbox":
/*!******************************************************!*\
  !*** external "@material-ui/core/Checkbox/Checkbox" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox/Checkbox");

/***/ }),

/***/ "@material-ui/core/Dialog/Dialog":
/*!**************************************************!*\
  !*** external "@material-ui/core/Dialog/Dialog" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions/DialogActions":
/*!****************************************************************!*\
  !*** external "@material-ui/core/DialogActions/DialogActions" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent/DialogContent":
/*!****************************************************************!*\
  !*** external "@material-ui/core/DialogContent/DialogContent" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText/DialogContentText":
/*!************************************************************************!*\
  !*** external "@material-ui/core/DialogContentText/DialogContentText" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle/DialogTitle":
/*!************************************************************!*\
  !*** external "@material-ui/core/DialogTitle/DialogTitle" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl/FormControl":
/*!************************************************************!*\
  !*** external "@material-ui/core/FormControl/FormControl" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel/FormControlLabel":
/*!**********************************************************************!*\
  !*** external "@material-ui/core/FormControlLabel/FormControlLabel" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel/FormLabel":
/*!********************************************************!*\
  !*** external "@material-ui/core/FormLabel/FormLabel" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel/FormLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grid/Grid":
/*!**********************************************!*\
  !*** external "@material-ui/core/Grid/Grid" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden/Hidden":
/*!**************************************************!*\
  !*** external "@material-ui/core/Hidden/Hidden" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden/Hidden");

/***/ }),

/***/ "@material-ui/core/NoSsr/NoSsr":
/*!************************************************!*\
  !*** external "@material-ui/core/NoSsr/NoSsr" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr/NoSsr");

/***/ }),

/***/ "@material-ui/core/Paper/Paper":
/*!************************************************!*\
  !*** external "@material-ui/core/Paper/Paper" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper/Paper");

/***/ }),

/***/ "@material-ui/core/Radio/Radio":
/*!************************************************!*\
  !*** external "@material-ui/core/Radio/Radio" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup/RadioGroup":
/*!**********************************************************!*\
  !*** external "@material-ui/core/RadioGroup/RadioGroup" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Tab/Tab":
/*!********************************************!*\
  !*** external "@material-ui/core/Tab/Tab" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab/Tab");

/***/ }),

/***/ "@material-ui/core/Tabs/Tabs":
/*!**********************************************!*\
  !*** external "@material-ui/core/Tabs/Tabs" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField/TextField":
/*!********************************************************!*\
  !*** external "@material-ui/core/TextField/TextField" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField/TextField");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=SignUpPage.js.map