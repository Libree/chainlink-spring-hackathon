import React, { HTMLAttributes } from 'react';
export interface AvatarDaoProps extends HTMLAttributes<HTMLElement> {
    daoName: string;
    src?: string;
    size?: 'small' | 'medium' | 'big' | 'hero' | 'unset';
    onClick?: () => void;
}
export declare const AvatarDao: React.FC<AvatarDaoProps>;
