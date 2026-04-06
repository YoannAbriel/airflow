'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerPositioner = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(drawer.getPositionerProps(), props);
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DrawerPositioner.displayName = "DrawerPositioner";

export { DrawerPositioner };
