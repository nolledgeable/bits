import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';


const RichContent = ({
  children,
  className = '',
  element: Element = 'div',
  ...rest
}) => {
  const classNames = cx(
    'rich-content',
    className
  );

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
};


RichContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(['div', 'article', 'section'])
};


export default RichContent;
