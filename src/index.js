import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/application.css';
import './css/Reset.css';
import './css/App.css';
import './css/Header.css';
import './css/Play.css';
import './css/About.css';
import './css/NotFound.css';
import Settings from './reducers/settings';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	Settings,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();