'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { composeRefs } from '../../utils/compose-refs.js';
import { ark } from '../factory.js';
import { usePresenceContext } from '../presence/use-presence-context.js';
import { useDrawerContext } from './use-drawer-context.js';
import { createSplitProps } from '../../utils/create-split-props.js';

const splitContentProps = createSplitProps();
const DrawerContent = forwardRef((props, ref) => {
  const [contentProps, localProps] = splitContentProps(props, ["draggable"]);
  const drawer = useDrawerContext();
  const presence = usePresenceContext();
  const mergedProps = mergeProps(
    drawer.getContentProps({ draggable: true, ...contentProps }),
    presence.getPresenceProps(),
    localProps
  );
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref) });
});
DrawerContent.displayName = "DrawerContent";

export { DrawerContent };
