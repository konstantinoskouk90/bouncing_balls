import React, { Component } from 'react';

export default class Ball extends Component {

    constructor(e, ctx) {

        super();

        const rect = e.target.getBoundingClientRect(),
            root = document.documentElement,
            mouseX = e.clientX - ctx.canvas.offsetLeft,
            mouseY = e.clientY - ctx.canvas.offsetTop;

        //console.log(`mouse position: ${mouseX}:${mouseY}`);

        this.x = mouseX;
        this.y = mouseY;
    }

    render = () => {
        return false;
    }
}