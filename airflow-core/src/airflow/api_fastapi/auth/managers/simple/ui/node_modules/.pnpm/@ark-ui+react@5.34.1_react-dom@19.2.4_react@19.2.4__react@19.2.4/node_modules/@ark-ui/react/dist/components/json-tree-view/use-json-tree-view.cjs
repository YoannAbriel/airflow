'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsonTreeUtils = require('@zag-js/json-tree-utils');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const treeCollection = require('../collection/tree-collection.cjs');
const useTreeView = require('../tree-view/use-tree-view.cjs');
const getBranchValue = require('./get-branch-value.cjs');

const splitJsonTreeViewProps = createSplitProps.createSplitProps();
const useJsonTreeView = (props) => {
  const [jsonTreeProps, localProps] = splitJsonTreeViewProps(props, [
    "maxPreviewItems",
    "collapseStringsAfterLength",
    "quotesOnKeys",
    "groupArraysAfterLength",
    "showNonenumerable"
  ]);
  const { data, defaultExpandedDepth = 1, ...restProps } = localProps;
  const collection = react.useMemo(() => {
    return treeCollection.createTreeCollection({
      nodeToValue: jsonTreeUtils.nodeToValue,
      nodeToString: jsonTreeUtils.nodeToString,
      rootNode: jsonTreeUtils.getRootNode(data)
    });
  }, [data]);
  const defaultExpandedValue = react.useMemo(() => {
    return defaultExpandedDepth != null ? getBranchValue.getBranchValues(collection, defaultExpandedDepth) : void 0;
  }, [collection, defaultExpandedDepth]);
  const treeView = useTreeView.useTreeView({
    defaultExpandedValue,
    ...restProps,
    collection,
    typeahead: false
  });
  return { ...treeView, options: jsonTreeProps };
};

exports.useJsonTreeView = useJsonTreeView;
