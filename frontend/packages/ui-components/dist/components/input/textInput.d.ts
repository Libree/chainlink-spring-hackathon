import React, { ReactNode } from 'react';
export declare type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Changes a input's color schema */
    mode?: 'default' | 'success' | 'warning' | 'critical';
    /**
     * left adornment
     */
    leftAdornment?: ReactNode;
    /**
     * right adornment
     */
    rightAdornment?: ReactNode;
    disabled?: boolean;
};
/** Simple input with variable styling (depending on mode) */
export declare const TextInput: React.FC<TextInputProps>;
export declare const Container: import("styled-components").StyledComponent<"div", any, {
    className: string;
} & Pick<TextInputProps, "mode" | "disabled">, "className">;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    className: string;
}, "className">;
