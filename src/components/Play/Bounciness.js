import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentBounciness: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Bounciness"
};

class Bounciness extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="bounciness-container">
                <div className="title">{this.props.title}</div>
                <input
                    id="bounciness"
                    type="range"
                    step="any"
                    onChange={this.handleChange}
                    value={this.props.currentBounciness}
                    min="0.1" max="1" 
                />
                <div id="percentage">{`${this.props.currentBounciness.toFixed(2)}`}</div> 
            </div>
        );
    }
}

Bounciness.propTypes = propTypes;
Bounciness.defaultProps = defaultProps;

export default Bounciness;