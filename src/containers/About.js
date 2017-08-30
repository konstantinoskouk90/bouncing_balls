import React, { Component } from 'react';
import DataSet from '../components/About/DataSet';
import aboutCategory from '../data/aboutCategory';

/**
 * The About function represents
 * the game's top and main menus
 */
class About extends Component {

  // playGame() redirects the users to the Play category
  playGame = () => {
    this.props.history.push("/play");
  }

  // render() updates the DOM
  render = () => {
    return (
      <div id="about-wrapper">
        <div id="dataset-container">
          {/** 
            * Loop through questions and answers
            * array of objects to create components
            */}
          {aboutCategory.dataset.map(dataset => {
            return (
              <DataSet
                question={dataset.question}
                answer={dataset.answer}
                key={dataset.question}
              />
            );
          })}
        </div>
        {/** 
          * Concluding About category text 
          * with redirect to Play category
          */}
        <div id="dataend-container">
          <div id="dataend-start">{aboutCategory.dataend.start}</div>
          <div id="dataend-end" onClick={this.playGame}>{aboutCategory.dataend.end}</div>
          <div id="dataend-quote">{aboutCategory.dataend.quote}</div>
        </div>
      </div>
    );
  }
}

export default About;