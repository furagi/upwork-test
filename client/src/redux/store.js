import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createPromiseMiddleware from 'redux-promise-middleware';

import { state, reducers } from './reducers';
import { START, SUCCESS, FAIL } from './constants';

const promiseMiddleware = createPromiseMiddleware({ promiseTypeSuffixes: [START, SUCCESS, FAIL] });

const args = [applyMiddleware(promiseMiddleware, thunk)];

const enhancer = compose(...args);

export function configureStore() {
  const reducer = combineReducers({ ...reducers });
  const store = createStore(reducer, state, enhancer);
  return store;
};
