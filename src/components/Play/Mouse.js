import React, { Component } from 'react';

/**
 * The Mouse class detects the x and y 
 * coordinates of the user's mouse
 */
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

  // render() updates the DOM
  render = () => {
    return false;
  }
}

export default Mouse;