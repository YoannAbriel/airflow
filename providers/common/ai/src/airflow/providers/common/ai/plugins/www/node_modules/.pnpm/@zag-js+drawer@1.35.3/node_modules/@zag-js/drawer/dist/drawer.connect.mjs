import "./chunk-QZ7TP4HQ.mjs";

// src/drawer.connect.ts
import { getEventPoint, getEventTarget, isLeftClick } from "@zag-js/dom-query";
import { toPx } from "@zag-js/utils";
import { parts } from "./drawer.anatomy.mjs";
import * as dom from "./drawer.dom.mjs";
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
    if (!isLeftClick(event)) return;
    const target = getEventTarget(event);
    if (target?.hasAttribute("data-no-drag") || target?.closest("[data-no-drag]")) return;
    if (state.matches("closing")) return;
    send({ type: "POINTER_DOWN", point: getEventPoint(event) });
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
        ...parts.positioner.attrs,
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
        ...parts.content.attrs,
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
          "--drawer-translate": toPx(translateY),
          "--drawer-translate-x": toPx(translateX),
          "--drawer-translate-y": toPx(translateY),
          "--drawer-snap-point-offset-x": isVerticalDirection(swipeDirection) ? "0px" : toPx(signedSnapPointOffset),
          "--drawer-snap-point-offset-y": isVerticalDirection(swipeDirection) ? toPx(signedSnapPointOffset) : "0px",
          "--drawer-swipe-movement-x": toPx(movementX),
          "--drawer-swipe-movement-y": toPx(movementY),
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
        ...parts.title.attrs,
        id: dom.getTitleId(scope),
        dir: prop("dir")
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        id: dom.getTriggerId(scope),
        type: "button",
        onClick() {
          send({ type: open ? "CLOSE" : "OPEN" });
        }
      });
    },
    getBackdropProps() {
      return normalize.element({
        ...parts.backdrop.attrs,
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
        ...parts.grabber.attrs,
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
        ...parts.grabberIndicator.attrs,
        id: dom.getGrabberIndicatorId(scope)
      });
    },
    getCloseTriggerProps() {
      return normalize.button({
        ...parts.closeTrigger.attrs,
        id: dom.getCloseTriggerId(scope),
        onClick() {
          send({ type: "CLOSE" });
        }
      });
    }
  };
}
export {
  connect
};
