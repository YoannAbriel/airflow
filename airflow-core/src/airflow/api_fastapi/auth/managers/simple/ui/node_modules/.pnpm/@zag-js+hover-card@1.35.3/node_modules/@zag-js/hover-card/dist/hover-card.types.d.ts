import { Service, EventObject, Machine } from '@zag-js/core';
import { InteractOutsideHandlers } from '@zag-js/dismissable';
import { PositioningOptions, Placement } from '@zag-js/popper';
export { Placement, PositioningOptions } from '@zag-js/popper';
import { RequiredBy, DirectionProperty, CommonProperties, PropTypes } from '@zag-js/types';

interface OpenChangeDetails {
    open: boolean;
}
type ElementIds = Partial<{
    trigger: string;
    content: string;
    positioner: string;
    arrow: string;
}>;
interface HoverCardProps extends DirectionProperty, CommonProperties, InteractOutsideHandlers {
    /**
     * The ids of the elements in the popover. Useful for composition.
     */
    ids?: ElementIds | undefined;
    /**
     * Function called when the hover card opens or closes.
     */
    onOpenChange?: ((details: OpenChangeDetails) => void) | undefined;
    /**
     * The duration from when the mouse enters the trigger until the hover card opens.
     * @default 600
     */
    openDelay?: number | undefined;
    /**
     * The duration from when the mouse leaves the trigger or content until the hover card closes.
     * @default 300
     */
    closeDelay?: number | undefined;
    /**
     * Whether the hover card is disabled
     */
    disabled?: boolean | undefined;
    /**
     * The controlled open state of the hover card
     */
    open?: boolean | undefined;
    /**
     * The initial open state of the hover card when rendered.
     * Use when you don't need to control the open state of the hover card.
     */
    defaultOpen?: boolean | undefined;
    /**
     * The user provided options used to position the popover content
     */
    positioning?: PositioningOptions | undefined;
}
type PropsWithDefault = "openDelay" | "closeDelay" | "positioning";
interface PrivateContext {
    /**
     * The computed placement of the tooltip.
     */
    currentPlacement: Placement | undefined;
    /**
     * Whether the hover card is open by pointer
     */
    isPointer: boolean;
    /**
     * Whether the hover card is open
     */
    open: boolean;
}
interface HoverCardSchema {
    props: RequiredBy<HoverCardProps, PropsWithDefault>;
    context: PrivateContext;
    state: "opening" | "open" | "closing" | "closed";
    tag: "open" | "closed";
    action: string;
    event: EventObject;
    guard: string;
    effect: string;
}
type HoverCardService = Service<HoverCardSchema>;
type HoverCardMachine = Machine<HoverCardSchema>;
interface HoverCardApi<T extends PropTypes = PropTypes> {
    /**
     * Whether the hover card is open
     */
    open: boolean;
    /**
     * Function to open the hover card
     */
    setOpen: (open: boolean) => void;
    /**
     * Function to reposition the popover
     */
    reposition: (options?: Partial<PositioningOptions>) => void;
    getArrowProps: () => T["element"];
    getArrowTipProps: () => T["element"];
    getTriggerProps: () => T["element"];
    getPositionerProps: () => T["element"];
    getContentProps: () => T["element"];
}

export type { ElementIds, HoverCardApi, HoverCardMachine, HoverCardProps, HoverCardSchema, HoverCardService, OpenChangeDetails };
