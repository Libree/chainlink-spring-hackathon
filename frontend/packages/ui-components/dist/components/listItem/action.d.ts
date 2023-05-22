import React, { ButtonHTMLAttributes } from 'react';
declare type CustomButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>;
export declare type ListItemActionProps = CustomButtonProps & {
    /**
     * Parent background color
     */
    bgWhite?: boolean;
    /**
     * State that can be explicitly set by the client. These are mutually
     * exclusive. Default behaves like a normal UI element and will hover, focus,
     * etc. automatically. Disabled will disable the ui component, selected will
     * mark it selected.
     */
    mode?: 'default' | 'disabled' | 'selected';
    /**
     * Bold text, left aligned. Mandatory
     */
    title: string;
    /**
     * Normal font, small. Optional. Displayed below the title, left aligned
     */
    subtitle?: string;
    /** Left aligned. Both left and right icon can be present simultaneously */
    iconLeft?: React.ReactElement | string;
    /** Right aligned. Both left and right icon can be present simultaneously */
    iconRight?: React.ReactElement;
};
export declare const ListItemAction: React.FC<ListItemActionProps>;
export {};
