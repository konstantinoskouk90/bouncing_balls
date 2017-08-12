import React from 'react';

/*
 * The DataSet function represents the 
 * About category's questions and answers
 */
const DataSet = props => (
    <div className="dataset">
      <div className="dataset-question">
        <div className="question">{props.question}</div>
      </div>
      <div className="dataset-answer">
        <div className="answer">{props.answer}</div>
      </div>
    </div>
);

export default DataSet;