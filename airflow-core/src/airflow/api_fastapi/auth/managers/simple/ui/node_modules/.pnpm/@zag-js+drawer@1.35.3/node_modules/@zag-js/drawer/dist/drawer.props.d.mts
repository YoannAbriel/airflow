import { e as DrawerProps } from './drawer.types-sLRk6AX7.mjs';
import '@zag-js/core';
import '@zag-js/dismissable';
import '@zag-js/types';

declare const props: (keyof DrawerProps)[];
declare const splitProps: <Props extends Partial<DrawerProps>>(props: Props) => [Partial<DrawerProps>, Omit<Props, keyof DrawerProps>];

export { props, splitProps };
