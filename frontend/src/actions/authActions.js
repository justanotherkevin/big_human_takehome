import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
// due to nature of api request being async... you use the thunk middleware
import jwt_decode from 'jwt-decode';
import { setAuthTokenToAxiosHeader } from '../helpers/authHelpers'

// REGISTER USER
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login - get uer token
// get signed token; set token to header for private route
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthTokenToAxiosHeader(token);
      // decode token with jwt_decode
      const decoded = jwt_decode(token);
      dispatch(
        setCurrentUserActionObj(decoded)
      );
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthTokenToAxiosHeader(false);
  dispatch(
    setCurrentUserActionObj(null)
  )
};

export const setCurrentUserActionObj = payload => (
  {
    type: SET_CURRENT_USER,
    payload: payload
  }
)
