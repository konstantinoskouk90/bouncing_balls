import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Size extends Component {

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
                    min="1" max="10" 
                    value={this.props.curSize}
                />
                <div id="size-preview">{Math.round(this.props.currentSize)}</div>
            </div>
        );
    }
}

Size.defaultProps = {
    //default properties
    title: "Size"
};