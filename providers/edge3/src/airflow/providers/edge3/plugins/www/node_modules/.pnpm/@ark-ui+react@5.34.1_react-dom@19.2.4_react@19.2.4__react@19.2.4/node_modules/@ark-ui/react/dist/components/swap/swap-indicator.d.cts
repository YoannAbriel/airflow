import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwapIndicatorBaseProps extends PolymorphicProps {
    type: 'on' | 'off';
}
export interface SwapIndicatorProps extends HTMLProps<'span'>, SwapIndicatorBaseProps {
}
export declare const SwapIndicator: ForwardRefExoticComponent<SwapIndicatorProps & RefAttributes<HTMLSpanElement>>;
