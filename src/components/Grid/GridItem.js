import React from 'react';
import PropTypes from 'prop-types';


const GridItem = ({
  element = 'div'
}) => (
  <div>
    Test
  </div>
);


GridItem.propTypes = {
  element: PropTypes.string
};


export default GridItem;
