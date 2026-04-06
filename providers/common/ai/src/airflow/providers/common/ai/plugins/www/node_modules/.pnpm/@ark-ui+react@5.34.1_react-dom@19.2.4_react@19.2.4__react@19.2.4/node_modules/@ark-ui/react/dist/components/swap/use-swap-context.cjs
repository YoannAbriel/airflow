'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const createContext = require('../../utils/create-context.cjs');

const [SwapProvider, useSwapContext] = createContext.createContext({
  name: "SwapContext",
  hookName: "useSwapContext",
  providerName: "<SwapProvider />"
});

exports.SwapProvider = SwapProvider;
exports.useSwapContext = useSwapContext;
