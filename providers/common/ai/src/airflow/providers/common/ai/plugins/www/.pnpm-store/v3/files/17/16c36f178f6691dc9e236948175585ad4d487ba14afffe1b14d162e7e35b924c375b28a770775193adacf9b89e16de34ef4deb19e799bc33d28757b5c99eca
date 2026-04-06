'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerTitle = react.forwardRef((props, ref) => {
  const drawer = useDrawerContext.useDrawerContext();
  const mergedProps = react$1.mergeProps(drawer.getTitleProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.h2, { ...mergedProps, ref });
});
DrawerTitle.displayName = "DrawerTitle";

exports.DrawerTitle = DrawerTitle;
