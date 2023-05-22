import React from 'react';
export declare type WalletInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Text that appears on the button present on the right side of the input; if no text
     * is provided, the button will not be rendered */
    adornmentText?: string;
    /** Handler for when the button present on the right side of the input  is
     * clicked */
    onAdornmentClick?: () => void;
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
    /** Disable the input but keep the adornment button active */
    disabledFilled?: boolean;
};
export declare const WalletInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    /** Text that appears on the button present on the right side of the input; if no text
     * is provided, the button will not be rendered */
    adornmentText?: string | undefined;
    /** Handler for when the button present on the right side of the input  is
     * clicked */
    onAdornmentClick?: (() => void) | undefined;
    /** Changes a input's color schema */
    mode?: "default" | "success" | "warning" | "critical" | undefined;
    /** Disable the input but keep the adornment button active */
    disabledFilled?: boolean | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & Pick<WalletInputProps, "mode" | "disabled">, "className">;
