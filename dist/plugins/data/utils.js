"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapComponent = exports.organizePlugins = exports.getConfigSlots = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _frontendPlatform = require("@edx/frontend-platform");
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Called by PluginSlot to prepare the plugin changes for the given slot
 *
 * @param {Array} defaultContents - The default widgets where the plugin slot exists.
 * @param {Array} plugins - All of the changes assigned to the specific plugin slot
 * @returns {Array} - A sorted list of widgets with any additional properties needed to render them in the plugin slot
 */
const organizePlugins = (defaultContents, plugins) => {
  const newContents = [...defaultContents];
  plugins.forEach(change => {
    if (change.op === _constants.PLUGIN_OPERATIONS.Insert) {
      newContents.push(change.widget);
    } else if (change.op === _constants.PLUGIN_OPERATIONS.Hide) {
      const widget = newContents.find(w => w.id === change.widgetId);
      if (widget) {
        widget.hidden = true;
      }
    } else if (change.op === _constants.PLUGIN_OPERATIONS.Modify) {
      const widgetIdx = newContents.findIndex(w => w.id === change.widgetId);
      if (widgetIdx >= 0) {
        const widget = _objectSpread({}, newContents[widgetIdx]);
        newContents[widgetIdx] = change.fn(widget);
      }
    } else if (change.op === _constants.PLUGIN_OPERATIONS.Wrap) {
      const widgetIdx = newContents.findIndex(w => w.id === change.widgetId);
      if (widgetIdx >= 0) {
        const newWidget = _objectSpread({
          wrappers: []
        }, newContents[widgetIdx]);
        newWidget.wrappers.push(change.wrapper);
        newContents[widgetIdx] = newWidget;
      }
    } else {
      throw new Error('unknown direct plugin change operation');
    }
  });
  newContents.sort((a, b) => (a.priority - b.priority) * 10_000 + a.id.localeCompare(b.id));
  return newContents;
};

/** Wraps the plugin component with number of wrappers provided.
 *
 * @param {Function} renderComponent - Function that returns JSX (i.e. React Component)
 * @param {Array} wrappers - Array of components that each use a "component" prop to render the wrapped contents
 * @returns {React.ReactElement} - The plugin component wrapped by any number of wrappers provided.
*/
exports.organizePlugins = organizePlugins;
const wrapComponent = (renderComponent, wrappers) => wrappers.reduce(
// Disabled lint because currently we don't have a unique identifier for this
// The "component" and "wrapper" are both functions
// eslint-disable-next-line react/no-array-index-key
(component, wrapper, idx) => /*#__PURE__*/_react.default.createElement(wrapper, {
  component,
  idx
}), renderComponent());

/**
 * Called by usePluginSlot to retrieve the most up-to-date Config Document*
 * @returns {Object} - The pluginSlots object in Config Document
 */
exports.wrapComponent = wrapComponent;
const getConfigSlots = () => (0, _frontendPlatform.getConfig)()?.pluginSlots;
exports.getConfigSlots = getConfigSlots;
var _default = exports.default = {
  getConfigSlots,
  organizePlugins,
  wrapComponent
};
//# sourceMappingURL=utils.js.map