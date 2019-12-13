import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  USER_LOADED
} from "../actions/actionTypes";

const initalState = {
  name: null,
  email: null,
  isLoading: false,
  token: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token
      };
    case USER_LOGGED_OUT:
      return {
        ...initalState
      };
    case LOADING_USER:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
