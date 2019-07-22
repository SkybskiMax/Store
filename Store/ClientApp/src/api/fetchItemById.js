import { fetchItemByIdPending, fetchItemByIdSuccess, fetchItemByIdError } from "../actionsCreators/fetchItemsActions"
import { apiBaseUrl } from "../constants/ApiUrl"

const fetchItemById = (id) =>
  dispatch => {
    dispatch(fetchItemByIdPending());
    fetch(`${apiBaseUrl}/Products/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchItemByIdSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchItemByIdError(error));
      })
  }

export default fetchItemById;