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

// src/popover.machine.ts
var popover_machine_exports = {};
__export(popover_machine_exports, {
  machine: () => machine
});
module.exports = __toCommonJS(popover_machine_exports);
var import_aria_hidden = require("@zag-js/aria-hidden");
var import_core = require("@zag-js/core");
var import_dismissable = require("@zag-js/dismissable");
var import_dom_query = require("@zag-js/dom-query");
var import_focus_trap = require("@zag-js/focus-trap");
var import_popper = require("@zag-js/popper");
var import_remove_scroll = require("@zag-js/remove-scroll");
var dom = __toESM(require("./popover.dom.js"));
var machine = (0, import_core.createMachine)({
  props({ props }) {
    return {
      closeOnInteractOutside: true,
      closeOnEscape: true,
      autoFocus: true,
      modal: false,
      portalled: true,
      ...props,
      positioning: {
        placement: "bottom",
        ...props.positioning
      }
    };
  },
  initialState({ prop }) {
    const open = prop("open") || prop("defaultOpen");
    return open ? "open" : "closed";
  },
  context({ bindable }) {
    return {
      currentPlacement: bindable(() => ({
        defaultValue: void 0
      })),
      renderedElements: bindable(() => ({
        defaultValue: { title: true, description: true }
      }))
    };
  },
  computed: {
    currentPortalled: ({ prop }) => !!prop("modal") || !!prop("portalled")
  },
  watch({ track, prop, action }) {
    track([() => prop("open")], () => {
      action(["toggleVisibility"]);
    });
  },
  entry: ["checkRenderedElements"],
  states: {
    closed: {
      on: {
        "CONTROLLED.OPEN": {
          target: "open",
          actions: ["setInitialFocus"]
        },
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen", "setInitialFocus"]
          }
        ],
        OPEN: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnOpen"]
          },
          {
            target: "open",
            actions: ["invokeOnOpen", "setInitialFocus"]
          }
        ]
      }
    },
    open: {
      effects: [
        "trapFocus",
        "preventScroll",
        "hideContentBelow",
        "trackDismissableElement",
        "trackPositioning",
        "proxyTabFocus"
      ],
      on: {
        "CONTROLLED.CLOSE": {
          target: "closed",
          actions: ["setFinalFocus"]
        },
        CLOSE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose", "setFinalFocus"]
          }
        ],
        TOGGLE: [
          {
            guard: "isOpenControlled",
            actions: ["invokeOnClose"]
          },
          {
            target: "closed",
            actions: ["invokeOnClose"]
          }
        ],
        "POSITIONING.SET": {
          actions: ["reposition"]
        }
      }
    }
  },
  implementations: {
    guards: {
      isOpenControlled: ({ prop }) => prop("open") != void 0
    },
    effects: {
      trackPositioning({ context, prop, scope }) {
        context.set("currentPlacement", prop("positioning").placement);
        const anchorEl = dom.getAnchorEl(scope) ?? dom.getTriggerEl(scope);
        const getPositionerEl2 = () => dom.getPositionerEl(scope);
        return (0, import_popper.getPlacement)(anchorEl, getPositionerEl2, {
          ...prop("positioning"),
          defer: true,
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      trackDismissableElement({ send, prop, scope }) {
        const getContentEl2 = () => dom.getContentEl(scope);
        let restoreFocus = true;
        return (0, import_dismissable.trackDismissableElement)(getContentEl2, {
          type: "popover",
          pointerBlocking: prop("modal"),
          exclude: dom.getTriggerEl(scope),
          defer: true,
          onEscapeKeyDown(event) {
            prop("onEscapeKeyDown")?.(event);
            if (prop("closeOnEscape")) return;
            event.preventDefault();
          },
          onInteractOutside(event) {
            prop("onInteractOutside")?.(event);
            if (event.defaultPrevented) return;
            restoreFocus = !(event.detail.focusable || event.detail.contextmenu);
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault();
            }
          },
          onPointerDownOutside: prop("onPointerDownOutside"),
          onFocusOutside: prop("onFocusOutside"),
          persistentElements: prop("persistentElements"),
          onRequestDismiss: prop("onRequestDismiss"),
          onDismiss() {
            send({ type: "CLOSE", src: "interact-outside", restoreFocus });
          }
        });
      },
      proxyTabFocus({ prop, scope }) {
        if (prop("modal") || !prop("portalled")) return;
        const getContentEl2 = () => dom.getContentEl(scope);
        return (0, import_dom_query.proxyTabFocus)(getContentEl2, {
          triggerElement: dom.getTriggerEl(scope),
          defer: true,
          getShadowRoot: true,
          onFocus(el) {
            el.focus({ preventScroll: true });
          }
        });
      },
      hideContentBelow({ prop, scope }) {
        if (!prop("modal")) return;
        const getElements = () => [dom.getContentEl(scope), dom.getTriggerEl(scope)];
        return (0, import_aria_hidden.ariaHidden)(getElements, { defer: true });
      },
      preventScroll({ prop, scope }) {
        if (!prop("modal")) return;
        return (0, import_remove_scroll.preventBodyScroll)(scope.getDoc());
      },
      trapFocus({ prop, scope }) {
        if (!prop("modal")) return;
        const contentEl = () => dom.getContentEl(scope);
        return (0, import_focus_trap.trapFocus)(contentEl, {
          initialFocus: () => (0, import_dom_query.getInitialFocus)({
            root: dom.getContentEl(scope),
            getInitialEl: prop("initialFocusEl"),
            enabled: prop("autoFocus")
          }),
          getShadowRoot: true
        });
      }
    },
    actions: {
      reposition({ event, prop, scope, context }) {
        const anchorEl = dom.getAnchorEl(scope) ?? dom.getTriggerEl(scope);
        const getPositionerEl2 = () => dom.getPositionerEl(scope);
        (0, import_popper.getPlacement)(anchorEl, getPositionerEl2, {
          ...prop("positioning"),
          ...event.options,
          defer: true,
          listeners: false,
          onComplete(data) {
            context.set("currentPlacement", data.placement);
          }
        });
      },
      checkRenderedElements({ context, scope }) {
        (0, import_dom_query.raf)(() => {
          Object.assign(context.get("renderedElements"), {
            title: !!dom.getTitleEl(scope),
            description: !!dom.getDescriptionEl(scope)
          });
        });
      },
      setInitialFocus({ prop, scope }) {
        if (prop("modal")) return;
        (0, import_dom_query.raf)(() => {
          const element = (0, import_dom_query.getInitialFocus)({
            root: dom.getContentEl(scope),
            getInitialEl: prop("initialFocusEl"),
            enabled: prop("autoFocus")
          });
          element?.focus({ preventScroll: true });
        });
      },
      setFinalFocus({ event, scope }) {
        const restoreFocus = event.restoreFocus ?? event.previousEvent?.restoreFocus;
        if (restoreFocus != null && !restoreFocus) return;
        (0, import_dom_query.raf)(() => {
          const element = dom.getTriggerEl(scope);
          element?.focus({ preventScroll: true });
        });
      },
      invokeOnOpen({ prop, flush }) {
        flush(() => {
          prop("onOpenChange")?.({ open: true });
        });
      },
      invokeOnClose({ prop, flush }) {
        flush(() => {
          prop("onOpenChange")?.({ open: false });
        });
      },
      toggleVisibility({ event, send, prop }) {
        send({ type: prop("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE", previousEvent: event });
      }
    }
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  machine
});
