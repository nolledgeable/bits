import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const List = ({
  children,
  className = '',
  element: Element = 'ul',
  ...rest
}) => {
  const classNames = cx(
    'list',
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['ul', 'ol', 'div', 'p', 'span'])
};


export default List;
