import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
    <div id="button-container">
        <button id="reset" onClick={ props.resetState }>Reset</button>
    </div>
);

export default Button;