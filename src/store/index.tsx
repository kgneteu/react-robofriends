import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {requestRobots, searchRobots} from "./reducers";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import React, {PropsWithChildren} from "react";

const rootReducers = combineReducers({requestRobots, searchRobots})
const useLogger = false;
let store: Store;
if (useLogger) {
    const logger = createLogger()
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
} else {
    store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
}

const StoreProvider = ({children}:PropsWithChildren<{}>) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
