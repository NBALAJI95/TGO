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

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Checkout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkout, _React$Component);

  function Checkout() {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkout).apply(this, arguments));
  }

  _createClass(Checkout, [{
    key: "onClose",
    value: function onClose(event) {
      this.props.removeFromCart(event.target.id);
    }
  }, {
    key: "renderCartItem",
    value: function renderCartItem(key, url, name, price, qty, id) {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "CheckoutCard",
        key: key,
        className: "row",
        style: {
          backgroundColor: '#EEE',
          padding: '0.7rem',
          marginBottom: '0.5rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: url,
        height: '75rem',
        alt: name
      }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " ", name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " $ ", parseFloat(price), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-8"
      }, "Qty. ", qty), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-4",
        style: {
          padding: 0,
          margin: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        id: id,
        onClick: function onClick(evt) {
          return _this.onClose(evt);
        },
        style: {
          borderRadius: '50%'
        }
      }, "x")))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'container'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: {
          textAlign: 'center'
        }
      }, this.props.cart.length > 0 ? '' : 'Cart Empty'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, this.props.cart.map(function (item, key) {
        return _this2.renderCartItem(key, item.imageUrl, item.productName, item.price, item.quantity, item.id);
      })));
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  removeFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["removeFromCart"]
})(Checkout));

/***/ }),

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ProductCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductCard, _React$Component);

  function ProductCard(props) {
    var _this;

    _classCallCheck(this, ProductCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductCard).call(this, props));
    _this.state = {
      quantity: 1
    };
    return _this;
  }

  _createClass(ProductCard, [{
    key: "decrementHandler",
    value: function decrementHandler(event) {
      if (this.state.quantity > 1) {
        this.setState({
          quantity: this.state.quantity - 1
        });
      } else if (this.state.quantity === 1) {
        this.props.removeFromCart(event.target.id);
      }
    }
  }, {
    key: "incrementHandler",
    value: function incrementHandler(event) {
      if (this.state.quantity < this.props.quantityAvailable) {
        this.setState({
          quantity: this.state.quantity + 1
        });
      } else {
        alert("Only ".concat(this.props.quantityAvailable, " for the item ").concat(this.props.name, " are in stock!!!"));
      }
    }
  }, {
    key: "addItem",
    value: function addItem(event, data) {
      this.props.addToCart(_objectSpread({}, data.filter(function (item) {
        return item.id === event.target.id;
      })[0], {
        quantity: this.state.quantity
      }));
    }
  }, {
    key: "renderButton",
    value: function renderButton(cart, data, id) {
      var _this2 = this;

      var items = cart.filter(function (item) {
        return item.id === id;
      });

      if (items.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: id,
          onClick: function onClick(evt) {
            return _this2.addItem(evt, data);
          },
          block: true,
          color: "success"
        }, "Add to Cart");
      } else if (items[0].quantity !== this.state.quantity) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: id,
          onClick: function onClick(evt) {
            return _this2.addItem(evt, data);
          },
          block: true,
          color: "success"
        }, "Change Quantity");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          id: id,
          disabled: true,
          block: true,
          color: "secondary"
        }, "Add to Cart");
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      console.log('componentWillReceiveProps', nextProps.reset);
      if (nextProps.reset) this.setState({
        quantity: 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var priceTextStyle = styles.priceTextStyle,
          roundedButton = styles.roundedButton;
      var _this$props = this.props,
          imageURL = _this$props.imageURL,
          name = _this$props.name,
          price = _this$props.price,
          id = _this$props.id,
          cart = _this$props.cart,
          data = _this$props.data;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: '1rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          objectFit: 'contain'
        },
        height: "200rem",
        src: imageURL,
        alt: "".concat(this.props.name)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: priceTextStyle
      }, " $ ", parseFloat(price), " "), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        style: {
          padding: '1rem'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], null, " ", name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        id: id,
        style: roundedButton,
        onClick: function onClick(evt) {
          return _this3.decrementHandler(evt);
        }
      }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          padding: '0 1.5rem'
        }
      }, " ", this.state.quantity, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: roundedButton,
        onClick: function onClick(evt) {
          return _this3.incrementHandler(evt);
        }
      }, "+")), this.renderButton(cart, data, id))));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var styles = {
  priceTextStyle: {
    fontWeight: 'bold',
    fontSize: '1.3rem'
  },
  roundedButton: {
    borderRadius: '50%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  addToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["addToCart"],
  removeFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_3__["removeFromCart"]
})(ProductCard));

/***/ }),

/***/ "./pages/App.css":
/*!***********************!*\
  !*** ./pages/App.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ionicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ionicons */ "react-ionicons");
