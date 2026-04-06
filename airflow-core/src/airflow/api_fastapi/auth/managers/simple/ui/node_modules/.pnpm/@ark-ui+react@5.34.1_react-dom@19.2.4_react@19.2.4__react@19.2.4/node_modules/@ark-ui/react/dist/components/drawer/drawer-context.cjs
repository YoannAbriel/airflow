'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const useDrawerContext = require('./use-drawer-context.cjs');

const DrawerContext = (props) => props.children(useDrawerContext.useDrawerContext());

exports.DrawerContext = DrawerContext;
