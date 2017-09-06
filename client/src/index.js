import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import { App } from './App';
import { configureStore } from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const ssl = window.location.origin.indexOf('https') === 0;
axios.defaults.baseURL = `http${ ssl ? 's' : '' }://localhost:3200`;
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
