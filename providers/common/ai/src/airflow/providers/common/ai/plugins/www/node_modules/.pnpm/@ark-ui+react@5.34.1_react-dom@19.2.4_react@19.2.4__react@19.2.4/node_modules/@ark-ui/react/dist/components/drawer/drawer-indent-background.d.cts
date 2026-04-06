import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DrawerIndentBackgroundBaseProps extends PolymorphicProps {
}
export interface DrawerIndentBackgroundProps extends HTMLProps<'div'>, DrawerIndentBackgroundBaseProps {
}
export declare const DrawerIndentBackground: ForwardRefExoticComponent<DrawerIndentBackgroundProps & RefAttributes<HTMLDivElement>>;
