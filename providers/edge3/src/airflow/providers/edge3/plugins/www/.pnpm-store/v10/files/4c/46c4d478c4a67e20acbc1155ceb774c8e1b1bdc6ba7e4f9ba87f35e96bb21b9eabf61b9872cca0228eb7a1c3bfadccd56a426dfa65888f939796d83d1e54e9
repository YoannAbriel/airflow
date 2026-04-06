'use client';
import { jsx } from 'react/jsx-runtime';
import { mergeProps } from '@zag-js/react';
import { forwardRef } from 'react';
import { ark } from '../factory.js';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerTitle = forwardRef((props, ref) => {
  const drawer = useDrawerContext();
  const mergedProps = mergeProps(drawer.getTitleProps(), props);
  return /* @__PURE__ */ jsx(ark.h2, { ...mergedProps, ref });
});
DrawerTitle.displayName = "DrawerTitle";

export { DrawerTitle };
