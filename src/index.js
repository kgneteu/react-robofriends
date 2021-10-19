import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {requestRobots, searchRobots} from './reducers'

import './index.css';
import ErrorBoundary from "./components/ErrorBoundry";


//if (process.env.NODE_ENV === 'development') {

//}

const rootReducers = combineReducers({requestRobots, searchRobots})
const useLogger = false;
let store;
if (useLogger){
    const logger = createLogger()
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
} else {
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
}


//
// const whyDidYouRender = require('@welldone-software/why-did-you-render');
// whyDidYouRender(React );


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App/>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
