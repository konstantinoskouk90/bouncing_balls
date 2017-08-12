import React, { Component } from 'react';
import Ball from '../components/Play/Ball';
import Mouse from '../components/Play/Mouse';
import Canvas from '../components/Play/Canvas';
import Color from '../components/Play/Color';
import Size from '../components/Play/Size';
import Gravity from '../components/Play/Gravity';
import Bounciness from '../components/Play/Bounciness';
import Friction from '../components/Play/Friction';
import defaultSettings from '../data/defaultSettings';

/*
 * The Play class creates the entire Play category which
 * allows users to play the game and change the settings
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
   * componentDidMount() is invoked immediately after the 
   * component is mounted initializing the DOM's canvas node
   */
  componentDidMount = () => {

    // Canvas
    this.canvas = document.getElementsByTagName("canvas")[0];
    // Context
    this.ctx = this.canvas.getContext("2d");
    // Width
    this.canvas.width = window.innerWidth - window.innerWidth / 2.9;
    // Height
    this.canvas.height = window.innerHeight / 3 + window.innerHeight / 10;
    // Resize listener
    window.addEventListener("resize", this.onResize);
    // Start animation
    this.updateCanvas();
  }

  /**
   * componentWillUnmount() is invoked immediately before the component 
   * is unmounted and destroyed to remove the canvas resize listener
   */
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.onResize);
  }

  /**
   * inputChangeHandler() updates the state on change.
   * Dynamically adapts depending on the input field
   */
  inputChangeHandler = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  // onResize() resizes the canvas when screen size change is detected
  onResize = () => {
    this.canvas.width = window.innerWidth - window.innerWidth / 2.9;
    this.canvas.height = window.innerHeight / 3 + window.innerHeight / 10;
  }

  // onMove() determines the ball movement
  onMove = (ball) => {
    ball.vy += this.state.gravity;
    ball.axisX += ball.vx;
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

  /*
   * onCollision() determines the ball's
   * collision with the canvas border
   */
  onCollision = (ball) => {

    // X Axis
    if (ball.axisX >= this.canvas.width - ball.radius) {
      ball.axisX = this.canvas.width - ball.radius;
      ball.vx *= -this.state.bounciness;
    } else if (ball.axisX <= 0 + ball.radius) {
      ball.axisX = 0 + ball.radius;
      ball.vx *= -this.state.bounciness;
    }

    // Y Axis
    if (ball.axisY >= this.canvas.height - ball.radius) {
      ball.axisY = this.canvas.height - ball.radius;
      ball.vy *= -this.state.bounciness;
      ball.vx *= this.state.friction;
    } else if (ball.axisY <= 0 + ball.radius) {
      ball.axisY = 0 + ball.radius;
      ball.vy *= -this.state.bounciness;
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

  // updateCanvas() constantly updates the canvas via a callback
  updateCanvas = () => {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.state.totalBalls.map(ball => this.onMove(ball));
    this.state.totalBalls.map(ball => this.onDraw(ball));
    this.state.totalBalls.map(ball => this.onCollision(ball));

    // Callback
    requestAnimationFrame(this.updateCanvas);
  }

  // render() updates the DOM
  render = () => {
    return (
      <div id="play-wrapper">
        <Canvas mouseClick={this.onCanvasClick} />
        <div id="settings-wrapper">
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
      </div>
    );
  }
}

export default Play;