//REDUCERS
import * as ct from "../constants";
const initialState = {
};
const rootReducer = (state = initialState, action) => {
  if (action.type === ct.SET_OVERVIEW) {
    return {
      ...state,
      overview: action.data
    };
  }
    if (action.type === ct.SET_CAMPAIGNS) {
      return {
        ...state,
        campaigns: action.data
      };
    }
  return state;
};

export default rootReducer;
