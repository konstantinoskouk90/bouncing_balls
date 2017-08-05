import React from 'react';
import { NavLink } from 'react-router-dom';

/** Constant Representing Header. */
const Header = props => (
  <div className="header-container">
  <header className="top-header">
    <ul className="top-nav">
      {/* Top Navigation Links */}
      <li><a href="https://en.wikipedia.org/wiki/Bouncing_ball" target="_blank">Wikipedia</a></li>
      <li><a href="https://www.amazon.co.uk/s/?ie=UTF8&keywords=ball+bouncing+game" target="_blank">Games</a></li>
      <li><a href="http://www.ebay.co.uk/bhp/bouncing-ball" target="_blank">Shop</a></li>
    </ul>
  </header>
  <header className="main-header">
    <h1 className="name">{props.title}</h1>
    <ul className="main-nav">
      {/* Main Navigation Links */}
      <li><NavLink to="/play">PLAY</NavLink></li>
      <li><NavLink to="/options">OPTIONS</NavLink></li>
      <li><NavLink to="/about">ABOUT</NavLink></li>
    </ul>
  </header>
  </div>
);

export default Header;

Header.defaultProps = {
  //Default Properties
  title: "BOUNCE"
};