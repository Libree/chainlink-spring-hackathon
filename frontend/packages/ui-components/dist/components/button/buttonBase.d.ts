import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from '../icons';
export declare type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    iconOnly?: boolean;
    iconLeft?: React.FunctionComponentElement<IconType>;
    iconRight?: React.FunctionComponentElement<IconType>;
    label?: string;
    mode?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
};
/**
 * Button to be used as base for other button components.
 * This button should not be exported with the library.
 * Height, font, focus, and border-radius are included.
 *
 * Note: Even if both iconRight and iconLeft are passed,
 * ONLY the iconLeft will be shown.
 */
export declare const ButtonBase: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    iconOnly?: boolean | undefined;
    iconLeft?: React.FunctionComponentElement<IconType> | undefined;
    iconRight?: React.FunctionComponentElement<IconType> | undefined;
    label?: string | undefined;
    mode?: "primary" | "secondary" | "ghost" | undefined;
    size?: "small" | "medium" | "large" | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
