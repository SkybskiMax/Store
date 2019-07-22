import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT } from '../constants/ActionTypes'
import { store } from '../index';

export const addToCart = (id, count = 1) => {
    return {
        type: ADD_TO_CART,
        item: store.getState().fetchedProducts.products.find(x => x.id === id),
        quantity: count,
        inCart: store.getState().cart.addedItems.find(x => x.id === id) ? true : false
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const increment = () => {
    return { type: INCREMENT }
}

export const decrement = () => {
    return { type: DECREMENT }
}
