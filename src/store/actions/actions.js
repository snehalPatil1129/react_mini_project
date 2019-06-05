import axios from "axios";
import {
    STORE_PRODUCTS,
    CHANGE_PRODUCT_CATEGORY,
    ADD_TO_CART,
    LOG_ERROR
} from "./actionTypes";
import AppConfig from "../../constants/AppConfig";

export const storeProducts = (products, vegetables, fruits, dairy, breads, seasoningAndSpices) => {
    return {
        type: STORE_PRODUCTS,
        products: products,
        vegetables: vegetables,
        fruits: fruits,
        dairy: dairy,
        breads: breads,
        seasoningAndSpices: seasoningAndSpices
    };
};
export const logError = () => {
    return{
        type : LOG_ERROR
    }
}
export const getProducts = () => {
    return dispatch => {
        axios.get(`${AppConfig.serverURL}/api/products`).then((response) => {
            if( response.status === 201 || response.status === 200){
                
                let products = response.data;
                let vegetables = products.filter(product => product.category === "vegetables");
                let fruits = products.filter(product => product.category === "fruits");
                let breads = products.filter(product => product.category === "breads");
                let dairy = products.filter(product => product.category === "dairy");
                let seasoningAndSpices = products.filter(product => product.category === "seasoningAndSpices");

                dispatch(storeProducts(products, vegetables, fruits, dairy, breads, seasoningAndSpices));
            }else{
                dispatch(logError())
            }
            }).catch((err) => {
            console.log("err", err);
            dispatch(logError())
        });
    }
}

export const createProduct = (product) => {
    return dispatch => {
        axios.post(`${AppConfig.serverURL}/api/products`,product).then((response) => {
            if( response.status === 201 || response.status === 200){
                dispatch(getProducts());
            }else{
                dispatch(logError())
            }
        }).catch((err) => {
            console.log("err", err);
            dispatch(logError())
        });
    }
}
export const updateProduct = (id, product) => {
    return dispatch => {
        axios.put(`${AppConfig.serverURL}/api/products/${id}`,product).then((response) => {
            if( response.status === 201 || response.status === 200){
                dispatch(getProducts());
            }else{
                dispatch(logError())
            }
        }).catch((err) => {
            console.log("err", err);
            dispatch(logError())
        });
    }
}
export const deleteProduct = (id) => {
    return dispatch => {
        axios.delete(`${AppConfig.serverURL}/api/products/${id}`).then((response) => {
            if( response.status === 201 || response.status === 200){
                dispatch(getProducts());
            }else{
                dispatch(logError())
            }
        }).catch((err) => {
            console.log("err", err);
            dispatch(logError())
        });
    }
}
export const changeProductCategory = (category) =>{
    return {
        type : CHANGE_PRODUCT_CATEGORY,
        category : category
    }
}
export const addToCart = () =>{
    return {
        type : ADD_TO_CART
    }
}