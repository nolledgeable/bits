import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getResponsiveClasses, abbreviate } from '../../helpers';


const Grid = ({
  children,
  className = '',
  direction = 'ltr',
  element: Element = 'div',
  flush = false,
  gutterSize = 'default',
  itemsPerRow = '1',
  verticalAlign = 'top',
  ...rest
}) => {
  const joinedClassNames = classNames(
    'grid',
    {
      [`grid--${direction}`]: direction !== 'ltr',
      'grid--flush': flush,
      [`grid--${abbreviate(gutterSize)}`]: gutterSize !== 'default',
      [`grid--${itemsPerRow}`]: typeof itemsPerRow === 'number',
      [`grid--${verticalAlign}`]: verticalAlign !== 'top'
    },
    getResponsiveClasses(itemsPerRow, 'grid'),
    className
  );

  return (
    <Element className={joinedClassNames} {...rest}>
      {children}
    </Element>
  );
};


Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf([ 'ltr', 'rtl' ]),
  element: PropTypes.string,
  flush: PropTypes.bool,
  gutterSize: PropTypes.oneOf([ 'x-small', 'small', 'default', 'large', 'x-large' ]),
  itemsPerRow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  verticalAlign: PropTypes.oneOf([ 'top', 'middle', 'bottom' ])
};


export default Grid;
