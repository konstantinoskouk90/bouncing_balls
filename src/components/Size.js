import React, { Component } from 'react';

export default class Size extends Component {

    handleChange = (e) => {
        this.props.updateSize(Number(e.target.value));
    }

    render = () => {
        return (
            <div className="settings-container">
                <div className="title">{this.props.title}</div>
                <input
                    id="size-slider"
                    type="range"
                    onChange={this.handleChange}
                    min="1" max="10" 
                    value={this.props.curSize} />
                <div id="size-preview">{Math.round(this.props.curSize)}</div>
            </div>
        );
    }
}

Size.defaultProps = {
    //default properties
    title: "Size"
};