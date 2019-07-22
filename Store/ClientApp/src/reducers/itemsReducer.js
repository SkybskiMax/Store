import {
    FETCH_ITEMS_PENDING, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR,
    FETCH_ITEM_BY_ID_ERROR, FETCH_ITEM_BY_ID_PENDING, FETCH_ITEM_BY_ID_SUCCESS,
    FETCH_ITEMS_SEARCH_PENDING, FETCH_ITEMS_SEARCH_SUCCESS, FETCH_ITEMS_SEARCH_ERROR,
    SORT_BY
} from '../constants/ActionTypes';

const initialState = {
    pending: false,
    products: [],
    currentProduct: {},
    error: null
}

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.payload
            }
        case FETCH_ITEMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        case FETCH_ITEM_BY_ID_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ITEM_BY_ID_SUCCESS:
            return {
                ...state,
                pending: false,
                currentProduct: action.payload
            }
        case FETCH_ITEM_BY_ID_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SORT_BY:
            let sorted = state.products.sort(function (a, b) {
                if (action.sortType === "priceAsc")
                    return parseFloat(a.price) - parseFloat(b.price);
                if (action.sortType === "priceDesc")
                    return parseFloat(b.price) - parseFloat(a.price);
                if (action.sortType === 'title')
                    return a.brand.localeCompare(b.brand);
                return state;
            });
            return {
                ...state,
                pending: false,
                products: sorted
            }
        default:
            return state;
    }
}

export const getProducts = state => state.fetchedProducts.products;
export const getItemsPending = state => state.fetchedProducts.pending;
export const getItemsError = state => state.fetchedProducts.error;
