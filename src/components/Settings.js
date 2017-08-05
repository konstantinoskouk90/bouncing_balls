import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';
import Options from './Options';

export default class Settings extends Component {

    constructor() {

        super();

        this.state = {
            gravity: this.convertToNumber(this.getSSItem("gravity")) || 0.5,
            bounciness: this.convertToNumber(this.getSSItem("bounciness")) || 1.0,
            friction: this.convertToNumber(this.getSSItem("friction")) || 1.0
        }
    }

    //UPDATE FUNCTIONS

    updateGravity = (e) => {
        this.setState({
            gravity: sessionStorage.setItem("gravity", e)
        });
    }

    updateBounciness = (e) => {
        this.setState({
            bounciness: sessionStorage.setItem("bounciness", e)
        });
    }

    updateFriction = (e) => {
        this.setState({
            friction: sessionStorage.setItem("friction", e)
        });
    }

    //HELPER FUNCTIONS

    convertToNumber = (str) => {
        return Number(str);
    }

    getSSItem = (item) => {
        return sessionStorage.getItem(item);
    }

    //RENDER

    render = () => {
        return false;
    }
}