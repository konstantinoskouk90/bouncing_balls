import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentBounciness: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

// Default props
const defaultProps = {
  title: "Bounciness"
};

// The Bounciness class represents the bounciness level
class Bounciness extends Component {

  /*
   * handleChange() calls the changeHandler() function which belongs to parent 
   * component Play, via accessing props, and updates the state accordingly
   */
  handleChange = (e) => {
    this.props.changeHandler(e.target.id, Number(e.target.value));
  }

  // render() updates the DOM
  render = () => {
    return (
      <div className="container">
        <div className="title">{this.props.title}</div>
        <input
          id="bounciness"
          type="range"
          step="any"
          onChange={this.handleChange}
          value={this.props.currentBounciness}
          min="0.1" max="1"
        />
        <div className="percentage">{`${this.props.currentBounciness.toFixed(2)}`}</div>
      </div>
    );
  }
}

Bounciness.propTypes = propTypes;
Bounciness.defaultProps = defaultProps;

export default Bounciness;