import React from 'react';
export declare type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
    /**
     * change the input view with corresponding symbols
     */
    view?: 'default' | 'percentage' | 'bigger';
    disabled?: boolean;
    width?: number;
    value: string;
    disableIncrement?: boolean;
    disableDecrement?: boolean;
    /** Determines whether decimal values are accepted */
    includeDecimal?: boolean;
};
export declare const NumberInput: React.FC<NumberInputProps>;
export declare type StyledContainerProps = Pick<NumberInputProps, 'mode' | 'disabled' | 'width'>;
export declare type StyledNumberInputProps = Pick<NumberInputProps, 'disabled'> & {
    inputWidth: string;
};
export declare type PercentProps = Pick<NumberInputProps, 'disabled'>;
