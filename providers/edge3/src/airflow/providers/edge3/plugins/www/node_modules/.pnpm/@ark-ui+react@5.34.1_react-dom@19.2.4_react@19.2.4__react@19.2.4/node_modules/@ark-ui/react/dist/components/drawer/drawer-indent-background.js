'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDrawerStackContext } from './use-drawer-stack-context.js';

const DrawerIndentBackground = forwardRef((props, ref) => {
  const stackApi = useDrawerStackContext();
  const mergedProps = mergeProps(stackApi.getIndentBackgroundProps(), props);
  return /* @__PURE__ */ jsx(ark.div, { ...mergedProps, ref });
});
DrawerIndentBackground.displayName = "DrawerIndentBackground";

export { DrawerIndentBackground };
