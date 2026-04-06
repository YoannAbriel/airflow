'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react = require('react');
const treeViewRootProvider = require('../tree-view/tree-view-root-provider.cjs');
const jsonTreeViewPropsContext = require('./json-tree-view-props-context.cjs');

const JsonTreeViewRootProvider = react.forwardRef((props, ref) => {
  const { value, ...restProps } = props;
  const { options, ...treeView$1 } = value;
  return /* @__PURE__ */ jsxRuntime.jsx(jsonTreeViewPropsContext.JsonTreeViewPropsProvider, { value: options, children: /* @__PURE__ */ jsxRuntime.jsx(treeViewRootProvider.TreeViewRootProvider, { "data-scope": "json-tree-view", value: treeView$1, ...restProps, ref }) });
});
JsonTreeViewRootProvider.displayName = "JsonTreeViewRootProvider";

exports.JsonTreeViewRootProvider = JsonTreeViewRootProvider;
