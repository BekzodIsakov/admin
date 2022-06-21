type ThemeFontSizes = {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

type ThemeBorderRadiuses = {
    50: string;
    100: string;
    200: string;
    300: string;
}

type ThemeColors = {
    white: string;
    black: string;
    lightBrown: string;
    brown: string;
    brown50: string;
    brown75: string;
    cream: string;
    cream50: string;
    orange: string;
    lightPink: string;
    red: string;
    green: string;
    lightSeaGreen: string;
    seaGreen: string;
    gray: string;
    gray50: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
}

type ThemeDevices = {
    desktop: string;
    tablet: string;
    phone: string;
}

export type ThemeConfig = {
  fontSizes: ThemeFontSizes
  borderRadius: ThemeBorderRadiuses
  colors: ThemeColors
  devices: ThemeDevices
}
//# sourceMappingURL=Theme.d.ts.map
