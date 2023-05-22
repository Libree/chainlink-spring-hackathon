import React from 'react';
export declare type TextareaWYSIWYGProps = {
    placeholder?: string;
    disabled?: boolean;
    onBlur?: (html: string) => void;
    onChange?: (html: string) => void;
    name?: string;
    value?: string;
};
export declare const TextareaWYSIWYG: React.FC<TextareaWYSIWYGProps>;
