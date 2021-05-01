import { fetchIntilized } from "./initilize.type";

const INITIALIZE_STATE = {
    data: {},
    isLoaded: false
}
export  const fetchIntilizeReducer = (state = INITIALIZE_STATE, action) => {
  if (action.type === fetchIntilized.SET_FETCTED_INTILIZE) {
    return {
      ...state,
      data: action.payload.data,
      isLoaded: true
    };
  }
  return state;
};