"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withHtml = _interopRequireDefault(require("react-markdown/with-html"));

var _previewOptions = _interopRequireDefault(require("./previewOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function HtmlPreview(props) {
  const options = props.options,
        value = props.value;
  return _react.default.createElement(_withHtml.default, _extends({}, options, {
    escapeHtml: false,
    skipHtml: false,
    source: value
  }));
}

HtmlPreview.propTypes = {
  value: _propTypes.default.string,
  options: _propTypes.default.shape({
    className: _propTypes.default.shape
  })
};
HtmlPreview.defaultProps = {
  value: '',
  options: _objectSpread({}, _previewOptions.default)
};
HtmlPreview.defaultOptions = _previewOptions.default;
var _default = HtmlPreview;
exports.default = _default;