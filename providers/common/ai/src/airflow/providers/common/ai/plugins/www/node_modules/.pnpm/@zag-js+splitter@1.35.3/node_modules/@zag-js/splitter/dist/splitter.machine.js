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

// src/splitter.machine.ts
var splitter_machine_exports = {};
__export(splitter_machine_exports, {
  machine: () => machine
});
module.exports = __toCommonJS(splitter_machine_exports);
var import_core = require("@zag-js/core");
var import_dom_query = require("@zag-js/dom-query");
var import_utils = require("@zag-js/utils");
var dom = __toESM(require("./splitter.dom.js"));
var import_aria = require("./utils/aria.js");
var import_fuzzy = require("./utils/fuzzy.js");
var import_panel = require("./utils/panel.js");
var import_resize_by_delta = require("./utils/resize-by-delta.js");
var import_validate_sizes = require("./utils/validate-sizes.js");
var machine = (0, import_core.createMachine)({
  props({ props }) {
    (0, import_utils.ensureProps)(props, ["panels"]);
    return {
      orientation: "horizontal",
      defaultSize: [],
      dir: "ltr",
      ...props,
      panels: (0, import_panel.sortPanels)(props.panels)
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable, getContext, getRefs }) {
    return {
      size: bindable(() => ({
        value: prop("size"),
        defaultValue: prop("defaultSize"),
        isEqual(a, b) {
          return b != null && (0, import_fuzzy.fuzzySizeEqual)(a, b);
        },
        onChange(value) {
          const ctx = getContext();
          const refs = getRefs();
          const sizesBeforeCollapse = refs.get("panelSizeBeforeCollapse");
          const expandToSizes = Object.fromEntries(sizesBeforeCollapse.entries());
          const resizeTriggerId = ctx.get("dragState")?.resizeTriggerId ?? null;
          const layout = (0, import_panel.getPanelLayout)(prop("panels"));
          prop("onResize")?.({
            size: value,
            layout,
            resizeTriggerId,
            expandToSizes
          });
        }
      })),
      dragState: bindable(() => ({
        defaultValue: null
      })),
      keyboardState: bindable(() => ({
        defaultValue: null
      }))
    };
  },
  watch({ track, action, prop }) {
    track([() => (0, import_panel.serializePanels)(prop("panels"))], () => {
      action(["syncSize"]);
    });
  },
  refs() {
    return {
      panelSizeBeforeCollapse: /* @__PURE__ */ new Map(),
      prevDelta: 0,
      panelIdToLastNotifiedSizeMap: /* @__PURE__ */ new Map()
    };
  },
  computed: {
    horizontal({ prop }) {
      return prop("orientation") === "horizontal";
    }
  },
  on: {
    "SIZE.SET": {
      actions: ["setSize"]
    },
    "PANEL.COLLAPSE": {
      actions: ["collapsePanel"]
    },
    "PANEL.EXPAND": {
      actions: ["expandPanel"]
    },
    "PANEL.RESIZE": {
      actions: ["resizePanel"]
    }
  },
  entry: ["syncSize"],
  exit: ["clearGlobalCursor"],
  states: {
    idle: {
      entry: ["clearDraggingState", "clearKeyboardState"],
      on: {
        POINTER_OVER: {
          target: "hover:temp",
          actions: ["setKeyboardState"]
        },
        FOCUS: {
          target: "focused",
          actions: ["setKeyboardState"]
        },
        POINTER_DOWN: {
          target: "dragging",
          actions: ["setDraggingState"]
        }
      }
    },
    "hover:temp": {
      effects: ["waitForHoverDelay"],
      on: {
        HOVER_DELAY: {
          target: "hover"
        },
        POINTER_DOWN: {
          target: "dragging",
          actions: ["setDraggingState"]
        },
        POINTER_LEAVE: {
          target: "idle"
        }
      }
    },
    hover: {
      tags: ["focus"],
      on: {
        POINTER_DOWN: {
          target: "dragging",
          actions: ["setDraggingState"]
        },
        POINTER_LEAVE: {
          target: "idle"
        }
      }
    },
    focused: {
      tags: ["focus"],
      on: {
        BLUR: {
          target: "idle"
        },
        ENTER: {
          actions: ["collapseOrExpandPanel"]
        },
        POINTER_DOWN: {
          target: "dragging",
          actions: ["setDraggingState"]
        },
        KEYBOARD_MOVE: {
          actions: ["invokeOnResizeStart", "setKeyboardValue", "invokeOnResizeEnd"]
        },
        "FOCUS.CYCLE": {
          actions: ["focusNextResizeTrigger"]
        }
      }
    },
    dragging: {
      tags: ["focus"],
      effects: ["trackPointerMove"],
      entry: ["invokeOnResizeStart"],
      on: {
        POINTER_MOVE: {
          actions: ["setPointerValue", "setGlobalCursor"]
        },
        POINTER_UP: {
          target: "idle",
          actions: ["invokeOnResizeEnd", "clearGlobalCursor"]
        }
      }
    }
  },
  implementations: {
    effects: {
      waitForHoverDelay: ({ send }) => {
        return (0, import_utils.setRafTimeout)(() => {
          send({ type: "HOVER_DELAY" });
        }, 250);
      },
      trackPointerMove: ({ scope, send }) => {
        const doc = scope.getDoc();
        return (0, import_dom_query.trackPointerMove)(doc, {
          onPointerMove(info) {
            send({ type: "POINTER_MOVE", point: info.point });
          },
          onPointerUp() {
            send({ type: "POINTER_UP" });
          }
        });
      }
    },
    actions: {
      setSize(params) {
        const { context, event, prop } = params;
        const unsafeSize = event.size;
        const prevSize = context.get("size");
        const panels = prop("panels");
        const safeSize = (0, import_validate_sizes.validateSizes)({
          size: unsafeSize,
          panels
        });
        if (!(0, import_utils.isEqual)(prevSize, safeSize)) {
          setSize(params, safeSize);
        }
      },
      syncSize({ context, prop }) {
        const panels = prop("panels");
        let prevSize = context.get("size");
        let unsafeSize = null;
        if (prevSize.length === 0) {
          unsafeSize = (0, import_panel.getUnsafeDefaultSize)({
            panels,
            size: context.initial("size")
          });
        }
        const nextSize = (0, import_validate_sizes.validateSizes)({
          size: unsafeSize ?? prevSize,
          panels
        });
        if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
          context.set("size", nextSize);
        }
      },
      setDraggingState({ context, event, prop, scope }) {
        const orientation = prop("orientation");
        const size = context.get("size");
        const resizeTriggerId = event.id;
        const panelGroupEl = dom.getRootEl(scope);
        if (!panelGroupEl) return;
        const handleElement = dom.getResizeTriggerEl(scope, resizeTriggerId);
        (0, import_utils.ensure)(handleElement, () => `Drag handle element not found for id "${resizeTriggerId}"`);
        const initialCursorPosition = orientation === "horizontal" ? event.point.x : event.point.y;
        context.set("dragState", {
          resizeTriggerId: event.id,
          resizeTriggerRect: handleElement.getBoundingClientRect(),
          initialCursorPosition,
          initialSize: size
        });
      },
      clearDraggingState({ context }) {
        context.set("dragState", null);
      },
      setKeyboardState({ context, event }) {
        context.set("keyboardState", {
          resizeTriggerId: event.id
        });
      },
      clearKeyboardState({ context }) {
        context.set("keyboardState", null);
      },
      collapsePanel(params) {
        const { context, prop, event, refs } = params;
        const prevSize = context.get("size");
        const panels = prop("panels");
        const panel = panels.find((panel2) => panel2.id === event.id);
        (0, import_utils.ensure)(panel, () => `Panel data not found for id "${event.id}"`);
        if (panel.collapsible) {
          const { collapsedSize = 0, panelSize, pivotIndices } = (0, import_panel.panelDataHelper)(panels, panel, prevSize);
          (0, import_utils.ensure)(panelSize, () => `Panel size not found for panel "${panel.id}"`);
          if (!(0, import_fuzzy.fuzzyNumbersEqual)(panelSize, collapsedSize)) {
            refs.get("panelSizeBeforeCollapse").set(panel.id, panelSize);
            const isLastPanel = (0, import_panel.findPanelDataIndex)(panels, panel) === panels.length - 1;
            const delta = isLastPanel ? panelSize - collapsedSize : collapsedSize - panelSize;
            const nextSize = (0, import_resize_by_delta.resizeByDelta)({
              delta,
              initialSize: prevSize,
              panels,
              pivotIndices,
              prevSize,
              trigger: "imperative-api"
            });
            if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
              setSize(params, nextSize);
            }
          }
        }
      },
      expandPanel(params) {
        const { context, prop, event, refs } = params;
        const panels = prop("panels");
        const prevSize = context.get("size");
        const panel = panels.find((panel2) => panel2.id === event.id);
        (0, import_utils.ensure)(panel, () => `Panel data not found for id "${event.id}"`);
        if (panel.collapsible) {
          const {
            collapsedSize = 0,
            panelSize = 0,
            minSize: minSizeFromProps = 0,
            pivotIndices
          } = (0, import_panel.panelDataHelper)(panels, panel, prevSize);
          const minSize = event.minSize ?? minSizeFromProps;
          if ((0, import_fuzzy.fuzzyNumbersEqual)(panelSize, collapsedSize)) {
            const prevPanelSize = refs.get("panelSizeBeforeCollapse").get(panel.id);
            const baseSize = prevPanelSize != null && prevPanelSize >= minSize ? prevPanelSize : minSize;
            const isLastPanel = (0, import_panel.findPanelDataIndex)(panels, panel) === panels.length - 1;
            const delta = isLastPanel ? panelSize - baseSize : baseSize - panelSize;
            const nextSize = (0, import_resize_by_delta.resizeByDelta)({
              delta,
              initialSize: prevSize,
              panels,
              pivotIndices,
              prevSize,
              trigger: "imperative-api"
            });
            if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
              setSize(params, nextSize);
            }
          }
        }
      },
      resizePanel(params) {
        const { context, prop, event } = params;
        const prevSize = context.get("size");
        const panels = prop("panels");
        const panel = (0, import_panel.getPanelById)(panels, event.id);
        const unsafePanelSize = event.size;
        const { panelSize, pivotIndices } = (0, import_panel.panelDataHelper)(panels, panel, prevSize);
        (0, import_utils.ensure)(panelSize, () => `Panel size not found for panel "${panel.id}"`);
        const isLastPanel = (0, import_panel.findPanelDataIndex)(panels, panel) === panels.length - 1;
        const delta = isLastPanel ? panelSize - unsafePanelSize : unsafePanelSize - panelSize;
        const nextSize = (0, import_resize_by_delta.resizeByDelta)({
          delta,
          initialSize: prevSize,
          panels,
          pivotIndices,
          prevSize,
          trigger: "imperative-api"
        });
        if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
          setSize(params, nextSize);
        }
      },
      setPointerValue(params) {
        const { context, event, prop, scope } = params;
        const dragState = context.get("dragState");
        if (!dragState) return;
        const { resizeTriggerId, initialSize, initialCursorPosition } = dragState;
        const panels = prop("panels");
        const panelGroupElement = dom.getRootEl(scope);
        (0, import_utils.ensure)(panelGroupElement, () => `Panel group element not found`);
        const pivotIndices = resizeTriggerId.split(":").map((id) => panels.findIndex((panel) => panel.id === id));
        const horizontal = prop("orientation") === "horizontal";
        const cursorPosition = horizontal ? event.point.x : event.point.y;
        const groupRect = panelGroupElement.getBoundingClientRect();
        const groupSizeInPixels = horizontal ? groupRect.width : groupRect.height;
        const offsetPixels = cursorPosition - initialCursorPosition;
        const offsetPercentage = offsetPixels / groupSizeInPixels * 100;
        const prevSize = context.get("size");
        const nextSize = (0, import_resize_by_delta.resizeByDelta)({
          delta: offsetPercentage,
          initialSize: initialSize ?? prevSize,
          panels,
          pivotIndices,
          prevSize,
          trigger: "mouse-or-touch"
        });
        if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
          setSize(params, nextSize);
        }
      },
      setKeyboardValue(params) {
        const { context, event, prop } = params;
        const panelDataArray = prop("panels");
        const resizeTriggerId = event.id;
        const delta = event.delta;
        const pivotIndices = resizeTriggerId.split(":").map((id) => panelDataArray.findIndex((panelData) => panelData.id === id));
        const prevSize = context.get("size");
        const nextSize = (0, import_resize_by_delta.resizeByDelta)({
          delta,
          initialSize: prevSize,
          panels: panelDataArray,
          pivotIndices,
          prevSize,
          trigger: "keyboard"
        });
        if (!(0, import_utils.isEqual)(prevSize, nextSize)) {
          setSize(params, nextSize);
        }
      },
      invokeOnResizeEnd({ context, prop }) {
        queueMicrotask(() => {
          const dragState = context.get("dragState");
          prop("onResizeEnd")?.({
            size: context.get("size"),
            resizeTriggerId: dragState?.resizeTriggerId ?? null
          });
        });
      },
      invokeOnResizeStart({ prop }) {
        queueMicrotask(() => {
          prop("onResizeStart")?.();
        });
      },
      collapseOrExpandPanel(params) {
        const { context, prop } = params;
        const panelDataArray = prop("panels");
        const sizes = context.get("size");
        const resizeTriggerId = context.get("keyboardState")?.resizeTriggerId;
        const [idBefore, idAfter] = resizeTriggerId?.split(":") ?? [];
        const index = panelDataArray.findIndex((panelData2) => panelData2.id === idBefore);
        if (index === -1) return;
        const panelData = panelDataArray[index];
        (0, import_utils.ensure)(panelData, () => `No panel data found for index ${index}`);
        const size = sizes[index];
        const { collapsedSize = 0, collapsible, minSize = 0 } = panelData;
        if (size != null && collapsible) {
          const pivotIndices = [idBefore, idAfter].map(
            (id) => panelDataArray.findIndex((panelData2) => panelData2.id === id)
          );
          const nextSize = (0, import_resize_by_delta.resizeByDelta)({
            delta: (0, import_fuzzy.fuzzyNumbersEqual)(size, collapsedSize) ? minSize - collapsedSize : collapsedSize - size,
            initialSize: context.initial("size"),
            panels: panelDataArray,
            pivotIndices,
            prevSize: sizes,
            trigger: "keyboard"
          });
          if (!(0, import_utils.isEqual)(sizes, nextSize)) {
            setSize(params, nextSize);
          }
        }
      },
      setGlobalCursor({ context, scope, prop }) {
        const dragState = context.get("dragState");
        if (!dragState) return;
        const panels = prop("panels");
        const horizontal = prop("orientation") === "horizontal";
        const [idBefore] = dragState.resizeTriggerId.split(":");
        const indexBefore = panels.findIndex((panel2) => panel2.id === idBefore);
        const panel = panels[indexBefore];
        const size = context.get("size");
        const aria = (0, import_aria.getAriaValue)(size, panels, dragState.resizeTriggerId);
        const isAtMin = (0, import_fuzzy.fuzzyNumbersEqual)(aria.valueNow, aria.valueMin) || (0, import_fuzzy.fuzzyNumbersEqual)(aria.valueNow, panel.collapsedSize);
        const isAtMax = (0, import_fuzzy.fuzzyNumbersEqual)(aria.valueNow, aria.valueMax);
        const cursorState = { isAtMin, isAtMax };
        dom.setupGlobalCursor(scope, cursorState, horizontal, prop("nonce"));
      },
      clearGlobalCursor({ scope }) {
        dom.removeGlobalCursor(scope);
      },
      focusNextResizeTrigger({ event, scope }) {
        const resizeTriggers = dom.getResizeTriggerEls(scope);
        const index = resizeTriggers.findIndex((el) => el.dataset.id === event.id);
        const handleEl = event.shiftKey ? (0, import_utils.prev)(resizeTriggers, index) : (0, import_utils.next)(resizeTriggers, index);
        handleEl?.focus();
      }
    }
  }
});
function setSize(params, sizes) {
  const { refs, prop, context } = params;
  const panelsArray = prop("panels");
  const onCollapse = prop("onCollapse");
  const onExpand = prop("onExpand");
  const panelIdToLastNotifiedSizeMap = refs.get("panelIdToLastNotifiedSizeMap");
  context.set("size", sizes);
  sizes.forEach((size, index) => {
    const panelData = panelsArray[index];
    (0, import_utils.ensure)(panelData, () => `Panel data not found for index ${index}`);
    const { collapsedSize = 0, collapsible, id: panelId } = panelData;
    const lastNotifiedSize = panelIdToLastNotifiedSizeMap.get(panelId);
    if (lastNotifiedSize == null || size !== lastNotifiedSize) {
      panelIdToLastNotifiedSizeMap.set(panelId, size);
      if (collapsible && (onCollapse || onExpand)) {
        if ((lastNotifiedSize == null || (0, import_fuzzy.fuzzyNumbersEqual)(lastNotifiedSize, collapsedSize)) && !(0, import_fuzzy.fuzzyNumbersEqual)(size, collapsedSize)) {
          onExpand?.({ panelId, size });
        }
        if (onCollapse && (lastNotifiedSize == null || !(0, import_fuzzy.fuzzyNumbersEqual)(lastNotifiedSize, collapsedSize)) && (0, import_fuzzy.fuzzyNumbersEqual)(size, collapsedSize)) {
          onCollapse?.({ panelId, size });
        }
      }
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  machine
});
