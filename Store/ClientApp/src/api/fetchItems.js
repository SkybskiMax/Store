import { fetchItemsPending, fetchItemsSuccess, fetchItemsError } from "../actionsCreators/fetchItemsActions"
import { apiBaseUrl } from "../constants/ApiUrl"

const fetchItems = (url) =>
  dispatch => {
    dispatch(fetchItemsPending());
    fetch(`${apiBaseUrl}/products${url}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchItemsSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchItemsError(error));
      })
  }

export default fetchItems;