import React from 'react';
import { Address } from '../../utils/addresses';
export declare type ListItemDaoProps = {
    /** Dao's ethereum address **or** ENS name */
    daoAddress: Address;
    daoLogo?: string;
    daoName: string;
    selected?: boolean;
    /** Handler for ListItem selection */
    onClick?: React.MouseEventHandler;
};
/**
 * List item for DAO selection. Used for switching to different DAO.
 */
export declare const ListItemDao: React.FC<ListItemDaoProps>;
