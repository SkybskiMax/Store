import {
    FETCH_ITEMS_PENDING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR,
    FETCH_ITEM_BY_ID_ERROR, FETCH_ITEM_BY_ID_PENDING, FETCH_ITEM_BY_ID_SUCCESS,
    FETCH_ITEMS_SEARCH_PENDING, FETCH_ITEMS_SEARCH_SUCCESS, FETCH_ITEMS_SEARCH_ERROR
} from '../constants/ActionTypes'

export const fetchItemsPending = () => {
    return {
        type: FETCH_ITEMS_PENDING
    }
}

export const fetchItemsSuccess = (items) => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
}

export const fetchItemsError = (error) => {
    return {
        type: FETCH_ITEMS_ERROR,
        error: error
    }
}

export const fetchItemByIdPending = () => {
    return {
        type: FETCH_ITEM_BY_ID_PENDING
    }
}

export const fetchItemByIdSuccess = (item) => {
    return {
        type: FETCH_ITEM_BY_ID_SUCCESS,
        payload: item
    }
}

export const fetchItemByIdError = (error) => {
    return {
        type: FETCH_ITEM_BY_ID_ERROR,
        error: error
    }
}
