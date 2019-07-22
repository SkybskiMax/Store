import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT } from '../constants/ActionTypes'

const initState = {
  addedItems: [],
  totalItems: 0,
  total: 0,
  counter: 1,
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let addedItem = action.item
      let existed_item = action.inCart
      if (existed_item) {
        addedItem.quantity += action.quantity
        return {
          ...state,
          total: state.total + addedItem.price * action.quantity,
          totalItems: state.totalItems + action.quantity
        }
      }
      else {
        addedItem.quantity = action.quantity;
        let newTotal = state.total + addedItem.price*action.quantity
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          totalItems: state.totalItems + action.quantity
        }
      }
    }
    
    case REMOVE_FROM_CART: {
      let itemToRemove = state.addedItems.find(item => action.id === item.id)
      let new_items = state.addedItems.filter(item => action.id !== item.id)

      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity
      let newTotalItems = state.totalItems - itemToRemove.quantity
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
        totalItems: newTotalItems
      }
    }

    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      }
    }

    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      }
    }

    default:
      {
        return state
      }
  }
}

export default cartReducer
