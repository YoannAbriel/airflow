import { Scope } from '@zag-js/core';

declare const getContentId: (ctx: Scope) => any;
declare const getPositionerId: (ctx: Scope) => any;
declare const getTitleId: (ctx: Scope) => any;
declare const getTriggerId: (ctx: Scope) => any;
declare const getBackdropId: (ctx: Scope) => any;
declare const getHeaderId: (ctx: Scope) => any;
declare const getGrabberId: (ctx: Scope) => any;
declare const getGrabberIndicatorId: (ctx: Scope) => any;
declare const getCloseTriggerId: (ctx: Scope) => any;
declare const getContentEl: (ctx: Scope) => HTMLElement | null;
declare const getPositionerEl: (ctx: Scope) => HTMLElement | null;
declare const getTriggerEl: (ctx: Scope) => HTMLElement | null;
declare const getBackdropEl: (ctx: Scope) => HTMLElement | null;
declare const getHeaderEl: (ctx: Scope) => HTMLElement | null;
declare const getGrabberEl: (ctx: Scope) => HTMLElement | null;
declare const getGrabberIndicatorEl: (ctx: Scope) => HTMLElement | null;
declare const getCloseTriggerEl: (ctx: Scope) => HTMLElement | null;
declare const getScrollEls: (scope: Scope) => Record<"x" | "y", HTMLElement[]>;

export { getBackdropEl, getBackdropId, getCloseTriggerEl, getCloseTriggerId, getContentEl, getContentId, getGrabberEl, getGrabberId, getGrabberIndicatorEl, getGrabberIndicatorId, getHeaderEl, getHeaderId, getPositionerEl, getPositionerId, getScrollEls, getTitleId, getTriggerEl, getTriggerId };
