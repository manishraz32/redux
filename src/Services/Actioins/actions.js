import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';

export const addToCart = (data) => {
    console.log("actionsData", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const deleteFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART
    }
}