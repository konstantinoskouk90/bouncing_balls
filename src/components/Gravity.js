import React, { Component } from 'react';

export default class Gravity extends Component {

    handleChange = (e) => {
        this.props.updateGravity(e.target.value);
    }

    render = () => {
        return (
            <div className="settings-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="gravity-slider"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.curGravity * 100}
                    min="1" max="100" />
                <div id="percentage">{`${Math.round(this.props.curGravity * 100)}%`}</div> 
            </div>
        );
    }
}

Gravity.defaultProps = {
  //default properties
  title: "Gravity"
};