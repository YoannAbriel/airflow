import { Scope } from '@zag-js/core';

declare const getTriggerId: (ctx: Scope) => any;
declare const getContentId: (ctx: Scope) => any;
declare const getPositionerId: (ctx: Scope) => any;
declare const getArrowId: (ctx: Scope) => any;
declare const getTriggerEl: (ctx: Scope) => HTMLElement | null;
declare const getContentEl: (ctx: Scope) => HTMLElement | null;
declare const getPositionerEl: (ctx: Scope) => HTMLElement | null;

export { getArrowId, getContentEl, getContentId, getPositionerEl, getPositionerId, getTriggerEl, getTriggerId };
