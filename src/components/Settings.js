import React, { Component } from 'react';
import Gravity from './Gravity';
import Color from './Color';

export default class Settings extends Component {

    constructor() {

        super();

        this.state = {
            gravity: this.toNumber(this.getItem("gravity")) || 0.5,
            bounciness: this.toNumber(this.getItem("bounciness")) || 1.0,
            friction: this.toNumber(this.getItem("friction")) || 1.0
        }
    }

    //UPDATE FUNCTIONS

    updateGravity = (e) => {
        this.setState({
            gravity: this.setItem("gravity", e)
        });
    }

    updateBounciness = (e) => {
        this.setState({
            bounciness: this.setItem("bounciness", e)
        });
    }

    updateFriction = (e) => {
        this.setState({
            friction: this.setItem("friction", e)
        });
    }

    //HELPER FUNCTIONS

    toNumber = (str) => {
        return Number(str);
    }

    getItem = (item) => {
        return sessionStorage.getItem(item);
    }

    setItem = (item) => {
        return sessionStorage.setItem(item);
    }

    //RENDER

    render = () => {
        return (
            <div id="settings-container">
                <Gravity updateGravity={this.state.gravity} />
                <Color updateGravity={this.state.color} />
            </div>
        );
    }
}