import { actionTypes } from "../constatnts/action-types";

const initialState = {
    products: [],
    cartItems: [],
};


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const newItem = action.payload;
            const itemExists = state.cartItems.some(item => item.id === newItem.id);
            if (itemExists) {
                return state;
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                }
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};


// export const countReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.INCREMENT_COUNT:
//             return {
//                 ...state,
//                 cartItems: state.cartItems.map((product) =>
//                     product.id === action.payload
//                         ? { ...product, quantity: product.quantity + 1 }
//                         : product
//                 ),
//             };
//         case actionTypes.DECREMENT_COUNT:
//             return {
//                 ...state,
//                 cartItems: state.cartItems.map((product) =>
//                     product.id === action.payload
//                         ? {
//                             ...product,
//                             quantity: Math.max(product.quantity - 1, 0),
//                         }
//                         : product
//                 ),
//             };
//         default:
//             return state;
//     }
// };


    export const countReducer = (state = 0, { type }) => {
        switch (type) {
            case actionTypes.INCREMENT_COUNT:
                return
                case actionTypes.DECREMENT_COUNT:
                    return state >= 0 && state -1;
            default:
                return state;
        }
    }
