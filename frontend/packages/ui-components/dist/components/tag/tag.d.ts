import React from 'react';
export declare type TagProps = {
    /** Changes a tag's color scheme */
    colorScheme?: 'neutral' | 'info' | 'warning' | 'critical' | 'success' | 'primary';
    /** Text displayed on the tag */
    label: string;
    className?: string;
};
export declare const Tag: React.FC<TagProps>;
