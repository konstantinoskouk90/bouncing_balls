import React, { Component } from 'react';

export default class Ball extends Component {

    constructor(e) {

        super();

        const rect = e.currentTarget.getBoundingClientRect(),
              root = document.documentElement,
              xAxis = e.clientX - rect.left - root.scrollLeft,
              yAxis = e.clientY - rect.top - root.scrollTop;

        this.x = xAxis;
        this.y = yAxis;
    }

    render = () => {
        return false;
    }
}