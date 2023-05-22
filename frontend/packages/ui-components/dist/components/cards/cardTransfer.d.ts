import React from 'react';
export declare type CardTransferProps = {
    to: string;
    from: string;
    toLabel: string;
    fromLabel: string;
    bgWhite?: boolean;
};
/** Transfer header showing the sender and recipient */
export declare const CardTransfer: React.FC<CardTransferProps>;
