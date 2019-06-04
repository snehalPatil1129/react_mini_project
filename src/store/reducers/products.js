const initialState = {
    
};

const productsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD_PRODUCT":
            return {
                ...state
            }
        default:
            return state;
    }
}
export default productsReducer;