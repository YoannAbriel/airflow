'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DrawerStackProvider, useDrawerStackContext] = createContext.createContext({
  name: "DrawerStackContext",
  hookName: "useDrawerStackContext",
  providerName: "<DrawerStackProvider />"
});

exports.DrawerStackProvider = DrawerStackProvider;
exports.useDrawerStackContext = useDrawerStackContext;
