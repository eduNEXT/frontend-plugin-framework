"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@edx/frontend-platform/react");
var _i18n = require("@edx/frontend-platform/i18n");
var _hooks = require("./data/hooks");
var _constants = require("./data/constants");
var _Plugin = _interopRequireDefault(require("./Plugin.messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // TODO: create example-plugin-app/src/PluginOne.jsx for example of customizing errorFallback as part of APER-3042 https://2u-internal.atlassian.net/browse/APER-3042
function ErrorFallbackDefault() {
  const {
    formatMessage
  } = (0, _i18n.useIntl)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: formatMessage(_Plugin.default.unexpectedError)
    })
  });
}
function Plugin(_ref) {
  let {
    children,
    className,
    style,
    ready,
    ErrorFallbackComponent
  } = _ref;
  const [dimensions, setDimensions] = (0, _react.useState)({
    width: null,
    height: null
  });
  const finalStyle = (0, _react.useMemo)(() => _objectSpread(_objectSpread({}, dimensions), style), [dimensions, style]);

  // Need to confirm: When an error is caught here, the logging will be sent to the child MFE's logging service

  const ErrorFallback = ErrorFallbackComponent || ErrorFallbackDefault;
  (0, _hooks.useHostEvent)(_constants.PLUGIN_RESIZE, _ref2 => {
    let {
      payload
    } = _ref2;
    setDimensions({
      width: payload.width,
      height: payload.height
    });
  });
  (0, _react.useEffect)(() => {
    (0, _hooks.dispatchMountedEvent)();
    return () => {
      (0, _hooks.dispatchUnmountedEvent)();
    };
  }, []);
  (0, _react.useEffect)(() => {
    /** Ready defaults to true, but can be used to defer rendering the Plugin until certain processes have
     * occurred or conditions have been met */
    if (ready) {
      (0, _hooks.dispatchReadyEvent)();
    }
  }, [ready]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: className,
    style: finalStyle,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.ErrorBoundary, {
      fallbackComponent: /*#__PURE__*/(0, _jsxRuntime.jsx)(ErrorFallback, {}),
      children: children
    })
  });
}
var _default = exports.default = Plugin;
Plugin.propTypes = {
  /** The content for the Plugin */
  children: _propTypes.default.node.isRequired,
  /** Classes to apply to the Plugin wrapper component */
  className: _propTypes.default.string,
  /** Custom error fallback component */
  ErrorFallbackComponent: _propTypes.default.func,
  /** If ready is true, it will render the Plugin */
  ready: _propTypes.default.bool,
  /** Styles to apply to the Plugin wrapper component */
  style: _propTypes.default.shape({})
};
Plugin.defaultProps = {
  className: null,
  ErrorFallbackComponent: null,
  style: {},
  ready: true
};
//# sourceMappingURL=Plugin.js.map