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

// src/utils/get-scroll-info.ts
var get_scroll_info_exports = {};
__export(get_scroll_info_exports, {
  getScrollInfo: () => getScrollInfo
});
module.exports = __toCommonJS(get_scroll_info_exports);
function isVerticalScrollContainer(element) {
  const styles = getComputedStyle(element);
  const overflow = styles.overflowY;
  return overflow === "auto" || overflow === "scroll";
}
function isHorizontalScrollContainer(element) {
  const styles = getComputedStyle(element);
  const overflow = styles.overflowX;
  return overflow === "auto" || overflow === "scroll";
}
var isVerticalDirection = (direction) => direction === "up" || direction === "down";
function getScrollInfo(target, container, direction) {
  let element = target;
  let availableForwardScroll = 0;
  let availableBackwardScroll = 0;
  const vertical = isVerticalDirection(direction);
  while (element) {
    const clientSize = vertical ? element.clientHeight : element.clientWidth;
    const scrollPos = vertical ? element.scrollTop : element.scrollLeft;
    const scrollSize = vertical ? element.scrollHeight : element.scrollWidth;
    const scrolled = scrollSize - scrollPos - clientSize;
    const isScrollable = vertical ? isVerticalScrollContainer(element) : isHorizontalScrollContainer(element);
    if ((scrollPos !== 0 || scrolled !== 0) && isScrollable) {
      availableForwardScroll += scrolled;
      availableBackwardScroll += scrollPos;
    }
    if (element === container || element === document.documentElement) break;
    element = element.parentNode;
  }
  return {
    availableForwardScroll,
    availableBackwardScroll
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getScrollInfo
});
