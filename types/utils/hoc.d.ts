import { ComponentType } from "react";

export function hoc<H, S>(hook: (props: H) => S, Component: ComponentType, displayName?: string): {
    (props: H & S): ComponentType;
    hook: H;
    Original: any;
};
//# sourceMappingURL=hoc.d.ts.map