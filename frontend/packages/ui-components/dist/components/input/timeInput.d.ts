import React from 'react';
export declare type valueType = {
    time: string;
    midday: 'pm' | 'am';
};
export declare type TimeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
    disabled?: boolean;
    onChange: (value: string) => void;
    width?: number;
    value: string;
};
export declare const TimeInput: React.FC<TimeInputProps>;
export declare type StyledContainerProps = Pick<TimeInputProps, 'mode' | 'disabled' | 'width'>;
