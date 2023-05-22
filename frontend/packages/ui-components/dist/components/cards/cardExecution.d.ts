import React from 'react';
import { CardTransferProps } from './cardTransfer';
import { CardTokenProps } from './cardToken';
export declare type CardExecutionProps = CardTransferProps & {
    /**
     * Title of the card
     */
    title: string;
    /**
     * Description text
     */
    description: string;
    /**
     * Allows the Execution Card component grow horizontally
     * */
    wide?: boolean;
    /** Handler for the switch button. Will be called when the button is clicked.
     * */
    onClick?: () => void;
    /**
     * whether the action button is disabled or not
     */
    disabledAction?: boolean;
} & Omit<CardTokenProps, 'type' | 'bgWhite' | 'changeType' | 'tokenUSDValue' | 'changeDuringInterval' | 'treasurySharePercentage' | 'percentageChangeDuringInterval'>;
export declare const CardExecution: React.FC<CardExecutionProps>;
