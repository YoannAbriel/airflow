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

// src/tooltip.connect.ts
var tooltip_connect_exports = {};
__export(tooltip_connect_exports, {
  connect: () => connect
});
module.exports = __toCommonJS(tooltip_connect_exports);
var import_dom_query = require("@zag-js/dom-query");
var import_focus_visible = require("@zag-js/focus-visible");
var import_popper = require("@zag-js/popper");
var import_tooltip = require("./tooltip.anatomy.js");
var dom = __toESM(require("./tooltip.dom.js"));
var import_tooltip2 = require("./tooltip.store.js");
function connect(service, normalize) {
  const { state, context, send, scope, prop, event: _event } = service;
  const id = prop("id");
  const hasAriaLabel = !!prop("aria-label");
  const open = state.matches("open", "closing");
  const triggerId = dom.getTriggerId(scope);
  const contentId = dom.getContentId(scope);
  const disabled = prop("disabled");
  const popperStyles = (0, import_popper.getPlacementStyles)({
    ...prop("positioning"),
    placement: context.get("currentPlacement")
  });
  return {
    open,
    setOpen(nextOpen) {
      const open2 = state.matches("open", "closing");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "open" : "close" });
    },
    reposition(options = {}) {
      send({ type: "positioning.set", options });
    },
    getTriggerProps() {
      return normalize.button({
        ...import_tooltip.parts.trigger.attrs,
        id: triggerId,
        dir: prop("dir"),
        "data-expanded": (0, import_dom_query.dataAttr)(open),
        "data-state": open ? "open" : "closed",
        "aria-describedby": open ? contentId : void 0,
        onClick(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (!prop("closeOnClick")) return;
          send({ type: "close", src: "trigger.click" });
        },
        onFocus(event) {
          queueMicrotask(() => {
            if (event.defaultPrevented) return;
            if (disabled) return;
            if (_event.src === "trigger.pointerdown") return;
            if (!(0, import_focus_visible.isFocusVisible)()) return;
            send({ type: "open", src: "trigger.focus" });
          });
        },
        onBlur(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (id === import_tooltip2.store.get("id")) {
            send({ type: "close", src: "trigger.blur" });
          }
        },
        onPointerDown(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (!(0, import_dom_query.isLeftClick)(event)) return;
          if (!prop("closeOnPointerDown")) return;
          if (id === import_tooltip2.store.get("id")) {
            send({ type: "close", src: "trigger.pointerdown" });
          }
        },
        onPointerMove(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (event.pointerType === "touch") return;
          send({ type: "pointer.move" });
        },
        onPointerOver(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (event.pointerType === "touch") return;
          send({ type: "pointer.move" });
        },
        onPointerLeave() {
          if (disabled) return;
          send({ type: "pointer.leave" });
        },
        onPointerCancel() {
          if (disabled) return;
          send({ type: "pointer.leave" });
        }
      });
    },
    getArrowProps() {
      return normalize.element({
        id: dom.getArrowId(scope),
        ...import_tooltip.parts.arrow.attrs,
        dir: prop("dir"),
        style: popperStyles.arrow
      });
    },
    getArrowTipProps() {
      return normalize.element({
        ...import_tooltip.parts.arrowTip.attrs,
        dir: prop("dir"),
        style: popperStyles.arrowTip
      });
    },
    getPositionerProps() {
      return normalize.element({
        id: dom.getPositionerId(scope),
        ...import_tooltip.parts.positioner.attrs,
        dir: prop("dir"),
        style: popperStyles.floating
      });
    },
    getContentProps() {
      const isCurrentTooltip = import_tooltip2.store.get("id") === id;
      const isPrevTooltip = import_tooltip2.store.get("prevId") === id;
      const instant = import_tooltip2.store.get("instant") && (open && isCurrentTooltip || isPrevTooltip);
      return normalize.element({
        ...import_tooltip.parts.content.attrs,
        dir: prop("dir"),
        hidden: !open,
        "data-state": open ? "open" : "closed",
        "data-instant": (0, import_dom_query.dataAttr)(instant),
        role: hasAriaLabel ? void 0 : "tooltip",
        id: hasAriaLabel ? void 0 : contentId,
        "data-placement": context.get("currentPlacement"),
        onPointerEnter() {
          send({ type: "content.pointer.move" });
        },
        onPointerLeave() {
          send({ type: "content.pointer.leave" });
        },
        style: {
          pointerEvents: prop("interactive") ? "auto" : "none"
        }
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connect
});
