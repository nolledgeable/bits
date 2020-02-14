import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const Title = ({
  children,
  className = '',
  kind = '1',
  element = false,
  ...rest
}) => {
  const Element = element || `h${kind}`;
  const classNames = cx(
    'title',
    {
      [`title--${kind}`]: element
    },
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  kind: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  element: PropTypes.oneOf([false, 'span', 'div'])
};


export default Title;
