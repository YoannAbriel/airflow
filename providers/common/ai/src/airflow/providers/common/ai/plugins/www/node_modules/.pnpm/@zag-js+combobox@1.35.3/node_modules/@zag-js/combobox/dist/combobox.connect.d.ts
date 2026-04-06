import { PropTypes, NormalizeProps } from '@zag-js/types';
import { ComboboxService, ComboboxApi } from './combobox.types.js';
import { CollectionItem } from '@zag-js/collection';
import '@zag-js/core';
import '@zag-js/dismissable';
import '@zag-js/popper';

declare function connect<T extends PropTypes, V extends CollectionItem>(service: ComboboxService<V>, normalize: NormalizeProps<T>): ComboboxApi<T, V>;

export { connect };
