import { Scope } from '@zag-js/core';

declare const getTriggerId: (scope: Scope) => any;
declare const getContentId: (scope: Scope) => any;
declare const getArrowId: (scope: Scope) => any;
declare const getPositionerId: (scope: Scope) => any;
declare const getTriggerEl: (scope: Scope) => HTMLElement | null;
declare const getContentEl: (scope: Scope) => HTMLElement | null;
declare const getPositionerEl: (scope: Scope) => HTMLElement | null;
declare const getArrowEl: (scope: Scope) => HTMLElement | null;

export { getArrowEl, getArrowId, getContentEl, getContentId, getPositionerEl, getPositionerId, getTriggerEl, getTriggerId };
