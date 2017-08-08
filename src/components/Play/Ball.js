import React, { Component } from 'react';

export default class Ball extends Component {

    constructor(axis, radius, color) {

        super();

        this.axisX = axis.x;
        this.axisY = axis.y;
        this.radius = radius;
        this.color = color;
        this.vx = Math.ceil(Math.random() * 30 - 15);
        this.vy = Math.ceil(Math.random() * 30 - 15);
    }

    render = () => {
        return false;
    }
}