import React, { Component } from 'react';
import Color from './Color';
import Size from './Size';
import Gravity from './Gravity';
import Bounciness from './Bounciness';
import Friction from './Friction';
import Button from './Button';
import settings from '../../data/defaultSettings';

export default class Settings extends Component {

    constructor() {

        super();

        //Store updated settings.
        if (JSON.parse(sessionStorage.getItem("settings"))) {

            this.storage = JSON.parse(sessionStorage.getItem("settings"));

            this.color_red = this.storage.color_red;
            this.color_green = this.storage.color_green;
            this.color_blue = this.storage.color_blue;
            this.size = this.storage.size;
            this.gravity = this.storage.gravity;
            this.bounciness = this.storage.bounciness;
            this.friction = this.storage.friction;
        }
        //Set state with failsafe for default settings.
        this.state = {
            color_red: this.color_red || settings.color_red,
            color_green: this.color_green || settings.color_green,
            color_blue: this.color_blue || settings.color_blue,
            size: this.size || settings.size,
            gravity: this.gravity || settings.gravity,
            bounciness: this.bounciness || settings.bounciness,
            friction: this.friction || settings.friction
        }
    }

    /**
     * Update color.
     * @ c
     */
    setColor = (cR, cG, cB) => {
        this.setState({
            color_red: cR,
            color_green: cG,
            color_blue: cB
        });
    }

    /**
     * Update size.
     * @ s
     */
    setSize = (s) => {
        this.setState({
            size: s
        });
    }

    /**
     * Update gravity.
     * @ g
     */
    setGravity = (g) => {
        this.setState({
            gravity: g / 100
        });
    }

    /**
     * Update bounciness.
     * @ b
     */
    setBounciness = (b) => {
        this.setState({
            bounciness: b / 100
        });
    }

    /**
     * Update friction.
     * @ f
     */
    setFriction = (f) => {
        this.setState({
            friction: f / 100
        });
    }

    /**
     * Save updated settings to sessionStorage
     * @ e
     */
    saveChanges = (e) => {
        console.log(this.state);
        //Store the updated state to sessionStorage
        sessionStorage.setItem("settings", JSON.stringify(this.state));
        //When save & play button is clicked
        if (e.target.getAttribute("id") === "save-play") {
            //Programmatically redirect to '/play' category
            this.props.history.push('/play');
        }
    }

    resetDefault = () => {
        //Reset default settings
        delete sessionStorage.settings;
        this.setState({
            color_red: settings.color_red,
            color_green: settings.color_green,
            color_blue: settings.color_blue,
            size: settings.size,
            gravity: settings.gravity,
            bounciness: settings.bounciness,
            friction: settings.friction
        });
    }

    //RENDER
    render = () => {
        return (
            <div id="settings-container">
                <Color curColorRed={this.state.color_red} curColorGreen={this.state.color_green} curColorBlue={this.state.color_blue} updateColor={this.setColor} />
                <Size curSize={this.state.size} updateSize={this.setSize} />
                <Gravity curGravity={this.state.gravity} updateGravity={this.setGravity} />
                <Bounciness curBounciness={this.state.bounciness} updateBounciness={this.setBounciness} />
                <Friction curFriction={this.state.friction} updateFriction={this.setFriction} />
                <Button save={this.saveChanges} reset={this.resetDefault} />
            </div>
        );
    }
}