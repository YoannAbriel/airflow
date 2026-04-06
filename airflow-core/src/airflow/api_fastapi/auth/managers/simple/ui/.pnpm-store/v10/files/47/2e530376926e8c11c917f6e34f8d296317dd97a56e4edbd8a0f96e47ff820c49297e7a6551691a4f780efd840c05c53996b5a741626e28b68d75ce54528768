import { PanelData } from '../splitter.types.mjs';
import '@zag-js/core';
import '@zag-js/types';

/**
 * This code was modified from react-resizable-panels by Brian Vaughn
 * @see https://github.com/bvaughn/react-resizable-panels
 */

declare function calculateAriaValues({ size, panels, pivotIndices, }: {
    size: number[];
    panels: PanelData[];
    pivotIndices: number[];
}): {
    valueMax: number;
    valueMin: number;
    valueNow: number;
};
declare function getAriaValue(size: number[], panels: PanelData[], handleId: string): {
    beforeId: string;
    afterId: string;
    valueMax: number;
    valueMin: number;
    valueNow: number | undefined;
};

export { calculateAriaValues, getAriaValue };
