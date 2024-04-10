"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _logging = require("@edx/frontend-platform/logging");
var _PluginContainerIframe = _interopRequireDefault(require("./PluginContainerIframe"));
var _PluginContainerDirect = _interopRequireDefault(require("./PluginContainerDirect"));
var _constants = require("./data/constants");
var _shapes = require("./data/shapes");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["config"]; // eslint-disable-next-line import/no-extraneous-dependencies
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function PluginContainer(_ref) {
  let {
      config
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (config === null) {
    return null;
  }

  // this will allow for future plugin types to be inserted in the PluginErrorBoundary
  let renderer = null;
  switch (config.type) {
    case _constants.IFRAME_PLUGIN:
      renderer = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginContainerIframe.default, _objectSpread({
        config: config
      }, props));
      break;
    case _constants.DIRECT_PLUGIN:
      renderer = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginContainerDirect.default, _objectSpread({
        config: config
      }, props));
      break;
    default:
      (0, _logging.logError)(`Config type ${config.type} is not valid.`);
      break;
  }
  return renderer;
}
var _default = exports.default = PluginContainer;
PluginContainer.propTypes = {
  /** Configuration for the Plugin in this container — i.e pluginSlot[id].example_plugin */
  config: _propTypes.default.shape(_shapes.pluginConfigShape)
};
PluginContainer.defaultProps = {
  config: null
};
//# sourceMappingURL=PluginContainer.js.map