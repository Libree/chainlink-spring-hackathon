import React from 'react';
export declare type ListItemBlockchainProps = {
    domain: string;
    logo?: string;
    name: string;
    selected?: boolean;
    tag?: string;
    onClick?: React.MouseEventHandler;
};
export declare const ListItemBlockchain: React.FC<ListItemBlockchainProps>;
