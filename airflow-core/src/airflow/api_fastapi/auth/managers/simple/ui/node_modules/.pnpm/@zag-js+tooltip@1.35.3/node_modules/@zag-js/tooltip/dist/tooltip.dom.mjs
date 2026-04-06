// src/tooltip.dom.ts
var getTriggerId = (scope) => scope.ids?.trigger ?? `tooltip:${scope.id}:trigger`;
var getContentId = (scope) => scope.ids?.content ?? `tooltip:${scope.id}:content`;
var getArrowId = (scope) => scope.ids?.arrow ?? `tooltip:${scope.id}:arrow`;
var getPositionerId = (scope) => scope.ids?.positioner ?? `tooltip:${scope.id}:popper`;
var getTriggerEl = (scope) => scope.getById(getTriggerId(scope));
var getContentEl = (scope) => scope.getById(getContentId(scope));
var getPositionerEl = (scope) => scope.getById(getPositionerId(scope));
var getArrowEl = (scope) => scope.getById(getArrowId(scope));
export {
  getArrowEl,
  getArrowId,
  getContentEl,
  getContentId,
  getPositionerEl,
  getPositionerId,
  getTriggerEl,
  getTriggerId
};
