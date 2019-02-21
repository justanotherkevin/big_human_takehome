import {
  GET_PLANTS
} from '../actions/types';

const initialState = {
  plants: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
      };

    default:
      return state;
  }
}