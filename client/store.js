/**
 * Created by vlad on 04/12/2016.
 */
import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer,devtools ,middleware)
