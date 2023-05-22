import React from 'react';
import { OptionProps } from './button';
declare type ButtonContextType = {
    bgWhite: boolean;
    selectedValue: string;
    onChange: (value: string) => void;
};
export declare const ButtonGroupContext: React.Context<ButtonContextType | undefined>;
export declare const useButtonGroupContext: () => ButtonContextType;
export declare type ButtonGroupProps = {
    value?: string;
    bgWhite: boolean;
    defaultValue: string;
    onChange?: (value: string) => void;
    children: React.FunctionComponentElement<OptionProps>[];
};
export declare const ButtonGroup: React.FC<ButtonGroupProps>;
export {};
