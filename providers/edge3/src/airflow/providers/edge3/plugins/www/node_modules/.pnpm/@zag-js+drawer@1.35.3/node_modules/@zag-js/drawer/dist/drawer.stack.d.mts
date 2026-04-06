import { PropTypes, NormalizeProps } from '@zag-js/types';
import { c as DrawerStackSnapshot, b as DrawerStackApi, a as DrawerStack } from './drawer.types-sLRk6AX7.mjs';
import '@zag-js/core';
import '@zag-js/dismissable';

declare function createStack(): DrawerStack;
declare function connectStack<T extends PropTypes>(snapshot: DrawerStackSnapshot, normalize: NormalizeProps<T>): DrawerStackApi<T>;

export { connectStack, createStack };
