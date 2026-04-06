// src/popover.dom.ts
import { getFocusables } from "@zag-js/dom-query";
var getAnchorId = (scope) => scope.ids?.anchor ?? `popover:${scope.id}:anchor`;
var getTriggerId = (scope) => scope.ids?.trigger ?? `popover:${scope.id}:trigger`;
var getContentId = (scope) => scope.ids?.content ?? `popover:${scope.id}:content`;
var getPositionerId = (scope) => scope.ids?.positioner ?? `popover:${scope.id}:popper`;
var getArrowId = (scope) => scope.ids?.arrow ?? `popover:${scope.id}:arrow`;
var getTitleId = (scope) => scope.ids?.title ?? `popover:${scope.id}:title`;
var getDescriptionId = (scope) => scope.ids?.description ?? `popover:${scope.id}:desc`;
var getCloseTriggerId = (scope) => scope.ids?.closeTrigger ?? `popover:${scope.id}:close`;
var getAnchorEl = (scope) => scope.getById(getAnchorId(scope));
var getTriggerEl = (scope) => scope.getById(getTriggerId(scope));
var getContentEl = (scope) => scope.getById(getContentId(scope));
var getPositionerEl = (scope) => scope.getById(getPositionerId(scope));
var getTitleEl = (scope) => scope.getById(getTitleId(scope));
var getDescriptionEl = (scope) => scope.getById(getDescriptionId(scope));
var getFocusableEls = (scope) => getFocusables(getContentEl(scope));
var getFirstFocusableEl = (scope) => getFocusableEls(scope)[0];
export {
  getAnchorEl,
  getAnchorId,
  getArrowId,
  getCloseTriggerId,
  getContentEl,
  getContentId,
  getDescriptionEl,
  getDescriptionId,
  getFirstFocusableEl,
  getFocusableEls,
  getPositionerEl,
  getPositionerId,
  getTitleEl,
  getTitleId,
  getTriggerEl,
  getTriggerId
};
