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

/** 
 * Class representing 'Play' category
 */
class Play extends Component {

  constructor() {

    super();

    // Set initial state to default settings
    this.state = {
      totalBalls: [],
      color: defaultSettings.color,
      size: defaultSettings.size,
      gravity: defaultSettings.gravity,
      bounciness: defaultSettings.bounciness,
      friction: defaultSettings.friction
    }
  }

  /**
   * componentDidMount() is invoked immediately after a
   * component is mounted initializing the DOM's canvas.
   */
  componentDidMount = () => {

    // Canvas
    this.canvas = document.getElementsByTagName("canvas")[0];
    // Context
    this.ctx = this.canvas.getContext("2d");
    // Width
    this.canvas.width = window.innerWidth * 0.45;
    // Height
    this.canvas.height = window.innerHeight * 0.45;

    // Start animation
    this.updateCanvas();
  }

  /**
   * inputChangeHandler() updates the state on change.
   * It dynamically adapts depending on the input field
   */
  inputChangeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  // onMove() determines the ball movement
  onMove = (ball) => {
    ball.axisX += ball.vx;
    ball.vy += this.state.gravity;
    ball.axisY += ball.vy;
  }

  // onDraw() draws the ball on the canvas
  onDraw = (ball) => {
    this.ctx.fillStyle = ball.color;
    this.ctx.beginPath();
    this.ctx.arc(ball.axisX, ball.axisY, ball.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }

  // onCollision() determines the ball collision
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

  /**
   * onCanvasClick() determines the user's mouse position
   * and draws a new ball on the canvas by appending it
   * to the existing ball array it then updates the state
   */
  onCanvasClick = (e) => {
    const mouse = new Mouse(e, this.canvas),
      ball = [new Ball(mouse, this.state.size, `rgb(${this.state.color.red},${this.state.color.green},${this.state.color.blue})`)],
      balls = [...this.state.totalBalls, ...ball];

    this.setState({
      totalBalls: balls
    });
  }

  /**
   * Reset to default settings.
   * @e
   */
  resetSettings = () => {
    this.setState({
      color: defaultSettings.color,
      size: defaultSettings.size,
      gravity: defaultSettings.gravity,
      bounciness: defaultSettings.bounciness,
      friction: defaultSettings.friction
    });
  }

  /**
   * Constantly update canvas state.
   */
  updateCanvas = () => {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.state.totalBalls.map(ball => this.onMove(ball));
    this.state.totalBalls.map(ball => this.onDraw(ball));
    this.state.totalBalls.map(ball => this.onCollision(ball));

    //Recursion
    requestAnimationFrame(this.updateCanvas);
  }

  render = () => {
    return (
      <div id="play-wrapper">
        <Canvas mouseClick={this.onCanvasClick} />
        <Color
          currentColor={this.state.color}
          changeHandler={this.inputChangeHandler}
        />
        <Size
          currentSize={this.state.size}
          changeHandler={this.inputChangeHandler}
        />
        <Gravity
          currentGravity={this.state.gravity}
          changeHandler={this.inputChangeHandler}
        />
        <Bounciness
          currentBounciness={this.state.bounciness}
          changeHandler={this.inputChangeHandler}
        />
        <Friction
          currentFriction={this.state.friction}
          changeHandler={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default Play;