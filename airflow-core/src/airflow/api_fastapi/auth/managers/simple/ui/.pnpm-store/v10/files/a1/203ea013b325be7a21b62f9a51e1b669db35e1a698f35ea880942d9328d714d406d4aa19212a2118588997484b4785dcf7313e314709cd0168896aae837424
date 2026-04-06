'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerGrabberIndicator = react.forwardRef((props, ref) => {
  const drawer = useDrawerContext.useDrawerContext();
  const mergedProps = react$1.mergeProps(drawer.getGrabberIndicatorProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
DrawerGrabberIndicator.displayName = "DrawerGrabberIndicator";

exports.DrawerGrabberIndicator = DrawerGrabberIndicator;
