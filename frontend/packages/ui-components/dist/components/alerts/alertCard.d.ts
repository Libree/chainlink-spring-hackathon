import React from 'react';
export declare type AlertCardProps = {
    /** type and severity of alert */
    mode?: 'info' | 'success' | 'warning' | 'critical';
    /** card title */
    title: string;
    /** card subtitle */
    helpText?: string;
};
export declare const AlertCard: React.FC<AlertCardProps>;
