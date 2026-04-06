// src/tooltip.connect.ts
import { dataAttr, isLeftClick } from "@zag-js/dom-query";
import { isFocusVisible } from "@zag-js/focus-visible";
import { getPlacementStyles } from "@zag-js/popper";
import { parts } from "./tooltip.anatomy.mjs";
import * as dom from "./tooltip.dom.mjs";
import { store } from "./tooltip.store.mjs";
function connect(service, normalize) {
  const { state, context, send, scope, prop, event: _event } = service;
  const id = prop("id");
  const hasAriaLabel = !!prop("aria-label");
  const open = state.matches("open", "closing");
  const triggerId = dom.getTriggerId(scope);
  const contentId = dom.getContentId(scope);
  const disabled = prop("disabled");
  const popperStyles = getPlacementStyles({
    ...prop("positioning"),
    placement: context.get("currentPlacement")
  });
  return {
    open,
    setOpen(nextOpen) {
      const open2 = state.matches("open", "closing");
      if (open2 === nextOpen) return;
      send({ type: nextOpen ? "open" : "close" });
    },
    reposition(options = {}) {
      send({ type: "positioning.set", options });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        id: triggerId,
        dir: prop("dir"),
        "data-expanded": dataAttr(open),
        "data-state": open ? "open" : "closed",
        "aria-describedby": open ? contentId : void 0,
        onClick(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (!prop("closeOnClick")) return;
          send({ type: "close", src: "trigger.click" });
        },
        onFocus(event) {
          queueMicrotask(() => {
            if (event.defaultPrevented) return;
            if (disabled) return;
            if (_event.src === "trigger.pointerdown") return;
            if (!isFocusVisible()) return;
            send({ type: "open", src: "trigger.focus" });
          });
        },
        onBlur(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (id === store.get("id")) {
            send({ type: "close", src: "trigger.blur" });
          }
        },
        onPointerDown(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (!isLeftClick(event)) return;
          if (!prop("closeOnPointerDown")) return;
          if (id === store.get("id")) {
            send({ type: "close", src: "trigger.pointerdown" });
          }
        },
        onPointerMove(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (event.pointerType === "touch") return;
          send({ type: "pointer.move" });
        },
        onPointerOver(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (event.pointerType === "touch") return;
          send({ type: "pointer.move" });
        },
        onPointerLeave() {
          if (disabled) return;
          send({ type: "pointer.leave" });
        },
        onPointerCancel() {
          if (disabled) return;
          send({ type: "pointer.leave" });
        }
      });
    },
    getArrowProps() {
      return normalize.element({
        id: dom.getArrowId(scope),
        ...parts.arrow.attrs,
        dir: prop("dir"),
        style: popperStyles.arrow
      });
    },
    getArrowTipProps() {
      return normalize.element({
        ...parts.arrowTip.attrs,
        dir: prop("dir"),
        style: popperStyles.arrowTip
      });
    },
    getPositionerProps() {
      return normalize.element({
        id: dom.getPositionerId(scope),
        ...parts.positioner.attrs,
        dir: prop("dir"),
        style: popperStyles.floating
      });
    },
    getContentProps() {
      const isCurrentTooltip = store.get("id") === id;
      const isPrevTooltip = store.get("prevId") === id;
      const instant = store.get("instant") && (open && isCurrentTooltip || isPrevTooltip);
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        hidden: !open,
        "data-state": open ? "open" : "closed",
        "data-instant": dataAttr(instant),
        role: hasAriaLabel ? void 0 : "tooltip",
        id: hasAriaLabel ? void 0 : contentId,
        "data-placement": context.get("currentPlacement"),
        onPointerEnter() {
          send({ type: "content.pointer.move" });
        },
        onPointerLeave() {
          send({ type: "content.pointer.leave" });
        },
        style: {
          pointerEvents: prop("interactive") ? "auto" : "none"
        }
      });
    }
  };
}
export {
  connect
};
