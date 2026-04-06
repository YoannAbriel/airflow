'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('@zag-js/react');
const renderStrategy = require('../../utils/render-strategy.cjs');
const splitPresenceProps = require('../presence/split-presence-props.cjs');
const usePresence = require('../presence/use-presence.cjs');
const usePresenceContext = require('../presence/use-presence-context.cjs');
const useDrawer = require('./use-drawer.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerRoot = (props) => {
  const [presenceProps, { children, ...localProps }] = splitPresenceProps.splitPresenceProps(props);
  const [renderStrategyProps] = renderStrategy.splitRenderStrategyProps(presenceProps);
  const drawer = useDrawer.useDrawer(localProps);
  const presence = usePresence.usePresence(react.mergeProps({ present: drawer.open }, presenceProps));
  return /* @__PURE__ */ jsxRuntime.jsx(useDrawerContext.DrawerProvider, { value: drawer, children: /* @__PURE__ */ jsxRuntime.jsx(renderStrategy.RenderStrategyPropsProvider, { value: renderStrategyProps, children: /* @__PURE__ */ jsxRuntime.jsx(usePresenceContext.PresenceProvider, { value: presence, children }) }) });
};

exports.DrawerRoot = DrawerRoot;
