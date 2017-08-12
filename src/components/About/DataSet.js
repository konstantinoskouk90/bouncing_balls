import React from 'react';

/** Constant representing kill list. */
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