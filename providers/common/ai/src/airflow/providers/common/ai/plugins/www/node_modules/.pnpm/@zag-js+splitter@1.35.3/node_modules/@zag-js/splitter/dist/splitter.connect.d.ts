import { PropTypes, NormalizeProps } from '@zag-js/types';
import { SplitterService, SplitterApi } from './splitter.types.js';
import '@zag-js/core';

declare function connect<T extends PropTypes>(service: SplitterService, normalize: NormalizeProps<T>): SplitterApi<T>;

export { connect };
