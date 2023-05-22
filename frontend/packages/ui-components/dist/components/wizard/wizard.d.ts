import React from 'react';
export declare type WizardProps = {
    title: string;
    description: string | React.ReactNode;
    includeStepper?: boolean;
    processName?: string;
    currentStep?: number;
    totalSteps?: number;
    nav: React.ReactNode;
    renderHtml?: boolean;
};
export declare const Wizard: React.FC<WizardProps>;
