import {
    createStore
} from "redux";
import productReducer from "./reducers/products";


const store = createStore(productReducer);

export default store;