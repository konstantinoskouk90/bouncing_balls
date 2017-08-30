import React from 'react';
import Top from '../components/Header/Top';
import Main from '../components/Header/Main';
import redirectLinks from '../data/redirectLinks';

// Default props
const defaultProps = {
  title: "BOUNCE"
};

/**
 * The Header function represents
 * the game's top and main menus
 */
const Header = props => (
  <div className="header-container">
    <Top topLinks={redirectLinks} />
    <Main mainTitle={props.title} />
  </div>
);

Header.defaultProps = defaultProps;

export default Header;