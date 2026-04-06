'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const react$1 = require('@zag-js/react');
const react = require('react');
const createSplitProps = require('../../utils/create-split-props.cjs');
const factory = require('../factory.cjs');
const useNavigationMenuContext = require('./use-navigation-menu-context.cjs');
const useNavigationMenuViewportPropsContext = require('./use-navigation-menu-viewport-props-context.cjs');

const splitViewportProps = createSplitProps.createSplitProps();
const NavigationMenuViewportPositioner = react.forwardRef(
  (props, ref) => {
    const [viewportProps, localProps] = splitViewportProps(props, ["align"]);
    const navigationMenu = useNavigationMenuContext.useNavigationMenuContext();
    const mergedProps = react$1.mergeProps(navigationMenu.getViewportPositionerProps(viewportProps), localProps);
    return /* @__PURE__ */ jsxRuntime.jsx(useNavigationMenuViewportPropsContext.NavigationMenuViewportPropsProvider, { value: viewportProps, children: /* @__PURE__ */ jsxRuntime.jsx(factory.ark.div, { ...mergedProps, ref }) });
  }
);
NavigationMenuViewportPositioner.displayName = "NavigationMenuViewportPositioner";

exports.NavigationMenuViewportPositioner = NavigationMenuViewportPositioner;
