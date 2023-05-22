import React from 'react';
export declare type CheckboxSimpleProps = {
    label: string;
    iconLeft?: boolean;
    multiSelect: boolean;
    disabled?: boolean;
    state?: 'default' | 'active' | 'multi';
    onClick?: React.MouseEventHandler;
};
export declare const CheckboxSimple: React.FC<CheckboxSimpleProps>;
