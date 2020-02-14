import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { abbreviate } from '../../helpers';


const Wrapper = ({
  children,
  width = 'default',
  className = ''
}) => (
  <div
    className={cx(
      'wrapper',
      `wrapper--${abbreviate(width)}`,
      className
    )}
  >
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOf(['2x-small', 'x-small', 'small', 'default', 'large']),
  className: PropTypes.string
};


export default Wrapper;
