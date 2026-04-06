'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const factory = require('../factory.cjs');
const useDrawerStackContext = require('./use-drawer-stack-context.cjs');

const DrawerIndentBackground = react.forwardRef((props, ref) => {
  const stackApi = useDrawerStackContext.useDrawerStackContext();
  const mergedProps = react$1.mergeProps(stackApi.getIndentBackgroundProps(), props);
  return /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref });
});
DrawerIndentBackground.displayName = "DrawerIndentBackground";

exports.DrawerIndentBackground = DrawerIndentBackground;
