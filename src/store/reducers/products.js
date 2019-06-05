import {
    STORE_PRODUCTS,
    CHANGE_PRODUCT_CATEGORY,
    ADD_TO_CART,
    LOG_ERROR
} from "../actions/actionTypes.js";

const initialState = {
    products: [],
    vegetables: [],
    fruits: [],
    dairy: [],
    breads: [],
    seasoningAndSpices: [],
    currentProductCategory: "All Products",
    cartCount: 0,
    productError : null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PRODUCTS:
            return {
                ...state,
                    type: STORE_PRODUCTS,
                    products: action.products,
                    vegetables: action.vegetables,
                    fruits: action.fruits,
                    dairy: action.dairy,
                    breads: action.breads,
                    seasoningAndSpices: action.seasoningAndSpices,
                    productError : null
            };
        case CHANGE_PRODUCT_CATEGORY:
            return {
                ...state,
                currentProductCategory: action.category
            };
        case ADD_TO_CART:
            return {
                ...state,
                cartCount: state.cartCount + 1
            };
        case LOG_ERROR:
            return {
                ...state,
                productError: "Something went wrong"
            };
        default:
            return state;
    }
}
export default productsReducer;