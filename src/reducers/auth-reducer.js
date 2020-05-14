import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  err_msg: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true, err_msg: null };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false, err_msg: null };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false, err_msg: action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
