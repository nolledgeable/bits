import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getResponsiveClasses, abbreviate } from '../../helpers';


const Grid = ({
  children,
  className = '',
  element: Element = 'div',
  gutter = 'default',
  itemsPerRow = '',
  ...rest
}) => {
  const classNames = cx(
    'grid',
    {
      [`grid--${abbreviate(gutter)}`]: gutter !== 'default',
      [`grid--${itemsPerRow}`]: itemsPerRow
    },
    getResponsiveClasses(itemsPerRow, 'grid'),
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['div', 'ul', 'ol']),
  gutter: PropTypes.oneOf(['none', 'x-small', 'small', 'default', 'large', 'x-large']),
  itemsPerRow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
};


export default Grid;
