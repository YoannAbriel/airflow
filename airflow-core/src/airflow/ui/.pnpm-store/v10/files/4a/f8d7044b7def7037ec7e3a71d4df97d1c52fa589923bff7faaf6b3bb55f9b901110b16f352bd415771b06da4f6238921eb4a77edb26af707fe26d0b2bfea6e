'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { SwapProvider } from './use-swap-context.js';

const SwapRootProvider = forwardRef((props, ref) => {
  const { value, children, ...restProps } = props;
  const mergedProps = mergeProps(value.getRootProps(), restProps);
  return /* @__PURE__ */ jsx(SwapProvider, { value, children: /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref, children }) });
});
SwapRootProvider.displayName = "SwapRootProvider";

export { SwapRootProvider };
