import React from 'react';
import notFoundIMG from '../assets/images/arnold404.png';
import notFoundMP3 from '../assets/audio/notFoundMP3.mp3';

/**
 * The NotFound function represents
 * the game's default not found page
 */
const NotFound = () => (
  <div id="notfound-wrapper">
    <div id="image-container">
      <img src={notFoundIMG} />
      <audio src={notFoundMP3} autoPlay="true"/>
    </div>
  </div>
);

export default NotFound;