import React from 'react';
export declare type CardWalletProps = {
    /**
     * wallet ENS name or wallet eth address
     */
    name?: string | null;
    /**
     * Wallet eth address
     */
    address: string | null;
    /**
     * Allows the Wallet Card component grow horizontally
     */
    wide: boolean;
    /**
     * Avatar Image source
     */
    src: string | null;
};
/**
 * WalletCard UI component
 */
export declare const CardWallet: React.FC<CardWalletProps>;
