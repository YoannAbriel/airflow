'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const splitWeekNumberCellProps = createSplitProps.createSplitProps();
const DatePickerWeekNumberCell = react.forwardRef(
  (props, ref) => {
    const [cellProps, localProps] = splitWeekNumberCellProps(props, ["weekIndex", "week"]);
    const datePicker = useDatePickerContext.useDatePickerContext();
    const mergedProps = react$1.mergeProps(datePicker.getWeekNumberCellProps(cellProps), localProps);
    return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.td, { ...mergedProps, ref });
  }
);
DatePickerWeekNumberCell.displayName = "DatePickerWeekNumberCell";

exports.DatePickerWeekNumberCell = DatePickerWeekNumberCell;
