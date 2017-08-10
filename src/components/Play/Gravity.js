import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentGravity: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Gravity"
};

class Gravity extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="gravity-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="gravity"
                    type="range"
                    step="any"
                    onChange={this.handleChange}
                    value={this.props.currentGravity}
                    min="0.1" max="1"
                />
                <div id="percentage">{`${this.props.currentGravity.toFixed(2)}`}</div> 
            </div>
        );
    }
}

Gravity.propTypes = propTypes;
Gravity.defaultProps = defaultProps;

export default Gravity;