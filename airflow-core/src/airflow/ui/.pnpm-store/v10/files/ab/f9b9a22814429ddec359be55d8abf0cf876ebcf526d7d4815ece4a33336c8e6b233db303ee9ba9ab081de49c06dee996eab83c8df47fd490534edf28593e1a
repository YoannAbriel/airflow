// src/splitter.dom.ts
import { queryAll } from "@zag-js/dom-query";
var getRootId = (ctx) => ctx.ids?.root ?? `splitter:${ctx.id}`;
var getResizeTriggerId = (ctx, id) => ctx.ids?.resizeTrigger?.(id) ?? `splitter:${ctx.id}:splitter:${id}`;
var getLabelId = (ctx) => ctx.ids?.label ?? `splitter:${ctx.id}:label`;
var getPanelId = (ctx, id) => ctx.ids?.panel?.(id) ?? `splitter:${ctx.id}:panel:${id}`;
var getPanelEls = (ctx) => queryAll(getRootEl(ctx), `[data-part=panel][data-ownedby=${getRootId(ctx)}]`);
var getGlobalCursorId = (ctx) => `splitter:${ctx.id}:global-cursor`;
var getRootEl = (ctx) => ctx.getById(getRootId(ctx));
var getResizeTriggerEl = (ctx, id) => ctx.getById(getResizeTriggerId(ctx, id));
var getPanelEl = (ctx, id) => ctx.getById(getPanelId(ctx, id));
var getCursor = (state, x) => {
  let cursor = x ? "col-resize" : "row-resize";
  if (state.isAtMin) cursor = x ? "e-resize" : "s-resize";
  if (state.isAtMax) cursor = x ? "w-resize" : "n-resize";
  return cursor;
};
var getResizeTriggerEls = (ctx) => {
  return queryAll(getRootEl(ctx), `[role=separator][data-ownedby='${CSS.escape(getRootId(ctx))}']`);
};
var setupGlobalCursor = (ctx, state, x, nonce) => {
  const styleEl = ctx.getById(getGlobalCursorId(ctx));
  const textContent = `* { cursor: ${getCursor(state, x)} !important; }`;
  if (styleEl) {
    styleEl.textContent = textContent;
  } else {
    const style = ctx.getDoc().createElement("style");
    if (nonce) style.nonce = nonce;
    style.id = getGlobalCursorId(ctx);
    style.textContent = textContent;
    ctx.getDoc().head.appendChild(style);
  }
};
var removeGlobalCursor = (ctx) => {
  const styleEl = ctx.getById(getGlobalCursorId(ctx));
  styleEl?.remove();
};
export {
  getCursor,
  getGlobalCursorId,
  getLabelId,
  getPanelEl,
  getPanelEls,
  getPanelId,
  getResizeTriggerEl,
  getResizeTriggerEls,
  getResizeTriggerId,
  getRootEl,
  getRootId,
  removeGlobalCursor,
  setupGlobalCursor
};
