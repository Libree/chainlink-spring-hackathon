/**
 * Type of any illustration component that makes up an illustration. Comes with
 * the various types (in the sense of "variations") that component can come in,
 * as well as its dimensions.
 */
export declare type IllustrationComponentProps<T> = {
    variant: T;
} & Dimensions;
/** Add the literal type 'none' to a Type */
export declare type Noneable<T> = T | 'none';
export declare type Dimensions = {
    width?: number;
    height?: number;
};
export declare class UnknownIllustrationVariantError extends Error {
    constructor(variant: string, illustrationComponent: string);
}
