import React from 'react';
import { TagProps, LinkProps } from '../..';
export declare type TableCellProps = {
    type: 'text' | 'foot' | 'head' | 'link' | 'tag';
    text?: string;
    subtext?: string;
    rightAligned?: boolean;
    bgWhite?: boolean;
    className?: string;
    children?: React.FunctionComponentElement<TagProps> | React.FunctionComponentElement<LinkProps>;
};
export declare const TableCell: React.FC<TableCellProps>;
