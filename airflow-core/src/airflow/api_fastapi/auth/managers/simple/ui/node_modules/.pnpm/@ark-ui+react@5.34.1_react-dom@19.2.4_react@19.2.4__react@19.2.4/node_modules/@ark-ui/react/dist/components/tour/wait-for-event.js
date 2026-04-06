'use client';
function waitForEvent(target, event, options) {
  let cleanup;
  const { predicate, ...listenerOptions } = options ?? {};
  const promise = new Promise((resolve) => {
    const element = target?.();
    if (!element) {
      return;
    }
    const handler = (e) => {
      if (!predicate || predicate(element)) {
        resolve(e);
        cleanup?.();
      }
    };
    element.addEventListener(event, handler, listenerOptions);
    cleanup = () => element.removeEventListener(event, handler, listenerOptions);
  });
  return [promise, () => cleanup?.()];
}

export { waitForEvent };
