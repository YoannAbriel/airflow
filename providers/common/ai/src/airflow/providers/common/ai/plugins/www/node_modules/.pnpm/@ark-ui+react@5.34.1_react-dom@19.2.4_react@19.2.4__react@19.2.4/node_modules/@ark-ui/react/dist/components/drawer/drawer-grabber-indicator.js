'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerGrabberIndicator = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const mergedProps = mergeProps(drawer.getGrabberIndicatorProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DrawerGrabberIndicator.displayName = "DrawerGrabberIndicator";

export { DrawerGrabberIndicator };
