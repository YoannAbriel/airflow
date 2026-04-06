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

// src/hover-card.dom.ts
var hover_card_dom_exports = {};
__export(hover_card_dom_exports, {
  getArrowId: () => getArrowId,
  getContentEl: () => getContentEl,
  getContentId: () => getContentId,
  getPositionerEl: () => getPositionerEl,
  getPositionerId: () => getPositionerId,
  getTriggerEl: () => getTriggerEl,
  getTriggerId: () => getTriggerId
});
module.exports = __toCommonJS(hover_card_dom_exports);
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `hover-card:${ctx.id}:trigger`;
var getContentId = (ctx) => ctx.ids?.content ?? `hover-card:${ctx.id}:content`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `hover-card:${ctx.id}:popper`;
var getArrowId = (ctx) => ctx.ids?.arrow ?? `hover-card:${ctx.id}:arrow`;
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getArrowId,
  getContentEl,
  getContentId,
  getPositionerEl,
  getPositionerId,
  getTriggerEl,
  getTriggerId
});
