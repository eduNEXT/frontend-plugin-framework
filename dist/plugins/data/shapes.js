"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slotOptionsShape = exports.pluginConfigShape = exports.iframePluginConfigShape = exports.directPluginConfigShape = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable react/forbid-prop-types */ /* eslint-disable import/prefer-default-export */
const pluginConfigShape = exports.pluginConfigShape = {
  /** Id for the plugin */
  id: _propTypes.default.string.isRequired,
  /** Plugin type */
  type: _propTypes.default.oneOf([_constants.IFRAME_PLUGIN, _constants.DIRECT_PLUGIN]).isRequired,
  /** Priority of the plugin — ordered low-to-high */
  priority: _propTypes.default.number
};
const iframePluginConfigShape = exports.iframePluginConfigShape = _objectSpread(_objectSpread({}, pluginConfigShape), {}, {
  /** URL for the iframe src */
  url: _propTypes.default.string.isRequired,
  /** Title attribute for the iframe */
  title: _propTypes.default.string.isRequired
});
const directPluginConfigShape = exports.directPluginConfigShape = _objectSpread(_objectSpread({}, pluginConfigShape), {}, {
  /** Component that receives id and content as props */
  RenderWidget: _propTypes.default.func.isRequired,
  /** Content that is passed to the RenderWidget function */
  content: _propTypes.default.object
});
const slotOptionsShape = exports.slotOptionsShape = {
  mergeProps: _propTypes.default.bool
};
//# sourceMappingURL=shapes.js.map