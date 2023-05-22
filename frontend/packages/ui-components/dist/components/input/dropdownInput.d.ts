import React from 'react';
import { StyledContainerProps } from './numberInput';
export declare type DropDownInputProps = {
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
    disabled?: boolean;
    value?: string;
    name?: string;
    placeholder?: string;
    onClick: () => void;
};
/** Dropdown input with variable styling (depending on mode) */
export declare const DropdownInput: React.FC<DropDownInputProps>;
export declare type StyledChevronDownProps = Pick<StyledContainerProps, 'disabled'>;
