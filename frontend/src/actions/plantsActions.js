import axios from 'axios';
import {
  GET_PLANTS,
  GET_PLANT,
  GET_ERRORS,
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
/** 
  * * add comment to plant
  * @param plantId db.findBy(plantID)
  * @param commentObj plant.comments.push(commentObj)
*/
export const addComment = (plantId, commentObj) => dispatch => {
  axios
    .post(`/api/plants/comment/${plantId}`, commentObj)
    .then(res =>
      dispatch({
        type: GET_PLANT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// dispatch(clearErrors());
// axios
//   .post(`/api/posts/comment/${postId}`, commentData)
//   .then(res =>
//     dispatch({
//       type: GET_POST,
//       payload: res.data
//     })
//   )
//   .catch(err =>
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     })
//   );
// };
