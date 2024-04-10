"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLUGIN_UNMOUNTED = exports.PLUGIN_RESIZE = exports.PLUGIN_READY = exports.PLUGIN_OPERATIONS = exports.PLUGIN_MOUNTED = exports.IFRAME_PLUGIN = exports.DIRECT_PLUGIN = void 0;
const IFRAME_PLUGIN = exports.IFRAME_PLUGIN = 'IFRAME_PLUGIN'; // loads iframe at the URL, rather than loading a JS file.
const DIRECT_PLUGIN = exports.DIRECT_PLUGIN = 'DIRECT_PLUGIN';

// Plugin lifecycle events
const PLUGIN_MOUNTED = exports.PLUGIN_MOUNTED = 'PLUGIN_MOUNTED';
const PLUGIN_READY = exports.PLUGIN_READY = 'PLUGIN_READY';
const PLUGIN_UNMOUNTED = exports.PLUGIN_UNMOUNTED = 'PLUGIN_UNMOUNTED';
const PLUGIN_RESIZE = exports.PLUGIN_RESIZE = 'PLUGIN_RESIZE';

/**
 * @description PLUGIN_OPERATIONS defines the changes to be made to either the default widget(s) or to any
 * that are inserted
 * @property {string} Insert - inserts a new widget into the DirectPluginSlot
 * @property {string} Hide - used to hide a default widget based on the widgetId
 * @property {string} Modify - used to modify/replace a widget's content
 * @property {string} Wrap - wraps a widget with a React element or fragment
 *
 */
const PLUGIN_OPERATIONS = exports.PLUGIN_OPERATIONS = {
  Insert: 'insert',
  Hide: 'hide',
  Modify: 'modify',
  Wrap: 'wrap'
};
//# sourceMappingURL=constants.js.map