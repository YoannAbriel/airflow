import { HTMLProps, PolymorphicProps } from '../factory';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
export interface DatePickerWeekNumberHeaderCellBaseProps extends PolymorphicProps {
}
export interface DatePickerWeekNumberHeaderCellProps extends HTMLProps<'th'>, DatePickerWeekNumberHeaderCellBaseProps {
}
export declare const DatePickerWeekNumberHeaderCell: ForwardRefExoticComponent<DatePickerWeekNumberHeaderCellProps & RefAttributes<HTMLTableCellElement>>;
