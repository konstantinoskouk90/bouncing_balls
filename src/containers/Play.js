import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Settings from '../actions/settings';
import Ball from '../components/Play/Ball';
import Mouse from '../components/Play/Mouse';
import Canvas from '../components/Play/Canvas';
import Color from '../components/Play/Color';
import Size from '../components/Play/Size';
import Gravity from '../components/Play/Gravity';
import Bounciness from '../components/Play/Bounciness';
import Friction from '../components/Play/Friction';

// PropTypes
const propTypes = {
  color: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  gravity: PropTypes.number.isRequired,
  bounciness: PropTypes.number.isRequired,
  friction: PropTypes.number.isRequired,
};

/**
 * The Play class creates the entire Play category which
 * allows users to play the game and change the settings
 */
class Play extends Component {

  constructor() {

    super();

    // initial ball array state
    this.state = {
      totalBalls: []
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
    this.canvas.width = window.innerWidth - window.innerWidth / 2.85;
    // Height
    this.canvas.height = window.innerHeight / 3 + window.innerHeight / 10;
    // Resize listener
    window.addEventListener("resize", this.resizeCanvas);
    // Start animation
    this.updateCanvas();
  }

  /**
   * componentWillUnmount() is invoked immediately before the component 
   * is unmounted and destroyed to remove the canvas resize listener
   */
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resizeCanvas);
  }

  /**
   * onAppendBall() updates the state by appending 
   * a new ball to the existing ball array
   */
  onAppendBall = (ball) => {

    const balls = this.state.totalBalls;

    this.setState({
      totalBalls: [...balls, ...ball]
    });
  }

  /**
   * onCanvasClick() determines the user's mouse 
   * position and draws a new ball on the canvas
   */
  onCanvasClick = (e) => {
    const mouse = new Mouse(e, this.canvas),
      ball = [new Ball(mouse, this.props.size, `rgb(${this.props.color.red},${this.props.color.green},${this.props.color.blue})`)];

    this.onAppendBall(ball);
  }

  // resizeCanvas() resizes the canvas when screen size change is detected
  resizeCanvas = () => {
    this.canvas.width = window.innerWidth - window.innerWidth / 2.85;
    this.canvas.height = window.innerHeight / 3 + window.innerHeight / 10;
  }

  // moveBall() determines the ball movement
  moveBall = (ball) => {
    ball.vy += this.props.gravity;
    ball.axisX += ball.vx;
    ball.axisY += ball.vy;
  }

  // drawBall() draws the ball on the canvas
  drawBall = (ball) => {
    this.ctx.fillStyle = ball.color;
    this.ctx.beginPath();
    this.ctx.arc(ball.axisX, ball.axisY, ball.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fill();
  }

  /**
   * collideBall() determines the ball's
   * collision with the canvas border
   */
  collideBall = (ball) => {
    // X Axis
    if (ball.axisX >= this.canvas.width - ball.radius) {
      ball.axisX = this.canvas.width - ball.radius;
      ball.vx *= -this.props.bounciness;
    } else if (ball.axisX <= 0 + ball.radius) {
      ball.axisX = 0 + ball.radius;
      ball.vx *= -this.props.bounciness;
    }
    // Y Axis
    if (ball.axisY >= this.canvas.height - ball.radius) {
      ball.axisY = this.canvas.height - ball.radius;
      ball.vy *= -this.props.bounciness;
      ball.vx *= this.props.friction;
    } else if (ball.axisY <= 0 + ball.radius) {
      ball.axisY = 0 + ball.radius;
      ball.vy *= -this.props.bounciness;
    }
  }

  // updateCanvas() constantly updates the canvas via a callback
  updateCanvas = () => {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const totalBalls = this.state.totalBalls;

    totalBalls.map(ball => this.moveBall(ball));
    totalBalls.map(ball => this.drawBall(ball));
    totalBalls.map(ball => this.collideBall(ball));

    // Callback
    requestAnimationFrame(this.updateCanvas);
  }

  // render() updates the DOM
  render = () => {

    // Destructuring
    const {
      color,
      size,
      gravity,
      bounciness,
      friction,
      changeColor,
      changeSize,
      changeGravity,
      changeBounciness,
      changeFriction
    } = this.props;

    return (
      <div id="play-wrapper">
        <Canvas mouseClick={this.onCanvasClick} />
        <div id="settings-wrapper">
          <Color
            currentColor={color}
            changeColor={changeColor}
          />
          <Size
            currentSize={size}
            changeSize={changeSize}
          />
          <Gravity
            currentGravity={gravity}
            changeGravity={changeGravity}
          />
          <Bounciness
            currentBounciness={bounciness}
            changeBounciness={changeBounciness}
          />
          <Friction
            currentFriction={friction}
            changeFriction={changeFriction}
          />
        </div>
      </div>
    );
  }
}

// mapStateToProps(state) is a helper function to access state properties 
const mapStateToProps = state => (
  {
    color: state.color,
    size: state.size,
    gravity: state.gravity,
    bounciness: state.bounciness,
    friction: state.friction
  }
);

// mapDispatchToProps(dispatch) is a helper function to fire action events
const mapDispatchToProps = dispatch => (
  {
    changeColor: bindActionCreators(Settings.changeColor, dispatch),
    changeSize: bindActionCreators(Settings.changeSize, dispatch),
    changeGravity: bindActionCreators(Settings.changeGravity, dispatch),
    changeBounciness: bindActionCreators(Settings.changeBounciness, dispatch),
    changeFriction: bindActionCreators(Settings.changeFriction, dispatch)
  }
);

Play.propTypes = propTypes;

/**
 * connect() takes two arguments: mapStateToProps, mapDispatchToProps 
 * and connects the Redux store with the container via props
 */
export default connect(mapStateToProps, mapDispatchToProps)(Play);