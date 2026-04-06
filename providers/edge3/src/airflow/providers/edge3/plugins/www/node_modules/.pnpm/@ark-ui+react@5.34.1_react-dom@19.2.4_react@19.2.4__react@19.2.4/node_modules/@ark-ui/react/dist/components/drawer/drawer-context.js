'use client';
import { useDrawerContext } from './use-drawer-context.js';

const DrawerContext = (props) => props.children(useDrawerContext());

export { DrawerContext };
