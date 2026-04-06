import "./chunk-QZ7TP4HQ.mjs";

// src/drawer.registry.ts
var elements = /* @__PURE__ */ new Map();
var swipingIds = /* @__PURE__ */ new Set();
var listeners = /* @__PURE__ */ new Set();
function notify() {
  listeners.forEach((fn) => fn());
}
var drawerRegistry = {
  register(id, el) {
    elements.set(id, el);
    notify();
  },
  unregister(id) {
    swipingIds.delete(id);
    if (!elements.delete(id)) return;
    notify();
  },
  setSwiping(id, swiping) {
    const changed = swiping ? !swipingIds.has(id) : swipingIds.has(id);
    if (!changed) return;
    if (swiping) swipingIds.add(id);
    else swipingIds.delete(id);
    notify();
  },
  hasSwipingAfter(id) {
    const keys = [...elements.keys()];
    const myIndex = keys.indexOf(id);
    if (myIndex === -1) return false;
    return keys.slice(myIndex + 1).some((key) => swipingIds.has(key));
  },
  notify,
  getEntries() {
    return elements;
  },
  subscribe(fn) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }
};
export {
  drawerRegistry
};
