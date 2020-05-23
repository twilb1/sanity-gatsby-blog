"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MarkdownInput = _interopRequireDefault(require("./MarkdownInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: 'markdown',
  title: 'Markdown',
  type: 'string',
  inputComponent: _MarkdownInput.default
};
exports.default = _default;