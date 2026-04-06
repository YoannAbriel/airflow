import { Service, EventObject, Machine } from '@zag-js/core';
import { DismissableElementHandlers } from '@zag-js/dismissable';
import { Point, RequiredBy, DirectionProperty, CommonProperties, MaybeElement, PropTypes } from '@zag-js/types';

declare class DragManager {
    private pointerStart;
    private dragOffset;
    private lastPoint;
    private lastTimestamp;
    private velocity;
    setPointerStart(point: Point): void;
    clearPointerStart(): void;
    getPointerStart(): Point | null;
    private getAxisValue;
    private getDirectionSign;
    setDragOffsetForDirection(point: Point, resolvedActiveSnapPointOffset: number, direction: SwipeDirection): void;
    getDragOffset(): number | null;
    clearDragOffset(): void;
    getVelocity(): number | null;
    clearVelocityTracking(): void;
    clear(): void;
    shouldStartDragging(point: Point, target: HTMLElement, container: HTMLElement | null, preventDragOnScroll: boolean, direction: SwipeDirection): boolean;
    findClosestSnapPoint(snapPoints: ResolvedSnapPoint[], snapPoint: ResolvedSnapPoint | null, snapToSequentialPoints: boolean): number | string;
    computeSwipeStrength(targetOffset: number): number;
    shouldDismiss(contentSize: number | null, snapPoints: ResolvedSnapPoint[], swipeVelocityThreshold: number, closeThreshold: number): boolean;
}

