import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

// connect application to redux devtools
import {composeWithDevTools} from "redux-devtools-extension";

//import initial state
const initialState = {};

//import middleware
const middleware = [thunk]

//setup store
const store = createStore(
    combineReducers, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;