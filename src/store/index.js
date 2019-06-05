import {
    createStore,applyMiddleware,compose
} from "redux";
import productReducer from "./reducers/products";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(productReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;