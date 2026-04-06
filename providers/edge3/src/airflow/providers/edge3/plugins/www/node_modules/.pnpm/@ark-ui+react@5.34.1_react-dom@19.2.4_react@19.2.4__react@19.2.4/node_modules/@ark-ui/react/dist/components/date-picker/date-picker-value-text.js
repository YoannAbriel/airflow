'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, Fragment } from 'react';
import { ark } from '../factory.js';
import { datePickerAnatomy } from './date-picker.anatomy.js';
import { useDatePickerContext } from './use-date-picker-context.js';

const DatePickerValueText = forwardRef((props, ref) => {
  const { children, placeholder, separator = ", ", ...localProps } = props;
  const datePicker = useDatePickerContext();
  const hasValue = datePicker.value.length > 0;
  if (typeof children === "function") {
    return /* @__PURE__ */ jsx(Fragment, { children: hasValue ? datePicker.value.map((value, index) => /* @__PURE__ */ jsx(Fragment, { children: children({
      value,
      index,
      valueAsString: datePicker.valueAsString[index],
      remove: () => {
        datePicker.setValue(datePicker.value.filter((_, i) => i !== index));
      }
    }) }, index)) : placeholder });
  }
  return /* @__PURE__ */ jsx(ark.span, { ...datePickerAnatomy.build().valueText.attrs, ...localProps, ref, children: hasValue ? datePicker.valueAsString.join(separator) : placeholder });
});
DatePickerValueText.displayName = "DatePickerValueText";

export { DatePickerValueText };
