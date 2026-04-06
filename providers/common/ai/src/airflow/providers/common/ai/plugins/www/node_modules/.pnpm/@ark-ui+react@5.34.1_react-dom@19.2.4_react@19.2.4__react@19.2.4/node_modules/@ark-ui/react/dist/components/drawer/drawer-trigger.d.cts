import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DrawerTriggerBaseProps extends PolymorphicProps {
}
export interface DrawerTriggerProps extends HTMLProps<'button'>, DrawerTriggerBaseProps {
}
export declare const DrawerTrigger: ForwardRefExoticComponent<DrawerTriggerProps & RefAttributes<HTMLButtonElement>>;