type SwipeDirection = "up" | "down" | "left" | "right";
type SnapPoint = number | string;
interface OpenChangeDetails {
    open: boolean;
}
interface ResolvedSnapPoint {
    value: SnapPoint;
    height: number;
    offset: number;
}
interface SnapPointChangeDetails {
    snapPoint: SnapPoint | null;
}
interface DrawerStackSnapshot {
    active: boolean;
    openCount: number;
    swipeProgress: number;
    frontmostHeight: number;
}
interface DrawerStack {
    getSnapshot(): DrawerStackSnapshot;
    subscribe(listener: () => void): () => void;
    register(id: string): void;
    unregister(id: string): void;
    setOpen(id: string, open: boolean): void;
    setHeight(id: string, height: number): void;
    setSwipe(id: string, swiping: boolean, progress: number): void;
}
interface DrawerStackApi<T extends PropTypes = PropTypes> {
    getIndentProps(): T["element"];
    getIndentBackgroundProps(): T["element"];
}
type ElementIds = Partial<{
    backdrop: string;
    positioner: string;
    content: string;
    title: string;
    header: string;
    trigger: string;
    grabber: string;
    grabberIndicator: string;
    closeTrigger: string;
}>;
interface DrawerProps extends DirectionProperty, CommonProperties, DismissableElementHandlers {
    /**
     * The ids of the elements in the drawer. Useful for composition.
     */
    ids?: ElementIds;
    /**
     * Whether to trap focus inside the sheet when it's opened.
     * @default true
     */
    trapFocus?: boolean | undefined;
    /**
     * Whether to prevent scrolling behind the sheet when it's opened
     * @default true
     */
    preventScroll?: boolean | undefined;
    /**
     * Whether to prevent pointer interaction outside the element and hide all content below it.
     * @default true
     */
    modal?: boolean | undefined;
    /**
     * Element to receive focus when the sheet is opened.
     */
    initialFocusEl?: (() => MaybeElement) | undefined;
    /**
     * Element to receive focus when the sheet is closed.
     */
    finalFocusEl?: (() => MaybeElement) | undefined;
    /**
     * Whether to restore focus to the element that had focus before the sheet was opened.
     * @default true
     */
    restoreFocus?: boolean | undefined;
    /**
     * The sheet's role
     * @default "dialog"
     */
    role?: "dialog" | "alertdialog" | undefined;
    /**
     * Whether the drawer is open.
     */
    open?: boolean | undefined;
    /**
     * The initial open state of the drawer.
     */
    defaultOpen?: boolean | undefined;
    /**
     * Function called when the open state changes.
     */
    onOpenChange?: ((details: OpenChangeDetails) => void) | undefined;
    /**
     * Whether to close the drawer when the outside is clicked.
     * @default true
     */
    closeOnInteractOutside?: boolean | undefined;
    /**
     * Whether to close the drawer when the escape key is pressed.
     * @default true
     */
    closeOnEscape?: boolean | undefined;
    /**
     * The snap points of the drawer.
     * Array of numbers or strings representing the snap points.
     * @default [1]
     */
    snapPoints?: SnapPoint[] | undefined;
    /**
     * The direction in which the drawer can be swiped.
     * @default "down"
     */
    swipeDirection?: SwipeDirection | undefined;
    /**
     * Whether the drawer should snap to sequential points when swiping.
     * @default false
     */
    snapToSequentialPoints?: boolean | undefined;
    /**
     * The threshold velocity (in pixels/s) for closing the drawer.
     * @default 700
     */
    swipeVelocityThreshold?: number;
    /**
     * The threshold distance for dismissing the drawer.
     * @default 0.25
     */
    closeThreshold?: number;
    /**
     * Whether to prevent dragging on scrollable elements.
     * When enabled, the sheet will not start dragging if the user is interacting with a scrollable element.
     * @default true
     */
    preventDragOnScroll?: boolean;
    /**
     * The currently active snap point.
     */
    snapPoint?: SnapPoint | null | undefined;
    /**
     * The default snap point of the drawer.
     * @default 1
     */
    defaultSnapPoint?: SnapPoint | null | undefined;
    /**
     * Callback fired when the snap point changes.
     */
    onSnapPointChange?: ((details: SnapPointChangeDetails) => void) | undefined;
    /**
     * Optional external store for coordinating app-level drawer stack visuals
     * (e.g. indent and background layers).
     */
    stack?: DrawerStack | undefined;
}
type PropsWithDefault = "closeOnInteractOutside" | "closeOnEscape" | "modal" | "trapFocus" | "restoreFocus" | "preventScroll" | "initialFocusEl" | "snapPoints" | "swipeDirection" | "snapToSequentialPoints" | "swipeVelocityThreshold" | "closeThreshold" | "preventDragOnScroll" | "defaultSnapPoint";
interface DrawerSchema {
    props: RequiredBy<DrawerProps, PropsWithDefault>;
    state: "open" | "closed" | "closing";
    tag: "open" | "closed";
    context: {
        dragOffset: number | null;
        snapPoint: SnapPoint | null;
        resolvedActiveSnapPoint: ResolvedSnapPoint | null;
        contentSize: number | null;
        viewportSize: number;
        rootFontSize: number;
        swipeStrength: number;
    };
    refs: {
        dragManager: DragManager;
    };
    computed: {
        resolvedSnapPoints: ResolvedSnapPoint[];
    };
    event: EventObject;
    action: string;
    guard: string;
    effect: string;
}
type DrawerService = Service<DrawerSchema>;
type DrawerMachine = Machine<DrawerSchema>;
interface ContentProps {
    /**
     * Whether the drawer content is draggable.
     * If false, the drawer can only be dragged by the grabber.
     * @default true
     */
    draggable?: boolean | undefined;
}
interface DrawerApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the drawer is open.
     */
    open: boolean;
    /**
     * Whether the drawer is currently being dragged.
     */
    dragging: boolean;
    /**
     * Function to open or close the menu.
     */
    setOpen: (open: boolean) => void;
    /**
     * The snap points of the drawer.
     */
    snapPoints: SnapPoint[];
    /**
     * The swipe direction of the drawer.
     */
    swipeDirection: SwipeDirection;
    /**
     * The currently active snap point.
     */
    snapPoint: SnapPoint | null;
    /**
     * Function to set the active snap point.
     */
    setSnapPoint: (snapPoint: SnapPoint | null) => void;
    /**
     * Get the current open percentage of the drawer.
     * @returns A value between 0-1 where:
     * - 0 = fully closed
     * - 1 = fully open at current snap point
     */
    getOpenPercentage: () => number;
    /**
     * Get the index of the currently active snap point.
     * @returns The index in the snapPoints array, or -1 if not found
     */
    getSnapPointIndex: () => number;
    /**
     * Get the current main-axis size of the drawer content.
     * @returns Size in pixels, or null if not measured yet
     */
    getContentSize: () => number | null;
    getPositionerProps: () => T["element"];
    getContentProps: (props?: ContentProps) => T["element"];
    getTitleProps: () => T["element"];
    getTriggerProps: () => T["element"];
    getBackdropProps: () => T["element"];
    getGrabberProps: () => T["element"];
    getGrabberIndicatorProps: () => T["element"];
    getCloseTriggerProps: () => T["element"];
}

export { type ContentProps as C, type DrawerApi as D, type ElementIds as E, type OpenChangeDetails as O, type ResolvedSnapPoint as R, type SnapPoint as S, type DrawerStack as a, type DrawerStackApi as b, type DrawerStackSnapshot as c, type DrawerMachine as d, type DrawerProps as e, type DrawerService as f, type SnapPointChangeDetails as g, type SwipeDirection as h, type DrawerSchema as i, DragManager as j };
