import React from 'react';
import { IconType } from '../icons';
export declare type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    disabled?: boolean;
    /** whether link should open new tab to external location */
    external?: boolean;
    iconRight?: React.FunctionComponentElement<IconType>;
    iconLeft?: React.FunctionComponentElement<IconType>;
    /** optional label for the link, defaults to the href if value not provided */
    label?: string;
    /** link variants */
    type?: 'primary' | 'secondary' | 'neutral';
};
/** Default link component */
export declare const Link: React.FC<LinkProps>;
