import React from 'react';
import { IconType } from '../icons';
export declare type ListItemHeaderProps = {
    /** Action title */
    buttonText: string;
    /** Icon to display */
    icon: React.FunctionComponentElement<IconType>;
    /** Label to display */
    label: string;
    /** Card orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Value to display */
    value: string;
    onClick: () => void;
};
export declare const ListItemHeader: React.FC<ListItemHeaderProps>;
