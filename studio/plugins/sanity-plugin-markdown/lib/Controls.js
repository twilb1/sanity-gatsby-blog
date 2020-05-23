"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _listOrdered = _interopRequireDefault(require("react-icons/lib/go/list-ordered"));

var _listUnordered = _interopRequireDefault(require("react-icons/lib/go/list-unordered"));

var _GoTextSize = _interopRequireDefault(require("./icons/GoTextSize"));

var _GoBold = _interopRequireDefault(require("./icons/GoBold"));

var _GoItalic = _interopRequireDefault(require("./icons/GoItalic"));

var _quote = _interopRequireDefault(require("react-icons/lib/go/quote"));

var _code = _interopRequireDefault(require("react-icons/lib/go/code"));

var _link = _interopRequireDefault(require("react-icons/lib/go/link"));

var _fileMedia = _interopRequireDefault(require("react-icons/lib/go/file-media"));

var _Controls = _interopRequireDefault(require("./Controls.css"));

var _Control = _interopRequireDefault(require("./Control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const actions = [// Inline
{
  id: 'header3',
  label: 'Add header text',
  groupStart: true,
  icon: _GoTextSize.default
}, {
  id: 'bold',
  label: 'Add bold text',
  icon: _GoBold.default
}, {
  id: 'italic',
  label: 'Add italic text',
  icon: _GoItalic.default
}, // Block
{
  id: 'blockquote',
  label: 'Insert a quote',
  groupStart: true,
  icon: _quote.default
}, {
  id: 'code',
  label: 'Insert code',
  icon: _code.default
}, {
  id: 'link',
  label: 'Insert a link',
  icon: _link.default
}, {
  id: 'image',
  label: 'Insert an image',
  icon: _fileMedia.default
}, // Lists
{
  id: 'unorderedList',
  label: 'Add a bulleted list',
  groupStart: true,
  icon: _listUnordered.default
}, {
  id: 'orderedList',
  label: 'Add a numbered list',
  icon: _listOrdered.default
}];

function Controls(props) {
  const className = props.float ? _Controls.default.actionButtons : _Controls.default.staticActionButtons;
  return _react.default.createElement("div", {
    className: className
  }, actions.map(action => _react.default.createElement(_Control.default, _extends({
    key: action.id
  }, action, {
    onClick: props.onClick
  }))));
}

Controls.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  float: _propTypes.default.bool.isRequired
};
var _default = Controls;
exports.default = _default;