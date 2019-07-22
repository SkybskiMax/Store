import { fetchItemsPending, fetchItemsError } from "../actionsCreators/fetchItemsActions";
import { addToCart } from "../actionsCreators/cartActions";
import { apiBaseUrl } from "../constants/ApiUrl"

function fetchItemByIdAddToCart(id) {
  return dispatch => {
      dispatch(fetchItemsPending());
      fetch(`${apiBaseUrl}/Products/${id}`)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(addToCart(res));
          return res;
      })
      .catch(error => {
        dispatch(fetchItemsError(error));
      })
  }
}

export default fetchItemByIdAddToCart;