import { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR } from '../constants/ActionTypes'


const initialState = {
    searchText: '',
    searchProducts: '',
};

const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PENDING:
            return {
                ...state,
                searchText: action.payload
            }

        case SEARCH_SUCCESS:
            return {
                ...state,
                searchProducts: action.payload
            }

        case SEARCH_ERROR:
            return state;

        default:
            return state;
    }
}

export default search