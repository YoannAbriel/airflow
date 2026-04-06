'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useSwap = require('./use-swap.cjs');
const useSwapContext = require('./use-swap-context.cjs');

const SwapRoot = react.forwardRef((props, ref) => {
  const { children, swap: swapProp, lazyMount, unmountOnExit, ...restProps } = props;
  const swap = useSwap.useSwap({ swap: swapProp, lazyMount, unmountOnExit });
  const mergedProps = react$1.mergeProps(swap.getRootProps(), restProps);
  return /* @__PURE__ */ jsxRuntime.jsx(useSwapContext.SwapProvider, { value: swap, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref, children }) });
});
SwapRoot.displayName = "SwapRoot";

exports.SwapRoot = SwapRoot;
