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

// src/drawer.connect.ts
var drawer_connect_exports = {};
__export(drawer_connect_exports, {
  connect: () => connect
});
module.exports = __toCommonJS(drawer_connect_exports);
var import_dom_query = require("@zag-js/dom-query");
var import_utils = require("@zag-js/utils");
var import_drawer = require("./drawer.anatomy.js");
var dom = __toESM(require("./drawer.dom.js"));
var isVerticalDirection = (direction) => direction === "down" || direction === "up";
var isNegativeDirection = (direction) => direction === "up" || direction === "left";
function connect(service, normalize) {
  const { state, send, context, scope, prop } = service;
  const open = state.hasTag("open");
  const closed = state.matches("closed");
  const dragOffset = context.get("dragOffset");
  const dragging = dragOffset !== null;
  const snapPoint = context.get("snapPoint");
  const resolvedActiveSnapPoint = context.get("resolvedActiveSnapPoint");
  const swipeDirection = prop("swipeDirection");
  const contentSize = context.get("contentSize");
  const swipeStrength = context.get("swipeStrength");
  const snapPointOffset = resolvedActiveSnapPoint?.offset ?? 0;
  const currentOffset = dragOffset ?? snapPointOffset;
  const swipeMovement = dragging ? currentOffset - snapPointOffset : 0;
  const signedCurrentOffset = isNegativeDirection(swipeDirection) ? -currentOffset : currentOffset;
  const signedSnapPointOffset = isNegativeDirection(swipeDirection) ? -snapPointOffset : snapPointOffset;
  const signedMovement = isNegativeDirection(swipeDirection) ? -swipeMovement : swipeMovement;
  const swipeProgress = dragging && contentSize && contentSize > 0 ? Math.max(0, Math.min(1, Math.abs(signedMovement) / contentSize)) : 0;
  const translateX = isVerticalDirection(swipeDirection) ? 0 : signedCurrentOffset;
  const translateY = isVerticalDirection(swipeDirection) ? signedCurrentOffset : 0;
  function onPointerDown(event) {
    if (!(0, import_dom_query.isLeftClick)(event)) return;
    const target = (0, import_dom_query.getEventTarget)(event);
    if (target?.hasAttribute("data-no-drag") || target?.closest("[data-no-drag]")) return;
    if (state.matches("closing")) return;
    send({ type: "POINTER_DOWN", point: (0, import_dom_query.getEventPoint)(event) });
  }
  return {
    open,
    dragging,
    setOpen(nextOpen) {
      const open2 = state.hasTag("open");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "OPEN" : "CLOSE" });
    },
    snapPoints: prop("snapPoints"),
    swipeDirection,
    snapPoint,
    setSnapPoint(snapPoint2) {
      const currentSnapPoint = context.get("snapPoint");
      if (currentSnapPoint === snapPoint2) return;
      send({ type: "SNAP_POINT.SET", snapPoint: snapPoint2 });
    },
    getOpenPercentage() {
      if (!open) return 0;
      if (!contentSize) return 0;
      return Math.max(0, Math.min(1, 1 - currentOffset / contentSize));
    },
    getSnapPointIndex() {
      const snapPoints = prop("snapPoints");
      if (snapPoint === null) return -1;
      return snapPoints.indexOf(snapPoint);
    },
    getContentSize() {
      return contentSize;
    },
    getPositionerProps() {
      return normalize.element({
        ...import_drawer.parts.positioner.attrs,
        id: dom.getPositionerId(scope),
        dir: prop("dir"),
        hidden: closed,
        "data-state": open ? "open" : "closed",
        "data-swipe-direction": swipeDirection
      });
    },
    getContentProps(props = { draggable: true }) {
      const movementX = isVerticalDirection(swipeDirection) ? 0 : signedMovement;
      const movementY = isVerticalDirection(swipeDirection) ? signedMovement : 0;
      return normalize.element({
        ...import_drawer.parts.content.attrs,
        dir: prop("dir"),
        id: dom.getContentId(scope),
        tabIndex: -1,
        role: prop("role"),
        "aria-modal": prop("modal"),
        "aria-labelledby": dom.getTitleId(scope),
        hidden: !open,
        "data-state": open ? "open" : "closed",
        "data-expanded": resolvedActiveSnapPoint?.offset === 0 ? "" : void 0,
        "data-swipe-direction": swipeDirection,
        "data-swiping": dragging ? "" : void 0,
        "data-dragging": dragging ? "" : void 0,
        style: {
          transform: "translate3d(var(--drawer-translate-x, 0px), var(--drawer-translate-y, 0px), 0)",
          transitionDuration: dragging ? "0s" : void 0,
          "--drawer-translate": (0, import_utils.toPx)(translateY),
          "--drawer-translate-x": (0, import_utils.toPx)(translateX),
          "--drawer-translate-y": (0, import_utils.toPx)(translateY),
          "--drawer-snap-point-offset-x": isVerticalDirection(swipeDirection) ? "0px" : (0, import_utils.toPx)(signedSnapPointOffset),
          "--drawer-snap-point-offset-y": isVerticalDirection(swipeDirection) ? (0, import_utils.toPx)(signedSnapPointOffset) : "0px",
          "--drawer-swipe-movement-x": (0, import_utils.toPx)(movementX),
          "--drawer-swipe-movement-y": (0, import_utils.toPx)(movementY),
          "--drawer-swipe-strength": `${swipeStrength}`,
          willChange: "transform"
        },
        onPointerDown(event) {
          if (!props.draggable) return;
          onPointerDown(event);
        }
      });
    },
    getTitleProps() {
      return normalize.element({
        ...import_drawer.parts.title.attrs,
        id: dom.getTitleId(scope),
        dir: prop("dir")
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...import_drawer.parts.trigger.attrs,
        id: dom.getTriggerId(scope),
        type: "button",
        onClick() {
          send({ type: open ? "CLOSE" : "OPEN" });
        }
      });
    },
    getBackdropProps() {
      return normalize.element({
        ...import_drawer.parts.backdrop.attrs,
        id: dom.getBackdropId(scope),
        hidden: !open,
        "data-state": open ? "open" : "closed",
        "data-swiping": dragging ? "" : void 0,
        style: {
          willChange: "opacity",
          "--drawer-swipe-progress": `${swipeProgress}`,
          "--drawer-swipe-strength": `${swipeStrength}`
        }
      });
    },
    getGrabberProps() {
      return normalize.element({
        ...import_drawer.parts.grabber.attrs,
        id: dom.getGrabberId(scope),
        onPointerDown(event) {
          onPointerDown(event);
        },
        style: {
          touchAction: "none"
        }
      });
    },
    getGrabberIndicatorProps() {
      return normalize.element({
        ...import_drawer.parts.grabberIndicator.attrs,
        id: dom.getGrabberIndicatorId(scope)
      });
    },
    getCloseTriggerProps() {
      return normalize.button({
        ...import_drawer.parts.closeTrigger.attrs,
        id: dom.getCloseTriggerId(scope),
        onClick() {
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
