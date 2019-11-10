export const getResponsiveClasses = (breakpointModifiers, base) => (
  typeof breakpointModifiers === 'object'
    ? Object.keys(breakpointModifiers).map(breakpoint => (
      `${abbreviate(breakpoint)}:${base}--${breakpointModifiers[breakpoint]}`)
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
