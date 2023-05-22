import { ButtonHTMLAttributes, FC } from 'react';
declare type TokenInfo = {
    amount: number;
    symbol: string;
    percentage: number | string;
};
export declare type ListItemAddressProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string | null;
    /**
     * String representing EITHER a wallet address OR an ens name.
     */
    src: string | null;
    /**
     * Optional token information. Consists of a token amount, symbol and share.
     */
    tokenInfo?: TokenInfo;
};
export declare const ListItemAddress: FC<ListItemAddressProps>;
export {};
