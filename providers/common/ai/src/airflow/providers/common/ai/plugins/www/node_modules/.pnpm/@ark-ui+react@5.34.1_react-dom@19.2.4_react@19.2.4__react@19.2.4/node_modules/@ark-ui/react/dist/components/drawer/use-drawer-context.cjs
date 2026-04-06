'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [DrawerProvider, useDrawerContext] = createContext.createContext({
  name: "DrawerContext",
  hookName: "useDrawerContext",
  providerName: "<DrawerProvider />"
});

exports.DrawerProvider = DrawerProvider;
exports.useDrawerContext = useDrawerContext;
