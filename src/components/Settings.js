import React, { Component } from 'react';
import Color from './Color';
import Size from './Size';
import Gravity from './Gravity';
import Bounciness from './Bounciness';
import Friction from './Friction';
import Button from './Button';
import settings from '../data/defaultSettings';

export default class Settings extends Component {

    constructor() {

        super();

        //Store updated settings if sessionStorage item exists
        if (JSON.parse(sessionStorage.getItem("settings"))) {
            this.storage = JSON.parse(sessionStorage.getItem("settings"));
            this.color = this.storage.color;
            this.size = this.storage.size;
            this.gravity = this.storage.gravity;
            this.bounciness = this.storage.bounciness;
            this.friction = this.storage.friction;
        }
        //Update or failsafe default settings
        this.state = {
            color: this.color || settings.color,
            size: this.size || settings.size,
            gravity: this.gravity || settings.gravity,
            bounciness: this.bounciness || settings.bounciness,
            friction: this.friction || settings.friction
        }
    }

    //UPDATE FUNCTIONS
    setColor = (c) => {
        this.setState({
            color: c
        });
    }

    setSize = (s) => {
        this.setState({
            size: s
        });
    }

    setGravity = (g) => {
        this.setState({
            gravity: g / 100
        });
    }

    setBounciness = (b) => {
        this.setState({
            bounciness: b / 100
        });
    }

    setFriction = (f) => {
        this.setState({
            friction: f / 100
        });
    }

    saveChanges = (e) => {
        //Store the updated state to sessionStorage
        sessionStorage.setItem("settings", JSON.stringify(this.state));
        //When save & play button is clicked
        if (e.target.getAttribute("id") === "save-play") {
            //Programmatically redirect to /play category
            this.props.history.push("/play");
        }
    }

    resetDefault = () => {
        //Reset default settings
        delete sessionStorage.settings;
    }

    //RENDER
    render = () => {
        console.log(this.state);
        return (
            <div id="settings-container">
                <Color curColor={this.state.color} updateColor={this.setColor} />
                <Size curSize={this.state.size} updateSize={this.setSize} />
                <Gravity curGravity={this.state.gravity} updateGravity={this.setGravity} />
                <Bounciness curBounciness={this.state.bounciness} updateBounciness={this.setBounciness} />
                <Friction curFriction={this.state.friction} updateFriction={this.setFriction} />
                <Button save={this.saveChanges} reset={this.resetDefault} />
            </div>
        );
    }
}

Settings.defaultProps = {
    //default properties
    settings: "Color"
};