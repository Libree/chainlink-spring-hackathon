import React from 'react';
export declare type ListItemLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     * Optional link item label
     */
    label?: string;
    /**
     * Whether link opens up external page
     */
    external?: boolean;
};
export declare const ListItemLink: React.FC<ListItemLinkProps>;
