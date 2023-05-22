import React from 'react';
import { Address } from '../../utils/addresses';
declare type ProposalUseCase = 'list' | 'explore';
export declare function isExploreProposal(proposalUseCase: ProposalUseCase): proposalUseCase is 'explore';
export declare type CardProposalProps = {
    /** Proposal Title / Title of the card */
    title: string;
    /** Proposal Description / Description of the card */
    description: string;
    /**
     * Will be called when the button is clicked.
     * */
    onClick: () => void;
    /**
     * Available states that proposal card have. by changing the status,
     * the headers & buttons wil change to proper format also the progress
     * section only available on active state.
     * */
    process: 'draft' | 'pending' | 'active' | 'succeeded' | 'executed' | 'defeated';
    /** Indicates whether the proposal is in being used in list or in its special form (see explore page) */
    type?: ProposalUseCase;
    /** Url for the dao avatar */
    daoLogo?: 'string';
    /** The title that appears at the top of the progress bar */
    voteTitle: string;
    /** Progress bar value in percentage (max: 100) */
    voteProgress?: number | string;
    /** Vote label that appears at bottom of the progress bar */
    voteLabel?: string;
    /** Breakdown of the wining option */
    winningOptionValue?: string;
    /** Proposal token amount */
    tokenAmount?: string;
    /** Proposal token symbol */
    tokenSymbol?: string;
    /** Publish by sentence in any available languages */
    publishLabel: string;
    /** Publisher's ethereum address, ENS name **or** DAO address when type is
     * explore */
    publisherAddress?: Address;
    /** DAO name to display when type is explore */
    daoName?: string;
    /** Blockchain explorer URL */
    explorer?: string;
    alertMessage?: string;
    /**
     * ['Draft', 'Pending', 'Active', 'Executed', 'Succeeded', 'Defeated']
     */
    stateLabel: string[];
};
export declare const CardProposal: React.FC<CardProposalProps>;
export {};
