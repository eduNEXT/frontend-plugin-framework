"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DIRECT_PLUGIN", {
  enumerable: true,
  get: function () {
    return _constants.DIRECT_PLUGIN;
  }
});
Object.defineProperty(exports, "IFRAME_PLUGIN", {
  enumerable: true,
  get: function () {
    return _constants.IFRAME_PLUGIN;
  }
});
Object.defineProperty(exports, "PLUGIN_OPERATIONS", {
  enumerable: true,
  get: function () {
    return _constants.PLUGIN_OPERATIONS;
  }
});
Object.defineProperty(exports, "Plugin", {
  enumerable: true,
  get: function () {
    return _Plugin.default;
  }
});
Object.defineProperty(exports, "PluginContainer", {
  enumerable: true,
  get: function () {
    return _PluginContainer.default;
  }
});
Object.defineProperty(exports, "PluginSlot", {
  enumerable: true,
  get: function () {
    return _PluginSlot.default;
  }
});
Object.defineProperty(exports, "usePluginSlot", {
  enumerable: true,
  get: function () {
    return _hooks.usePluginSlot;
  }
});
var _hooks = require("./data/hooks");
var _Plugin = _interopRequireDefault(require("./Plugin"));
var _PluginContainer = _interopRequireDefault(require("./PluginContainer"));
var _PluginSlot = _interopRequireDefault(require("./PluginSlot"));
var _constants = require("./data/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=index.js.map