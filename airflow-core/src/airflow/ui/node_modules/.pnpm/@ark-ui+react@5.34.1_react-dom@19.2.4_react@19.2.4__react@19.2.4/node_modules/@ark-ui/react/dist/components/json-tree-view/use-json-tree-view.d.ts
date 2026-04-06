import { JsonNode } from '@zag-js/json-tree-utils';
import { UseTreeViewProps, UseTreeViewReturn } from '../tree-view';
import { JsonTreeViewOptions } from './json-tree-view-props-context';
export interface UseJsonTreeViewProps extends Omit<UseTreeViewProps<JsonNode>, 'collection'>, JsonTreeViewOptions {
    data: unknown;
    defaultExpandedDepth?: number;
}
export interface UseJsonTreeViewReturn extends UseTreeViewReturn<JsonNode> {
    options: JsonTreeViewOptions;
}
export declare const useJsonTreeView: (props: UseJsonTreeViewProps) => UseJsonTreeViewReturn;
