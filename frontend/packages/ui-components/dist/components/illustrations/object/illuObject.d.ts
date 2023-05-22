import React, { HTMLAttributes } from 'react';
export declare const objectNames: readonly ["action", "app", "archive", "book", "build", "chain", "database", "error", "explore", "gas", "goal", "labels", "lightbulb", "magnifying_glass", "not_found", "security", "settings", "smart_contract", "success", "users", "warning", "wagmi", "wallet"];
export declare type IlluObjectProps = {
    object: typeof objectNames[number];
};
export declare const IlluObject: React.FC<IlluObjectProps & HTMLAttributes<HTMLElement>>;
