import { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR } from '../constants/ActionTypes'


export const searchPending = (text) => {
    return {
        type: SEARCH_PENDING,
        payload: text
    }
}

export const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        payload: data
    }
}

export const searchError = (error) => {
    return {
        type: SEARCH_ERROR,
        payload: error
    }
}