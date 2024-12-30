"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _shapes = require("./data/shapes");
var _utils = require("./data/utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["config", "slotOptions", "loadingFallback"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function PluginContainerDirect(_ref) {
  let {
      config,
      slotOptions,
      loadingFallback
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    RenderWidget,
    id
  } = config;

  // When applicable, merge base RenderWidget props with custom plugin content, if any.
  const propsForRenderWidget = (0, _utils.mergeRenderWidgetPropsWithPluginContent)({
    pluginSlotOptions: slotOptions,
    pluginConfig: config,
    renderWidgetProps: props
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Suspense, {
    fallback: loadingFallback,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(RenderWidget, _objectSpread({
      id: id
    }, propsForRenderWidget))
  });
}
PluginContainerDirect.propTypes = {
  /** Configuration for the Plugin in this container (i.e. pluginSlot[id].example_plugin) */
  config: _propTypes.default.shape(_shapes.directPluginConfigShape).isRequired,
  /** Custom fallback component used when component is not ready (i.e. "loading") */
  loadingFallback: _propTypes.default.node,
  /** Options passed to the PluginSlot */
  slotOptions: _propTypes.default.shape(_shapes.slotOptionsShape)
};
PluginContainerDirect.defaultProps = {
  loadingFallback: null,
  slotOptions: {}
};
var _default = exports.default = PluginContainerDirect;
//# sourceMappingURL=PluginContainerDirect.js.map