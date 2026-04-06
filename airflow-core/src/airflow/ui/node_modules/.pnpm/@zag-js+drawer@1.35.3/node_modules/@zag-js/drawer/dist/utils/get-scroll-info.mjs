import "../chunk-QZ7TP4HQ.mjs";

// src/utils/get-scroll-info.ts
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
export {
  getScrollInfo
};
