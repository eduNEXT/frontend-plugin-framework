"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IFRAME_FEATURE_POLICY = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _constants = require("./data/constants");
var _hooks = require("./data/hooks");
var _shapes = require("./data/shapes");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["config", "loadingFallback", "className"]; // eslint-disable-next-line import/no-extraneous-dependencies
/**
 * Feature policy for iframe, allowing access to certain courseware-related media.
 *
 * We must use the wildcard (*) origin for each feature, as courseware content
 * may be embedded in external iframes. Notably, xblock-lti-consumer is a popular
 * block that iframes external course content.

 * This policy was selected in conference with the edX Security Working Group.
 * Changes to it should be vetted by them (security@edx.org).
 */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
const IFRAME_FEATURE_POLICY = exports.IFRAME_FEATURE_POLICY = 'fullscreen; microphone *; camera *; midi *; geolocation *; encrypted-media *';
function PluginContainerIframe(_ref) {
  let {
      config,
      loadingFallback,
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    url,
    title
  } = config;
  const [mounted, setMounted] = (0, _react.useState)(false);
  const [ready, setReady] = (0, _react.useState)(false);
  const [iframeRef, iframeElement, width, height] = (0, _hooks.useElementSize)();
  (0, _react.useEffect)(() => {
    if (mounted) {
      (0, _hooks.dispatchPluginEvent)(iframeElement, {
        type: _constants.PLUGIN_RESIZE,
        payload: {
          width,
          height
        }
      }, url);
    }
  }, [iframeElement, mounted, width, height, url]);
  (0, _hooks.usePluginEvent)(iframeElement, _constants.PLUGIN_MOUNTED, () => {
    setMounted(true);
  });
  (0, _hooks.usePluginEvent)(iframeElement, _constants.PLUGIN_READY, () => {
    setReady(true);
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", _objectSpread({
      ref: iframeRef,
      title: title,
      src: url,
      allow: IFRAME_FEATURE_POLICY,
      referrerPolicy: "origin" // The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
      ,
      className: (0, _classnames.default)('border border-0 w-100', {
        'd-none': !ready
      }, className)
    }, props)), !ready && loadingFallback]
  });
}
var _default = exports.default = PluginContainerIframe;
PluginContainerIframe.propTypes = {
  /** Configuration for the Plugin in this container (i.e. pluginSlot[id].example_plugin) */
  config: _propTypes.default.shape(_shapes.iframePluginConfigShape),
  /** Custom fallback component used when component is not ready (i.e. "loading") */
  loadingFallback: _propTypes.default.node,
  /** Classes to apply to the iframe */
  className: _propTypes.default.string
};
PluginContainerIframe.defaultProps = {
  config: null,
  loadingFallback: null,
  className: null
};
//# sourceMappingURL=PluginContainerIframe.js.map