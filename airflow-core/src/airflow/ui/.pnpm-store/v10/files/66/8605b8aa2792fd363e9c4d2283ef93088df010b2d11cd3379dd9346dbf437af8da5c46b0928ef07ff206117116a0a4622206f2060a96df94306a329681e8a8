'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const composeRefs = require('../../utils/compose-refs.cjs');
const factory = require('../factory.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');
const createSplitProps = require('../../utils/create-split-props.cjs');

const splitContentProps = createSplitProps.createSplitProps();
const DrawerContent = react.forwardRef((props, ref) => {
  const [contentProps, localProps] = splitContentProps(props, ["draggable"]);
  const drawer = useDrawerContext.useDrawerContext();
  const presence = usePresenceContext.usePresenceContext();
  const mergedProps = react$1.mergeProps(
    drawer.getContentProps({ draggable: true, ...contentProps }),
    presence.getPresenceProps(),
    localProps
  );
  if (presence.unmounted) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref: composeRefs.composeRefs(presence.ref, ref) });
});
DrawerContent.displayName = "DrawerContent";

exports.DrawerContent = DrawerContent;
