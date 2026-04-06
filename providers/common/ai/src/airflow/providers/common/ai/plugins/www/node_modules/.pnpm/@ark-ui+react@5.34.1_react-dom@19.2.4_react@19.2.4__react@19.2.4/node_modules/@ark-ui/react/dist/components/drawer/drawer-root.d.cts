import { ReactNode } from 'react';
import { UsePresenceProps } from '../presence';
import { UseDrawerProps } from './use-drawer';
export interface DrawerRootBaseProps extends UseDrawerProps, UsePresenceProps {
}
export interface DrawerRootProps extends DrawerRootBaseProps {
    children?: ReactNode | undefined;
}
export declare const DrawerRoot: (props: DrawerRootProps) => import("react/jsx-runtime").JSX.Element;
