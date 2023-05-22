import React from 'react';
export declare type VoterType = {
    wallet: string;
    option: 'yes' | 'abstain' | 'no' | 'approved' | 'none';
    votingPower?: string;
    tokenAmount?: string;
    voteReplaced?: boolean;
};
export declare type VotersTableProps = {
    voters: Array<VoterType>;
    page?: number;
    onLoadMore?: () => void;
    showOption?: boolean;
    showVotingPower?: boolean;
    showAmount?: boolean;
    pageSize?: number;
};
export declare const VotersTable: React.FC<VotersTableProps>;
export declare const Table: import("styled-components").StyledComponent<"table", any, {
    className: "w-full border-separate whitespace-nowrap";
}, "className">;
