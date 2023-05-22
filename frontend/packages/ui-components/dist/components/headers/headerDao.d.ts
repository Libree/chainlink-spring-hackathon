import React from 'react';
export declare type HeaderDaoProps = {
    daoName: string;
    daoEnsName: string;
    daoAvatar?: string;
    daoUrl: string;
    description: string;
    created_at: string;
    daoChain: string;
    daoType: string;
    favorited?: boolean;
    links?: Array<{
        label: string;
        href: string;
    }>;
    translation?: {
        readMore: string;
        readLess: string;
    };
    copiedOnClick?: () => void;
    onFavoriteClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const HeaderDao: React.FC<HeaderDaoProps>;
