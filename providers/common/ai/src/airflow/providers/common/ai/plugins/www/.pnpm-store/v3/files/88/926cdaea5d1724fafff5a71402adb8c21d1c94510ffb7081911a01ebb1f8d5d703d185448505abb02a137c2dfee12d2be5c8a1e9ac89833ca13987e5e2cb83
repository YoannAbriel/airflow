"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/dialog.connect.ts
var dialog_connect_exports = {};
__export(dialog_connect_exports, {
  connect: () => connect
});
module.exports = __toCommonJS(dialog_connect_exports);
var import_dialog = require("./dialog.anatomy.js");
var dom = __toESM(require("./dialog.dom.js"));
function connect(service, normalize) {
  const { state, send, context, prop, scope } = service;
  const ariaLabel = prop("aria-label");
  const open = state.matches("open");
  return {
    open,
    setOpen(nextOpen) {
      const open2 = state.matches("open");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "OPEN" : "CLOSE" });
    },
    getTriggerProps() {
      return normalize.button({
        ...import_dialog.parts.trigger.attrs,
        dir: prop("dir"),
        id: dom.getTriggerId(scope),
        "aria-haspopup": "dialog",
        type: "button",
        "aria-expanded": open,
        "data-state": open ? "open" : "closed",
        "aria-controls": dom.getContentId(scope),
        onClick(event) {
          if (event.defaultPrevented) return;
          send({ type: "TOGGLE" });
        }
      });
    },
    getBackdropProps() {
      return normalize.element({
        ...import_dialog.parts.backdrop.attrs,
        dir: prop("dir"),
        hidden: !open,
        id: dom.getBackdropId(scope),
        "data-state": open ? "open" : "closed"
      });
    },
    getPositionerProps() {
      return normalize.element({
        ...import_dialog.parts.positioner.attrs,
        dir: prop("dir"),
        id: dom.getPositionerId(scope),
        style: {
          pointerEvents: open ? void 0 : "none"
        }
      });
    },
    getContentProps() {
      const rendered = context.get("rendered");
      return normalize.element({
        ...import_dialog.parts.content.attrs,
        dir: prop("dir"),
        role: prop("role"),
        hidden: !open,
        id: dom.getContentId(scope),
        tabIndex: -1,
        "data-state": open ? "open" : "closed",
        "aria-modal": true,
        "aria-label": ariaLabel || void 0,
        "aria-labelledby": ariaLabel || !rendered.title ? void 0 : dom.getTitleId(scope),
        "aria-describedby": rendered.description ? dom.getDescriptionId(scope) : void 0
      });
    },
    getTitleProps() {
      return normalize.element({
        ...import_dialog.parts.title.attrs,
        dir: prop("dir"),
        id: dom.getTitleId(scope)
      });
    },
    getDescriptionProps() {
      return normalize.element({
        ...import_dialog.parts.description.attrs,
        dir: prop("dir"),
        id: dom.getDescriptionId(scope)
      });
    },
    getCloseTriggerProps() {
      return normalize.button({
        ...import_dialog.parts.closeTrigger.attrs,
        dir: prop("dir"),
        id: dom.getCloseTriggerId(scope),
        type: "button",
        onClick(event) {
          if (event.defaultPrevented) return;
          event.stopPropagation();
          send({ type: "CLOSE" });
        }
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connect
});
