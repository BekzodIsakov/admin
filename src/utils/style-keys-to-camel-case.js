export const styleKeysToCamelCase = style => {
  return Object.keys(style).reduce((acc, key) => {
    const keyToCamel = key.replace(/-\w/g, text =>
      text.replace(/-/, '').toUpperCase()
    );
    acc[keyToCamel] = style[key];
    return acc;
  }, {});
};
