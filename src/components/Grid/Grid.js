import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getResponsiveClasses } from '../../helpers';


const Grid = ({
  children,
  className = '',
  direction = 'ltr',
  element: Element = 'div',
  flush = false,
  gutterSize = 'default',
  itemSize = 1,
  verticalAlign = 'top',
  ...rest
}) => {
  const joinedClassNames = classNames(
    'grid',
    {
      [`grid--${direction}`]: direction !== 'ltr',
      'grid--flush': flush,
      [`grid--${gutterSize}`]: gutterSize !== 'default',
      [`grid--${itemSize}`]: typeof itemSize === 'number',
      [`grid--${verticalAlign}`]: verticalAlign !== 'top'
    },
    getResponsiveClasses(itemSize, 'grid'),
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
  itemSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  verticalAlign: PropTypes.oneOf([ 'top', 'middle', 'bottom' ])
};


export default Grid;
