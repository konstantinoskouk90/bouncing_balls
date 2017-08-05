import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';

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

    onCanvasClick = (event) => {

        const mouse = new Mouse(event),
              ball = [new Ball(mouse, 15, "rgb(223,12,12)")],
              balls = [...this.state.totalBalls, ...ball];

        this.setState({
            totalBalls: balls
        });

        console.log(this.state.totalBalls.length);
    }

    render = () => {
        return (
            <canvas onClick={this.onCanvasClick}></canvas>
        );
    }
}