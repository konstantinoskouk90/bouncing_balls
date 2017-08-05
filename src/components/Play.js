import React, { Component } from 'react';
import Ball from './Ball';
import Mouse from './Mouse';

export default class Canvas extends Component {

    constructor() {

        super();
        
                this.gravity = 0.5;
        this.bounciness = 0.8;
        this.friction = 0.99;
        this.isRaining = false;
        this.state = {
            totalBalls: []
        }

        //this.onMove = this.onMove.bind(this);
    }

    componentDidMount = () => {

        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth * 0.65;
        this.canvas.height = window.innerHeight * 0.65;

        this.drawBalls();

        this.onMove = (b) => {
            b.axisX += b.vx;
            b.vy += this.gravity;
            b.axisY += b.vy;
        }
    }

    drawBalls = () => {
        var self = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.state.totalBalls.forEach(function (ball) {

            self.onMove(ball);
            self.drawBall(ball.axisX, ball.axisY, ball.radius, ball.color);
            self.collisionDetection(ball);
        });

        if (this.isRaining) {
            this.state.totalBalls.push(new Ball(Math.ceil(Math.random() * this.canvas.width), this.canvas.height / 4));
            if (this.balls.length > 200) { this.balls.shift() };
        };

        //console.log("ABC");

        requestAnimationFrame(this.drawBalls);
    }

    // A simple function to draw balls
    drawBall = (x, y, radius, color) => {
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, true);
        this.context.closePath();
        this.context.fill();
        console.log("in");
    }

    onCanvasClick = (event) => {

        const mouse = new Mouse(event),
            ball = [new Ball(mouse, 15, "rgb(223,12,12)")],
            balls = [...this.state.totalBalls, ...ball];

        this.setState({
            totalBalls: balls
        });

        console.log(this.state.totalBalls);

        // console.log(this.state.totalBalls.length);
    }

    collisionDetection = (ball) => {
        if (ball.axisY >= this.canvas.height - ball.radius) {
            ball.vy *= -this.bounciness;
            ball.vx *= this.friction;
            ball.axisY = this.canvas.height - ball.radius;
        } else if (ball.axisY <= 0 + ball.radius) {
            ball.axisY = 0 + ball.radius;
            ball.vy *= -this.bounciness;
        }

        if (ball.axisX >= this.canvas.width - ball.radius) {
            ball.vx *= -this.bounciness;
            ball.axisX = this.canvas.width - ball.radius;
        } else if (ball.axisX <= 0 + ball.radius) {
            ball.vx *= -this.bounciness;
            ball.axisX = 0 + ball.radius;
        }
    }

    render = () => {
        return (
            <div id="canvas-container">
                <canvas onClick={this.onCanvasClick}></canvas>
            </div>
        );
    }
}