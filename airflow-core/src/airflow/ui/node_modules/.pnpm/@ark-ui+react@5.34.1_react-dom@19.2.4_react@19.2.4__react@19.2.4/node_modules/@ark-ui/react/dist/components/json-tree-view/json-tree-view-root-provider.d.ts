import { JsonNode } from '@zag-js/json-tree-utils';
import { TreeView } from '../tree-view';
import { UseJsonTreeViewReturn } from './use-json-tree-view';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface JsonTreeViewRootProviderProps extends Omit<TreeView.RootProviderProps<JsonNode>, 'value'> {
    value: UseJsonTreeViewReturn;
}
export declare const JsonTreeViewRootProvider: ForwardRefExoticComponent<JsonTreeViewRootProviderProps & RefAttributes<HTMLDivElement>>;
