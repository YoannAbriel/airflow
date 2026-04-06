"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/utils/drag-manager.ts
var drag_manager_exports = {};
__export(drag_manager_exports, {
  DragManager: () => DragManager
});
module.exports = __toCommonJS(drag_manager_exports);
var import_find_closest_snap_point = require("./find-closest-snap-point.js");
var import_get_scroll_info = require("./get-scroll-info.js");
var DRAG_START_THRESHOLD = 0.3;
var SEQUENTIAL_THRESHOLD = 14;
var SNAP_VELOCITY_THRESHOLD = 500;
var SNAP_VELOCITY_MULTIPLIER = 0.3;
var MAX_SNAP_VELOCITY = 4e3;
var DragManager = class {
  constructor() {
    __publicField(this, "pointerStart", null);
    __publicField(this, "dragOffset", null);
    __publicField(this, "lastPoint", null);
    __publicField(this, "lastTimestamp", null);
    __publicField(this, "velocity", null);
  }
  setPointerStart(point) {
    this.pointerStart = point;
  }
  clearPointerStart() {
    this.pointerStart = null;
  }
  getPointerStart() {
    return this.pointerStart;
  }
  getAxisValue(point, direction) {
    return direction === "left" || direction === "right" ? point.x : point.y;
  }
  getDirectionSign(direction) {
    return direction === "up" || direction === "left" ? -1 : 1;
  }
  setDragOffsetForDirection(point, resolvedActiveSnapPointOffset, direction) {
    if (!this.pointerStart) return;
    const currentTimestamp = (/* @__PURE__ */ new Date()).getTime();
    const sign = this.getDirectionSign(direction);
    const axisValue = this.getAxisValue(point, direction);
    if (this.lastPoint) {
      const lastAxisValue = this.getAxisValue(this.lastPoint, direction);
      const delta2 = (axisValue - lastAxisValue) * sign;
      if (this.lastTimestamp) {
        const dt = currentTimestamp - this.lastTimestamp;
        if (dt > 0) {
          const calculatedVelocity = delta2 / dt * 1e3;
          this.velocity = Number.isFinite(calculatedVelocity) ? calculatedVelocity : 0;
        }
      }
    }
    this.lastPoint = point;
    this.lastTimestamp = currentTimestamp;
    const pointerStartAxis = this.getAxisValue(this.pointerStart, direction);
    let delta = (pointerStartAxis - axisValue) * sign - resolvedActiveSnapPointOffset;
    if (delta > 0) {
      delta = Math.sqrt(delta);
    }
    this.dragOffset = -delta;
  }
  getDragOffset() {
    return this.dragOffset;
  }
  clearDragOffset() {
    this.dragOffset = null;
  }
  getVelocity() {
    return this.velocity;
  }
  clearVelocityTracking() {
    this.lastPoint = null;
    this.lastTimestamp = null;
    this.velocity = null;
  }
  clear() {
    this.clearPointerStart();
    this.clearDragOffset();
    this.clearVelocityTracking();
  }
  shouldStartDragging(point, target, container, preventDragOnScroll, direction) {
    if (!this.pointerStart || !container) return false;
    if (preventDragOnScroll) {
      const sign = this.getDirectionSign(direction);
      const axis = this.getAxisValue(point, direction);
      const startAxis = this.getAxisValue(this.pointerStart, direction);
      const delta = (startAxis - axis) * sign;
      if (Math.abs(delta) < DRAG_START_THRESHOLD) return false;
      const { availableForwardScroll, availableBackwardScroll } = (0, import_get_scroll_info.getScrollInfo)(target, container, direction);
      if (delta > 0 && Math.abs(availableForwardScroll) > 1 || delta < 0 && Math.abs(availableBackwardScroll) > 0) {
        return false;
      }
    }
    return true;
  }
  findClosestSnapPoint(snapPoints, snapPoint, snapToSequentialPoints) {
    if (this.dragOffset === null) {
      return snapPoints[0]?.value ?? 1;
    }
    if (snapToSequentialPoints && snapPoint) {
      const currentIndex = snapPoints.findIndex((item) => Object.is(item.value, snapPoint.value));
      if (currentIndex >= 0) {
        const delta = this.dragOffset - snapPoint.offset;
        const dragDirection = Math.sign(delta);
        const velocityDirection = this.velocity !== null ? Math.sign(this.velocity) : 0;
        const shouldAdvance = dragDirection !== 0 && velocityDirection === dragDirection && Math.abs(this.velocity ?? 0) >= SNAP_VELOCITY_THRESHOLD;
        if (shouldAdvance) {
          const nextIndex = Math.min(Math.max(currentIndex + dragDirection, 0), snapPoints.length - 1);
          if (nextIndex !== currentIndex) {
            return snapPoints[nextIndex].value;
          }
        }
        if (delta > SEQUENTIAL_THRESHOLD) {
          return snapPoints[Math.min(currentIndex + 1, snapPoints.length - 1)]?.value ?? snapPoint.value;
        }
        if (delta < -SEQUENTIAL_THRESHOLD) {
          return snapPoints[Math.max(currentIndex - 1, 0)]?.value ?? snapPoint.value;
        }
        return snapPoint.value;
      }
    }
    let targetOffset = this.dragOffset;
    if (this.velocity !== null && Math.abs(this.velocity) >= SNAP_VELOCITY_THRESHOLD) {
      const clamped = Math.min(MAX_SNAP_VELOCITY, Math.max(-MAX_SNAP_VELOCITY, this.velocity));
      targetOffset += clamped * SNAP_VELOCITY_MULTIPLIER;
      targetOffset = Math.max(0, targetOffset);
    }
    const closest = (0, import_find_closest_snap_point.findClosestSnapPoint)(targetOffset, snapPoints);
    return closest.value;
  }
  computeSwipeStrength(targetOffset) {
    const MAX_DURATION_MS = 360;
    const MIN_SCALAR = 0.1;
    const MAX_SCALAR = 1;
    if (this.dragOffset === null || this.velocity === null) return MAX_SCALAR;
    const distance = Math.abs(this.dragOffset - targetOffset);
    const absVelocity = Math.abs(this.velocity);
    if (absVelocity <= 0 || distance <= 0) return MAX_SCALAR;
    const estimatedTimeMs = distance / absVelocity * 1e3;
    const normalized = Math.min(1, Math.max(0, estimatedTimeMs / MAX_DURATION_MS));
    return MIN_SCALAR + normalized * (MAX_SCALAR - MIN_SCALAR);
  }
  shouldDismiss(contentSize, snapPoints, swipeVelocityThreshold, closeThreshold) {
    if (this.dragOffset === null || this.velocity === null || contentSize === null) return false;
    const visibleSize = contentSize - this.dragOffset;
    const smallestSnapPoint = snapPoints.reduce((acc, curr) => curr.offset > acc.offset ? curr : acc);
    const isFastSwipe = this.velocity > 0 && this.velocity >= swipeVelocityThreshold;
    const closeThresholdInPixels = contentSize * (1 - closeThreshold);
    const smallestSnapPointVisibleSize = contentSize - smallestSnapPoint.offset;
    const isBelowSmallestSnapPoint = visibleSize < smallestSnapPointVisibleSize;
    const isBelowCloseThreshold = visibleSize < closeThresholdInPixels;
    if (snapPoints.length > 1) {
      return visibleSize <= 0 || isFastSwipe && isBelowSmallestSnapPoint;
    }
    const hasEnoughDragToDismiss = isBelowCloseThreshold && isBelowSmallestSnapPoint || visibleSize === 0;
    return isFastSwipe && isBelowSmallestSnapPoint || hasEnoughDragToDismiss;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DragManager
});
