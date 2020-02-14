import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const ListItem = ({
  children,
  className = '',
  element: Element = 'li',
  ...rest
}) => {
  const classNames = cx(
    'list__item',
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['li', 'div', 'p', 'span'])
};


export default ListItem;
