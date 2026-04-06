import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SegmentGroupLabelBaseProps extends PolymorphicProps {
}
export interface SegmentGroupLabelProps extends HTMLProps<'span'>, SegmentGroupLabelBaseProps {
}
export declare const SegmentGroupLabel: ForwardRefExoticComponent<SegmentGroupLabelProps & RefAttributes<HTMLSpanElement>>;
