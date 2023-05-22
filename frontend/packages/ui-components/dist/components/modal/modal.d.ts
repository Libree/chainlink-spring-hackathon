import React, { ReactNode, CSSProperties } from 'react';
export interface ModalProps {
    /**
     * The controlled open state of the Modal.
     */
    isOpen?: boolean;
    /**
     * Modal title. if the title exists close button will appear
     */
    title?: string;
    /**
     * Modal subtitle
     */
    subtitle?: string;
    /**
     * Content
     */
    children: ReactNode;
    /**
     * Styles
     */
    style?: CSSProperties | undefined;
    /**
     * The `onClose` prop allows passing a function that will be called once the modal has been dismissed.
     */
    onClose?: () => void;
    onOpenAutoFocus?: (e: Event) => void;
}
/**
 * Default UI component
 */
export declare const Modal: React.FC<ModalProps>;
