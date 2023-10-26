import { actionTypes } from "../constatnts/action-types";

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (products) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: products,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT,

    }
}

export const addToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product,
    }
}

export const removeFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    }
}

export const incrementCount = () => {
    return {
        type: actionTypes.INCREMENT_COUNT,

    }
}

export const decrementCount = () => {
    return {
        type: actionTypes.DECREMENT_COUNT,

    }
}