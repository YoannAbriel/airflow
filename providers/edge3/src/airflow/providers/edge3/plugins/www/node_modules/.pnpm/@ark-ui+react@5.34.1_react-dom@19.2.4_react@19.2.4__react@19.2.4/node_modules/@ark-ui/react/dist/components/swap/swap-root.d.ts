import { HTMLProps, PolymorphicProps } from '../factory';
import { UseSwapProps } from './use-swap';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface SwapRootBaseProps extends UseSwapProps, PolymorphicProps {
}
export interface SwapRootProps extends HTMLProps<'span'>, SwapRootBaseProps {
}
export declare const SwapRoot: ForwardRefExoticComponent<SwapRootProps & RefAttributes<HTMLSpanElement>>;
