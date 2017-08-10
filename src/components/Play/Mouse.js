import React, { Component } from 'react';

class Mouse extends Component {

    constructor(e, c) {

        super();

        const rect = c.getBoundingClientRect(),
            root = document.documentElement,
            mouseX = e.clientX - rect.left - root.scrollLeft,
            mouseY = e.clientY - rect.top - root.scrollTop;

        this.x = mouseX;
        this.y = mouseY;
    }

    render = () => {
        return false;
    }
}

export default Mouse;