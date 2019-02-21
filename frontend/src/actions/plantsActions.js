import axios from 'axios';
import {
  GET_PLANTS,
  GET_PLANT,
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
// Get Post
export const getPlant = id => dispatch => {
  axios
    .get(`/api/plants/${id}`)
    .then(res =>
      dispatch({
        type: GET_PLANT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PLANT,
        payload: null
      })
    );
};
