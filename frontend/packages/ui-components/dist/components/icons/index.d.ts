/// <reference types="react" />
export * from './interface';
export * from './module';
export * from './markdown';
export declare type IconType = ({ height, width, ...props }: {
    [x: string]: any;
    height?: number | undefined;
    width?: number | undefined;
}) => JSX.Element;