/* harmony import */ var react_ionicons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_ionicons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ "./components/ProductCard.js");
/* harmony import */ var _components_Checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Checkout */ "./components/Checkout.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var subtotal = function subtotal(cart) {
  var subTotal = 0;

  if (cart.length) {
    cart.forEach(function (item) {
      subTotal += item.quantity * item.price;
    });
  }

  return subTotal.toFixed(2);
};

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      popoverOpen: false,
      modal: false,
      alert: false,
      resetCounterVal: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "onDismiss",
    value: function onDismiss() {
      this.setState({
        alert: false
      });
    }
  }, {
    key: "renderAlert",
    value: function renderAlert() {
      var _this2 = this;

      if (this.state.alert) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
          color: "success",
          isOpen: this.state.alert,
          toggle: function toggle() {
            return _this2.onDismiss();
          }
        }, "Your order has been placed!");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }
    }
  }, {
    key: "toggleM",
    value: function toggleM() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      console.log('this.state', this.state);
      this.setState({
        popoverOpen: !this.state.popoverOpen
      });
    }
  }, {
    key: "renderRow",
    value: function renderRow(item) {
      var returnVal = [];

      for (var i = 0; i < item.length; i++) {
        returnVal.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: item[i].id,
          className: "col-sm col-xs-12"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          id: item[i].id,
          imageURL: item[i].imageUrl,
          name: item[i].productName,
          price: item[i].price,
          quantityAvailable: item[i].quantityAvailable,
          cart: this.props.Cart,
          data: this.props.APIData,
          reset: this.state.resetCounterVal
        })));
      }

      return returnVal;
    }
  }, {
    key: "renderProducts",
    value: function renderProducts(data) {
      var returnComponent = [];
      var iterations = Math.ceil(data.length / 3);
      var j = 0;

      for (var i = 0; i < iterations; i++) {
        returnComponent.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          key: i
        }, " ", this.renderRow(data.slice(j, j + 3)), " "));
        j += 3;
      }

      return returnComponent;
    }
  }, {
    key: "order",
    value: function order(cart) {
      var _this3 = this;

      fetch('/sms', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstParam: "$ ".concat((parseFloat(subtotal(cart)) + 0.79).toFixed(2)),
          secondParam: this.props.Cart
        })
      }).then(function (val) {
        try {
          console.log("ORDER SUCCESS!!!", val); // Need to update quantity w.r.t cart

          _this3.props.emptyCart();

          _this3.setState({
            alert: true
          });

          _this3.setState({
            resetCounterVal: true
          });

          setTimeout(function () {
            _this3.setState({
              resetCounterVal: false
            });
          }, 500);
        } catch (e) {
          console.log('e', e);
        }
      }).catch(function () {
        console.log("ORDER FAILED PLEASE TRY AGAIN...");
        alert('OOPS!');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        block: true,
        size: 'lg',
        id: "fixedButton",
        color: "danger",
        onClick: function onClick() {
          return _this4.toggleM();
        }
      }, "Cart", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_ionicons__WEBPACK_IMPORTED_MODULE_3___default.a, {
        icon: "ios-cart",
        fontSize: "35px",
        color: "#FFF"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sub", null, "".concat(this.props.Cart.length))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        isOpen: this.state.modal,
        toggle: function toggle() {
          return _this4.toggleM();
        },
        className: this.props.className
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
        toggle: function toggle() {
          return _this4.toggleM();
        }
      }, "Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null, this.renderAlert(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        cart: this.props.Cart
      }), this.props.Cart.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          border: '1px solid #ddd',
          width: '60%',
          float: 'right',
          marginRight: '1rem'
        },
        className: 'container'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Subtotal: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", subtotal(this.props.Cart), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Service Fee: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", 0.79.toFixed(2), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Total: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", (parseFloat(subtotal(this.props.Cart)) + 0.79).toFixed(2), " "))) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "success",
        disabled: this.props.Cart.length === 0,
        onClick: function onClick() {
          return _this4.order(_this4.props.Cart);
        }
      }, "Order"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "secondary",
        disabled: this.props.Cart.length === 0,
        onClick: function onClick() {
          _this4.props.emptyCart();

          _this4.toggleM();
        }
      }, "Empty Cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        placement: "bottom",
        isOpen: this.state.popoverOpen,
        target: "fixedButton",
        toggle: this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverHeader"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        style: {
          textAlign: 'center'
        }
      }, " Cart "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        size: "sm",
        onClick: function onClick() {
          return _this4.order(_this4.props.Cart);
        }
      }, " ORDER "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        outline: true,
        size: "sm",
        onClick: this.toggle,
        style: {
          float: 'right'
        }
      }, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["PopoverBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        cart: this.props.Cart
      }), this.props.Cart.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          border: '1px solid #ddd',
          width: '60%',
          float: 'right',
          marginRight: '1rem'
        },
        className: 'container'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Subtotal: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", subtotal(this.props.Cart), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Service Fee: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", (subtotal(this.props.Cart) * .05).toFixed(2), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: 'right',
          fontSize: '1.1rem'
        }
      }, "Total: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " $ ", (parseFloat(subtotal(this.props.Cart)) + subtotal(this.props.Cart) * .05).toFixed(2), " "))) : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, this.renderProducts(this.props.APIData)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  console.log('cart', state.cart);
  return {
    Cart: state.cart,
    APIData: state.products
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  emptyCart: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["emptyCart"]
})(App));

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./pages/App.js");




var app = function app() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (app);

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
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ionicons":
/*!*********************************!*\
  !*** external "react-ionicons" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ionicons");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map