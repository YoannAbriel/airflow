import { DateValue } from '@zag-js/date-utils';
import { DateView, IntlTranslations, SelectionMode, VisibleRangeText } from './date-picker.types.mjs';
import '@internationalized/date';
import '@zag-js/core';
import '@zag-js/live-region';
import '@zag-js/popper';
import '@zag-js/types';

declare function adjustStartAndEndDate(value: Array<DateValue | null | undefined>): DateValue[];
declare function isDateWithinRange(date: DateValue, value: Array<DateValue | null | undefined>): boolean;
declare function sortDates(values: Array<DateValue | null | undefined>): DateValue[];
declare function getRoleDescription(view: DateView): string;
declare function getInputPlaceholder(locale: string): string;
declare const isValidCharacter: (char: string | null, separator: string) => boolean;
declare const isValidDate: (value: DateValue) => boolean;
declare const ensureValidCharacters: (value: string, separator: string) => string;
declare function getLocaleSeparator(locale: string): string;
declare const defaultTranslations: IntlTranslations;
declare function clampView(view: DateView | undefined, minView: DateView | undefined, maxView: DateView | undefined): DateView;
declare function isAboveMinView(view: DateView, minView: DateView): boolean;
declare function isBelowMinView(view: DateView, minView: DateView): boolean;
declare function getNextView(view: DateView, minView: DateView, maxView: DateView): DateView;
declare function getPreviousView(view: DateView, minView: DateView, maxView: DateView): DateView;
declare function eachView(cb: (view: DateView) => void): void;
interface VisibleRangeTextOptions {
    view: DateView;
    startValue: DateValue;
    endValue: DateValue;
    locale: string;
    timeZone: string;
    selectionMode: SelectionMode;
}
declare const getVisibleRangeText: (depArgs: VisibleRangeTextOptions) => VisibleRangeText;

export { adjustStartAndEndDate, clampView, defaultTranslations, eachView, ensureValidCharacters, getInputPlaceholder, getLocaleSeparator, getNextView, getPreviousView, getRoleDescription, getVisibleRangeText, isAboveMinView, isBelowMinView, isDateWithinRange, isValidCharacter, isValidDate, sortDates };
