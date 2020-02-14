import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const Overlay = ({
  className = '',
  element: Element = 'button',
  isActive,
  ...rest
}) => {
  const classNames = cx(
    'overlay',
    className
  );

  return isActive
    ? <Element className={classNames} {...rest} />
    : null;
};


Overlay.propTypes = {
  className: PropTypes.string,
  element: PropTypes.oneOf(['button', 'a']),
  isActive: PropTypes.bool.isRequired
};


export default Overlay;
