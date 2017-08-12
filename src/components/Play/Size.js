import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  currentSize: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

// Default Props
const defaultProps = {
  title: "Ball Size"
};

// The Size class represents the ball's size
class Size extends Component {

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
        <div id="input-container">
          <input
            id="size"
            type="range"
            step="any"
            onChange={this.handleChange}
            min="1" max="30"
            value={this.props.currentSize}
          />
        </div>
        <div id="size-preview">{this.props.currentSize.toFixed(1)}</div>
      </div>
    );
  }
}

Size.propTypes = propTypes;
Size.defaultProps = defaultProps;

export default Size;