import { PropTypes, NormalizeProps } from '@zag-js/types';
import { f as DrawerService, D as DrawerApi } from './drawer.types-sLRk6AX7.mjs';
import '@zag-js/core';
import '@zag-js/dismissable';

declare function connect<T extends PropTypes>(service: DrawerService, normalize: NormalizeProps<T>): DrawerApi<T>;

export { connect };
