import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT, GET_TOKEN_DATA_SUCCESS, GET_TOKEN_DATA_PENDING } from '../constants/ActionTypes'

const initState = {
    logged: false,
    email: "",
    role: "",
}

const userReducer = (state = initState, action) => {
    switch (action.type) {

        case LOGIN_PENDING: {
            return state
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                email: action.payload.email,
                role: action.payload.role,
                logged: true
            }
        }

        case LOGIN_ERROR: {
            return state
        }

        case LOGOUT: {
            return {
                ...initState
            }
        }

        case GET_TOKEN_DATA_PENDING: {
            return {
                ...state,
            }
        }

        case GET_TOKEN_DATA_SUCCESS: {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                role: action.payload.roles,
                logged: true,
            }
        }

        default: {
            return state
        }
    }
}

export default userReducer
