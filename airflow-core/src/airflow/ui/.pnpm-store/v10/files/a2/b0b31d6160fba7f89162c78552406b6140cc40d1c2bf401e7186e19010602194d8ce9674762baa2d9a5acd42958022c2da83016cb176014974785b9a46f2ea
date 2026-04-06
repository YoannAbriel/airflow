"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/drawer.registry.ts
var drawer_registry_exports = {};
__export(drawer_registry_exports, {
  drawerRegistry: () => drawerRegistry
});
module.exports = __toCommonJS(drawer_registry_exports);
var elements = /* @__PURE__ */ new Map();
var swipingIds = /* @__PURE__ */ new Set();
var listeners = /* @__PURE__ */ new Set();
function notify() {
  listeners.forEach((fn) => fn());
}
var drawerRegistry = {
  register(id, el) {
    elements.set(id, el);
    notify();
  },
  unregister(id) {
    swipingIds.delete(id);
    if (!elements.delete(id)) return;
    notify();
  },
  setSwiping(id, swiping) {
    const changed = swiping ? !swipingIds.has(id) : swipingIds.has(id);
    if (!changed) return;
    if (swiping) swipingIds.add(id);
    else swipingIds.delete(id);
    notify();
  },
  hasSwipingAfter(id) {
    const keys = [...elements.keys()];
    const myIndex = keys.indexOf(id);
    if (myIndex === -1) return false;
    return keys.slice(myIndex + 1).some((key) => swipingIds.has(key));
  },
  notify,
  getEntries() {
    return elements;
  },
  subscribe(fn) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  drawerRegistry
});
