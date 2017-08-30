import React from 'react';
import PropTypes from 'prop-types';

// PropTypes
const propTypes = {
  topLinks: PropTypes.object.isRequired
};

/**
 * The Top function represents
 * the game's top navigation menu
 */
const Top = props => (
  <header className="top-header">
    <ul className="top-nav">
      {/* Top Navigation Links */}
      <li><a href={props.topLinks.wikipedia} target="_blank">Wikipedia</a></li>
      <li><a href={props.topLinks.games} target="_blank">Games</a></li>
      <li><a href={props.topLinks.shop} target="_blank">Shop</a></li>
    </ul>
  </header>
);

Top.propTypes = propTypes;

export default Top;