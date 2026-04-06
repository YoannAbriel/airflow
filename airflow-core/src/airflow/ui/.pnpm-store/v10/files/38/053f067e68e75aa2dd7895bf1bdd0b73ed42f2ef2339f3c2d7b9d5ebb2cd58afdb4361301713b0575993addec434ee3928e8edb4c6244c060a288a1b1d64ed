'use client';
import { jsx } from 'react/jsx-runtime';
import * as drawer from '@zag-js/drawer';
import { normalizeProps } from '@zag-js/react';
import { useState, useSyncExternalStore, useMemo } from 'react';
import { DrawerStackProvider } from './use-drawer-stack-context.js';
import { DrawerStackStoreProvider } from './use-drawer-stack-store.js';

const DrawerStack = (props) => {
  const { children } = props;
  const [stack] = useState(() => drawer.createStack());
  const snapshot = useSyncExternalStore(stack.subscribe, stack.getSnapshot, stack.getSnapshot);
  const stackApi = useMemo(() => drawer.connectStack(snapshot, normalizeProps), [snapshot]);
  return /* @__PURE__ */ jsx(DrawerStackStoreProvider, { value: stack, children: /* @__PURE__ */ jsx(DrawerStackProvider, { value: stackApi, children }) });
};

export { DrawerStack };
