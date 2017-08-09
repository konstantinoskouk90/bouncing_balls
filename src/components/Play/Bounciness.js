import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currentBounciness: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  title: "Bounciness"
};

class Bounciness extends Component {

    handleChange = (e) => {
        this.props.changeHandler(e.target.id, Number(e.target.value));
    }

    render = () => {
        return (
            <div id="bounciness-container">
                <div className="title">{this.props.title}</div>
                <input
                    id="bounciness"
                    type="range"
                    onChange={this.handleChange}
                    value={this.props.currentBounciness * 100}
                    min="1" max="100" 
                />
                <div id="percentage">{`${Math.round(this.props.currentBounciness * 100)}%`}</div> 
            </div>
        );
    }
}

export default Bounciness;

Bounciness.propTypes = propTypes;
Bounciness.defaultProps = defaultProps;