import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './reducer';

const defaultState = {}

const rootReducer = combineReducers({
	counter: reducer,
	routing: routerReducer
});

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const storeHistory = syncHistoryWithStore(browserHistory, store);

export default store;
