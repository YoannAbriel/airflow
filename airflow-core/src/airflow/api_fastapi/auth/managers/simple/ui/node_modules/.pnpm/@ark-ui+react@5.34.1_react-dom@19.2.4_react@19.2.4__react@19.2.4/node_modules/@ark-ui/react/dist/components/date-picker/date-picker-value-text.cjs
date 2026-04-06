'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const factory = require('../factory.cjs');
const datePicker_anatomy = require('./date-picker.anatomy.cjs');
const useDatePickerContext = require('./use-date-picker-context.cjs');

const DatePickerValueText = react.forwardRef((props, ref) => {
  const { children, placeholder, separator = ", ", ...localProps } = props;
  const datePicker = useDatePickerContext.useDatePickerContext();
  const hasValue = datePicker.value.length > 0;
  if (typeof children === "function") {
    return /* @__PURE__ */ jsxRuntime.jsx(react.Fragment, { children: hasValue ? datePicker.value.map((value, index) => /* @__PURE__ */ jsxRuntime.jsx(react.Fragment, { children: children({
      value,
      index,
      valueAsString: datePicker.valueAsString[index],
      remove: () => {
        datePicker.setValue(datePicker.value.filter((_, i) => i !== index));
      }
    }) }, index)) : placeholder });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...datePicker_anatomy.datePickerAnatomy.build().valueText.attrs, ...localProps, ref, children: hasValue ? datePicker.valueAsString.join(separator) : placeholder });
});
DatePickerValueText.displayName = "DatePickerValueText";

exports.DatePickerValueText = DatePickerValueText;
