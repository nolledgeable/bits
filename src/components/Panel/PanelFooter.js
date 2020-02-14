import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const PanelFooter = ({
  children,
  className = '',
  element: Element = 'footer',
  ...rest
}) => {
  const classNames = cx(
    'panel__footer',
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


PanelFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['footer', 'div'])
};


export default PanelFooter;
