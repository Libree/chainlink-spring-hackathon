import React from 'react';
export declare type TokenListItemProps = {
    /**
     * name of the token
     */
    tokenName: string;
    /**
     * Symbol of the token
     */
    tokenSymbol: string;
    /**
     * Amount of the token
     */
    tokenAmount: string | number;
    /**
     * src of token logo
     */
    tokenLogo: string;
    /**
     * Whether list item is disabled
     */
    disabled?: boolean;
    /**
     *  change the background
     */
    bgWhite?: boolean;
    onClick?: () => void;
};
export declare const TokenListItem: React.FC<TokenListItemProps>;
