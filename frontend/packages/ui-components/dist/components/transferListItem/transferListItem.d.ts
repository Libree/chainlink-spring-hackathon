import React from 'react';
export declare type TransferListItemProps = {
    isPending?: boolean;
    /**
     * Transfer title corresponding to the transfer reference or transfer type
     */
    title: string;
    /**
     * Number of tokens transferred
     */
    tokenAmount: string | number;
    tokenSymbol: string;
    /**
     * Date transfer was executed or a loading indication if transfer is still pending
     */
    transferDate: string;
    transferType: 'VaultDeposit' | 'VaultWithdraw';
    usdValue: string;
    onClick?: () => void;
};
export declare const TransferListItem: React.FC<TransferListItemProps>;
