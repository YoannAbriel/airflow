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

// src/utils/find-closest-snap-point.ts
var find_closest_snap_point_exports = {};
__export(find_closest_snap_point_exports, {
  findClosestSnapPoint: () => findClosestSnapPoint
});
module.exports = __toCommonJS(find_closest_snap_point_exports);
function findClosestSnapPoint(offset, snapPoints) {
  return snapPoints.reduce((acc, curr) => {
    const closestDiff = Math.abs(offset - acc.offset);
    const currentDiff = Math.abs(offset - curr.offset);
    return currentDiff < closestDiff ? curr : acc;
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findClosestSnapPoint
});
