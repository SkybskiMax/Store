import { fetchItemsPending, fetchItemsSuccess, fetchItemsError } from "../actionsCreators/fetchItemsActions"
import { apiBaseUrl } from "../constants/ApiUrl"


const fetchItemsSearch = (searchTerm) =>
    dispatch => {
        dispatch(fetchItemsPending(searchTerm))
        fetch(`${apiBaseUrl}/products/search?searchTerm=${searchTerm}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
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


export default fetchItemsSearch;