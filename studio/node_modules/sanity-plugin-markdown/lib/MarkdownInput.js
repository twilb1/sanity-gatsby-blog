"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _textareaEditor = _interopRequireDefault(require("textarea-editor"));

var _diffMatchPatch = _interopRequireDefault(require("diff-match-patch"));

var _reactAutosizeTextarea = _interopRequireDefault(require("react-autosize-textarea"));

var _default = _interopRequireDefault(require("part:@sanity/components/textinputs/default"));

var _default2 = _interopRequireDefault(require("part:@sanity/components/formfields/default"));

var _confirm = _interopRequireDefault(require("part:@sanity/components/dialogs/confirm"));

var _formBuilder = require("part:@sanity/form-builder");

var _defaultStyle = _interopRequireDefault(require("part:@sanity/components/textareas/default-style"));

var _ModeControls = _interopRequireDefault(require("./ModeControls"));

var _Controls = _interopRequireDefault(require("./Controls"));

var _Preview = _interopRequireDefault(require("./Preview"));

var _MarkdownInput = _interopRequireDefault(require("./MarkdownInput.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let instanceId = 1;
const set = _formBuilder.patches.set,
      unset = _formBuilder.patches.unset;

const noop = () => {};

const dmp = new _diffMatchPatch.default();
const isMac = navigator.userAgent.includes('Mac OS');

const upperFirst = str => `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

const DefaultTextArea = props => _react.default.createElement("textarea", props);

const defaultOptions = {
  editorClassName: _defaultStyle.default.textarea,
  minRows: 10,
  usePreview: true,
  autoGrow: true,
  previewOptions: _Preview.default.defaultOptions
};

const getElementHeight = el => {
  if (!el) {
    return undefined;
  }

  const style = getComputedStyle(el);
  return el.clientHeight - (parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
}; // eslint-disable-next-line react/no-multi-comp


class MarkdownInput extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "id", `md-input-${Date.now()}-${instanceId++}`);

    _defineProperty(this, "state", {
      mode: 'write',
      hasFocus: false
    });

    _defineProperty(this, "previewButtonRef", _react.default.createRef());

    _defineProperty(this, "setInput", input => {
      this._input = input;
      this._editor = new _textareaEditor.default(input);
    });

    _defineProperty(this, "setUrlInput", input => {
      this._urlInput = input;

      if (input) {
        input.focus();
      }
    });

    _defineProperty(this, "handleKeyDown", evt => {
      if (!this.state.hasFocus) {
        return;
      }

      const hasModifier = isMac ? evt.metaKey : evt.ctrlKey; // Toggle preview/write mode (ctrl + shift + p)

      if (evt.key === 'p' && hasModifier && evt.shiftKey) {
        evt.preventDefault();
        this.handleToggleMode();
      } // Toggle bold (ctrl + b)


      if (evt.key === 'b' && hasModifier) {
        evt.preventDefault();

        this._editor.toggle('bold');
      } // Toggle italic (ctrl + i)


      if (evt.key === 'i' && hasModifier) {
        evt.preventDefault();

        this._editor.toggle('italic');
      } // Toggle link (ctrl + k)


      if (evt.key === 'k' && hasModifier) {
        evt.preventDefault();
        this.setState({
          showUrlDialogFor: 'link'
        });
      } // Toggle ordered list (ctrl + shift + 7)


      if (evt.key === '7' && hasModifier && evt.shiftKey) {
        evt.preventDefault();

        this._editor.toggle('orderedList');
      } // Toggle unordered list (ctrl + shift + 8)


      if (evt.key === '8' && hasModifier && evt.shiftKey) {
        evt.preventDefault();

        this._editor.toggle('unorderedList');
      } // Toggle heading (ctrl + alt + [1-5])


      if (/^Digit[1-5]$/.test(evt.code) && hasModifier && evt.altKey) {
        evt.preventDefault();

        this._editor.toggle(`header${evt.code.slice(-1)}`);
      }
    });

    _defineProperty(this, "getSelectedText", () => {
      if (!this._editor || !this._input) {
        return '';
      }

      const value = this._input.value;

      const _this$_editor$range = this._editor.range(),
            _this$_editor$range2 = _slicedToArray(_this$_editor$range, 2),
            fromIndex = _this$_editor$range2[0],
            toIndex = _this$_editor$range2[1];

      return value.slice(fromIndex, toIndex);
    });

    _defineProperty(this, "recordEditPosition", () => {
      if (!this._editor || !this._input) {
        return null;
      }

      const threshold = 4;
      const value = this._input.value;

      const _this$_editor$range3 = this._editor.range(),
            _this$_editor$range4 = _slicedToArray(_this$_editor$range3, 2),
            fromIndex = _this$_editor$range4[0],
            toIndex = _this$_editor$range4[1];

      const start = Math.max(0, fromIndex - threshold);
      const end = Math.min(value.length, toIndex + threshold);
      const text = value.slice(start, end);
      const cursorDiff = fromIndex - start;
      this.editPosition = {
        text,
        cursorDiff,
        searchFrom: start,
        length: toIndex - fromIndex,
        index: fromIndex
      };
      return this.editPosition;
    });

    _defineProperty(this, "restoreEditPosition", () => {
      if (!this.editPosition) {
        return;
      }

      const value = this.props.value;
      const _this$editPosition = this.editPosition,
            text = _this$editPosition.text,
            cursorDiff = _this$editPosition.cursorDiff,
            searchFrom = _this$editPosition.searchFrom,
            length = _this$editPosition.length,
            index = _this$editPosition.index; // Search for the string at the location we found it at

      const foundIndex = dmp.match_main(value, text, searchFrom);
      const wasFound = foundIndex !== -1;

      if (wasFound) {
        // We found the string near the location given, try to restore cursor
        const fromIndex = foundIndex + cursorDiff;
        const toIndex = fromIndex + length;

        this._editor.range([fromIndex, toIndex]);
      } else {
        // Fall back to original selection regardless of content if we can't find a match
        this._editor.range([index, index + length]);
      }

      this.editPosition = null;
    });

    _defineProperty(this, "getEditorHeight", () => getElementHeight(this._editor && this._editor.el));

    _defineProperty(this, "handlePreventClick", evt => evt.preventDefault());

    _defineProperty(this, "handleBlurred", () => this.setState({
      hasFocus: false
    }));

    _defineProperty(this, "handleFocused", () => this.setState({
      hasFocus: true
    }));

    _defineProperty(this, "handleSetWriteMode", () => {
      this.setState({
        mode: 'write',
        editorHeight: this.getEditorHeight()
      }, () => this.focus());
    });

    _defineProperty(this, "handleSetPreviewMode", () => {
      this.setState({
        mode: 'preview',
        editorHeight: this.getEditorHeight()
      });
    });

    _defineProperty(this, "handleToggleMode", () => {
      const options = this.props.type.options || {};
      const usePreview = typeof options.usePreview === 'undefined' ? true : options.usePreview;

      if (!usePreview) {
        return;
      }

      this.handleCloseUrlDialog();
      this.setState(({
        mode
      }) => ({
        mode: mode === 'write' ? 'preview' : 'write',
        editorHeight: this.getEditorHeight()
      }));
    });

    _defineProperty(this, "handleInputFocused", evt => {
      this.setState({
        hasFocus: true
      });
      this.props.onFocus(evt);
    });

    _defineProperty(this, "handleInputBlurred", evt => {
      this.setState({
        hasFocus: false
      });
      this.props.onBlur(evt);
    });

    _defineProperty(this, "handleFocusRedirect", () => {
      this.handleFocused();

      if (!this.previewButtonRef) {
        return;
      }

      const ref = this.previewButtonRef.current || this.previewButtonRef;

      if (ref.focus) {
        ref.focus();
      }
    });

    _defineProperty(this, "handleChange", event => {
      this._didInput = true;
      const value = event.currentTarget.value;
      this.props.onChange(_formBuilder.PatchEvent.from(value ? set(value) : unset()));
    });

    _defineProperty(this, "handleAction", (event, action) => {
      const isParameterized = action === 'link' || action === 'image';

      if (!isParameterized) {
        this._editor.toggle(action);

        return;
      }

      if (this._editor.hasFormat(action)) {
        this._editor.unformat(action);
      } else {
        this.setState({
          showUrlDialogFor: action
        });
      }
    });

    _defineProperty(this, "handleCloseUrlDialog", callback => {
      const cb = typeof callback === 'function' ? callback : noop;
      this.setState({
        showUrlDialogFor: null,
        urlValue: ''
      }, () => {
        this.focus();
        cb();
      });
    });

    _defineProperty(this, "handleUrlInputChange", evt => {
      this.setState({
        urlValue: evt.target.value
      });
    });

    _defineProperty(this, "handleUrlInputKeyUp", evt => {
      if (evt.key === 'Enter') {
        this.handleUrlInputComplete();
      }
    });

    _defineProperty(this, "handleUrlInputComplete", () => {
      const _this$state = this.state,
            showUrlDialogFor = _this$state.showUrlDialogFor,
            urlValue = _this$state.urlValue;
      this.handleCloseUrlDialog(() => {
        this._editor.toggle(showUrlDialogFor, urlValue || undefined);
      });
    });
  }

  focus() {
    if (this._input) {
      this._input.focus();
    }
  }

  setValidityFromMarkers(markers) {
    if (!this._input) {
      return;
    }

    const validation = markers.filter(marker => marker.type === 'validation');
    const errors = validation.filter(marker => marker.level === 'error');
    const validity = errors && errors.length > 0 ? errors[0].item.message : '';

    this._input.setCustomValidity(validity);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, true);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    let record = false;
    const snapshot = {};

    if (prevProps.value !== this.props.value && !this._didInput) {
      // Someone else is updating the value, record our position and
      // restore it from snapshot after update
      record = true;
      this.recordEditPosition();
      snapshot.restoreEditPosition = true;
    }

    if (prevState.mode === 'write' && this.state.mode !== 'write') {
      // We'll manually restore edit position when back from preview
      this.recordEditPosition();
    }

    return record ? snapshot : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this._didInput = false;

    if (prevProps.markers !== this.props.markers) {
      this.setValidityFromMarkers(this.props.markers);
    }

    if (this.state.mode === 'write' && prevState.mode !== 'write' || snapshot && snapshot.restoreEditPosition) {
      this.restoreEditPosition();
    }

    if (!prevState.showUrlDialogFor && this.state.showUrlDialogFor && this._urlInput) {
      this._urlInput.focus();
    }
  } // eslint-disable-next-line complexity


  render() {
    const _this$state2 = this.state,
          mode = _this$state2.mode,
          showUrlDialogFor = _this$state2.showUrlDialogFor,
          urlValue = _this$state2.urlValue,
          editorHeight = _this$state2.editorHeight;
    const _this$props = this.props,
          value = _this$props.value,
          markers = _this$props.markers,
          type = _this$props.type,
          readOnly = _this$props.readOnly,
          level = _this$props.level;

    const options = _objectSpread({}, defaultOptions, type.options || {});

    const usePreview = options.usePreview,
          autoGrow = options.autoGrow,
          minRows = options.minRows;
    const inWriteMode = mode === 'write';
    const TextArea = autoGrow ? _reactAutosizeTextarea.default : DefaultTextArea;
    const MarkdownPreview = options.renderPreview || _Preview.default;
    return _react.default.createElement(_default2.default, {
      markers: markers,
      level: level,
      label: type.title,
      labelFor: this.id,
      description: type.description
    }, _react.default.createElement("div", {
      className: _MarkdownInput.default.tabs
    }, usePreview && _react.default.createElement(_ModeControls.default, {
      previewRef: this.previewButtonRef,
      currentMode: mode,
      onSetWriteMode: this.handleSetWriteMode,
      onSetPreviewMode: this.handleSetPreviewMode,
      onBlur: this.handleBlurred,
      onFocus: this.handleFocused
    }), _react.default.createElement(_Controls.default, {
      onClick: this.handleAction,
      float: usePreview
    })), _react.default.createElement("div", {
      className: _defaultStyle.default.root
    }, inWriteMode ? _react.default.createElement(TextArea, {
      id: this.id,
      readOnly: readOnly,
      className: options.editorClassName,
      rows: minRows,
      value: value,
      onInput: this.handleChange,
      onFocus: this.handleInputFocused,
      onBlur: this.handleInputBlurred,
      autoComplete: "off",
      innerRef: this.setInput,
      placeholder: type.placeholder
    }) : _react.default.createElement("div", {
      className: _MarkdownInput.default.preview,
      style: {
        minHeight: `${editorHeight}px`
      },
      onClick: this.handlePreventClick
    }, _react.default.createElement("input", {
      className: _MarkdownInput.default.previewFocusTarget,
      id: this.id,
      onFocus: this.handleFocusRedirect
    }), _react.default.createElement(MarkdownPreview, {
      options: _objectSpread({}, defaultOptions.previewOptions, options.previewOptions),
      value: value
    }))), showUrlDialogFor && _react.default.createElement(_confirm.default, {
      onCancel: this.handleCloseUrlDialog,
      onClose: this.handleCloseUrlDialog,
      onConfirm: this.handleUrlInputComplete,
      confirmButtonText: "Add"
    }, _react.default.createElement(_default.default, {
      type: "url",
      value: urlValue,
      placeholder: `${upperFirst(showUrlDialogFor)} URL`,
      onChange: this.handleUrlInputChange,
      onKeyUp: this.handleUrlInputKeyUp,
      ref: this.setUrlInput
    })));
  }

}

exports.default = MarkdownInput;

_defineProperty(MarkdownInput, "defaultOptions", _objectSpread({}, defaultOptions));

_defineProperty(MarkdownInput, "propTypes", {
  value: _propTypes.default.string,
  level: _propTypes.default.number.isRequired,
  readOnly: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  type: _propTypes.default.shape({
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    placeholder: _propTypes.default.string,
    options: _propTypes.default.shape({
      editorClassName: _propTypes.default.string,
      minRows: _propTypes.default.number,
      usePreview: _propTypes.default.bool,
      autoGrow: _propTypes.default.bool,
      // eslint-disable-next-line react/forbid-foreign-prop-types
      previewOptions: _propTypes.default.shape(_reactMarkdown.default.propTypes || {}),
      renderPreview: _propTypes.default.func
    })
  }).isRequired,
  markers: _propTypes.default.arrayOf(_propTypes.default.shape({
    type: _propTypes.default.string.isRequired,
    level: _propTypes.default.string.isRequired,
    item: _propTypes.default.shape({
      message: _propTypes.default.string.isRequired
    })
  }))
});

_defineProperty(MarkdownInput, "defaultProps", {
  value: '',
  readOnly: false,
  onFocus: noop,
  onBlur: noop,
  markers: []
});