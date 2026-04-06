"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/menu.dom.ts
var menu_dom_exports = {};
__export(menu_dom_exports, {
  dispatchSelectionEvent: () => dispatchSelectionEvent,
  getArrowEl: () => getArrowEl,
  getArrowId: () => getArrowId,
  getContentEl: () => getContentEl,
  getContentId: () => getContentId,
  getContextTriggerEl: () => getContextTriggerEl,
  getContextTriggerId: () => getContextTriggerId,
  getElemByKey: () => getElemByKey,
  getElements: () => getElements,
  getFirstEl: () => getFirstEl,
  getGroupId: () => getGroupId,
  getGroupLabelId: () => getGroupLabelId,
  getItemEl: () => getItemEl,
  getItemId: () => getItemId,
  getItemValue: () => getItemValue,
  getLastEl: () => getLastEl,
  getNextEl: () => getNextEl,
  getOptionFromItemEl: () => getOptionFromItemEl,
  getPositionerEl: () => getPositionerEl,
  getPositionerId: () => getPositionerId,
  getPrevEl: () => getPrevEl,
  getTriggerEl: () => getTriggerEl,
  getTriggerId: () => getTriggerId,
  isTargetDisabled: () => isTargetDisabled,
  isTriggerItem: () => isTriggerItem,
  itemSelectEvent: () => itemSelectEvent
});
module.exports = __toCommonJS(menu_dom_exports);
var import_dom_query = require("@zag-js/dom-query");
var import_utils = require("@zag-js/utils");
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
  return (0, import_dom_query.queryAll)(getContentEl(ctx), selector);
};
var getFirstEl = (ctx) => (0, import_utils.first)(getElements(ctx));
var getLastEl = (ctx) => (0, import_utils.last)(getElements(ctx));
var isMatch = (el, value) => {
  if (!value) return false;
  return el.id === value || el.dataset.value === value;
};
var getNextEl = (ctx, opts) => {
  const items = getElements(ctx);
  const index = items.findIndex((el) => isMatch(el, opts.value));
  return (0, import_utils.next)(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getPrevEl = (ctx, opts) => {
  const items = getElements(ctx);
  const index = items.findIndex((el) => isMatch(el, opts.value));
  return (0, import_utils.prev)(items, index, { loop: opts.loop ?? opts.loopFocus });
};
var getElemByKey = (ctx, opts) => {
  const items = getElements(ctx);
  const item = items.find((el) => isMatch(el, opts.value));
  return (0, import_dom_query.getByTypeahead)(items, { state: opts.typeaheadState, key: opts.key, activeId: item?.id ?? null });
};
var isTargetDisabled = (v) => {
  return (0, import_dom_query.isHTMLElement)(v) && (v.dataset.disabled === "" || v.hasAttribute("disabled"));
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
  const win = (0, import_dom_query.getWindow)(el);
  const event = new win.CustomEvent(itemSelectEvent, { detail: { value } });
  el.dispatchEvent(event);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
