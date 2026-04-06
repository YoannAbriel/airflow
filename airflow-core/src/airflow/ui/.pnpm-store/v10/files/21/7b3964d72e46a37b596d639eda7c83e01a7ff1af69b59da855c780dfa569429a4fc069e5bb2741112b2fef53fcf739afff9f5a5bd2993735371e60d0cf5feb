'use client';
'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const usePresence = require('../presence/use-presence.cjs');
const swap_anatomy = require('./swap.anatomy.cjs');

const useSwap = (props = {}) => {
  const { swap = false, lazyMount, unmountOnExit } = props;
  const presenceProps = { lazyMount, unmountOnExit };
  const onPresence = usePresence.usePresence({ present: swap, ...presenceProps, skipAnimationOnMount: true });
  const offPresence = usePresence.usePresence({ present: !swap, ...presenceProps, skipAnimationOnMount: true });
  return {
    swap,
    onPresence,
    offPresence,
    getRootProps() {
      return {
        ...swap_anatomy.parts.root.attrs,
        "data-swap": swap ? "on" : "off",
        style: { display: "inline-grid" }
      };
    },
    getIndicatorProps({ type }) {
      const presence = type === "on" ? onPresence : offPresence;
      return {
        ...swap_anatomy.parts.indicator.attrs,
        ...presence.getPresenceProps(),
        "data-type": type,
        style: { gridArea: "1 / 1", display: "inline-flex" }
      };
    }
  };
};

exports.useSwap = useSwap;
