import React from 'react';
import { Dimensions } from '../../../utils/illustrations';
import { Accessory } from './human_accessories';
import { Body } from './human_bodies';
import { Expression } from './human_expressions';
import { Hair } from './human_hairs';
import { Sunglass } from './human_sunglasses';
export declare type IlluHumanProps = {
    /**
     * The variant of human body used as for the Illustration
     */
    body: Body;
    /**
     * The variant of facial expression used as for the Illustration
     */
    expression: Expression;
    /**
     * The variant of hair style used as for the Illustration. This is prop is
     * optional. If not specified, no hair will be shown.
     */
    hair?: Hair;
    /**
     * The variant of glasses used as for the Illustration. This is prop is
     * optional. If not specified, no glasses will be shown.
     */
    sunglass?: Sunglass;
    /**
     * The variant of accessory used as for the Illustration. This is prop is
     * optional. If not specified, no accessories will be shown.
     */
    accessory?: Accessory;
} & Dimensions;
export declare const IllustrationHuman: React.FC<IlluHumanProps>;
