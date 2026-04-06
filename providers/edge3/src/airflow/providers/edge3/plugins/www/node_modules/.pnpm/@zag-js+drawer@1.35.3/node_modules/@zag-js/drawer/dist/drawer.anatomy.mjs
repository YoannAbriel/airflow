import "./chunk-QZ7TP4HQ.mjs";

// src/drawer.anatomy.ts
import { createAnatomy } from "@zag-js/anatomy";
var anatomy = createAnatomy("drawer").parts(
  "positioner",
  "content",
  "title",
  "trigger",
  "backdrop",
  "grabber",
  "grabberIndicator",
  "closeTrigger"
);
var parts = anatomy.build();
export {
  anatomy,
  parts
};
