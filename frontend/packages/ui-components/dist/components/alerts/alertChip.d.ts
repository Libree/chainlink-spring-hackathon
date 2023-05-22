import React, { ReactComponentElement } from 'react';
import { IconType } from '../icons';
export declare type AlertChipProps = {
    /** Chip Label */
    label: string;
    /** Icon component */
    icon?: ReactComponentElement<IconType>;
    /** control Icon visibility */
    showIcon?: boolean;
    /** Is chip visible */
    isShown: boolean;
};
export declare const AlertChip: React.FC<AlertChipProps>;
