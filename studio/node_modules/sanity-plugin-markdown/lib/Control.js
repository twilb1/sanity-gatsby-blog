"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Controls = _interopRequireDefault(require("./Controls.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const iconSize = 20;

class Control extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", evt => {
      const _this$props = this.props,
            onClick = _this$props.onClick,
            id = _this$props.id;
      onClick(evt, id);
    });
  }

  render() {
    const _this$props2 = this.props,
          label = _this$props2.label,
          icon = _this$props2.icon,
          groupStart = _this$props2.groupStart;
    const className = groupStart ? _Controls.default.buttonGroupStart : _Controls.default.button;
    const Icon = icon;
    return _react.default.createElement("button", {
      type: "button",
      role: "button",
      color: "#586069",
      className: className,
      "aria-label": label,
      title: label,
      onClick: this.handleClick,
      tabIndex: "-1"
    }, _react.default.createElement(Icon, {
      size: iconSize
    }));
  }

}

Control.propTypes = {
  id: _propTypes.default.string.isRequired,
  groupStart: _propTypes.default.bool,
  icon: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
Control.defaultProps = {
  groupStart: false
};
var _default = Control;
exports.default = _default;