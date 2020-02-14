import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { abbreviate } from '../../helpers';


const Button = ({
  children,
  className = '',
  element: Element = 'button',
  outline = false,
  type = 'primary',
  ...rest
}) => {
  const classNames = cx(
    'button',
    {
      [`button--${abbreviate(type, 3)}`]: type !== 'primary',
      [`button--${abbreviate('outline')}`]: outline
    },
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.element,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};


export default Button;
