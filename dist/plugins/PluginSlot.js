"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _paragon = require("@openedx/paragon");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _Plugin = _interopRequireDefault(require("./Plugin.messages"));
var _hooks = require("./data/hooks");
var _PluginContainer = _interopRequireDefault(require("./PluginContainer"));
var _utils = require("./data/utils");
var _shapes = require("./data/shapes");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["as", "children", "id", "pluginProps", "slotOptions"]; // eslint-disable-next-line import/no-extraneous-dependencies
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
const PluginSlot = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
      as,
      children,
      id,
      pluginProps,
      slotOptions
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  /** the plugins below are obtained by the id passed into PluginSlot by the Host MFE. See example/src/PluginsPage.jsx
  for an example of how PluginSlot is populated, and example/src/index.jsx for a dummy JS config that holds all plugins
  */

  const {
    keepDefault,
    plugins
  } = (0, _hooks.usePluginSlot)(id);
  const {
    formatMessage
  } = (0, _i18n.useIntl)();
  const defaultContents = _react.default.useMemo(() => {
    if (!keepDefault) {
      return [];
    }
    return [{
      id: 'default_contents',
      priority: 50,
      RenderWidget: children
    }];
  }, [children, keepDefault]);
  const finalPlugins = _react.default.useMemo(() => (0, _utils.organizePlugins)(defaultContents, plugins), [defaultContents, plugins]);

  // TODO: APER-3178 — Unique plugin props
  // https://2u-internal.atlassian.net/browse/APER-3178
  const {
    loadingFallback
  } = pluginProps;
  const defaultLoadingFallback = /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(pluginProps.className, 'd-flex justify-content-center align-items-center'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
      animation: "border",
      screenReaderText: formatMessage(_Plugin.default.loading)
    })
  });
  const finalLoadingFallback = loadingFallback !== undefined ? loadingFallback : defaultLoadingFallback;
  const finalChildren = [];
  if (finalPlugins.length > 0) {
    finalPlugins.forEach(pluginConfig => {
      // If hidden, don't push to finalChildren
      if (!pluginConfig.hidden) {
        let container;
        // If default content, render children (merging any custom defined props from
        // pluginConfig.content with any existing props on `RenderWidget`).
        if (pluginConfig.id === 'default_contents') {
          const propsForRenderWidget = pluginConfig.RenderWidget && /*#__PURE__*/_react.default.isValidElement(pluginConfig.RenderWidget) ? pluginConfig.RenderWidget.props : {};
          const updatedPropsForRenderWidget = (0, _utils.mergeRenderWidgetPropsWithPluginContent)({
            pluginSlotOptions: slotOptions,
            pluginConfig,
            pluginProps,
            renderWidgetProps: propsForRenderWidget
          });
          container = /*#__PURE__*/_react.default.isValidElement(pluginConfig.RenderWidget) ? /*#__PURE__*/_react.default.cloneElement(pluginConfig.RenderWidget, _objectSpread(_objectSpread({}, updatedPropsForRenderWidget), {}, {
            key: pluginConfig.id
          })) : pluginConfig.RenderWidget;
        } else {
          container = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PluginContainer.default, _objectSpread({
            config: pluginConfig,
            loadingFallback: finalLoadingFallback,
            slotOptions: slotOptions
          }, pluginProps), pluginConfig.id);
        }
        // If wrappers are provided, wrap the Plugin
        if (pluginConfig.wrappers) {
          finalChildren.push((0, _utils.wrapComponent)(() => container, pluginConfig.wrappers));
        } else {
          finalChildren.push(container);
        }
      }
    });
  }
  return /*#__PURE__*/_react.default.createElement(as, _objectSpread(_objectSpread({}, props), {}, {
    ref
  }), finalChildren);
});
PluginSlot.displayName = 'PluginSlot';
var _default = exports.default = PluginSlot;
PluginSlot.propTypes = {
  /** Element type for the PluginSlot wrapper component */
  as: _propTypes.default.elementType,
  /** Default children for the PluginSlot */
  children: _propTypes.default.node,
  /** ID of the PluginSlot configuration */
  id: _propTypes.default.string.isRequired,
  /** Props that are passed down to each Plugin in the Slot */
  pluginProps: _propTypes.default.shape(),
  /** Options passed to the PluginSlot */
  slotOptions: _propTypes.default.shape(_shapes.slotOptionsShape)
};
PluginSlot.defaultProps = {
  as: _react.default.Fragment,
  children: null,
  pluginProps: {},
  slotOptions: {}
};
//# sourceMappingURL=PluginSlot.js.map