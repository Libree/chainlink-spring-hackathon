import React, { ReactComponentElement } from 'react';
import { IconType } from '../icons';
import { TagProps } from '../tag';
declare type CrumbProps = {
    first?: boolean;
    label: string;
    last?: boolean;
    icon?: ReactComponentElement<IconType>;
    tag?: React.FunctionComponentElement<TagProps>;
    onClick?: React.MouseEventHandler;
};
declare const Crumb: React.FC<CrumbProps>;
export default Crumb;
