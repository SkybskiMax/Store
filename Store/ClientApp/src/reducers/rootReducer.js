import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import filtersReducer from './filtersReducer'
import notifyReducer from 'react-redux-notify'
import search from './searchReducer'
import itemsReducer from './itemsReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    filters: filtersReducer,
    notifications: notifyReducer,
    search,
    fetchedProducts: itemsReducer,
    user: userReducer
})

export default rootReducer
