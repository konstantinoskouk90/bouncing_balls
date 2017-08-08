import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';
import Canvas from './Canvas';
import Settings from '../Settings/Settings';

export default class Play extends Component {

    constructor() {

        super();

        this.state = {
            totalBalls: [],
            gravity: this.toNumber(this.getItem("gravity")) / 100 || 0.5,
            bounciness: this.toNumber(this.getItem("bounciness")) || 0.75,
            friction: this.toNumber(this.getItem("friction")) || 0.5,
            radius: Math.round((this.toNumber(this.getItem("radius"))) * 40 / 10) || 15,
            color: JSON.parse(this.getItem("color")) || { red: 223, green: 12, blue: 12 }
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
            ball = [new Ball(mouse, this.state.radius, `rgb(${this.state.color.red},${this.state.color.green},${this.state.color.blue})`)],
            balls = [...this.state.totalBalls, ...ball];

        this.setState({
            totalBalls: balls
        });
    }

    //HELPER FUNCTIONS

    toNumber = (str) => {
        return Number(str);
    }

    getItem = (item) => {
        return sessionStorage.getItem(item);
    }

    render = () => {
        return (
            <div id="play-wrapper">
                <Canvas mouseClick={this.onCanvasClick} />
                <Settings />
            </div>
        );
    }
}