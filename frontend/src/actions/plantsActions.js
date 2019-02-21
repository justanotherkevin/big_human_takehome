import axios from 'axios';
import {
  GET_PLANTS
} from './types';

// Get all plants
export const getPlants = () => dispatch => {
  axios
    .get('/api/plants/all')
    .then(res =>
      dispatch({
        type: GET_PLANTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PLANTS,
        payload: null
      })
    );
};
