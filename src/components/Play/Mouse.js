import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ball extends Component {

    constructor(e, c) {

        super();

        console.log(e.target);

        const rect = c.getBoundingClientRect(),
            root = document.documentElement,
            mouseX = e.clientX - rect.left - root.scrollLeft,
            mouseY = e.clientY - rect.top - root.scrollTop;

        //console.log(`mouse position: ${mouseX}:${mouseY}`);

        this.x = mouseX;
        this.y = mouseY;
    }

    render = () => {
        return false;
    }
}