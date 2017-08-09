import React from 'react';
import PropTypes from 'prop-types';

const Canvas = props => (
    <div id="canvas-container">
        <canvas onClick={ (e) => { props.mouseClick(e); } }></canvas>
    </div>
);

Canvas.propTypes = {
    mouseClick: PropTypes.func.isRequired
};

export default Canvas;