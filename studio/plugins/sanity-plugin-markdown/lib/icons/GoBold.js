"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIconBase = _interopRequireDefault(require("react-icon-base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GoBold = props => _react.default.createElement(_reactIconBase.default, _extends({
  viewBox: "0 0 40 40"
}, props), _react.default.createElement("g", null, _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "m10 5h9.6c6.2 0 10.7 1.9 10.7 7.4 0 2.8-1.5 5.5-4.2 6.5v0.1c3.4 0.8 5.8 3.1 5.8 7.2 0 6-4.9 8.8-11.5 8.8h-10.4v-30z m9.1 12.4c4.2 0 6-1.7 6-4.2 0-3-2-4.1-5.8-4.1h-4v8.3h3.8z m0.7 13.5c4.5 0 6.9-1.6 6.9-5 0-3.2-2.4-4.5-6.9-4.5h-4.5v9.5h4.5v0z"
})));

var _default = GoBold;
exports.default = _default;