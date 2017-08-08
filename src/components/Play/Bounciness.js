import React, { Component } from 'react';

export default class Bounciness extends Component {

    handleChange = (e) => {
        this.props.updateBounciness(e.target.value);
    }

    render = () => {
        return (
            <div id="bounciness-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="bounciness-slider"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.currentBounciness * 100}
                    min="1" max="100" />
                <div id="percentage">{`${Math.round(this.props.currentBounciness * 100)}%`}</div> 
            </div>
        );
    }
}

Bounciness.defaultProps = {
  //default properties
  title: "Bounciness"
};