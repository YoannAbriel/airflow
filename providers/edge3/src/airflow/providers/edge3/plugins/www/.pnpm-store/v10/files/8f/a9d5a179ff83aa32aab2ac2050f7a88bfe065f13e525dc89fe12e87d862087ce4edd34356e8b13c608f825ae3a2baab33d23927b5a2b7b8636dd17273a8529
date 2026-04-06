'use client';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { TreeViewRootProvider } from '../tree-view/tree-view-root-provider.js';
import { JsonTreeViewPropsProvider } from './json-tree-view-props-context.js';

const JsonTreeViewRootProvider = forwardRef((props, ref) => {
  const { value, ...restProps } = props;
  const { options, ...treeView$1 } = value;
  return /* @__PURE__ */ jsx(JsonTreeViewPropsProvider, { value: options, children: /* @__PURE__ */ jsx(TreeViewRootProvider, { "data-scope": "json-tree-view", value: treeView$1, ...restProps, ref }) });
});
JsonTreeViewRootProvider.displayName = "JsonTreeViewRootProvider";

export { JsonTreeViewRootProvider };
