'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerTrigger = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(
    {
      ...drawer.getTriggerProps(),
      "aria-controls": presence.unmounted ? void 0 : drawer.getTriggerProps()["aria-controls"]
    },
    props
  );
  return /* @__PURE__ */ jsx(ark.button, { ...mergedProps, ref });
});
DrawerTrigger.displayName = "DrawerTrigger";

export { DrawerTrigger };
