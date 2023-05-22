import React, { HTMLAttributes } from 'react';
export declare type SpinnerProps = HTMLAttributes<HTMLElement> & {
    /**
     * The preferred Size of the spinner
     */
    size: 'xs' | 'small' | 'default' | 'big';
    /**
     * Styles
     */
    color?: string;
};
/**
 * Spinner UI component
 */
export declare const Spinner: React.FC<SpinnerProps>;
