'use client';
import { createContext } from '../../utils/create-context.js';

const [DrawerStackProvider, useDrawerStackContext] = createContext({
  name: "DrawerStackContext",
  hookName: "useDrawerStackContext",
  providerName: "<DrawerStackProvider />"
});

export { DrawerStackProvider, useDrawerStackContext };
