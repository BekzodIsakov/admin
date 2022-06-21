import { FC } from "react";
import { InputPropsResult } from "./input.props";

export type InputOnChange = (value: string) => void

type InputOuterProps = {
  value: string,
  name: string,
  onChange: InputOnChange
}

export const Input: FC<InputOuterProps & InputPropsResult>;
//# sourceMappingURL=input.component.d.ts.map
