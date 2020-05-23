"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconBase = _interopRequireDefault(require("react-icon-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GoItalic = props => _react.default.createElement(_reactIconBase.default, _extends({
  viewBox: "0 0 40 40"
}, props), _react.default.createElement("g", null, _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "m19.5 12.5h5l-4.5 22.5h-5l4.5-22.5z m0.9-6.7c0-1.8 1.5-3.3 3.4-3.3 1.3 0 2.8 1 2.8 2.6 0 1.9-1.5 3.2-3.3 3.2-1.5 0-2.9-0.9-2.9-2.6z"
})));

var _default = GoItalic;
exports.default = _default;