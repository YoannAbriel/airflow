import { S as SnapPoint, R as ResolvedSnapPoint } from '../drawer.types-sLRk6AX7.js';
import '@zag-js/core';
import '@zag-js/dismissable';
import '@zag-js/types';

interface ResolveSnapPointOptions {
    popupSize: number;
    viewportSize: number;
    rootFontSize: number;
}
declare function resolveSnapPoint(snapPoint: SnapPoint, options: ResolveSnapPointOptions): ResolvedSnapPoint | null;

export { type ResolveSnapPointOptions, resolveSnapPoint };
