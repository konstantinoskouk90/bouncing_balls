import React, { Component } from 'react';

export default class Color extends Component {

    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
        this.setPreviewColor();
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.props.curColor.red},${this.props.curColor.green},${this.props.curColor.blue})`;
    }

    handleChange = (e) => {
        
        const id = e.target.getAttribute("id"),
              color = this.props.curColor;

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
        this.setPreviewColor();
    }

    render = () => {
        return (
            <div className="settings-container">
                <div className="title"> {this.props.title} </div>
                <input
                    className="color-slider"
                    id="red"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.curColor.red} />
                <input
                    className="color-slider"
                    id="green"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.curColor.green} />
                <input
                    className="color-slider"
                    id="blue"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.curColor.blue} />
                <div id="color-preview"></div>
            </div>
        );
    }
}

Color.defaultProps = {
    //default properties
    title: "Color"
};