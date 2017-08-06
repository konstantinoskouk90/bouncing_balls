import React, { Component } from 'react';

export default class Color extends Component {

    constructor() {

        super();

        this.state = {
            rgbColor: sessionStorage.getItem("color") || { red: 223, green: 12, blue: 12 }
        };
    }

    componentDidMount = () => {
        this.preview = document.getElementById("color-preview");
    }

    setPreviewColor = () => {
        this.preview.style.backgroundColor = `rgb(${this.state.rgbColor.red},${this.state.rgbColor.green},${this.state.rgbColor.blue})`;
    }

    handleChange = (e) => {

        const color = e.target.getAttribute("id"),
              rgbNewColor = this.state.rgbColor;

        if(color === "red") {
            rgbNewColor.red = e.target.value;
        }

        if(color === "green") {
            rgbNewColor.green = e.target.value;
        }

        if(color === "blue") {
            rgbNewColor.blue = e.target.value;
        }

        this.setState({ rgbColor: rgbNewColor });
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
                    value={this.state.value}
                    min="0" max="255" 
                    value={this.state.rgbColor.red} />
                <input
                    className="color-slider"
                    id="green"
                    type="range"
                    onChange={this.handleChange}
                    value={this.state.value}
                    min="0" max="255"
                    value={this.state.rgbColor.green} />
                <input
                    className="color-slider"
                    id="blue"
                    type="range"
                    onChange={this.handleChange}
                    value={this.state.value}
                    min="0" max="255" 
                    value={this.state.rgbColor.blue}/>
                <div id="color-preview"></div>
            </div>
        );
    }
}

Color.defaultProps = {
    //default properties
    title: "RGB Color"
};