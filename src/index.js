import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './stylesheets/css/main.css';
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