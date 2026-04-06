"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tour.machine.ts
var tour_machine_exports = {};
__export(tour_machine_exports, {
  machine: () => machine
});
module.exports = __toCommonJS(tour_machine_exports);
var import_core = require("@zag-js/core");
var import_dismissable = require("@zag-js/dismissable");
var import_dom_query = require("@zag-js/dom-query");
var import_focus_trap = require("@zag-js/focus-trap");
var import_interact_outside = require("@zag-js/interact-outside");
var import_popper = require("@zag-js/popper");
var import_utils = require("@zag-js/utils");
var dom = __toESM(require("./tour.dom.js"));
var import_rect = require("./utils/rect.js");
var import_step = require("./utils/step.js");
var { and } = (0, import_core.createGuards)();
var machine = (0, import_core.createMachine)({
  props({ props }) {
    return {
      preventInteraction: false,
      closeOnInteractOutside: true,
      closeOnEscape: true,
      keyboardNavigation: true,
      spotlightOffset: { x: 10, y: 10 },
      spotlightRadius: 4,
      ...props,
      translations: {
        nextStep: "next step",
        prevStep: "previous step",
        close: "close tour",
        progressText: ({ current, total }) => `${current + 1} of ${total}`,
        skip: "skip tour",
        ...props.translations
      }
    };
  },
  initialState() {
    return "tourInactive";
  },
  context({ prop, bindable, getContext }) {
    return {
      steps: bindable(() => ({
        defaultValue: prop("steps") ?? [],
        onChange(value) {
          prop("onStepsChange")?.({ steps: value });
        }
      })),
      stepId: bindable(() => ({
        defaultValue: prop("stepId"),
        sync: true,
        onChange(value) {
          const context = getContext();
          const steps = context.get("steps");
          const stepIndex = (0, import_step.findStepIndex)(steps, value);
          const progress = (0, import_step.getProgress)(steps, stepIndex);
          const complete = stepIndex == steps.length - 1;
          prop("onStepChange")?.({ stepId: value, stepIndex, totalSteps: steps.length, complete, progress });
        }
      })),
      resolvedTarget: bindable(() => ({
        sync: true,
        defaultValue: null
      })),
      targetRect: bindable(() => ({
        defaultValue: { width: 0, height: 0, x: 0, y: 0 }
      })),
      boundarySize: bindable(() => ({
        defaultValue: { width: 0, height: 0 }
      })),
      currentPlacement: bindable(() => ({
        defaultValue: void 0
      }))
    };
  },
  computed: {
    stepIndex: ({ context }) => (0, import_step.findStepIndex)(context.get("steps"), context.get("stepId")),
    step: ({ context }) => (0, import_step.findStep)(context.get("steps"), context.get("stepId")),
    hasNextStep: ({ context, computed }) => computed("stepIndex") < context.get("steps").length - 1,
    hasPrevStep: ({ computed }) => computed("stepIndex") > 0,
    isFirstStep: ({ computed }) => computed("stepIndex") === 0,
    isLastStep: ({ context, computed }) => computed("stepIndex") === context.get("steps").length - 1,
    progress: ({ context, computed }) => {
      const effectiveLength = (0, import_step.getEffectiveSteps)(context.get("steps")).length;
      return (computed("stepIndex") + 1) / effectiveLength;
    }
  },
  watch({ track, context, action }) {
    track([() => context.get("stepId")], () => {
      queueMicrotask(() => {
        action(["setResolvedTarget", "raiseStepChange", "syncTargetAttrs"]);
      });
    });
  },
  effects: ["trackBoundarySize"],
  exit: ["cleanupAll"],
  on: {
    "STEPS.SET": {
      actions: ["setSteps", "validateSteps"]
    },
    "STEP.SET": {
      actions: ["setStep"]
    },
    "STEP.NEXT": {
      actions: ["setNextStep"]
    },
    "STEP.PREV": {
      actions: ["setPrevStep"]
    },
    "STEP.CHANGED": [
      {
        guard: and("isValidStep", "hasResolvedTarget"),
        target: "running.scrolling",
        actions: ["cleanupStepEffect"]
      },
      {
        guard: and("isValidStep", "hasTarget"),
        target: "running.resolving",
        actions: ["cleanupStepEffect"]
      },
      {
        guard: and("isValidStep", "isWaitingStep"),
        target: "running.waiting",
        actions: ["cleanupStepEffect"]
      },
      {
        guard: "isValidStep",
        target: "running.active",
        actions: ["cleanupStepEffect"]
      }
    ],
    DISMISS: [
      {
        guard: "isLastStep",
        target: "tourInactive",
        actions: ["cleanupAll", "invokeOnDismiss", "invokeOnComplete", "clearStep"]
      },
      {
        target: "tourInactive",
        actions: ["cleanupAll", "invokeOnDismiss", "clearStep"]
      }
    ],
    SKIP: {
      target: "tourInactive",
      actions: ["cleanupAll", "invokeOnSkip", "clearStep"]
    }
  },
  states: {
    tourInactive: {
      tags: ["closed"],
      entry: ["validateSteps"],
      on: {
        START: {
          actions: ["setInitialStep", "invokeOnStart"]
        }
      }
    },
    running: {
      states: {
        resolving: {
          tags: ["closed"],
          effects: ["waitForTarget", "waitForTargetTimeout"],
          on: {
            "TARGET.NOT_FOUND": {
              target: "tourInactive",
              actions: ["invokeOnNotFound", "clearStep"]
            },
            "TARGET.RESOLVED": {
              target: "scrolling",
              actions: ["setResolvedTarget"]
            }
          }
        },
        scrolling: {
          tags: ["open"],
          entry: ["scrollToTarget"],
          effects: [
            "waitForScrollEnd",
            "trapFocus",
            "trackPlacement",
            "trackDismissableBranch",
            "trackInteractOutside",
            "trackEscapeKeydown"
          ],
          on: {
            "SCROLL.END": {
              target: "active"
            }
          }
        },
        waiting: {
          tags: ["closed"]
        },
        active: {
          tags: ["open"],
          effects: [
            "trapFocus",
            "trackPlacement",
            "trackDismissableBranch",
            "trackInteractOutside",
            "trackEscapeKeydown"
          ]
        }
      }
    }
  },
  implementations: {
    guards: {
      isLastStep: ({ computed, context }) => computed("stepIndex") === context.get("steps").length - 1,
      isValidStep: ({ context }) => context.get("stepId") != null,
      hasTarget: ({ computed }) => computed("step")?.target != null,
      hasResolvedTarget: ({ context }) => context.get("resolvedTarget") != null,
      isWaitingStep: ({ computed }) => computed("step")?.type === "wait"
    },
    actions: {
      scrollToTarget({ context }) {
        const node = context.get("resolvedTarget");
        node?.scrollIntoView({ behavior: "instant", block: "nearest", inline: "nearest" });
      },
      setSteps(params) {
        const { event, context } = params;
        context.set("steps", event.value);
      },
      setStep(params) {
        const { event } = params;
        const step = event.value;
        if (step == null) return;
        const manager = new StepManager(params);
        manager.transitionToStep(step);
      },
      clearStep(params) {
        const manager = new StepManager(params);
        manager.clear();
      },
      setInitialStep(params) {
        const { context, event } = params;
        const steps = context.get("steps");
        if (steps.length === 0) return;
        const manager = new StepManager(params);
        manager.transitionToStep(event.value ?? 0);
      },
      setNextStep(params) {
        const { computed } = params;
        const manager = new StepManager(params);
        manager.next(computed("stepIndex"));
      },
      setPrevStep(params) {
        const { computed } = params;
        const manager = new StepManager(params);
        manager.prev(computed("stepIndex"));
      },
      invokeOnStart({ prop, context, computed }) {
        prop("onStatusChange")?.({
          status: "started",
          stepId: context.get("stepId"),
          stepIndex: computed("stepIndex")
        });
      },
      invokeOnDismiss({ prop, context, computed }) {
        prop("onStatusChange")?.({
          status: "dismissed",
          stepId: context.get("stepId"),
          stepIndex: computed("stepIndex")
        });
      },
      invokeOnComplete({ prop, context, computed }) {
        prop("onStatusChange")?.({
          status: "completed",
          stepId: context.get("stepId"),
          stepIndex: computed("stepIndex")
        });
      },
      invokeOnSkip({ prop, context, computed }) {
        prop("onStatusChange")?.({
          status: "skipped",
          stepId: context.get("stepId"),
          stepIndex: computed("stepIndex")
        });
      },
      invokeOnNotFound({ prop, context, computed }) {
        prop("onStatusChange")?.({
          status: "not-found",
          stepId: context.get("stepId"),
          stepIndex: computed("stepIndex")
        });
      },
      raiseStepChange({ send }) {
        send({ type: "STEP.CHANGED" });
      },
      setResolvedTarget({ context, event, computed }) {
        const node = event.node ?? computed("step")?.target?.();
        context.set("resolvedTarget", node ?? null);
      },
      syncTargetAttrs(params) {
        const { context } = params;
        const targetEl = context.get("resolvedTarget");
        const manager = new StepManager(params);
        manager.syncTarget(targetEl);
      },
      cleanupAll(params) {
        const manager = new StepManager(params);
        manager.cleanupAll();
      },
      cleanupStepEffect(params) {
        const manager = new StepManager(params);
        manager.cleanupStepEffect();
      },
      validateSteps({ context }) {
        const ids = /* @__PURE__ */ new Set();
        context.get("steps").forEach((step) => {
          if (ids.has(step.id)) {
            throw new Error(`[zag-js/tour] Duplicate step id: ${step.id}`);
          }
          if (step.target == null && step.type == null) {
            throw new Error(`[zag-js/tour] Step ${step.id} has no target or type. At least one of those is required.`);
          }
          ids.add(step.id);
        });
      }
    },
    effects: {
      waitForScrollEnd({ send }) {
        const id = setTimeout(() => {
          send({ type: "SCROLL.END" });
        }, 100);
        return () => clearTimeout(id);
      },
      waitForTargetTimeout({ send }) {
        const id = setTimeout(() => {
          send({ type: "TARGET.NOT_FOUND" });
        }, 3e3);
        return () => clearTimeout(id);
      },
      waitForTarget({ scope, computed, send }) {
        const step = computed("step");
        if (!step) return;
        const targetEl = step.target;
        const win = scope.getWin();
        const rootNode = scope.getRootNode();
        const observer = new win.MutationObserver(() => {
          const node = targetEl?.();
          if (node) {
            send({ type: "TARGET.RESOLVED", node });
            observer.disconnect();
          }
        });
        observer.observe(rootNode, {
          childList: true,
          subtree: true,
          characterData: true
        });
        return () => {
          observer.disconnect();
        };
      },
      trackBoundarySize({ context, scope }) {
        const win = scope.getWin();
        const doc = scope.getDoc();
        const onResize = () => {
          const width = visualViewport?.width ?? win.innerWidth;
          const height = doc.documentElement.scrollHeight;
          context.set("boundarySize", { width, height });
        };
        onResize();
        const viewport = win.visualViewport ?? win;
        viewport.addEventListener("resize", onResize);
        return () => viewport.removeEventListener("resize", onResize);
      },
      trackEscapeKeydown({ scope, send, prop }) {
        if (!prop("closeOnEscape")) return;
        const doc = scope.getDoc();
        const onKeyDown = (event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            send({ type: "DISMISS", src: "esc" });
          }
        };
        doc.addEventListener("keydown", onKeyDown, true);
        return () => {
          doc.removeEventListener("keydown", onKeyDown, true);
        };
      },
      trackInteractOutside({ context, computed, scope, send, prop }) {
        const step = computed("step");
        if (step == null) return;
        const contentEl = () => dom.getContentEl(scope);
        return (0, import_interact_outside.trackInteractOutside)(contentEl, {
          defer: true,
          exclude(target) {
            return (0, import_dom_query.contains)(step.target?.(), target);
          },
          onFocusOutside(event) {
            prop("onFocusOutside")?.(event);
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault();
            }
          },
          onPointerDownOutside(event) {
            prop("onPointerDownOutside")?.(event);
            const isWithin = (0, import_rect.isEventInRect)(context.get("targetRect"), event.detail.originalEvent);
            if (isWithin) {
              event.preventDefault();
              return;
            }
            if (!prop("closeOnInteractOutside")) {
              event.preventDefault();
            }
          },
          onInteractOutside(event) {
            prop("onInteractOutside")?.(event);
            if (event.defaultPrevented) return;
            send({ type: "DISMISS", src: "interact-outside" });
          }
        });
      },
      trackDismissableBranch({ computed, scope }) {
        const step = computed("step");
        if (step == null) return;
        const contentEl = () => dom.getContentEl(scope);
        return (0, import_dismissable.trackDismissableBranch)(contentEl, { defer: true });
      },
      trapFocus({ computed, scope, context }) {
        const step = computed("step");
        if (step == null) return;
        const contentEl = () => dom.getContentEl(scope);
        const targetEl = () => context.get("resolvedTarget");
        return (0, import_focus_trap.trapFocus)([contentEl, targetEl], {
          escapeDeactivates: false,
          allowOutsideClick: true,
          preventScroll: true,
          returnFocusOnDeactivate: false,
          getShadowRoot: true
        });
      },
      trackPlacement({ context, computed, scope, prop }) {
        const step = computed("step");
        if (step == null) return;
        context.set("currentPlacement", step.placement ?? "bottom");
        if ((0, import_step.isDialogStep)(step)) {
          return dom.syncZIndex(scope);
        }
        if (!(0, import_step.isTooltipStep)(step)) {
          return;
        }
        const positionerEl = () => dom.getPositionerEl(scope);
        return (0, import_popper.getPlacement)(context.get("resolvedTarget"), positionerEl, {
          defer: true,
          placement: step.placement ?? "bottom",
          strategy: "absolute",
          gutter: 10,
          offset: step.offset,
          getAnchorRect(el) {
            if (!(0, import_dom_query.isHTMLElement)(el)) return null;
            const rect = el.getBoundingClientRect();
            return (0, import_rect.offset)(rect, prop("spotlightOffset"));
          },
          onComplete(data) {
            const { rects } = data.middlewareData;
            context.set("currentPlacement", data.placement);
            context.set("targetRect", rects.reference);
          }
        });
      }
    }
  }
});
var StepManager = class {
  constructor(params) {
    this.params = params;
  }
  /**
   * Transition to a step by id or index
   */
  transitionToStep(step) {
    const steps = this.params.context.get("steps");
    const idx = (0, import_utils.isString)(step) ? (0, import_step.findStepIndex)(steps, step) : step;
    this.transitionTo(idx);
  }
  /**
   * Transition to the next step from the given index
   */
  next(currentIndex) {
    const steps = this.params.context.get("steps");
    const idx = (0, import_utils.nextIndex)(steps, currentIndex);
    this.transitionTo(idx);
  }
  /**
   * Transition to the previous step from the given index
   */
  prev(currentIndex) {
    const steps = this.params.context.get("steps");
    const idx = (0, import_utils.prevIndex)(steps, currentIndex);
    this.transitionTo(idx);
  }
  /**
   * Clear the current step and reset tour state
   */
  clear() {
    const { context } = this.params;
    context.set("targetRect", { width: 0, height: 0, x: 0, y: 0 });
    context.set("resolvedTarget", null);
    this.transitionTo(-1);
  }
  /**
   * Cleanup all resources including effects, target attributes, and resolved target.
   * Use when completely tearing down the tour or transitioning between steps.
   */
  cleanupAll() {
    const { refs } = this.params;
    refs.get("_targetCleanup")?.();
    refs.set("_targetCleanup", void 0);
    refs.set("_prevTarget", void 0);
    refs.get("_effectCleanup")?.();
    refs.set("_effectCleanup", void 0);
  }
  /**
   * Cleanup only the step effect cleanup function.
   * Skips cleanup if an effect is currently running.
   */
  cleanupStepEffect() {
    const { refs } = this.params;
    if (refs.get("_runningEffect")) {
      return;
    }
    refs.get("_effectCleanup")?.();
    refs.set("_effectCleanup", void 0);
  }
  /**
   * Sync target element attributes (inert, data-tour-highlighted).
   * Handles cleanup of previous target and applies attributes to new target.
   */
  syncTarget(targetEl) {
    const { refs, prop } = this.params;
    const prevTarget = refs.get("_prevTarget");
    if (targetEl !== prevTarget) {
      refs.get("_targetCleanup")?.();
      refs.set("_targetCleanup", void 0);
    }
    if (!targetEl) {
      refs.set("_prevTarget", null);
      return;
    }
    if (targetEl === prevTarget) {
      return;
    }
    if (prop("preventInteraction")) targetEl.inert = true;
    targetEl.setAttribute("data-tour-highlighted", "");
    refs.set("_targetCleanup", () => {
      if (prop("preventInteraction")) targetEl.inert = false;
      targetEl.removeAttribute("data-tour-highlighted");
    });
    refs.set("_prevTarget", targetEl);
  }
  /**
   * Transition to a step by index
   */
  transitionTo(idx) {
    const { context, refs } = this.params;
    const steps = context.get("steps");
    const step = steps[idx];
    if (!step) {
      context.set("stepId", null);
      return;
    }
    if ((0, import_utils.isEqual)(context.get("stepId"), step.id)) {
      refs.set("_runningEffect", false);
      return;
    }
    this.cleanup();
    const utilities = this.createUtilities(step, idx);
    if (step.effect) {
      this.executeEffect(step, utilities);
    } else {
      utilities.show();
    }
  }
  /**
   * Clean up previous step effects and target attributes
   */
  cleanup() {
    const { refs } = this.params;
    refs.get("_effectCleanup")?.();
    refs.set("_effectCleanup", void 0);
    refs.get("_targetCleanup")?.();
    refs.set("_targetCleanup", void 0);
  }
  /**
   * Create utility functions for step effects
   */
  createUtilities(step, idx) {
    const { context, computed, prop } = this.params;
    const steps = context.get("steps");
    return {
      show: () => {
        context.set("stepId", step.id);
      },
      update: (data) => {
        context.set("steps", (prev) => prev.map((s, i) => i === idx ? { ...s, ...data } : s));
      },
      next: () => {
        const nextIdx = (0, import_utils.nextIndex)(steps, computed("stepIndex"));
        this.transitionTo(nextIdx);
      },
      goto: (id) => {
        const targetIdx = (0, import_step.findStepIndex)(steps, id);
        if (targetIdx === -1) {
          (0, import_utils.warn)(`[zag-js/tour] Step with id "${id}" not found`);
          return;
        }
        this.transitionTo(targetIdx);
      },
      dismiss: () => {
        context.set("stepId", null);
        prop("onStatusChange")?.({ status: "dismissed", stepId: null, stepIndex: -1 });
      },
      target: step.target
    };
  }
  /**
   * Execute a step's effect function
   */
  executeEffect(step, utilities) {
    const { refs } = this.params;
    refs.set("_runningEffect", true);
    let cleanup;
    try {
      cleanup = step.effect(utilities);
    } catch (error) {
      refs.set("_runningEffect", false);
      console.error(error);
      return;
    }
    refs.set("_effectCleanup", cleanup);
    if ((0, import_step.isWaitStep)(step)) {
      utilities.show();
    }
    queueMicrotask(() => {
      queueMicrotask(() => {
        refs.set("_runningEffect", false);
      });
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  machine
});
