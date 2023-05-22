import React from 'react';
export interface CardTextProps {
    type: 'title' | 'label';
    title: string;
    content: string;
    bgWhite?: boolean;
}
export declare const CardText: React.FC<CardTextProps>;
