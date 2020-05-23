"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _default2 = _interopRequireDefault(require("part:@sanity/components/buttons/default"));

var _MarkdownInput = _interopRequireDefault(require("./MarkdownInput.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModeControls(props) {
  const currentMode = props.currentMode,
        onSetPreviewMode = props.onSetPreviewMode,
        onSetWriteMode = props.onSetWriteMode,
        onBlur = props.onBlur,
        onFocus = props.onFocus;
  const inWriteMode = currentMode === 'write';
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_default2.default, {
    className: inWriteMode ? _MarkdownInput.default.activeTab : _MarkdownInput.default.tab,
    kind: "simple",
    type: "button",
    ripple: false,
    color: inWriteMode ? 'primary' : undefined,
    onClick: onSetWriteMode,
    onFocus: onFocus,
    onBlur: onBlur
  }, "Write"), _react.default.createElement(_default2.default // eslint-disable-next-line react/prop-types
  , {
    ref: props.previewRef,
    className: inWriteMode ? _MarkdownInput.default.tab : _MarkdownInput.default.activeTab,
    kind: "simple",
    type: "button",
    ripple: false,
    color: inWriteMode ? undefined : 'primary',
    onClick: onSetPreviewMode,
    onFocus: onFocus,
    onBlur: onBlur
  }, "Preview"));
}

ModeControls.propTypes = {
  currentMode: _propTypes.default.string.isRequired,
  onSetWriteMode: _propTypes.default.func.isRequired,
  onSetPreviewMode: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func.isRequired
};
var _default = ModeControls;
exports.default = _default;