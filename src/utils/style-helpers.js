export const getThemeColorByVariant = colors => {
  return props => props.theme.colors[colors[props.variant]];
};

export const getSizeByVariant = sizeTypes => {
  return props => sizeTypes[props.variant];
};

export const getSizeBySizeType = sizeTypes => {
  return props => sizeTypes[props.size];
};

export const getFontSizeBySizeType = fontSizes => {
  return props => props.theme.fontSizes[fontSizes[props.size]];
};
