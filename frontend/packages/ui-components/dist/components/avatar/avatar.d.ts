import React from 'react';
export declare type AvatarProps = {
    /** Change Avatar's border Radius */
    mode?: 'circle' | 'square';
    /** Changes a Avatar's size */
    size: 'small' | 'default' | 'large';
    /** URL of the Avatar's src */
    src: string;
};
/** Simple Avatar*/
export declare const Avatar: React.FC<AvatarProps>;
