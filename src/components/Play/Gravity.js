import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentGravity: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

// Default props
const defaultProps = {
  title: "Gravity"
};

// The Gravity class represents the gravity level
class Gravity extends Component {

    /*
     * handleChange() calls the changeHandler() function which belongs to parent 
     * component Play, via accessing props, and updates the state accordingly
     */
    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    // render() updates the DOM on state change
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
                <div className="percentage">{`${this.props.currentGravity.toFixed(2)}`}</div> 
            </div>
        );
    }
}

Gravity.propTypes = propTypes;
Gravity.defaultProps = defaultProps;

export default Gravity;