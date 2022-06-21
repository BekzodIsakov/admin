import { ThemeConfig } from "types/styles";

type ThemeConfigProps = {
  theme: ThemeConfig
}

export function getThemeColorByVariant(colors: Record<string, any>): (props: ThemeConfigProps) => string;
export function getSizeByVariant(sizeTypes: Record<string, any>): (props: ThemeConfigProps) => string;
export function getSizeBySizeType(sizeTypes: Record<string, any>): (props: ThemeConfigProps) => string;
export function getFontSizeBySizeType(fontSizes: Record<string, any>): (props: ThemeConfigProps) => string;
//# sourceMappingURL=style-helpers.d.ts.map