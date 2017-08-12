import React, { Component } from 'react';
import DataSet from '../components/About/DataSet';
import aboutCategory from '../data/aboutCategory';

class About extends Component {

  playGame = () => {
    this.props.history.push("/play");
  }

  render = () => {
    return (
      <div id="about-wrapper">
        <div id="dataset-container">
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
        <div id="dataend-container">
          <div id="dataend-start-text">{aboutCategory.dataend.start}</div>
          <div id="dataend-end-text" onClick={this.playGame}>{aboutCategory.dataend.end}</div>
          <div id="dataend-quote-text">{aboutCategory.dataend.quote}</div>
        </div>
      </div>
    );
  }
}

export default About;