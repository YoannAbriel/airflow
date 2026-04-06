import { Style } from '@zag-js/types';
import { PanelData, DragState, PanelId } from '../splitter.types.mjs';
import '@zag-js/core';

declare function getPanelById(panels: PanelData[], id: string): PanelData;
declare function findPanelDataIndex(panels: PanelData[], panel: PanelData): number;
declare function findPanelIndex(panels: PanelData[], id: string): number;
declare function panelDataHelper(panels: PanelData[], panel: PanelData, sizes: number[]): {
    panelSize: number;
    pivotIndices: number[];
    id: PanelId;
    order?: number | undefined;
    minSize?: number | undefined;
    maxSize?: number | undefined;
    collapsible?: boolean | undefined;
    collapsedSize?: number | undefined;
};
declare function sortPanels(panels: PanelData[]): PanelData[];
declare function getPanelLayout(panels: PanelData[]): string;
declare function serializePanels(panels: PanelData[]): string;
declare function getPanelFlexBoxStyle({ defaultSize, dragState, sizes, panels, panelIndex, precision, }: {
    defaultSize: number | undefined;
    sizes: number[];
    dragState: DragState | null;
    panels: PanelData[];
    panelIndex: number;
    precision?: number | undefined;
}): Style;
declare function getUnsafeDefaultSize({ panels, size: sizes }: {
    panels: PanelData[];
    size: number[];
}): number[];

export { findPanelDataIndex, findPanelIndex, getPanelById, getPanelFlexBoxStyle, getPanelLayout, getUnsafeDefaultSize, panelDataHelper, serializePanels, sortPanels };
