"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _progressiveDisclosureLine2x = _interopRequireDefault(require("./assets/progressive-disclosure-line@2x.png"));

var _Preview = _interopRequireDefault(require("./Preview.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderers = {
  html: ({
    isBlock,
    skipHtml,
    escapeHtml,
    children,
    value
  }) => {
    if (!isBlock) {
      return children || value;
    }

    if (escapeHtml) {
      return _react.default.createElement("div", {
        className: _Preview.default.escapedHtml
      }, value);
    }

    if (skipHtml) {
      return _react.default.createElement("div", {
        className: _Preview.default.removedHtml,
        style: {
          backgroundImage: `url(${_progressiveDisclosureLine2x.default}`
        }
      }, _react.default.createElement("div", {
        className: _Preview.default.removedHtmlInner
      }, "Skipped HTML"));
    }

    return children || value;
  }
};
const defaultOptions = {
  className: _Preview.default.root,
  skipHtml: true,
  renderers
};
var _default = defaultOptions;
exports.default = _default;