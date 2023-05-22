import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
export declare type ListItemProps = {
    /**
     * The components to render as list item. Typically, a <ListItem /> component.
     */
    component: React.ReactNode;
    /**
     * The function that will be called when this list item is selected (via
     * keyboard, mouse, etc).
     */
    callback?: (event: Event) => void;
};
export declare type CustomDropdownContentProps = Omit<DropdownMenu.DropdownMenuContentProps, 'asChild' | '__scopeDropdownMenu'>;
export declare type DropdownProps = CustomDropdownContentProps & {
    /**
     * The controlled open state of the dropdown. Must be used in conjunction with onOpenChange.
     */
    open?: boolean;
    /**
     * Event handler called when the open state of the dropdown changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Element that triggers the opening state of the dropdown menu.
     */
    trigger: React.ReactNode;
    /**
     * The items inside the open dropdown menu.
     */
    listItems: ListItemProps[];
    disabled?: boolean;
};
export declare const Dropdown: React.FC<DropdownProps>;
