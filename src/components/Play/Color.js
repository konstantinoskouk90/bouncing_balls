import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentColor: PropTypes.object.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Ball Color"
};

class Color extends Component {

    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
        this.setPreviewColor();
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.props.currentColor.red},${this.props.currentColor.green},${this.props.currentColor.blue})`;
    }

    handleChange = (e) => {
        //Store current RGB
        let color = this.props.currentColor;
        //Update current object color based on input change
        color[e.target.id] = Number(e.target.value);
        //Update parent state
        this.props.changeHandler(e.target.class, color);
        //Update preview color
        this.setPreviewColor(color);
    }

    render = () => {
        return (
            <div id="color-container">
                <div id="title-color"> {this.props.title} </div>
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
                <div id="color-preview"></div>
                <div id="color-text">RGB</div>
            </div>
        );
    }
}

Color.propTypes = propTypes;
Color.defaultProps = defaultProps;

export default Color;