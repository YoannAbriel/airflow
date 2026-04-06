import { Scope } from '@zag-js/core';

declare const getPositionerId: (ctx: Scope) => any;
declare const getBackdropId: (ctx: Scope) => any;
declare const getContentId: (ctx: Scope) => any;
declare const getTriggerId: (ctx: Scope) => any;
declare const getTitleId: (ctx: Scope) => any;
declare const getDescriptionId: (ctx: Scope) => any;
declare const getCloseTriggerId: (ctx: Scope) => any;
declare const getContentEl: (ctx: Scope) => HTMLElement | null;
declare const getPositionerEl: (ctx: Scope) => HTMLElement | null;
declare const getBackdropEl: (ctx: Scope) => HTMLElement | null;
declare const getTriggerEl: (ctx: Scope) => HTMLElement | null;
declare const getTitleEl: (ctx: Scope) => HTMLElement | null;
declare const getDescriptionEl: (ctx: Scope) => HTMLElement | null;
declare const getCloseTriggerEl: (ctx: Scope) => HTMLElement | null;

export { getBackdropEl, getBackdropId, getCloseTriggerEl, getCloseTriggerId, getContentEl, getContentId, getDescriptionEl, getDescriptionId, getPositionerEl, getPositionerId, getTitleEl, getTitleId, getTriggerEl, getTriggerId };
