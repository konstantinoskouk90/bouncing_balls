import React from 'react';
import ReactDOM from 'react-dom';
import './css/Reset.css';
import './css/App.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();