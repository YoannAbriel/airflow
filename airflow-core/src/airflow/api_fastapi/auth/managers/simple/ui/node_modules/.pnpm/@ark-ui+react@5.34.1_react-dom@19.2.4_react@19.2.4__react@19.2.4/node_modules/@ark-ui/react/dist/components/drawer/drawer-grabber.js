'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerGrabber = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const mergedProps = mergeProps(drawer.getGrabberProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DrawerGrabber.displayName = "DrawerGrabber";

export { DrawerGrabber };
