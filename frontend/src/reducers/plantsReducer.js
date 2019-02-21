import {
  GET_PLANTS,
  GET_PLANT,
} from '../actions/types';

const initialState = {
  plants: null,
  plant: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };
    case GET_PLANT:
      return {
        ...state,
        plant: action.payload,
      };

    default:
      return state;
  }
}