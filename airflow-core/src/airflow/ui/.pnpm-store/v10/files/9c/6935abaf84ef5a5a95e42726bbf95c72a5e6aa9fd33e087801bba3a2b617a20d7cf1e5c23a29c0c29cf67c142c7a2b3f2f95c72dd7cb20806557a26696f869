// src/menu.dom.ts
import { getByTypeahead, getWindow, isHTMLElement, queryAll } from "@zag-js/dom-query";
import { first, last, next, prev } from "@zag-js/utils";
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `menu:${ctx.id}:trigger`;
var getContextTriggerId = (ctx) => ctx.ids?.contextTrigger ?? `menu:${ctx.id}:ctx-trigger`;
var getContentId = (ctx) => ctx.ids?.content ?? `menu:${ctx.id}:content`;
var getArrowId = (ctx) => ctx.ids?.arrow ?? `menu:${ctx.id}:arrow`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `menu:${ctx.id}:popper`;
var getGroupId = (ctx, id) => ctx.ids?.group?.(id) ?? `menu:${ctx.id}:group:${id}`;
var getItemId = (ctx, id) => `${ctx.id}/${id}`;
var getItemValue = (el) => el?.dataset.value ?? null;
var getGroupLabelId = (ctx, id) => ctx.ids?.groupLabel?.(id) ?? `menu:${ctx.id}:group-label:${id}`;
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getItemEl = (ctx, value) => value ? ctx.getById(getItemId(ctx, value)) : null;
var getArrowEl = (ctx) => ctx.getById(getArrowId(ctx));
var getContextTriggerEl = (ctx) => ctx.getById(getContextTriggerId(ctx));
var getElements = (ctx) => {
  const ownerId = CSS.escape(getContentId(ctx));
  const selector = `[role^="menuitem"][data-ownedby=${ownerId}]:not([data-disabled])`;
  return queryAll(getContentEl(ctx), selector);
};
var getFirstEl = (ctx) => first(getElements(ctx));
var getLastEl = (ctx) => last(getElements(ctx));
var isMatch = (el, value) => {
  if (!value) return false;
  return el.id === value || el.dataset.value === value;
};
var getNextEl = (ctx, opts) => {
  const items = getElements(ctx);
  const index = items.findIndex((el) => isMatch(el, opts.value));
  return next(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getPrevEl = (ctx, opts) => {
  const items = getElements(ctx);
  const index = items.findIndex((el) => isMatch(el, opts.value));
  return prev(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getElemByKey = (ctx, opts) => {
  const items = getElements(ctx);
  const item = items.find((el) => isMatch(el, opts.value));
  return getByTypeahead(items, { state: opts.typeaheadState, key: opts.key, activeId: item?.id ?? null });
};
var isTargetDisabled = (v) => {
  return isHTMLElement(v) && (v.dataset.disabled === "" || v.hasAttribute("disabled"));
};
var isTriggerItem = (el) => {
  return !!el?.getAttribute("role")?.startsWith("menuitem") && !!el?.hasAttribute("data-controls");
};
var getOptionFromItemEl = (el) => {
  return {
    id: el.id,
    name: el.dataset.name,
    value: el.dataset.value,
    valueText: el.dataset.valueText,
    type: el.dataset.type
  };
};
var itemSelectEvent = "menu:select";
function dispatchSelectionEvent(el, value) {
  if (!el) return;
  const win = getWindow(el);
  const event = new win.CustomEvent(itemSelectEvent, { detail: { value } });
  el.dispatchEvent(event);
}
export {
  dispatchSelectionEvent,
  getArrowEl,
  getArrowId,
  getContentEl,
  getContentId,
  getContextTriggerEl,
  getContextTriggerId,
  getElemByKey,
  getElements,
  getFirstEl,
  getGroupId,
  getGroupLabelId,
  getItemEl,
  getItemId,
  getItemValue,
  getLastEl,
  getNextEl,
  getOptionFromItemEl,
  getPositionerEl,
  getPositionerId,
  getPrevEl,
  getTriggerEl,
  getTriggerId,
  isTargetDisabled,
  isTriggerItem,
  itemSelectEvent
};
