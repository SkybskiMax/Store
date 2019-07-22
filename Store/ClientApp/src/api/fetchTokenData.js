import { getTokenDataSuccess, getTokenDataPending } from "../actionsCreators/authorization"
import { apiBaseUrl } from "../constants/ApiUrl"

const fetchTokenData = (token) =>
    dispatch => {
        dispatch(getTokenDataPending())
        fetch(`${apiBaseUrl}/Account/jwt`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                jwt: token,
            },
        })
            .then(res => res.json())
            .then(res => dispatch(getTokenDataSuccess(res)))
    }

export default fetchTokenData;