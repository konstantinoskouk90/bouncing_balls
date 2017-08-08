import React, { Component } from 'react';

export default class Color extends Component {

    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
        this.setPreviewColor();
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.props.curColorRed},${this.props.curColorGreen},${this.props.curColorBlue})`;
    }

    setPreviewColor2 = (colorRed, colorGreen, colorBlue) => {
        this.preview.style.backgroundColor = `rgb(${colorRed},${colorGreen},${colorBlue})`;
    }

    handleChange = (e) => {

        const id = e.target.getAttribute("id");
        let colorRed = this.props.curColorRed;
        let colorGreen = this.props.curColorGreen;
        let colorBlue = this.props.curColorBlue;

        if (id === "red") {
            colorRed = Number(e.target.value);
        }

        if (id === "green") {
            colorGreen = Number(e.target.value);
        }

        if (id === "blue") {
            colorBlue = Number(e.target.value);
        }

        this.props.updateColor(colorRed, colorGreen, colorBlue);
        this.setPreviewColor2(colorRed, colorGreen, colorBlue);
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
                    value={this.props.curColorRed} />
                <input
                    className="color-slider"
                    id="green"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.curColorGreen} />
                <input
                    className="color-slider"
                    id="blue"
                    type="range"
                    onChange={this.handleChange}
                    min="0" max="255"
                    value={this.props.curColorBlue} />
                <div id="color-preview"></div>
            </div>
        );
    }
}

Color.defaultProps = {
    //default properties
    title: "Color"
};