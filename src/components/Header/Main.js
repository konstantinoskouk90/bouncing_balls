import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  mainTitle: PropTypes.string.isRequired
};

/*
 * The Main function represents
 * the game's main navigation menu
 */
const Main = props => (
  <header className="main-header">
    <h1 className="name">{props.mainTitle}</h1>
    <ul className="main-nav">
      {/* Main Navigation Links */}
      <li><NavLink to="/play">PLAY</NavLink></li>
      <li><NavLink to="/about">ABOUT</NavLink></li>
    </ul>
  </header>
);

Main.propTypes = propTypes;

export default Main;