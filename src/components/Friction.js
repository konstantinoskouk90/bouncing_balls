import React, { Component } from 'react';

export default class Friction extends Component {

    handleChange = (e) => {
        this.props.updateFriction(e.target.value);
    }

    render = () => {
        return (
            <div className="settings-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="friction-slider"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.curFriction * 100}
                    min="1" max="100" />
                <div id="percentage">{`${Math.round(this.props.curFriction * 100)}%`}</div> 
            </div>
        );
    }
}

Friction.defaultProps = {
  //default properties
  title: "Friction"
};