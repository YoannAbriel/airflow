type OverflowAncestor = Array<VisualViewport | Window | HTMLElement | null>;
declare function getNearestOverflowAncestor(el: Node): HTMLElement;
declare function getOverflowAncestors(el: HTMLElement, list?: OverflowAncestor): OverflowAncestor;
declare function isInView(el: HTMLElement | Window | VisualViewport, ancestor: HTMLElement | Window | VisualViewport): boolean;
declare function isOverflowElement(el: HTMLElement): boolean;
interface ScrollOptions extends ScrollIntoViewOptions {
    rootEl: HTMLElement | null;
}
declare function scrollIntoView(el: HTMLElement | null | undefined, options?: ScrollOptions): void;
interface ScrollPosition {
    scrollLeft: number;
    scrollTop: number;
}
declare function getScrollPosition(element: HTMLElement | Window): ScrollPosition;

export { type OverflowAncestor, type ScrollOptions, type ScrollPosition, getNearestOverflowAncestor, getOverflowAncestors, getScrollPosition, isInView, isOverflowElement, scrollIntoView };
