import React, { ReactNode } from 'react';
export interface BackdropProps {
    /**
     * The `visible` prop determines whether your modal is visible.
     */
    visible?: boolean;
    /**
     * The `onClose` prop allows passing a function that will be called once the modal has been dismissed.
     */
    onClose?: () => void;
    /**
     * Children Element
     */
    children?: ReactNode;
}
/**
 * Backdrop UI component
 */
export declare const Backdrop: React.FC<BackdropProps>;
