'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSwapContext = require('./use-swap-context.cjs');

const SwapRootProvider = react.forwardRef((props, ref) => {
  const { value, children, ...restProps } = props;
  const mergedProps = react$1.mergeProps(value.getRootProps(), restProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSwapContext.SwapProvider, { value, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children }) });
});
SwapRootProvider.displayName = "SwapRootProvider";

exports.SwapRootProvider = SwapRootProvider;
