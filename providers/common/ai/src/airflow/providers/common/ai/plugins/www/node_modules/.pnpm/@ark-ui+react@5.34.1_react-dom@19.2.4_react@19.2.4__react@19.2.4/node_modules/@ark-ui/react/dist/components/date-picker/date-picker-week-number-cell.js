'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { ark } from '../factory.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const splitWeekNumberCellProps = createSplitProps();
const DatePickerWeekNumberCell = forwardRef(
  (props, ref) => {
    const [cellProps, localProps] = splitWeekNumberCellProps(props, ["weekIndex", "week"]);
    const datePicker = useDatePickerContext();
    const mergedProps = mergeProps(datePicker.getWeekNumberCellProps(cellProps), localProps);
    return /* @__PURE__ */ jsx(ark.td, { ...mergedProps, ref });
  }
);
DatePickerWeekNumberCell.displayName = "DatePickerWeekNumberCell";

export { DatePickerWeekNumberCell };
