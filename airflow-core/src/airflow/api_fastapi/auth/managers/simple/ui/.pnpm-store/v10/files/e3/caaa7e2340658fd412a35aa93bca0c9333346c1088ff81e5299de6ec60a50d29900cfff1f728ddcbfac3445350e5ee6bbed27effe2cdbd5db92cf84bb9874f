'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const useSwapContext = require('./use-swap-context.cjs');

const SwapIndicator = react.forwardRef((props, ref) => {
  const { type, ...restProps } = props;
  const swap = useSwapContext.useSwapContext();
  const presence = type === "on" ? swap.onPresence : swap.offPresence;
  if (presence.unmounted) return null;
  const mergedProps = react$1.mergeProps(swap.getIndicatorProps({ type }), restProps);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.span, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
SwapIndicator.displayName = "SwapIndicator";

exports.SwapIndicator = SwapIndicator;
