'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerGrabber = react.forwardRef((props, ref) => {
  const drawer = useDrawerContext.useDrawerContext();
  const mergedProps = react$1.mergeProps(drawer.getGrabberProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
DrawerGrabber.displayName = "DrawerGrabber";

exports.DrawerGrabber = DrawerGrabber;
