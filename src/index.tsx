import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './App';

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
		<App />
	</StrictMode>,

	document.getElementById('root')
);