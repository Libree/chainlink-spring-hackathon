import React from 'react';
export declare type AlertBannerProps = {
    /** type and severity of alert */
    mode?: 'info' | 'success' | 'warning' | 'critical';
    /** alert copy */
    label: string;
};
export declare const AlertBanner: React.FC<AlertBannerProps>;
