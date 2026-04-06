// src/hover-card.dom.ts
var getTriggerId = (ctx) => ctx.ids?.trigger ?? `hover-card:${ctx.id}:trigger`;
var getContentId = (ctx) => ctx.ids?.content ?? `hover-card:${ctx.id}:content`;
var getPositionerId = (ctx) => ctx.ids?.positioner ?? `hover-card:${ctx.id}:popper`;
var getArrowId = (ctx) => ctx.ids?.arrow ?? `hover-card:${ctx.id}:arrow`;
var getTriggerEl = (ctx) => ctx.getById(getTriggerId(ctx));
var getContentEl = (ctx) => ctx.getById(getContentId(ctx));
var getPositionerEl = (ctx) => ctx.getById(getPositionerId(ctx));
export {
  getArrowId,
  getContentEl,
  getContentId,
  getPositionerEl,
  getPositionerId,
  getTriggerEl,
  getTriggerId
};
