import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Friction extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="friction-container">
                <div className="title"> {this.props.title} </div>
                <input
                    id="friction"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.currentFriction * 100}
                    min="1" max="100" 
                />
                <div id="percentage">{`${Math.round(this.props.currentFriction * 100)}%`}</div> 
            </div>
        );
    }
}

Friction.defaultProps = {
  //default properties
  title: "Friction"
};