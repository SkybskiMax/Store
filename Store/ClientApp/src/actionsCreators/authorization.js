import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, GET_TOKEN_DATA_PENDING, GET_TOKEN_DATA_SUCCESS } from '../constants/ActionTypes'

export const loginPending = () => {
    return {
        type: LOGIN_PENDING
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const getTokenDataPending = () => {
    return {
        type: GET_TOKEN_DATA_PENDING,
    }
}

export const getTokenDataSuccess = (data) => {
    return {
        type: GET_TOKEN_DATA_SUCCESS,
        payload: data
    }
}
