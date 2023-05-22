import { TextareaHTMLAttributes } from 'react';
export declare type TextareaSimpleProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>;
export declare const TextareaSimple: import("styled-components").StyledComponent<"textarea", any, {
    className: "py-1.5 px-2 rounded-xl resize-none w-full border-2 border-ui-100 hover:border-ui-300 \n    disabled:bg-ui-100 disabled:border-ui-200 focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white text-ui-600 active:border-primary-500 active:ring-0";
}, "className">;
