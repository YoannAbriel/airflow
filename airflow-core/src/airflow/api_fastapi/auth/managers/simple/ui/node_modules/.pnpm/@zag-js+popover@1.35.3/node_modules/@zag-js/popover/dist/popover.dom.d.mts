import { Scope } from '@zag-js/core';

declare const getAnchorId: (scope: Scope) => any;
declare const getTriggerId: (scope: Scope) => any;
declare const getContentId: (scope: Scope) => any;
declare const getPositionerId: (scope: Scope) => any;
declare const getArrowId: (scope: Scope) => any;
declare const getTitleId: (scope: Scope) => any;
declare const getDescriptionId: (scope: Scope) => any;
declare const getCloseTriggerId: (scope: Scope) => any;
declare const getAnchorEl: (scope: Scope) => HTMLElement | null;
declare const getTriggerEl: (scope: Scope) => HTMLElement | null;
declare const getContentEl: (scope: Scope) => HTMLElement | null;
declare const getPositionerEl: (scope: Scope) => HTMLElement | null;
declare const getTitleEl: (scope: Scope) => HTMLElement | null;
declare const getDescriptionEl: (scope: Scope) => HTMLElement | null;
declare const getFocusableEls: (scope: Scope) => HTMLElement[];
declare const getFirstFocusableEl: (scope: Scope) => HTMLElement;

export { getAnchorEl, getAnchorId, getArrowId, getCloseTriggerId, getContentEl, getContentId, getDescriptionEl, getDescriptionId, getFirstFocusableEl, getFocusableEls, getPositionerEl, getPositionerId, getTitleEl, getTitleId, getTriggerEl, getTriggerId };
