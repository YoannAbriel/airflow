// src/hover-card.connect.ts
import { getPlacementStyles } from "@zag-js/popper";
import { parts } from "./hover-card.anatomy.mjs";
import * as dom from "./hover-card.dom.mjs";
function connect(service, normalize) {
  const { state, send, prop, context, scope } = service;
  const open = state.hasTag("open");
  const popperStyles = getPlacementStyles({
    ...prop("positioning"),
    placement: context.get("currentPlacement")
  });
  return {
    open,
    setOpen(nextOpen) {
      const open2 = state.hasTag("open");
      if (open2 === nextOpen) return;
      if (prop("disabled")) return;
      send({ type: nextOpen ? "OPEN" : "CLOSE" });
    },
    reposition(options = {}) {
      send({ type: "POSITIONING.SET", options });
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
    getTriggerProps() {
      return normalize.element({
        ...parts.trigger.attrs,
        dir: prop("dir"),
        "data-placement": context.get("currentPlacement"),
        id: dom.getTriggerId(scope),
        "data-state": open ? "open" : "closed",
        onPointerEnter(event) {
          if (event.pointerType === "touch") return;
          if (prop("disabled")) return;
          send({ type: "POINTER_ENTER", src: "trigger" });
        },
        onPointerLeave(event) {
          if (event.pointerType === "touch") return;
          if (prop("disabled")) return;
          send({ type: "POINTER_LEAVE", src: "trigger" });
        },
        onFocus() {
          if (prop("disabled")) return;
          send({ type: "TRIGGER_FOCUS" });
        },
        onBlur() {
          if (prop("disabled")) return;
          send({ type: "TRIGGER_BLUR" });
        }
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
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        id: dom.getContentId(scope),
        hidden: !open,
        tabIndex: -1,
        "data-state": open ? "open" : "closed",
        "data-placement": context.get("currentPlacement"),
        onPointerEnter(event) {
          if (event.pointerType === "touch") return;
          if (prop("disabled")) return;
          send({ type: "POINTER_ENTER", src: "content" });
        },
        onPointerLeave(event) {
          if (event.pointerType === "touch") return;
          if (prop("disabled")) return;
          send({ type: "POINTER_LEAVE", src: "content" });
        }
      });
    }
  };
}
export {
  connect
};
