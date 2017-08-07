import React from 'react';

const Button = props => (
    <div id="button-container">
        <button id="reset" onClick={ props.reset }>Reset</button>
        <button id="save-play" onClick={ (e) => { props.save(e); } }>Save & Play</button>
        <button id="save" onClick={ (e) => { props.save(e); } }>Save</button>
    </div>
);

export default Button;