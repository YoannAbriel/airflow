import "./chunk-QZ7TP4HQ.mjs";

// src/drawer.dom.ts
import { queryAll } from "@zag-js/dom-query";
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
  const nodes = queryAll(contentEl, "*");
  nodes.forEach((node) => {
    const y = node.scrollHeight > node.clientHeight;
    if (y) els.y.push(node);
    const x = node.scrollWidth > node.clientWidth;
    if (x) els.x.push(node);
  });
  return els;
};
export {
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
};
