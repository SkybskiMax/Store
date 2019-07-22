import { loginPending, loginSuccess, loginError } from "../actionsCreators/authorization"
import { apiBaseUrl } from "../constants/ApiUrl"

const login = (form) =>
  dispatch => {
    dispatch(loginPending());
    fetch(`${apiBaseUrl}/Account/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        rememberMe: false
      }),
    })
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        return res.json();
      })
      .then(data => {
        dispatch(loginSuccess(data))
        localStorage.setItem('token', data.jwt);
      })
      .catch(error => {
        dispatch(loginError(error));
      })
  }

export default login;

