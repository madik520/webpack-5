import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import store from './store/store';

import 'reflect-metadata';

import './assets/main.scss';

if (module.hot) {
	module.hot.accept();

	module.hot.addStatusHandler((status) => {
		if (status === 'prepare') {
			console.clear();
		}
	});
}

render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,

	document.getElementById('root')
);