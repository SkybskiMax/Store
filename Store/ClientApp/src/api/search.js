import { searchPending, searchSuccess, searchError } from "../actionsCreators/searchActions"
import { apiBaseUrl } from "../constants/ApiUrl"


const search = (searchTerm) =>
    dispatch => {
        dispatch(searchPending(searchTerm))
        fetch(`${apiBaseUrl}/products/search/?searchTerm=${searchTerm}`, {
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
                dispatch(searchSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(searchError(error));
            })
    }


export default search;