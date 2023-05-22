import { ButtonHTMLAttributes, FC } from 'react';
export declare type ButtonWalletProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * set wallet Address/Ens
     */
    label: string | null;
    /**
     * Avatar Image source
     */
    src: string | null;
    /**
     * Loading mode
     */
    isLoading?: boolean;
    /**
     * Check if wallet is connected!
     */
    isConnected?: boolean;
};
export declare const ButtonWallet: FC<ButtonWalletProps>;
