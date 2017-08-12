import React, { Component } from 'react';

// The Ball class draws a new ball
class Ball extends Component {

  constructor(axis, radius, color) {

    super();

    // X Axis
    this.axisX = axis.x;
    // Y Axis
    this.axisY = axis.y;
    // Radius
    this.radius = radius;
    // Color
    this.color = color;
    // Velocity X Axis
    this.vx = Math.ceil(Math.random() * 30 - 15);
    // Velocity Y Axis
    this.vy = Math.ceil(Math.random() * 30 - 15);
  }

  // render() updates the DOM
  render = () => {
    return false;
  }
}

export default Ball;