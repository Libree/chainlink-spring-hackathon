import React, { ReactComponentElement } from 'react';
import { TagProps } from '../tag';
import { IconType } from '../icons';
export declare type CrumbType = {
    label: string;
    path: string;
};
export declare type DefaultCrumbProps = {
    /**
     * Array of breadcrumbs to be displayed; each breadcrumb should
     * include a label and its corresponding path
     */
    crumbs: CrumbType[];
    /** Base path icon to be displayed */
    icon: ReactComponentElement<IconType>;
};
export declare type ProcessCrumbProps = {
    crumbs: CrumbType;
    icon?: ReactComponentElement<IconType>;
};
export declare type BreadcrumbProps = {
    /** Tag shown at the end of the list of breadcrumbs */
    tag?: React.FunctionComponentElement<TagProps>;
    /** Callback returning the path value of the breadcrumb clicked */
    onClick?: (path: string) => void;
} & (ProcessCrumbProps | DefaultCrumbProps);
/** Component displaying given list as breadcrumbs. */
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
