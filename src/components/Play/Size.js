import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentSize: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Size"
};

class Size extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="size-container">
                <div className="title">{this.props.title}</div>
                <input
                    id="size"
                    type="range"
                    onChange={this.handleChange}
                    min="1" max="30" 
                    value={this.props.currentSize}
                />
                <div id="size-preview">{this.props.currentSize}</div>
            </div>
        );
    }
}

Size.propTypes = propTypes;
Size.defaultProps = defaultProps;

export default Size;