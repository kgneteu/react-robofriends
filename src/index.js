import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'tachyons';

import App from './containers/App';
import {requestRobots, searchRobots} from './reducers'

import './index.css';


const rootReducers = combineReducers({requestRobots, searchRobots})
const useLogger = false;
let store;
if (useLogger) {
    const logger = createLogger()
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
} else {
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

