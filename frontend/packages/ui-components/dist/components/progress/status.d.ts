import React from 'react';
export declare type ModeType = 'active' | 'failed' | 'done' | 'succeeded' | 'upcoming';
export declare type ProgressStatusProps = {
    /**
     * The mode is the state of a progress' status. Simple, init? ;)
     *
     * Think about it this way: Imagine a list of todos. Each of those todos may
     * be associated with a status of progress. If the todo:
     *  - has not been tackled, its progress status would be "upcoming".
     *  - is being tackled, progress status would be "active".
     *  - has been tackled, its progress status would be "done".
     *
     * The additional states "succeeded" and "failed" can be used to additionally
     * describe a todo that is done.
     */
    mode: ModeType;
    /**
     * Describes the name of the progress step. Think of it as the name of the
     * todo in the example above.
     */
    label: string;
    /**
     * Describes when the progress status was last changed. Every mode of progress
     * status MUST have a date, EXCEPT for:
     * - "upcoming"  which NEVER has a date, (as it is in the future)
     * - "failed" might not have a date of failure (in the case of a failed execution)
     *
     * If no date is passed when one is required, a fallback text will be displayed.
     * */
    date?: string;
    /**
     * If the progress status changed due to an event on a blockchain, the
     * corresponding block MAY be passed. Note that upcoming, active and rejected
     * mode can NEVER have a block associated.
     */
    block?: string;
};
export declare const ProgressStatus: React.FC<ProgressStatusProps>;
