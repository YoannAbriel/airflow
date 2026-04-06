import "../chunk-QZ7TP4HQ.mjs";

// src/utils/find-closest-snap-point.ts
function findClosestSnapPoint(offset, snapPoints) {
  return snapPoints.reduce((acc, curr) => {
    const closestDiff = Math.abs(offset - acc.offset);
    const currentDiff = Math.abs(offset - curr.offset);
    return currentDiff < closestDiff ? curr : acc;
  });
}
export {
  findClosestSnapPoint
};
