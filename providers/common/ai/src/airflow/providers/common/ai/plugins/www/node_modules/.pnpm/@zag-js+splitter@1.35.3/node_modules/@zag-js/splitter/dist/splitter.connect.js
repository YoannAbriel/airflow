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

// src/splitter.connect.ts
var splitter_connect_exports = {};
__export(splitter_connect_exports, {
  connect: () => connect
});
module.exports = __toCommonJS(splitter_connect_exports);
var import_dom_query = require("@zag-js/dom-query");
var import_utils = require("@zag-js/utils");
var import_splitter = require("./splitter.anatomy.js");
var dom = __toESM(require("./splitter.dom.js"));
var import_aria = require("./utils/aria.js");
var import_fuzzy = require("./utils/fuzzy.js");
var import_panel = require("./utils/panel.js");
function connect(service, normalize) {
  const { state, send, prop, computed, context, scope } = service;
  const horizontal = computed("horizontal");
  const dragging = state.matches("dragging");
  const orientation = prop("orientation");
  const getPanelStyle = (id) => {
    const panels = prop("panels");
    const panelIndex = panels.findIndex((panel) => panel.id === id);
    const defaultSize = context.initial("size")[panelIndex];
    const dragState = context.get("dragState");
    return (0, import_panel.getPanelFlexBoxStyle)({
      defaultSize,
      dragState,
      sizes: context.get("size"),
      panels,
      panelIndex
    });
  };
  const getResizeTriggerState = (props) => {
    const { id, disabled } = props;
    const dragging2 = context.get("dragState")?.resizeTriggerId === id;
    const focused = dragging2 || context.get("keyboardState")?.resizeTriggerId === id;
    return {
      dragging: dragging2,
      focused,
      disabled: !!disabled
    };
  };
  return {
    dragging,
    orientation,
    getPanels() {
      return prop("panels");
    },
    getPanelById(id) {
      return (0, import_panel.getPanelById)(prop("panels"), id);
    },
    getItems() {
      return prop("panels").flatMap((panel, index, arr) => {
        const nextPanel = arr[index + 1];
        if (panel && nextPanel) {
          return [
            { type: "panel", id: panel.id },
            { type: "handle", id: `${panel.id}:${nextPanel.id}` }
          ];
        }
        return [{ type: "panel", id: panel.id }];
      });
    },
    getSizes() {
      return context.get("size");
    },
    setSizes(size) {
      send({ type: "SIZE.SET", size });
    },
    resetSizes() {
      send({ type: "SIZE.SET", size: context.initial("size") });
    },
    collapsePanel(id) {
      send({ type: "PANEL.COLLAPSE", id });
    },
    expandPanel(id, minSize) {
      send({ type: "PANEL.EXPAND", id, minSize });
    },
    resizePanel(id, unsafePanelSize) {
      send({ type: "PANEL.RESIZE", id, size: unsafePanelSize });
    },
    getPanelSize(id) {
      const panels = prop("panels");
      const size = context.get("size");
      const panelData = (0, import_panel.getPanelById)(panels, id);
      const { panelSize } = (0, import_panel.panelDataHelper)(panels, panelData, size);
      (0, import_utils.ensure)(panelSize, () => `Panel size not found for panel "${panelData.id}"`);
      return panelSize;
    },
    isPanelCollapsed(id) {
      const panels = prop("panels");
      const size = context.get("size");
      const panelData = (0, import_panel.getPanelById)(panels, id);
      const { collapsedSize = 0, collapsible, panelSize } = (0, import_panel.panelDataHelper)(panels, panelData, size);
      (0, import_utils.ensure)(panelSize, () => `Panel size not found for panel "${panelData.id}"`);
      return collapsible === true && (0, import_fuzzy.fuzzyNumbersEqual)(panelSize, collapsedSize);
    },
    isPanelExpanded(id) {
      const panels = prop("panels");
      const size = context.get("size");
      const panelData = (0, import_panel.getPanelById)(panels, id);
      const { collapsedSize = 0, collapsible, panelSize } = (0, import_panel.panelDataHelper)(panels, panelData, size);
      (0, import_utils.ensure)(panelSize, () => `Panel size not found for panel "${panelData.id}"`);
      return !collapsible || (0, import_fuzzy.fuzzyCompareNumbers)(panelSize, collapsedSize) > 0;
    },
    getLayout() {
      return (0, import_panel.getPanelLayout)(prop("panels"));
    },
    getRootProps() {
      return normalize.element({
        ...import_splitter.parts.root.attrs,
        "data-orientation": orientation,
        "data-dragging": (0, import_dom_query.dataAttr)(dragging),
        id: dom.getRootId(scope),
        dir: prop("dir"),
        style: {
          display: "flex",
          flexDirection: horizontal ? "row" : "column",
          height: "100%",
          width: "100%",
          overflow: "hidden"
        }
      });
    },
    getPanelProps(props) {
      const { id } = props;
      return normalize.element({
        ...import_splitter.parts.panel.attrs,
        "data-orientation": orientation,
        "data-dragging": (0, import_dom_query.dataAttr)(dragging),
        dir: prop("dir"),
        "data-id": id,
        "data-index": (0, import_panel.findPanelIndex)(prop("panels"), id),
        id: dom.getPanelId(scope, id),
        "data-ownedby": dom.getRootId(scope),
        style: getPanelStyle(id)
      });
    },
    getResizeTriggerState,
    getResizeTriggerIndicator(props) {
      const triggerState = getResizeTriggerState(props);
      return normalize.element({
        ...import_splitter.parts.resizeTriggerIndicator.attrs,
        "data-orientation": orientation,
        "data-focus": (0, import_dom_query.dataAttr)(triggerState.focused),
        "data-dragging": (0, import_dom_query.dataAttr)(triggerState.dragging),
        "data-disabled": (0, import_dom_query.dataAttr)(triggerState.disabled),
        "data-ownedby": dom.getRootId(scope)
      });
    },
    getResizeTriggerProps(props) {
      const { id } = props;
      const triggerState = getResizeTriggerState(props);
      const aria = (0, import_aria.getAriaValue)(context.get("size"), prop("panels"), id);
      return normalize.element({
        ...import_splitter.parts.resizeTrigger.attrs,
        dir: prop("dir"),
        id: dom.getResizeTriggerId(scope, id),
        role: "separator",
        "data-id": id,
        "data-ownedby": dom.getRootId(scope),
        tabIndex: triggerState.disabled ? void 0 : 0,
        "aria-valuenow": aria.valueNow,
        "aria-valuemin": aria.valueMin,
        "aria-valuemax": aria.valueMax,
        "data-orientation": orientation,
        "aria-orientation": orientation,
        "aria-controls": `${dom.getPanelId(scope, aria.beforeId)} ${dom.getPanelId(scope, aria.afterId)}`,
        "data-focus": (0, import_dom_query.dataAttr)(triggerState.focused),
        "data-dragging": (0, import_dom_query.dataAttr)(triggerState.dragging),
        "data-disabled": (0, import_dom_query.dataAttr)(triggerState.disabled),
        style: {
          touchAction: "none",
          userSelect: "none",
          WebkitUserSelect: "none",
          flex: "0 0 auto",
          pointerEvents: triggerState.disabled ? "none" : triggerState.dragging && !triggerState.focused ? "none" : void 0,
          cursor: triggerState.disabled ? void 0 : horizontal ? "col-resize" : "row-resize",
          [horizontal ? "minHeight" : "minWidth"]: "0"
        },
        onPointerDown(event) {
          if (!(0, import_dom_query.isLeftClick)(event)) return;
          if (triggerState.disabled) {
            event.preventDefault();
            return;
          }
          const point = (0, import_dom_query.getEventPoint)(event);
          send({ type: "POINTER_DOWN", id, point });
          event.currentTarget.setPointerCapture(event.pointerId);
          event.preventDefault();
          event.stopPropagation();
        },
        onPointerUp(event) {
          if (triggerState.disabled) return;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        },
        onPointerOver() {
          if (triggerState.disabled) return;
          send({ type: "POINTER_OVER", id });
        },
        onPointerLeave() {
          if (triggerState.disabled) return;
          send({ type: "POINTER_LEAVE", id });
        },
        onBlur() {
          if (triggerState.disabled) return;
          send({ type: "BLUR" });
        },
        onFocus() {
          if (triggerState.disabled) return;
          send({ type: "FOCUS", id });
        },
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (triggerState.disabled) return;
          const keyboardResizeBy = prop("keyboardResizeBy");
          let delta = 0;
          if (event.shiftKey) {
            delta = 10;
          } else if (keyboardResizeBy != null) {
            delta = keyboardResizeBy;
          } else {
            delta = 1;
          }
          const keyMap = {
            Enter() {
              send({ type: "ENTER", id });
            },
            ArrowUp() {
              send({ type: "KEYBOARD_MOVE", id, delta: horizontal ? 0 : -delta });
            },
            ArrowDown() {
              send({ type: "KEYBOARD_MOVE", id, delta: horizontal ? 0 : delta });
            },
            ArrowLeft() {
              send({ type: "KEYBOARD_MOVE", id, delta: horizontal ? -delta : 0 });
            },
            ArrowRight() {
              send({ type: "KEYBOARD_MOVE", id, delta: horizontal ? delta : 0 });
            },
            Home() {
              send({ type: "KEYBOARD_MOVE", id, delta: -100 });
            },
            End() {
              send({ type: "KEYBOARD_MOVE", id, delta: 100 });
            },
            F6() {
              send({ type: "FOCUS.CYCLE", id, shiftKey: event.shiftKey });
            }
          };
          const key = (0, import_dom_query.getEventKey)(event, {
            dir: prop("dir"),
            orientation
          });
          const exec = keyMap[key];
          if (exec) {
            exec(event);
            event.preventDefault();
          }
        }
      });
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connect
});
