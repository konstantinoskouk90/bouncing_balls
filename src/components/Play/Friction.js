import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentFriction: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Friction"
};

class Friction extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="friction-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="friction"
                    type="range"
                    step="any"
                    onChange={this.handleChange}
                    value={this.props.currentFriction}
                    min="0.1" max="1" 
                />
                <div id="percentage">{`${this.props.currentFriction.toFixed(2)}`}</div> 
            </div>
        );
    }
}

Friction.propTypes = propTypes;
Friction.defaultProps = defaultProps;

export default Friction;