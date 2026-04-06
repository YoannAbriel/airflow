'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerCloseTrigger = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const mergedProps = mergeProps(drawer.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";

export { DrawerCloseTrigger };
