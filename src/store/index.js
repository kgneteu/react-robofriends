import {applyMiddleware, combineReducers, createStore} from "redux";
import {requestRobots, searchRobots} from "./reducers";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import React from "react";

const rootReducers = combineReducers({requestRobots, searchRobots})
const useLogger = false;
let store;
if (useLogger) {
    const logger = createLogger()
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
} else {
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
}

const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
