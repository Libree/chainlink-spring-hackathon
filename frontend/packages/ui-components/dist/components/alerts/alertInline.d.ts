import React from 'react';
import { IconType } from '../icons';
export declare type AlertInlineProps = {
    /** type and severity of alert */
    mode?: 'neutral' | 'success' | 'warning' | 'critical';
    /** alert copy */
    label: string;
    icon?: React.FunctionComponentElement<IconType>;
};
/**
 * Inline alert used in combination with form-fields
 */
export declare const AlertInline: React.FC<AlertInlineProps>;
