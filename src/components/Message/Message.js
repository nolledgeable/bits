import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { abbreviate } from '../../helpers';


const Message = ({
  block,
  children,
  className = '',
  type = 'warning',
  ...rest
}) => {
  const classNames = cx(
    'message',
    {
      'message--b': block,
      [`message--${abbreviate(type)}`]: type !== 'warning'
    },
    className
  );
  const Element = block ? 'div' : 'span';

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


Message.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['warning', 'error', 'success', 'info'])
};


export default Message;
