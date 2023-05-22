import React from 'react';
export declare type AvatarWalletProps = {
    size?: 'small' | 'medium';
    /**
     * Url of the avatar icon OR wallet address
     */
    src: string;
};
export declare const AvatarWallet: React.FC<AvatarWalletProps>;
