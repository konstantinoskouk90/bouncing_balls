import React, { Component } from 'react';

export default class Color extends Component {

    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
        this.setPreviewColor();
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.props.currentColor.red},${this.props.currentColor.green},${this.props.currentColor.blue})`;
    }

    handleChange = (e) => {

        const id = e.target.getAttribute("id");
        
        let color = this.props.currentColor;

        if (id === "red") {
            color.red = Number(e.target.value);
        }

        if (id === "green") {
            color.green = Number(e.target.value);
        }

        if (id === "blue") {
            color.blue = Number(e.target.value);
        }

        this.props.updateColor(color);
        this.setPreviewColor(color);
    }

    render = () => {
        return (
            <div id="color-container">
                <div className="title"> {this.props.title} </div>
                <input
                    className="color-slider"
                    id="red"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.currentColor.red} />
                <input
                    className="color-slider"
                    id="green"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.currentColor.green} />
                <input
                    className="color-slider"
                    id="blue"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.currentColor.blue} />
                <div id="color-preview"></div>
            </div>
        );
    }
}

Color.defaultProps = {
    //default properties
    title: "Color"
};