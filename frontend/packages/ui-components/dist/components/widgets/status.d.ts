import React from 'react';
import { ProgressStatusProps } from '../progress/status';
export declare type WidgetStatusProps = {
    /**
     * The widget status displays the status of a process. Such an process
     * typically consists of a number of steps. Each of these steps has a set of
     * attributes (see `ProgressStatusProps`). These attributes must be passed as
     * an array of objects.
     */
    steps: ProgressStatusProps[];
};
export declare const WidgetStatus: React.FC<WidgetStatusProps>;
