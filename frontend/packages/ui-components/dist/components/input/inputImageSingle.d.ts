import React from 'react';
export declare type InputImageSingleProps = {
    /**
     * onChange Event will fires after uploading a valid image
     */
    onChange: (file: File | null) => void;
    /**
     * All error messages will pass as onError function inputs
     */
    onError: (error: {
        code: string;
        message: string;
    }) => void;
    /**
     * limit maximum dimension of the image (in px)
     */
    maxDimension?: number;
    /**
     * limit minimum dimension of the image (in px)
     */
    minDimension?: number;
    /**
     * limit maximum file size of the image (in bytes)
     */
    maxFileSize?: number;
    /**
     * Alow Square image only
     */
    onlySquare?: boolean;
    /**
     * Passing image src for preview
     */
    preview?: string;
};
export declare const InputImageSingle: React.FC<InputImageSingleProps>;
