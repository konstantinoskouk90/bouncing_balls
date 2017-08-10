import React from 'react';
import { NavLink } from 'react-router-dom';
import redirectLinks from '../../data/redirectLinks';

// Default props
const defaultProps = {
  title: "BOUNCE"
};

/** Constant Representing Header. */
const Header = props => (
  <div className="header-container">
    <header className="top-header">
      <ul className="top-nav">
        {/* Top Navigation Links */}
        <li><a href={redirectLinks.wikipedia} target="_blank">Wikipedia</a></li>
        <li><a href={redirectLinks.games} target="_blank">Games</a></li>
        <li><a href={redirectLinks.shop} target="_blank">Shop</a></li>
      </ul>
    </header>
    <header className="main-header">
      <h1 className="name">{props.title}</h1>
      <ul className="main-nav">
        {/* Main Navigation Links */}
        <li><NavLink to="/play">PLAY</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
      </ul>
    </header>
  </div>
);

Header.defaultProps = defaultProps;

export default Header;