// src/hover-card.props.ts
import { createProps } from "@zag-js/types";
import { createSplitProps } from "@zag-js/utils";
var props = createProps()([
  "closeDelay",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "disabled",
  "onOpenChange",
  "defaultOpen",
  "open",
  "openDelay",
  "positioning",
  "onInteractOutside",
  "onPointerDownOutside",
  "onFocusOutside"
]);
var splitProps = createSplitProps(props);
export {
  props,
  splitProps
};
