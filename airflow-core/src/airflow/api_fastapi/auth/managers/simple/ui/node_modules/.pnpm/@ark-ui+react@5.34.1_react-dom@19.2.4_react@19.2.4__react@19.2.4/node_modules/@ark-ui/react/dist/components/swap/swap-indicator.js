'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { useSwapContext } from './use-swap-context.js';

const SwapIndicator = forwardRef((props, ref) => {
  const { type, ...restProps } = props;
  const swap = useSwapContext();
  const presence = type === "on" ? swap.onPresence : swap.offPresence;
  if (presence.unmounted) return null;
  const mergedProps = mergeProps(swap.getIndicatorProps({ type }), restProps);
  return /* @__PURE__ */ jsx(ark.span, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
SwapIndicator.displayName = "SwapIndicator";

export { SwapIndicator };
