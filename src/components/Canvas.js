import React, { Component } from 'react';
import Ball from './Ball';

export default class Canvas extends Component {

    constructor() {

        super();

        this.state = {
            totalBalls: []
        }
    }

    componentDidMount = () => {
        //
    }

    onCanvasClick = (e) => {

        //this.mousePos(e);

        console.log(e.clientX + "|" + e.clientY);

        const ball = [new Ball(e.clientX, e.clientY)],
            balls = [...this.state.totalBalls, ...ball];

        this.setState({
            totalBalls: balls
        });

        console.log(this.state.totalBalls.length);
    }

    render = () => {
        return (
            <canvas id="canvas" onClick={this.onCanvasClick}></canvas>
        );
    }
}