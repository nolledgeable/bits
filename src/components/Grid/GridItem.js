import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getResponsiveClasses } from '../../helpers';


const GridItem = ({
  children,
  className = '',
  element: Element = 'div',
  size = 1,
  ...rest
}) => {
  const joinedClassNames = classNames(
    'grid__item',
    getResponsiveClasses(size, 'grid__item'),
    className
  );

  return (
    <Element className={joinedClassNames} {...rest}>
      {children}
    </Element>
  );
};


GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};


export default GridItem;
