'use client';
import { createContext } from '../../utils/create-context.js';

const [DrawerProvider, useDrawerContext] = createContext({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<DrawerProvider />"
});

export { DrawerProvider, useDrawerContext };
