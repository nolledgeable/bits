export const getResponsiveClasses = (breakpointKeys, base) => (
  typeof breakpointKeys === 'object'
    ? Object.keys(breakpointKeys).map(breakpointKey => (
      `${abbreviate(breakpointKey)}:${base}--${breakpointKeys[breakpointKey]}`)
    )
    : []
);

export const abbreviate = (term, chars = 1, splitter = '-', joiner = '') => {
  const parts = term.split(splitter);
  const abbrParts = parts.map(part => {
    if (
      part === 'none' ||
      part === 'hidden'
    ) {
      return '0';
    } else if (
      chars === 1 &&
      part.length <= 2 &&
      part.indexOf('x') !== -1
    ) {
      return part;
    }
    return part.substring(0, chars);
  });
  return abbrParts.join(joiner);
};
