import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const getGridClassNames = ({
  className,
  direction,
  flush,
  itemsPerRow,
  verticalAlign
}) => {
  let classNamesArgs = [
    className,
    {
      [`grid--${direction}`]: direction !== 'ltr',
      'grid--flush': flush,
      [`grid--${itemsPerRow}`]: typeof itemsPerRow === 'number',
      [`grid--${verticalAlign}`]: verticalAlign !== 'top'
    }
  ];

  if (typeof itemsPerRow === 'object') {
    classNamesArgs = [
      ...classNamesArgs,
      Object.keys(itemsPerRow).map(breakpoint => `grid--${itemsPerRow[breakpoint]}@${breakpoint}`)
    ]
  }

  return classNames(...classNamesArgs);
};


const Grid = (props;) => {
  const {
    className,
    direction,
    element: Element,
    flush,
    itemsPerRow,
    verticalAlign,
    ...rest
  } = props;

  return (
    <Element
      className={getGridClassNames(props)}
      {...rest}
    >
      Test
    </Element>
  );
};


Grid.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf([ 'ltr', 'rtl' ]),
  element: PropTypes.string,
  flush: PropTypes.bool,
  itemsPerRow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  verticalAlign: PropTypes.oneOf([ 'top', 'middle', 'bottom' ])
};


Grid.defaultProps = {
  className: '',
  direction: 'ltr',
  element: 'div',
  flush: false,
  itemsPerRow: 1,
  verticalAlign: 'top'
};


export default Grid;
