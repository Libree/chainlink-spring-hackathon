import React from 'react';
export declare type CardTokenProps = {
    tokenName: string;
    tokenSymbol: string;
    tokenImageUrl: string;
    treasurySharePercentage?: string;
    tokenCount: number | string;
    tokenUSDValue?: string;
    treasuryShare?: string;
    type?: 'vault' | 'transfer';
    bgWhite?: boolean;
    changeType?: 'Positive' | 'Negative';
    changeDuringInterval?: string;
    percentageChangeDuringInterval?: string;
};
export declare const CardToken: React.FC<CardTokenProps>;
