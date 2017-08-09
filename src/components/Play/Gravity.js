import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Gravity extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="gravity-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="gravity"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.currentGravity * 100}
                    min="1" max="100"
                />
                <div id="percentage">{`${Math.round(this.props.currentGravity * 100)}%`}</div> 
            </div>
        );
    }
}

Gravity.defaultProps = {
  //default properties
  title: "Gravity"
};