import React from 'react';
export declare const Icons: {
    multiSelect: {
        active: JSX.Element;
        multi: JSX.Element;
        default: JSX.Element;
        error: JSX.Element;
    };
    radio: {
        active: JSX.Element;
        multi: JSX.Element;
        default: JSX.Element;
        error: JSX.Element;
    };
};
export declare type CheckboxListItemProps = {
    label: string;
    helptext?: string;
    disabled?: boolean;
    multiSelect?: boolean;
    type?: 'default' | 'error' | 'active' | 'multi';
    onClick?: React.MouseEventHandler;
};
export declare const CheckboxListItem: React.FC<CheckboxListItemProps>;
