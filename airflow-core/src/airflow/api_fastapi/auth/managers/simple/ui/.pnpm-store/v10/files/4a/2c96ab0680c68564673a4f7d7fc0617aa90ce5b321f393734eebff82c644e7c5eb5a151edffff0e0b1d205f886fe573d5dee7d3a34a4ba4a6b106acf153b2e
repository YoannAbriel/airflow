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

// src/utils/resolve-snap-point.ts
var resolve_snap_point_exports = {};
__export(resolve_snap_point_exports, {
  resolveSnapPoint: () => resolveSnapPoint
});
module.exports = __toCommonJS(resolve_snap_point_exports);
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function resolveSnapPointValue(snapPoint, viewportSize, rootFontSize) {
  if (!Number.isFinite(viewportSize) || viewportSize <= 0) return null;
  if (typeof snapPoint === "number") {
    if (!Number.isFinite(snapPoint)) return null;
    if (snapPoint <= 1) return clamp(snapPoint, 0, 1) * viewportSize;
    return snapPoint;
  }
  const trimmed = snapPoint.trim();
  if (trimmed.endsWith("px")) {
    const value = Number.parseFloat(trimmed);
    return Number.isFinite(value) ? value : null;
  }
  if (trimmed.endsWith("rem")) {
    const value = Number.parseFloat(trimmed);
    return Number.isFinite(value) ? value * rootFontSize : null;
  }
  return null;
}
function resolveSnapPoint(snapPoint, options) {
  const { popupSize, viewportSize, rootFontSize } = options;
  const maxSize = Math.min(popupSize, viewportSize);
  if (!Number.isFinite(maxSize) || maxSize <= 0) return null;
  const resolvedSize = resolveSnapPointValue(snapPoint, viewportSize, rootFontSize);
  if (resolvedSize === null || !Number.isFinite(resolvedSize)) return null;
  const height = clamp(resolvedSize, 0, maxSize);
  return {
    value: snapPoint,
    height,
    offset: Math.max(0, popupSize - height)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolveSnapPoint
});
