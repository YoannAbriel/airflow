'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerCloseTrigger = react.forwardRef((props, ref) => {
  const drawer = useDrawerContext.useDrawerContext();
  const mergedProps = react$1.mergeProps(drawer.getCloseTriggerProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.button, { ...mergedProps, ref });
});
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";

exports.DrawerCloseTrigger = DrawerCloseTrigger;
