import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const Panel = ({
  children,
  className = '',
  element: Element = 'div',
  ...rest
}) => {
  const classNames = cx(
    'panel',
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['div', 'article', 'section'])
};


export default Panel;
