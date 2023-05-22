import React from 'react';
import { TextInputProps } from './textInput';
export declare type SearchInputProps = Omit<TextInputProps, 'leftAdornment' | 'rightAdornment'> & {
    /**
     * Change input state into isLoading...
     */
    isLoading?: boolean;
};
export declare const SearchInput: React.FC<SearchInputProps>;
