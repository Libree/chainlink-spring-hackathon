import React from 'react';
export interface PaginationProps {
    /**
     * white background
     */
    bgWhite?: boolean;
    /**
     * Number of total pages
     */
    totalPages?: number;
    /**
     * active page
     */
    activePage?: number;
    /**
     * With this parameter we can define break points for
     * change pagination from 1...567...9 to 1...789
     * views
     */
    distance?: number;
    onChange?: (page: number) => void;
}
/**
 * Default UI component
 */
export declare const Pagination: React.FC<PaginationProps>;
