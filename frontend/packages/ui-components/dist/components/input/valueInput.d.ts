import React from 'react';
export declare type ValueInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Text that appears on the button present on the right side of the input; if no text
     * is provided, the button will not be rendered */
    adornmentText?: string;
    /** Handler for when the button present on the right side of the input  is
     * clicked */
    onAdornmentClick?: () => void;
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
};
export declare const ValueInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    /** Text that appears on the button present on the right side of the input; if no text
     * is provided, the button will not be rendered */
    adornmentText?: string | undefined;
    /** Handler for when the button present on the right side of the input  is
     * clicked */
    onAdornmentClick?: (() => void) | undefined;
    /** Changes a input's color schema */
    mode?: "default" | "success" | "warning" | "critical" | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & Pick<ValueInputProps, "mode" | "disabled">, "className">;
