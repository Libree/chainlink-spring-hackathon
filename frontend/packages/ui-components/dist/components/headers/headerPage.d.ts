import React from 'react';
import { ButtonTextProps } from '../button';
import { DefaultCrumbProps, BreadcrumbProps } from '../breadcrumb';
export declare type HeaderPageProps = {
    /** Page title */
    title: string;
    /** Page description */
    description?: string;
    /** Primary action button properties */
    primaryBtnProps?: Omit<ButtonTextProps, 'mode' | 'size'>;
    /** Secondary action button properties */
    secondaryBtnProps?: Omit<ButtonTextProps, 'mode' | 'size' | 'bgWhite'>;
    /** Breadcrumb properties */
    breadCrumbs: DefaultCrumbProps & NonNullable<Omit<BreadcrumbProps, 'tag'>>;
};
export declare const HeaderPage: React.FC<HeaderPageProps>;
