export const getResponsiveClasses = (breakpointModifiers, base) => (
  typeof breakpointModifiers === 'object'
    ? Object.keys(breakpointModifiers).map(breakpoint => (
      `${abbreviate(breakpoint)}:${base}--${breakpointModifiers[breakpoint]}`)
    )
    : []
);

export const abbreviate = (term, chars = 1, splitter = '-', joiner = '') => {
  const parts = term.split(splitter);
  const abbrParts = parts.map(part => part.substring(0, chars));
  return abbrParts.join(joiner);
};
