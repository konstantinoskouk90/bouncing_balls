import React from 'react';

const Canvas = props => (
    <div id="canvas-container">
        <canvas onClick={ (e) => { props.mouseClick(e); } }></canvas>
        <div id="options-wrapper"></div>
    </div>
);

export default Canvas;