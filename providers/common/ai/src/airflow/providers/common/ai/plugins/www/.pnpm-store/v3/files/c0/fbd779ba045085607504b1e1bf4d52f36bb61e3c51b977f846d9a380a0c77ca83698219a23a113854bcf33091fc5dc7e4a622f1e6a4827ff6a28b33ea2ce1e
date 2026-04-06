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

// src/pointer-event-outside.ts
var pointer_event_outside_exports = {};
__export(pointer_event_outside_exports, {
  assignPointerEventToLayers: () => assignPointerEventToLayers,
  clearPointerEvent: () => clearPointerEvent,
  disablePointerEventsOutside: () => disablePointerEventsOutside
});
module.exports = __toCommonJS(pointer_event_outside_exports);
var import_dom_query = require("@zag-js/dom-query");
var import_layer_stack = require("./layer-stack.js");
var originalBodyPointerEvents;
function assignPointerEventToLayers() {
  import_layer_stack.layerStack.layers.forEach(({ node }) => {
    node.style.pointerEvents = import_layer_stack.layerStack.isBelowPointerBlockingLayer(node) ? "none" : "auto";
  });
}
function clearPointerEvent(node) {
  node.style.pointerEvents = "";
}
function disablePointerEventsOutside(node, persistentElements) {
  const doc = (0, import_dom_query.getDocument)(node);
  const cleanups = [];
  if (import_layer_stack.layerStack.hasPointerBlockingLayer() && !doc.body.hasAttribute("data-inert")) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    queueMicrotask(() => {
      doc.body.style.pointerEvents = "none";
      doc.body.setAttribute("data-inert", "");
    });
  }
  persistentElements?.forEach((el) => {
    const [promise, abort] = (0, import_dom_query.waitForElement)(
      () => {
        const node2 = el();
        return (0, import_dom_query.isHTMLElement)(node2) ? node2 : null;
      },
      { timeout: 1e3 }
    );
    promise.then((el2) => cleanups.push((0, import_dom_query.setStyle)(el2, { pointerEvents: "auto" })));
    cleanups.push(abort);
  });
  return () => {
    if (import_layer_stack.layerStack.hasPointerBlockingLayer()) return;
    queueMicrotask(() => {
      doc.body.style.pointerEvents = originalBodyPointerEvents;
      doc.body.removeAttribute("data-inert");
      if (doc.body.style.length === 0) doc.body.removeAttribute("style");
    });
    cleanups.forEach((fn) => fn());
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assignPointerEventToLayers,
  clearPointerEvent,
  disablePointerEventsOutside
});
