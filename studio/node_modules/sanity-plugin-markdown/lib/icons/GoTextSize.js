"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconBase = _interopRequireDefault(require("react-icon-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GoTextSize = props => _react.default.createElement(_reactIconBase.default, _extends({
  viewBox: "0 0 40 40"
}, props), _react.default.createElement("g", null, _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "m30.3 22.4l-3.4-12h-0.1l-3.4 12h6.9z m-17.6 2.3s-2.3-8-2.6-9.1h-0.2l-2.5 9.1h5.3z m25.8 8.6h-5l-2.1-7.2h-9.1l-2.1 7.2h-5l-1.5-5.1h-7.3l-1.6 5.1h-4.8l7.3-21.3h5.6l4.8 14.1 6.4-19.4h5.6l8.8 26.6h0z"
})));

var _default = GoTextSize;
exports.default = _default;