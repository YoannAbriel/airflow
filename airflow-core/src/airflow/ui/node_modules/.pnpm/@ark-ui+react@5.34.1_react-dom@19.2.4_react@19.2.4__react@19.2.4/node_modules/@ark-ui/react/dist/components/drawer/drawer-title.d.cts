import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DrawerTitleBaseProps extends PolymorphicProps {
}
export interface DrawerTitleProps extends HTMLProps<'h2'>, DrawerTitleBaseProps {
}
export declare const DrawerTitle: ForwardRefExoticComponent<DrawerTitleProps & RefAttributes<HTMLHeadingElement>>;
