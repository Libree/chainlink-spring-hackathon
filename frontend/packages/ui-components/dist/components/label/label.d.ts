import React from 'react';
export declare type LabelProps = {
    label: string;
    helpText?: string;
    isOptional?: boolean;
    tagLabel?: string;
    renderHtml?: boolean;
};
export declare const Label: React.FC<LabelProps>;
