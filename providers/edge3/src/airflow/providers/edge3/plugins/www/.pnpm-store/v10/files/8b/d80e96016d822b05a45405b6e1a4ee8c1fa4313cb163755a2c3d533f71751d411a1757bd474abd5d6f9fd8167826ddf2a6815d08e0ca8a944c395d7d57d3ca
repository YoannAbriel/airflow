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

// src/drawer.dom.ts
var drawer_dom_exports = {};
__export(drawer_dom_exports, {
  getBackdropEl: () => getBackdropEl,
  getBackdropId: () => getBackdropId,
  getCloseTriggerEl: () => getCloseTriggerEl,
  getCloseTriggerId: () => getCloseTriggerId,
  getContentEl: () => getContentEl,
  getContentId: () => getContentId,
  getGrabberEl: () => getGrabberEl,
  getGrabberId: () => getGrabberId,
  getGrabberIndicatorEl: () => getGrabberIndicatorEl,
  getGrabberIndicatorId: () => getGrabberIndicatorId,
  getHeaderEl: () => getHeaderEl,
  getHeaderId: () => getHeaderId,
  getPositionerEl: () => getPositionerEl,
  getPositionerId: () => getPositionerId,
  getScrollEls: () => getScrollEls,
  getTitleId: () => getTitleId,
  getTriggerEl: () => getTriggerEl,
  getTriggerId: () => getTriggerId
});
module.exports = __toCommonJS(drawer_dom_exports);
var import_dom_query = require("@zag-js/dom-query");
var getContentId = (ctx) => ctx.ids?.content ?? `drawer:${ctx.id}:content`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `drawer:${ctx.id}:positioner`;
var getTitleId = (ctx) => ctx.ids?.title ?? `drawer:${ctx.id}:title`;
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `drawer:${ctx.id}:trigger`;
var getBackdropId = (ctx) => ctx.ids?.backdrop ?? `drawer:${ctx.id}:backdrop`;
var getHeaderId = (ctx) => ctx.ids?.header ?? `drawer:${ctx.id}:header`;
var getGrabberId = (ctx) => ctx.ids?.grabber ?? `drawer:${ctx.id}:grabber`;
var getGrabberIndicatorId = (ctx) => ctx.ids?.grabberIndicator ?? `drawer:${ctx.id}:grabber-indicator`;
var getCloseTriggerId = (ctx) => ctx.ids?.closeTrigger ?? `drawer:${ctx.id}:close-trigger`;
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getBackdropEl = (ctx) => ctx.getById(getBackdropId(ctx));
var getHeaderEl = (ctx) => ctx.getById(getHeaderId(ctx));
var getGrabberEl = (ctx) => ctx.getById(getGrabberId(ctx));
var getGrabberIndicatorEl = (ctx) => ctx.getById(getGrabberIndicatorId(ctx));
var getCloseTriggerEl = (ctx) => ctx.getById(getCloseTriggerId(ctx));
var getScrollEls = (scope) => {
  const els = { x: [], y: [] };
  const contentEl = getContentEl(scope);
  if (!contentEl) return els;
  const nodes = (0, import_dom_query.queryAll)(contentEl, "*");
  nodes.forEach((node) => {
    const y = node.scrollHeight > node.clientHeight;
    if (y) els.y.push(node);
    const x = node.scrollWidth > node.clientWidth;
    if (x) els.x.push(node);
  });
  return els;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBackdropEl,
  getBackdropId,
  getCloseTriggerEl,
  getCloseTriggerId,
  getContentEl,
  getContentId,
  getGrabberEl,
  getGrabberId,
  getGrabberIndicatorEl,
  getGrabberIndicatorId,
  getHeaderEl,
  getHeaderId,
  getPositionerEl,
  getPositionerId,
  getScrollEls,
  getTitleId,
  getTriggerEl,
  getTriggerId
});
