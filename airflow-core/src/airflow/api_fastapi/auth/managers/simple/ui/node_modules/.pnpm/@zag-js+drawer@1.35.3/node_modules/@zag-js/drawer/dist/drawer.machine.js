"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/drawer.machine.ts
var drawer_machine_exports = {};
__export(drawer_machine_exports, {
  machine: () => machine
});
module.exports = __toCommonJS(drawer_machine_exports);
var import_aria_hidden = require("@zag-js/aria-hidden");
var import_core = require("@zag-js/core");
var import_dismissable = require("@zag-js/dismissable");
var import_dom_query = require("@zag-js/dom-query");
var import_focus_trap = require("@zag-js/focus-trap");
var import_remove_scroll = require("@zag-js/remove-scroll");
var dom = __toESM(require("./drawer.dom.js"));
var import_drawer = require("./drawer.registry.js");
var import_drag_manager = require("./utils/drag-manager.js");
var import_resolve_snap_point = require("./utils/resolve-snap-point.js");
var isVerticalDirection = (direction) => direction === "down" || direction === "up";
function dedupeSnapPoints(points) {
  if (points.length <= 1) return points;
  const deduped = [];
  const seenHeights = [];
  for (let index = points.length - 1; index >= 0; index -= 1) {
    const point = points[index];
    const isDuplicate = seenHeights.some((height) => Math.abs(height - point.height) <= 1);
    if (isDuplicate) continue;
    seenHeights.push(point.height);
    deduped.push(point);
  }
  deduped.reverse();
  return deduped;
}
function getDirectionSize(rect, direction) {
  return isVerticalDirection(direction) ? rect.height : rect.width;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function resolveSwipeProgress(contentSize, dragOffset, snapPointOffset) {
  if (!contentSize || contentSize <= 0) return 0;
  const currentOffset = dragOffset ?? snapPointOffset;
  return clamp(1 - currentOffset / contentSize, 0, 1);
}
var machine = (0, import_core.createMachine)({
  props({ props, scope }) {
    const alertDialog = props.role === "alertdialog";
    const initialFocusEl = alertDialog ? () => dom.getCloseTriggerEl(scope) : void 0;
    const modal = typeof props.modal === "boolean" ? props.modal : true;
    const snapPoints = props.snapPoints ?? [1];
    return {
      modal,
      trapFocus: modal,
      preventScroll: modal,
      closeOnInteractOutside: true,
      closeOnEscape: true,
      restoreFocus: true,
      role: "dialog",
      initialFocusEl,
      snapPoints,
      defaultSnapPoint: props.defaultSnapPoint ?? snapPoints[0] ?? null,
      swipeDirection: "down",
      snapToSequentialPoints: false,
      swipeVelocityThreshold: 700,
      closeThreshold: 0.25,
      preventDragOnScroll: true,
      ...props
    };
  },
  context({ bindable, prop }) {
    return {
      dragOffset: bindable(() => ({
        defaultValue: null
      })),
      snapPoint: bindable(() => ({
        defaultValue: prop("defaultSnapPoint"),
        value: prop("snapPoint"),
        onChange(value) {
          return prop("onSnapPointChange")?.({ snapPoint: value });
        }
      })),
      resolvedActiveSnapPoint: bindable(() => ({
        defaultValue: null
      })),
      contentSize: bindable(() => ({
        defaultValue: null
      })),
      viewportSize: bindable(() => ({
        defaultValue: 0
      })),
      rootFontSize: bindable(() => ({
        defaultValue: 16
      })),
      swipeStrength: bindable(() => ({
        defaultValue: 1
      }))
    };
  },
  refs() {
    return {
      dragManager: new import_drag_manager.DragManager()
    };
  },
  computed: {
    resolvedSnapPoints({ context, prop }) {
      const contentSize = context.get("contentSize");
      const viewportSize = context.get("viewportSize");
      const rootFontSize = context.get("rootFontSize");
      if (contentSize === null) return [];
      const points = prop("snapPoints").map(
        (snapPoint) => (0, import_resolve_snap_point.resolveSnapPoint)(snapPoint, {
          popupSize: contentSize,
          viewportSize,
          rootFontSize
        })
      ).filter((point) => point !== null);
      return dedupeSnapPoints(points);
    }
  },
  watch({ track, context, prop, action, computed }) {
    track(
      [
        () => context.get("snapPoint"),
        () => context.get("contentSize"),
        () => context.get("viewportSize"),
        () => context.get("rootFontSize"),
        () => prop("snapPoints").join("|")
      ],
      () => {
        const snapPoint = context.get("snapPoint");
        const contentSize = context.get("contentSize");
        const viewportSize = context.get("viewportSize");
        const rootFontSize = context.get("rootFontSize");
        if (snapPoint === null || contentSize === null) {
          context.set("resolvedActiveSnapPoint", null);
          return;
        }
        const resolvedPoints = computed("resolvedSnapPoints");
        const matchedPoint = resolvedPoints.find((point) => Object.is(point.value, snapPoint));
        if (matchedPoint) {
          context.set("resolvedActiveSnapPoint", matchedPoint);
          return;
        }
        const resolvedActiveSnapPoint = (0, import_resolve_snap_point.resolveSnapPoint)(snapPoint, {
          popupSize: contentSize,
          viewportSize,
          rootFontSize
        });
        if (resolvedActiveSnapPoint) {
          context.set("resolvedActiveSnapPoint", resolvedActiveSnapPoint);
          return;
        }
        const fallbackPoint = resolvedPoints[0];
        if (!fallbackPoint) {
          context.set("resolvedActiveSnapPoint", null);
          return;
        }
        context.set("snapPoint", fallbackPoint.value);
        context.set("resolvedActiveSnapPoint", fallbackPoint);
      }
    );
    track([() => prop("open")], () => {
      action(["toggleVisibility"]);
    });
    track(
      [
        () => context.get("dragOffset"),
        () => context.get("contentSize"),
        () => context.get("resolvedActiveSnapPoint")?.offset ?? 0
      ],
      () => {
        action(["syncDrawerStack"]);
      }
    );
  },
  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "closed";
  },
  on: {
    "SNAP_POINT.SET": {
      actions: ["setSnapPoint"]
    }
  },
  states: {
    open: {
      tags: ["open"],
      effects: [
        "trackDismissableElement",
        "preventScroll",
        "trapFocus",
        "hideContentBelow",
        "trackPointerMove",
        "trackSizeMeasurements",
        "trackNestedDrawerMetrics",
        "trackDrawerStack"
      ],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closing",
          actions: ["resetSwipeStrength"]
        },
        POINTER_DOWN: {
          actions: ["setPointerStart"]
        },
        POINTER_MOVE: [
          {
            guard: "isDragging",
            actions: ["setDragOffset"]
          },
          {
            guard: "shouldStartDragging",
            actions: ["setRegistrySwiping", "setDragOffset"]
          }
        ],
        POINTER_UP: [
          {
            guard: "shouldCloseOnSwipe",
            target: "closing",
            actions: ["clearRegistrySwiping", "setDismissSwipeStrength"]
          },
          {
            guard: "isDragging",
            actions: [
              "clearRegistrySwiping",
              "setSnapSwipeStrength",
              "setClosestSnapPoint",
              "clearPointerStart",
              "clearDragOffset"
            ]
          },
          {
            actions: ["clearRegistrySwiping", "clearPointerStart", "clearDragOffset"]
          }
        ],
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closing",
            actions: ["resetSwipeStrength", "invokeOnClose"]
          }
        ]
      }
    },
    closing: {
      effects: ["trackExitAnimation", "trackDrawerStack"],
      on: {
        ANIMATION_END: {
          target: "closed",
          actions: [
            "invokeOnClose",
            "clearPointerStart",
            "clearDragOffset",
            "clearActiveSnapPoint",
            "clearResolvedActiveSnapPoint",
            "clearSizeMeasurements",
            "clearVelocityTracking"
          ]
        }
      }
    },
    closed: {
      tags: ["closed"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open"
        },
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen"]
          }
        ]
      }
    }
  },
  implementations: {
    guards: {
      isOpenControlled: ({ prop }) => prop("open") !== void 0,
      isDragging({ context }) {
        return context.get("dragOffset") !== null;
      },
      shouldStartDragging({ prop, refs, event, scope }) {
        if (!(event.target instanceof HTMLElement)) return false;
        const dragManager = refs.get("dragManager");
        return dragManager.shouldStartDragging(
          event.point,
          event.target,
          dom.getContentEl(scope),
          prop("preventDragOnScroll"),
          prop("swipeDirection")
        );
      },
      shouldCloseOnSwipe({ prop, context, computed, refs }) {
        const dragManager = refs.get("dragManager");
        return dragManager.shouldDismiss(
          context.get("contentSize"),
          computed("resolvedSnapPoints"),
          prop("swipeVelocityThreshold"),
          prop("closeThreshold")
        );
      }
    },
    actions: {
      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true });
      },
      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false });
      },
      setSnapPoint({ context, event }) {
        context.set("snapPoint", event.snapPoint);
      },
      setPointerStart({ event, refs }) {
        refs.get("dragManager").setPointerStart(event.point);
      },
      setDragOffset({ context, event, refs, prop }) {
        const dragManager = refs.get("dragManager");
        dragManager.setDragOffsetForDirection(
          event.point,
          context.get("resolvedActiveSnapPoint")?.offset || 0,
          event.swipeDirection ?? prop("swipeDirection")
        );
        context.set("dragOffset", dragManager.getDragOffset());
      },
      setClosestSnapPoint({ computed, context, refs, prop }) {
        const snapPoints = computed("resolvedSnapPoints");
        const contentSize = context.get("contentSize");
        const viewportSize = context.get("viewportSize");
        const rootFontSize = context.get("rootFontSize");
        if (!snapPoints.length || contentSize === null) return;
        const dragManager = refs.get("dragManager");
        const closestSnapPoint = dragManager.findClosestSnapPoint(
          snapPoints,
          context.get("resolvedActiveSnapPoint"),
          prop("snapToSequentialPoints")
        );
        context.set("snapPoint", closestSnapPoint);
        const resolved = (0, import_resolve_snap_point.resolveSnapPoint)(closestSnapPoint, {
          popupSize: contentSize,
          viewportSize,
          rootFontSize
        });
        context.set("resolvedActiveSnapPoint", resolved);
      },
      clearDragOffset({ context, refs }) {
        refs.get("dragManager").clearDragOffset();
        context.set("dragOffset", null);
      },
      clearActiveSnapPoint({ context, prop }) {
        context.set("snapPoint", prop("defaultSnapPoint") ?? null);
      },
      clearSizeMeasurements({ context }) {
        context.set("contentSize", null);
        context.set("viewportSize", 0);
        context.set("rootFontSize", 16);
      },
      clearResolvedActiveSnapPoint({ context }) {
        context.set("resolvedActiveSnapPoint", null);
      },
      clearPointerStart({ refs }) {
        refs.get("dragManager").clearPointerStart();
      },
      clearVelocityTracking({ refs }) {
        refs.get("dragManager").clearVelocityTracking();
      },
      setSnapSwipeStrength({ context, refs, computed, prop }) {
        const dragManager = refs.get("dragManager");
        const snapPoints = computed("resolvedSnapPoints");
        const closestSnapPoint = dragManager.findClosestSnapPoint(
          snapPoints,
          context.get("resolvedActiveSnapPoint"),
          prop("snapToSequentialPoints")
        );
        const contentSize = context.get("contentSize");
        const viewportSize = context.get("viewportSize");
        const rootFontSize = context.get("rootFontSize");
        const resolved = (0, import_resolve_snap_point.resolveSnapPoint)(closestSnapPoint, {
          popupSize: contentSize ?? 0,
          viewportSize,
          rootFontSize
        });
        context.set("swipeStrength", dragManager.computeSwipeStrength(resolved?.offset ?? 0));
      },
      setDismissSwipeStrength({ context, refs }) {
        const dragManager = refs.get("dragManager");
        const contentSize = context.get("contentSize");
        context.set("swipeStrength", dragManager.computeSwipeStrength(contentSize ?? 0));
      },
      resetSwipeStrength({ context }) {
        context.set("swipeStrength", 1);
      },
      setRegistrySwiping({ scope, prop }) {
        const id = String(prop("id") ?? scope.id);
        import_drawer.drawerRegistry.setSwiping(id, true);
      },
      clearRegistrySwiping({ scope, prop }) {
        const id = String(prop("id") ?? scope.id);
        import_drawer.drawerRegistry.setSwiping(id, false);
      },
      toggleVisibility({ event, send, prop }) {
        send({ type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: event });
      },
      syncDrawerStack({ context, prop, scope }) {
        const stack = prop("stack");
        if (!stack) return;
        const contentSize = context.get("contentSize");
        if (contentSize === null) return;
        const id = String(prop("id") ?? scope.id);
        const dragOffset = context.get("dragOffset");
        const snapPointOffset = context.get("resolvedActiveSnapPoint")?.offset ?? 0;
        stack.setHeight(id, contentSize);
        stack.setSwipe(id, dragOffset !== null, resolveSwipeProgress(contentSize, dragOffset, snapPointOffset));
      }
    },
    effects: {
      trackDrawerStack({ context, scope, prop }) {
        const stack = prop("stack");
        if (!stack) return;
        const id = String(prop("id") ?? scope.id);
        stack.register(id);
        stack.setOpen(id, true);
        const sync = () => {
          const contentSize = context.get("contentSize");
          const dragOffset = context.get("dragOffset");
          const snapPointOffset = context.get("resolvedActiveSnapPoint")?.offset ?? 0;
          stack.setHeight(id, contentSize ?? 0);
          stack.setSwipe(id, dragOffset !== null, resolveSwipeProgress(contentSize, dragOffset, snapPointOffset));
        };
        sync();
        return () => {
          stack.setSwipe(id, false, 0);
          stack.setOpen(id, false);
          stack.unregister(id);
        };
      },
      trackDismissableElement({ scope, prop, send }) {
        const getContentEl2 = () => dom.getContentEl(scope);
        return (0, import_dismissable.trackDismissableElement)(getContentEl2, {
          type: "drawer",
          defer: true,
          pointerBlocking: prop("modal"),
          exclude: [dom.getTriggerEl(scope)],
          onInteractOutside(event) {
            prop("onInteractOutside")?.(event);
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault();
            }
          },
          onFocusOutside: prop("onFocusOutside"),
          onEscapeKeyDown(event) {
            prop("onEscapeKeyDown")?.(event);
            if (!prop("closeOnEscape")) {
              event.preventDefault();
            }
          },
          onPointerDownOutside: prop("onPointerDownOutside"),
          onRequestDismiss: prop("onRequestDismiss"),
          onDismiss() {
            send({ type: "CLOSE", src: "interact-outside" });
          }
        });
      },
      preventScroll({ scope, prop }) {
        if (!prop("preventScroll")) return;
        return (0, import_remove_scroll.preventBodyScroll)(scope.getDoc());
      },
      trapFocus({ scope, prop }) {
        if (!prop("trapFocus")) return;
        const contentEl = () => dom.getContentEl(scope);
        return (0, import_focus_trap.trapFocus)(contentEl, {
          preventScroll: true,
          returnFocusOnDeactivate: !!prop("restoreFocus"),
          initialFocus: prop("initialFocusEl"),
          setReturnFocus: (el) => prop("finalFocusEl")?.() || el,
          getShadowRoot: true
        });
      },
      hideContentBelow({ scope, prop }) {
        if (!prop("modal")) return;
        const getElements = () => [dom.getContentEl(scope)];
        return (0, import_aria_hidden.ariaHidden)(getElements, { defer: true });
      },
      trackPointerMove({ scope, send, prop }) {
        let lastAxis = 0;
        const swipeDirection = prop("swipeDirection");
        const isVertical = isVerticalDirection(swipeDirection);
        function onPointerMove(event) {
          const point = (0, import_dom_query.getEventPoint)(event);
          const target = (0, import_dom_query.getEventTarget)(event);
          send({ type: "POINTER_MOVE", point, target, swipeDirection });
        }
        function onPointerUp(event) {
          if (event.pointerType === "touch") return;
          const point = (0, import_dom_query.getEventPoint)(event);
          send({ type: "POINTER_UP", point });
        }
        function onTouchStart(event) {
          if (!event.touches[0]) return;
          lastAxis = isVertical ? event.touches[0].clientY : event.touches[0].clientX;
        }
        function onTouchMove(event) {
          if (!event.touches[0]) return;
          const point = (0, import_dom_query.getEventPoint)(event);
          const target = event.target;
          if (!prop("preventDragOnScroll")) {
            send({ type: "POINTER_MOVE", point, target, swipeDirection });
            return;
          }
          const contentEl = dom.getContentEl(scope);
          if (!contentEl) return;
          let el = target;
          while (el && el !== contentEl && (isVertical ? el.scrollHeight <= el.clientHeight : el.scrollWidth <= el.clientWidth)) {
            el = el.parentElement;
          }
          if (el && el !== contentEl) {
            const scrollPos = isVertical ? el.scrollTop : el.scrollLeft;
            const axis = isVertical ? event.touches[0].clientY : event.touches[0].clientX;
            const atStart = scrollPos <= 0;
            const movingTowardStart = axis > lastAxis;
            if (atStart && movingTowardStart) {
              event.preventDefault();
            }
            lastAxis = axis;
          }
          send({ type: "POINTER_MOVE", point, target, swipeDirection });
        }
        function onTouchEnd(event) {
          if (event.touches.length !== 0) return;
          const point = (0, import_dom_query.getEventPoint)(event);
          send({ type: "POINTER_UP", point });
        }
        const doc = scope.getDoc();
        const cleanups = [
          (0, import_dom_query.addDomEvent)(doc, "pointermove", onPointerMove),
          (0, import_dom_query.addDomEvent)(doc, "pointerup", onPointerUp),
          (0, import_dom_query.addDomEvent)(doc, "touchstart", onTouchStart, { passive: false }),
          (0, import_dom_query.addDomEvent)(doc, "touchmove", onTouchMove, { passive: false }),
          (0, import_dom_query.addDomEvent)(doc, "touchend", onTouchEnd)
        ];
        return () => {
          cleanups.forEach((cleanup) => cleanup());
        };
      },
      trackSizeMeasurements({ context, scope, prop }) {
        const contentEl = dom.getContentEl(scope);
        if (!contentEl) return;
        const doc = scope.getDoc();
        const html = doc.documentElement;
        const updateSize = () => {
          const direction = prop("swipeDirection");
          const rect = contentEl.getBoundingClientRect();
          const viewportSize = isVerticalDirection(direction) ? html.clientHeight : html.clientWidth;
          const rootFontSize = Number.parseFloat(getComputedStyle(html).fontSize);
          context.set("contentSize", getDirectionSize(rect, direction));
          context.set("viewportSize", viewportSize);
          if (Number.isFinite(rootFontSize)) {
            context.set("rootFontSize", rootFontSize);
          }
        };
        updateSize();
        const cleanups = [
          import_dom_query.resizeObserverBorderBox.observe(contentEl, updateSize),
          (0, import_dom_query.addDomEvent)(scope.getWin(), "resize", updateSize)
        ];
        return () => {
          cleanups.forEach((cleanup) => cleanup?.());
        };
      },
      trackNestedDrawerMetrics({ scope, prop }) {
        const contentEl = dom.getContentEl(scope);
        if (!contentEl) return;
        const id = String(prop("id") ?? scope.id);
        import_drawer.drawerRegistry.register(id, contentEl);
        const sync = () => {
          const entries = [...import_drawer.drawerRegistry.getEntries().entries()];
          const myIndex = entries.findIndex(([entryId]) => entryId === id);
          if (myIndex === -1) return;
          const nestedCount = entries.length - 1 - myIndex;
          const frontmostEl = entries[entries.length - 1]?.[1];
          const frontmostHeight = frontmostEl?.getBoundingClientRect().height ?? 0;
          const myHeight = contentEl.getBoundingClientRect().height;
          contentEl.style.setProperty("--nested-drawers", `${nestedCount}`);
          contentEl.style.setProperty("--drawer-height", `${myHeight}px`);
          contentEl.style.setProperty("--drawer-frontmost-height", `${frontmostHeight}px`);
          if (nestedCount > 0) contentEl.setAttribute("data-nested-drawer-open", "");
          else contentEl.removeAttribute("data-nested-drawer-open");
          if (import_drawer.drawerRegistry.hasSwipingAfter(id)) contentEl.setAttribute("data-nested-drawer-swiping", "");
          else contentEl.removeAttribute("data-nested-drawer-swiping");
        };
        sync();
        const cleanups = [
          import_drawer.drawerRegistry.subscribe(sync),
          import_dom_query.resizeObserverBorderBox.observe(contentEl, () => import_drawer.drawerRegistry.notify()),
          (0, import_dom_query.addDomEvent)(scope.getWin(), "resize", () => import_drawer.drawerRegistry.notify())
        ];
        return () => {
          cleanups.forEach((cleanup) => cleanup?.());
          contentEl.removeAttribute("data-nested-drawer-open");
          contentEl.removeAttribute("data-nested-drawer-swiping");
          contentEl.style.setProperty("--nested-drawers", "0");
          contentEl.style.removeProperty("--drawer-frontmost-height");
          import_drawer.drawerRegistry.unregister(id);
        };
      },
      trackExitAnimation({ send, scope }) {
        const contentEl = dom.getContentEl(scope);
        if (!contentEl) return;
        return (0, import_dom_query.addDomEvent)(contentEl, "exitcomplete", () => {
          send({ type: "ANIMATION_END" });
        });
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  machine
});
