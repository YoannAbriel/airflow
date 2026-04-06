import "../chunk-QZ7TP4HQ.mjs";

// src/utils/resolve-snap-point.ts
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
export {
  resolveSnapPoint
};
