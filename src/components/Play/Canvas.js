import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  mouseClick: PropTypes.func.isRequired
};

// The Canvas function represents the game's canvas
const Canvas = props => (
  <div id="canvas-container">
    <canvas onClick={(e) => { props.mouseClick(e); }}></canvas>
  </div>
);

Canvas.propTypes = propTypes;

export default Canvas;