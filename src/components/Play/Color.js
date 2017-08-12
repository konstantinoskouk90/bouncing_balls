import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
    currentColor: PropTypes.object.isRequired,
    changeHandler: PropTypes.func.isRequired
};

// Default props
const defaultProps = {
    settingsTitle: "Ball Color",
    previewTitle: "RGB"
};

// The Color class represents the ball's RGB color
class Color extends Component {

    /**
     * componentDidMount() is invoked immediately after the component 
     * is mounted initializing the DOM's #color-preview node
     */
    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
        this.setPreviewColor();
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.props.currentColor.red},${this.props.currentColor.green},${this.props.currentColor.blue})`;
    }

    /*
     * handleChange() calls the changeHandler() function which belongs to parent 
     * component Play, via accessing props, and updates the state accordingly
     */
    handleChange = (e) => {
        // Store current RGB
        let color = this.props.currentColor;
        // Update current object color based on input change
        color[e.target.id] = Number(e.target.value);
        // Update parent state
        this.props.changeHandler(e.target.class, color);
        // Update preview color
        this.setPreviewColor(color);
    }

    // render() updates the DOM
    render = () => {
        return (
            <div id="color-container" className="settings-component">
                <div className="title"> {this.props.settingsTitle} </div>
                <div id="input-container">
                    <input
                        className="color"
                        id="red"
                        type="range"
                        onChange={this.handleChange}
                        min="0" max="255"
                        value={this.props.currentColor.red}
                    />
                    <input
                        className="color"
                        id="green"
                        type="range"
                        onChange={this.handleChange}
                        min="0" max="255"
                        value={this.props.currentColor.green}
                    />
                    <input
                        className="color"
                        id="blue"
                        type="range"
                        onChange={this.handleChange}
                        min="0" max="255"
                        value={this.props.currentColor.blue}
                    />
                </div>
                <div id="color-details">
                    <div id="color-preview"></div>
                    <div id="color-text">{this.props.previewTitle}</div>
                </div>
            </div>
        );
    }
}

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;