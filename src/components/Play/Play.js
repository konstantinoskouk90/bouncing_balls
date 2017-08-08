import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';
import Canvas from './Canvas';
import Color from './Color';
import Size from './Size';
import Gravity from './Gravity';
import Bounciness from './Bounciness';
import Friction from './Friction';
import defaultSettings from '../../data/defaultSettings';

export default class Play extends Component {

    constructor() {

        super();

        this.state = {
            totalBalls: [],
            color: defaultSettings.color,
            size: defaultSettings.size,
            gravity: defaultSettings.gravity,
            bounciness: defaultSettings.bounciness,
            friction: defaultSettings.friction
        }
    }

    componentDidMount = () => {

        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth * 0.45;
        this.canvas.height = window.innerHeight * 0.45;

        this.updateCanvas();
    }

    updateCanvas = () => {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.state.totalBalls.map(ball => this.onMove(ball));
        this.state.totalBalls.map(ball => this.drawBall(ball.axisX, ball.axisY, ball.radius, ball.color));
        this.state.totalBalls.map(ball => this.onCollision(ball));

        //Recursion
        requestAnimationFrame(this.updateCanvas);
    }

    onMove = (b) => {
        b.axisX += b.vx;
        b.vy += this.state.gravity;
        b.axisY += b.vy;
    }

    drawBall = (x, y, r, c) => {
        this.context.fillStyle = c;
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
    }

    onCollision = (ball) => {
        if (ball.axisY >= this.canvas.height - ball.radius) {
            ball.vy *= -this.state.bounciness;
            ball.vx *= this.state.friction;
            ball.axisY = this.canvas.height - ball.radius;
        } else if (ball.axisY <= 0 + ball.radius) {
            ball.axisY = 0 + ball.radius;
            ball.vy *= -this.state.bounciness;
        }
        if (ball.axisX >= this.canvas.width - ball.radius) {
            ball.vx *= -this.state.bounciness;
            ball.axisX = this.canvas.width - ball.radius;
        } else if (ball.axisX <= 0 + ball.radius) {
            ball.vx *= -this.state.bounciness;
            ball.axisX = 0 + ball.radius;
        }
    }

    onCanvasClick = (e) => {
        const mouse = new Mouse(e, this.canvas),
            ball = [new Ball(mouse, this.state.size * 4, `rgb(${this.state.color.red},${this.state.color.green},${this.state.color.blue})`)],
            balls = [...this.state.totalBalls, ...ball];

        this.setState({
            totalBalls: balls
        });
    }

    /**
     * Update color.
     * @ c
     */
    setColor = (c) => {
        this.setState({
            color: c
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

    render = () => {
        return (
            <div id="play-wrapper">
                <Canvas mouseClick={this.onCanvasClick} />
                <Color currentColor={this.state.color} updateColor={this.setColor} />
                <Size currentSize={this.state.size} updateSize={this.setSize} />
                <Gravity currentGravity={this.state.gravity} updateGravity={this.setGravity} />
                <Bounciness currentBounciness={this.state.bounciness} updateBounciness={this.setBounciness} />
                <Friction currentFriction={this.state.friction} updateFriction={this.setFriction} />
            </div>
        );
    }
}