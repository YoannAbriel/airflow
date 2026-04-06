'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const drawer = require('@zag-js/drawer');
const react$1 = require('@zag-js/react');
const react = require('react');
const useDrawerStackContext = require('./use-drawer-stack-context.cjs');
const useDrawerStackStore = require('./use-drawer-stack-store.cjs');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}

const drawer__namespace = /*#__PURE__*/_interopNamespaceDefault(drawer);

const DrawerStack = (props) => {
  const { children } = props;
  const [stack] = react.useState(() => drawer__namespace.createStack());
  const snapshot = react.useSyncExternalStore(stack.subscribe, stack.getSnapshot, stack.getSnapshot);
  const stackApi = react.useMemo(() => drawer__namespace.connectStack(snapshot, react$1.normalizeProps), [snapshot]);
  return /* @__PURE__ */ jsxRuntime.jsx(useDrawerStackStore.DrawerStackStoreProvider, { value: stack, children: /* @__PURE__ */ jsxRuntime.jsx(useDrawerStackContext.DrawerStackProvider, { value: stackApi, children }) });
};

exports.DrawerStack = DrawerStack;
