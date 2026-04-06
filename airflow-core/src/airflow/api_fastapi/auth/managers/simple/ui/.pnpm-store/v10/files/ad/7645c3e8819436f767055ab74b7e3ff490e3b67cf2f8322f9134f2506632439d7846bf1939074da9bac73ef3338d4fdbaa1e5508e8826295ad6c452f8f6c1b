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

// src/floating-panel.machine.ts
var floating_panel_machine_exports = {};
__export(floating_panel_machine_exports, {
  machine: () => machine
});
module.exports = __toCommonJS(floating_panel_machine_exports);
var import_core = require("@zag-js/core");
var import_dom_query = require("@zag-js/dom-query");
var import_rect_utils = require("@zag-js/rect-utils");
var import_store = require("@zag-js/store");
var import_utils = require("@zag-js/utils");
var dom = __toESM(require("./floating-panel.dom.js"));
var import_floating_panel = require("./floating-panel.store.js");
var { not, and } = (0, import_core.createGuards)();
var defaultTranslations = {
  minimize: "Minimize window",
  maximize: "Maximize window",
  restore: "Restore window"
};
var machine = (0, import_core.createMachine)({
  props({ props }) {
    (0, import_utils.ensureProps)(props, ["id"], "floating-panel");
    return {
      strategy: "fixed",
      gridSize: 1,
      defaultSize: { width: 320, height: 240 },
      defaultPosition: { x: 300, y: 100 },
      allowOverflow: true,
      resizable: true,
      draggable: true,
      ...props,
      hasSpecifiedPosition: !!props.defaultPosition || !!props.position,
      translations: {
        ...defaultTranslations,
        ...props.translations
      }
    };
  },
  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "closed";
  },
  context({ prop, bindable }) {
    return {
      size: bindable(() => ({
        defaultValue: prop("defaultSize"),
        value: prop("size"),
        isEqual: import_rect_utils.isSizeEqual,
        sync: true,
        hash(v) {
          return `W:${v.width} H:${v.height}`;
        },
        onChange(value) {
          prop("onSizeChange")?.({ size: value });
        }
      })),
      position: bindable(() => ({
        defaultValue: prop("defaultPosition"),
        value: prop("position"),
        isEqual: import_rect_utils.isPointEqual,
        sync: true,
        hash(v) {
          return `X:${v.x} Y:${v.y}`;
        },
        onChange(value) {
          prop("onPositionChange")?.({ position: value });
        }
      })),
      stage: bindable(() => ({
        defaultValue: "default",
        onChange(value) {
          prop("onStageChange")?.({ stage: value });
        }
      })),
      lastEventPosition: bindable(() => ({
        defaultValue: null
      })),
      prevPosition: bindable(() => ({
        defaultValue: null
      })),
      prevSize: bindable(() => ({
        defaultValue: null
      })),
      isTopmost: bindable(() => ({
        defaultValue: void 0
      }))
    };
  },
  computed: {
    isMaximized: ({ context }) => context.get("stage") === "maximized",
    isMinimized: ({ context }) => context.get("stage") === "minimized",
    isStaged: ({ context }) => context.get("stage") !== "default",
    canResize: ({ context, prop }) => prop("resizable") && !prop("disabled") && context.get("stage") === "default",
    canDrag: ({ prop, computed }) => prop("draggable") && !prop("disabled") && !computed("isMaximized")
  },
  watch({ track, context, action, prop }) {
    track([() => context.hash("position")], () => {
      action(["setPositionStyle"]);
    });
    track([() => context.hash("size")], () => {
      action(["setSizeStyle"]);
    });
    track([() => prop("open")], () => {
      action(["toggleVisibility"]);
    });
  },
  effects: ["trackPanelStack"],
  on: {
    CONTENT_FOCUS: {
      actions: ["bringToFrontOfPanelStack"]
    },
    SET_POSITION: {
      actions: ["setPosition"]
    },
    SET_SIZE: {
      actions: ["setSize"]
    }
  },
  states: {
    closed: {
      tags: ["closed"],
      on: {
        "CONTROLLED.OPEN": {
          target: "open",
          actions: ["setAnchorPosition", "setPositionStyle", "setSizeStyle", "focusContentEl"]
        },
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen", "setAnchorPosition", "setPositionStyle", "setSizeStyle", "focusContentEl"]
          }
        ]
      }
    },
    open: {
      tags: ["open"],
      entry: ["bringToFrontOfPanelStack"],
      initial: "idle",
      states: {
        idle: {
          effects: ["trackBoundaryRect"],
          on: {
            DRAG_START: {
              guard: not("isMaximized"),
              target: "dragging",
              actions: ["setPrevPosition"]
            },
            RESIZE_START: {
              guard: not("isMinimized"),
              target: "resizing",
              actions: ["setPrevSize"]
            },
            "CONTROLLED.CLOSE": {
              target: "closed",
              actions: ["resetRect", "focusTriggerEl"]
            },
            CLOSE: [
              {
                guard: "isOpenControlled",
                target: "closed",
                actions: ["invokeOnClose"]
              },
              {
                target: "closed",
                actions: ["invokeOnClose", "resetRect", "focusTriggerEl"]
              }
            ],
            ESCAPE: [
              {
                guard: and("isOpenControlled", "closeOnEsc"),
                actions: ["invokeOnClose"]
              },
              {
                guard: "closeOnEsc",
                target: "closed",
                actions: ["invokeOnClose", "resetRect", "focusTriggerEl"]
              }
            ],
            MINIMIZE: {
              actions: ["setMinimized"]
            },
            MAXIMIZE: {
              actions: ["setMaximized"]
            },
            RESTORE: {
              actions: ["setRestored"]
            },
            MOVE: {
              actions: ["setPositionFromKeyboard"]
            }
          }
        },
        dragging: {
          effects: ["trackPointerMove"],
          exit: ["clearPrevPosition"],
          on: {
            DRAG: {
              actions: ["setPosition"]
            },
            DRAG_END: {
              target: "idle",
              actions: ["invokeOnDragEnd"]
            },
            "CONTROLLED.CLOSE": {
              target: "closed",
              actions: ["resetRect"]
            },
            CLOSE: [
              {
                guard: "isOpenControlled",
                target: "closed",
                actions: ["invokeOnClose"]
              },
              {
                target: "closed",
                actions: ["invokeOnClose", "resetRect"]
              }
            ],
            ESCAPE: {
              target: "idle"
            }
          }
        },
        resizing: {
          effects: ["trackPointerMove"],
          exit: ["clearPrevSize"],
          on: {
            DRAG: {
              actions: ["setSize"]
            },
            DRAG_END: {
              target: "idle",
              actions: ["invokeOnResizeEnd"]
            },
            "CONTROLLED.CLOSE": {
              target: "closed",
              actions: ["resetRect"]
            },
            CLOSE: [
              {
                guard: "isOpenControlled",
                target: "closed",
                actions: ["invokeOnClose"]
              },
              {
                target: "closed",
                actions: ["invokeOnClose", "resetRect"]
              }
            ],
            ESCAPE: {
              target: "idle"
            }
          }
        }
      }
    }
  },
  implementations: {
    guards: {
      closeOnEsc: ({ prop }) => !!prop("closeOnEscape"),
      isMaximized: ({ context }) => context.get("stage") === "maximized",
      isMinimized: ({ context }) => context.get("stage") === "minimized",
      isOpenControlled: ({ prop }) => prop("open") != void 0
    },
    effects: {
      trackPointerMove({ scope, send, event: evt, prop }) {
        const doc = scope.getDoc();
        const boundaryEl = prop("getBoundaryEl")?.();
        const boundaryRect = dom.getBoundaryRect(scope, boundaryEl, false);
        return (0, import_dom_query.trackPointerMove)(doc, {
          onPointerMove({ point, event }) {
            const { altKey, shiftKey } = event;
            let x = (0, import_utils.clampValue)(point.x, boundaryRect.x, boundaryRect.x + boundaryRect.width);
            let y = (0, import_utils.clampValue)(point.y, boundaryRect.y, boundaryRect.y + boundaryRect.height);
            send({ type: "DRAG", position: { x, y }, axis: evt.axis, altKey, shiftKey });
          },
          onPointerUp() {
            send({ type: "DRAG_END" });
          }
        });
      },
      trackBoundaryRect({ context, scope, prop, computed }) {
        const win = scope.getWin();
        let skip = true;
        const exec = () => {
          if (skip) {
            skip = false;
            return;
          }
          const boundaryEl2 = prop("getBoundaryEl")?.();
          let boundaryRect = dom.getBoundaryRect(scope, boundaryEl2, false);
          if (!computed("isMaximized")) {
            const rect = { ...context.get("position"), ...context.get("size") };
            boundaryRect = (0, import_rect_utils.constrainRect)(rect, boundaryRect);
          }
          context.set("size", (0, import_utils.pick)(boundaryRect, ["width", "height"]));
          context.set("position", (0, import_utils.pick)(boundaryRect, ["x", "y"]));
        };
        const boundaryEl = prop("getBoundaryEl")?.();
        if ((0, import_dom_query.isHTMLElement)(boundaryEl)) {
          return import_dom_query.resizeObserverBorderBox.observe(boundaryEl, exec);
        }
        return (0, import_dom_query.addDomEvent)(win, "resize", exec);
      },
      trackPanelStack({ context, scope }) {
        const unsub = (0, import_store.subscribe)(import_floating_panel.panelStack, () => {
          context.set("isTopmost", import_floating_panel.panelStack.isTopmost(scope.id));
          const contentEl = dom.getContentEl(scope);
          if (!contentEl) return;
          const index = import_floating_panel.panelStack.indexOf(scope.id);
          if (index === -1) return;
          contentEl.style.setProperty("--z-index", `${index + 1}`);
        });
        return () => {
          import_floating_panel.panelStack.remove(scope.id);
          unsub();
        };
      }
    },
    actions: {
      setAnchorPosition({ context, prop, scope }) {
        if (prop("hasSpecifiedPosition")) return;
        const hasPrevRect = context.get("prevPosition") || context.get("prevSize");
        if (prop("persistRect") && hasPrevRect) return;
        (0, import_dom_query.raf)(() => {
          const triggerRect = dom.getTriggerEl(scope);
          const boundaryRect = dom.getBoundaryRect(scope, prop("getBoundaryEl")?.(), false);
          let anchorPosition = prop("getAnchorPosition")?.({
            triggerRect: triggerRect ? DOMRect.fromRect((0, import_rect_utils.getElementRect)(triggerRect)) : null,
            boundaryRect: DOMRect.fromRect(boundaryRect)
          });
          if (!anchorPosition) {
            const size = context.get("size");
            anchorPosition = {
              x: boundaryRect.x + (boundaryRect.width - size.width) / 2,
              y: boundaryRect.y + (boundaryRect.height - size.height) / 2
            };
          }
          if (!anchorPosition) return;
          context.set("position", anchorPosition);
        });
      },
      setPrevPosition({ context, event }) {
        context.set("prevPosition", { ...context.get("position") });
        context.set("lastEventPosition", event.position);
      },
      clearPrevPosition({ context, prop }) {
        if (!prop("persistRect")) context.set("prevPosition", null);
        context.set("lastEventPosition", null);
      },
      setPosition({ context, event, prop, scope }) {
        let diff = (0, import_rect_utils.subtractPoints)(event.position, context.get("lastEventPosition"));
        diff.x = Math.round(diff.x / prop("gridSize")) * prop("gridSize");
        diff.y = Math.round(diff.y / prop("gridSize")) * prop("gridSize");
        const prevPosition = context.get("prevPosition");
        if (!prevPosition) return;
        let position = (0, import_rect_utils.addPoints)(prevPosition, diff);
        const boundaryEl = prop("getBoundaryEl")?.();
        const boundaryRect = dom.getBoundaryRect(scope, boundaryEl, prop("allowOverflow"));
        position = (0, import_rect_utils.clampPoint)(position, context.get("size"), boundaryRect);
        context.set("position", position);
      },
      setPositionStyle({ scope, context }) {
        const el = dom.getPositionerEl(scope);
        const position = context.get("position");
        el?.style.setProperty("--x", `${position.x}px`);
        el?.style.setProperty("--y", `${position.y}px`);
      },
      resetRect({ context, prop }) {
        context.set("stage", "default");
        if (!prop("persistRect")) {
          context.set("position", context.initial("position"));
          context.set("size", context.initial("size"));
        }
      },
      setPrevSize({ context, event }) {
        context.set("prevSize", { ...context.get("size") });
        context.set("prevPosition", { ...context.get("position") });
        context.set("lastEventPosition", event.position);
      },
      clearPrevSize({ context }) {
        context.set("prevSize", null);
        context.set("prevPosition", null);
        context.set("lastEventPosition", null);
      },
      setSize({ context, event, scope, prop }) {
        const prevSize = context.get("prevSize");
        const prevPosition = context.get("prevPosition");
        const lastEventPosition = context.get("lastEventPosition");
        if (!prevSize || !prevPosition || !lastEventPosition) return;
        const prevRect = (0, import_rect_utils.createRect)({ ...prevPosition, ...prevSize });
        const offset = (0, import_rect_utils.subtractPoints)(event.position, lastEventPosition);
        const nextRect = (0, import_rect_utils.resizeRect)(prevRect, offset, event.axis, {
          scalingOriginMode: event.altKey ? "center" : "extent",
          lockAspectRatio: !!prop("lockAspectRatio") || event.shiftKey
        });
        let nextSize = (0, import_utils.pick)(nextRect, ["width", "height"]);
        let nextPosition = (0, import_utils.pick)(nextRect, ["x", "y"]);
        const boundaryEl = prop("getBoundaryEl")?.();
        const boundaryRect = dom.getBoundaryRect(scope, boundaryEl, false);
        nextSize = (0, import_rect_utils.clampSize)(nextSize, prop("minSize"), prop("maxSize"));
        nextSize = (0, import_rect_utils.clampSize)(nextSize, prop("minSize"), boundaryRect);
        context.set("size", nextSize);
        if (nextPosition) {
          const point = (0, import_rect_utils.clampPoint)(nextPosition, nextSize, boundaryRect);
          context.set("position", point);
        }
      },
      setSizeStyle({ scope, context }) {
        queueMicrotask(() => {
          const el = dom.getPositionerEl(scope);
          const size = context.get("size");
          el?.style.setProperty("--width", `${size.width}px`);
          el?.style.setProperty("--height", `${size.height}px`);
        });
      },
      setMaximized({ context, prop, scope }) {
        context.set("stage", "maximized");
        context.set("prevSize", context.get("size"));
        context.set("prevPosition", context.get("position"));
        const boundaryEl = prop("getBoundaryEl")?.();
        const boundaryRect = dom.getBoundaryRect(scope, boundaryEl, false);
        context.set("position", (0, import_utils.pick)(boundaryRect, ["x", "y"]));
        context.set("size", (0, import_utils.pick)(boundaryRect, ["height", "width"]));
      },
      setMinimized({ context, scope }) {
        context.set("stage", "minimized");
        context.set("prevSize", context.get("size"));
        context.set("prevPosition", context.get("position"));
        const headerEl = dom.getHeaderEl(scope);
        if (!headerEl) return;
        const size = {
          ...context.get("size"),
          height: headerEl?.offsetHeight
        };
        context.set("size", size);
      },
      setRestored({ context, prop, scope }) {
        const boundaryRect = dom.getBoundaryRect(scope, prop("getBoundaryEl")?.(), false);
        context.set("stage", "default");
        const prevSize = context.get("prevSize");
        if (prevSize) {
          let nextSize = prevSize;
          nextSize = (0, import_rect_utils.clampSize)(nextSize, prop("minSize"), prop("maxSize"));
          nextSize = (0, import_rect_utils.clampSize)(nextSize, prop("minSize"), boundaryRect);
          context.set("size", nextSize);
          context.set("prevSize", null);
        }
        if (context.get("prevPosition")) {
          let nextPosition = context.get("prevPosition");
          nextPosition = (0, import_rect_utils.clampPoint)(nextPosition, context.get("size"), boundaryRect);
          context.set("position", nextPosition);
          context.set("prevPosition", null);
        }
      },
      setPositionFromKeyboard({ context, event, prop, scope }) {
        (0, import_utils.invariant)(event.step == null, "step is required");
        const position = context.get("position");
        const step = event.step;
        let nextPosition = (0, import_utils.match)(event.direction, {
          left: { x: position.x - step, y: position.y },
          right: { x: position.x + step, y: position.y },
          up: { x: position.x, y: position.y - step },
          down: { x: position.x, y: position.y + step }
        });
        const boundaryEl = prop("getBoundaryEl")?.();
        const boundaryRect = dom.getBoundaryRect(scope, boundaryEl, false);
        nextPosition = (0, import_rect_utils.clampPoint)(nextPosition, context.get("size"), boundaryRect);
        context.set("position", nextPosition);
      },
      bringToFrontOfPanelStack({ prop }) {
        import_floating_panel.panelStack.bringToFront(prop("id"));
      },
      invokeOnOpen({ prop }) {
        prop("onOpenChange")?.({ open: true });
      },
      invokeOnClose({ prop }) {
        prop("onOpenChange")?.({ open: false });
      },
      invokeOnDragEnd({ context, prop }) {
        prop("onPositionChangeEnd")?.({ position: context.get("position") });
      },
      invokeOnResizeEnd({ context, prop }) {
        prop("onSizeChangeEnd")?.({ size: context.get("size") });
      },
      focusTriggerEl({ scope }) {
        (0, import_dom_query.raf)(() => {
          dom.getTriggerEl(scope)?.focus();
        });
      },
      focusContentEl({ scope }) {
        (0, import_dom_query.raf)(() => {
          dom.getContentEl(scope)?.focus();
        });
      },
      toggleVisibility({ send, prop, event }) {
        send({ type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: event });
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  machine
});
