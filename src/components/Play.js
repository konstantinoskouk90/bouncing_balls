import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';
import Canvas from './Canvas';
import Options from './Options';

export default class Play extends Component {

    constructor() {

        super();

        this.state = {
            totalBalls: [],
            gravity: this.toNumber(this.getItem("gravity")) || 0.5,
            bounciness: this.toNumber(this.getItem("bounciness")) || 0.75,
            friction: this.toNumber(this.getItem("friction")) || 0.5
        }
    }

    componentDidMount = () => {

        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth * 0.7;
        this.canvas.height = window.innerHeight * 0.7;

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

    drawBall = (x, y, radius, color) => {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, true);
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
        const mouse = new Mouse(e, this.context),
            ball = [new Ball(mouse, 15, "rgb(223,12,12)")],
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
                <Options />
            </div>
        );
    }
}