import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {createLogicMiddleware} from 'redux-logic'
import {history} from "./history";
import {reducers} from "./reducers";
import {rootLogic} from "./logic";


const initialState = {};
const enhancers = [];

function getMiddleware() {
    let middleware = [
        routerMiddleware(history),
        createLogicMiddleware(rootLogic, {})
    ];

    return middleware;
}


const middleware = compose(
    applyMiddleware(...getMiddleware()),
    ...enhancers
);

export const store = createStore(
    reducers,
    initialState,
    middleware
);