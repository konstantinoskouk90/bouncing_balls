import React, { Component } from 'react';

export default class Gravity extends Component {

    constructor() {

        super();

        this.state = {
            value: sessionStorage.getItem("gravity") || 50
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render = () => {

        //console.log(this.state.value);

        return (
            <div className="settings-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="gravity-slider"
                    type="range"
                    onChange={this.handleChange}
                    value={this.state.value}
                    min="0" max="100" />
                <div id="percentage">{`${this.state.value}%`}</div> 
            </div>
        );
    }
}

Gravity.defaultProps = {
  //default properties
  title: "Gravity"
};