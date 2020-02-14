import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


// NOTE: This component assumes a SVG sprite of icons in the DOM
const Icon = ({
  icon,
  className,
  ...rest
}) => {
  const classNames = cx(
    'icon',
    className
  );

  return (
    <svg className={classNames} {...rest}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string
};


export default Icon;
