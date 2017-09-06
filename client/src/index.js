import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import { App } from './App';
import { configureStore } from './redux/store';

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
