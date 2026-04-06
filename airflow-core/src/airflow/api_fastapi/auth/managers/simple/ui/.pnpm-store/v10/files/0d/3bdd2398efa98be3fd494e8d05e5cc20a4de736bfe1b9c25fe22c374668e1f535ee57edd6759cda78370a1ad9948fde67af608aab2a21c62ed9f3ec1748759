'use client';
import { nodeToString, nodeToValue, getRootNode } from '@zag-js/json-tree-utils';
import { useMemo } from 'react';
import { createSplitProps } from '../../utils/create-split-props.js';
import { createTreeCollection } from '../collection/tree-collection.js';
import { useTreeView } from '../tree-view/use-tree-view.js';
import { getBranchValues } from './get-branch-value.js';

const splitJsonTreeViewProps = createSplitProps();
const useJsonTreeView = (props) => {
  const [jsonTreeProps, localProps] = splitJsonTreeViewProps(props, [
    "maxPreviewItems",
    "collapseStringsAfterLength",
    "quotesOnKeys",
    "groupArraysAfterLength",
    "showNonenumerable"
  ]);
  const { data, defaultExpandedDepth = 1, ...restProps } = localProps;
  const collection = useMemo(() => {
    return createTreeCollection({
      nodeToValue,
      nodeToString,
      rootNode: getRootNode(data)
    });
  }, [data]);
  const defaultExpandedValue = useMemo(() => {
    return defaultExpandedDepth != null ? getBranchValues(collection, defaultExpandedDepth) : void 0;
  }, [collection, defaultExpandedDepth]);
  const treeView = useTreeView({
    defaultExpandedValue,
    ...restProps,
    collection,
    typeahead: false
  });
  return { ...treeView, options: jsonTreeProps };
};

export { useJsonTreeView };
