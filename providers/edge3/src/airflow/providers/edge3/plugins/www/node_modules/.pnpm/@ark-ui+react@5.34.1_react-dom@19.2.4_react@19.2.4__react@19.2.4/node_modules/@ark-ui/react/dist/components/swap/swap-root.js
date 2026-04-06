'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useSwap } from './use-swap.js';
import { SwapProvider } from './use-swap-context.js';

const SwapRoot = forwardRef((props, ref) => {
  const { children, swap: swapProp, lazyMount, unmountOnExit, ...restProps } = props;
  const swap = useSwap({ swap: swapProp, lazyMount, unmountOnExit });
  const mergedProps = mergeProps(swap.getRootProps(), restProps);
  return /* @__PURE__ */ jsx(SwapProvider, { value: swap, children: /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children }) });
});
SwapRoot.displayName = "SwapRoot";

export { SwapRoot };
